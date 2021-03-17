const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const cookieSession = require('cookie-session');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const port = process.env.PORT || 8002;

const usersRouter = require('./routes/users');
const apiRouter = require('./routes/itineraries');

const db = require('./db');
const userHelpers = require('./helpers/userHelpers')(db);
const apiHelpers = require('./helpers/apiHelpers')(db);

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

const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:8000',
    methods: ['GET', 'POST'],
  },
});

let interval;

io.on('connection', socket => {
  console.log('New client connected');
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on('disconnect', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit('FromAPI', response);
};

server.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
