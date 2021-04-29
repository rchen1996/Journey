const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const cookieSession = require('cookie-session');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const port = process.env.PORT || 8001;

const usersRouter = require('./routes/users');
const apiRouter = require('./routes/itineraries');
const searchRouter = require('./routes/attractions');

const db = require('./db');
const userHelpers = require('./helpers/userHelpers')(db);
const apiHelpers = require('./helpers/apiHelpers')(db);
const searchHelpers = require('./helpers/searchHelpers')(db);

const app = express();

app.use(
  cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
  })
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());
app.use(cors());

app.use('/api/users', usersRouter(userHelpers));
app.use('/api/itineraries', apiRouter(apiHelpers));
app.use('/api/attractions', searchRouter(searchHelpers));

const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: 'https://www.journey-lhl.netlify.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});

app.set('socketio', io);

io.on('connection', socket => {
  console.log('New client connected');

  socket.on('itinerary_id', id => {
    socket.join(id);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
