const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/users');
const apiRouter = require('./routes/itineraries');

const db = require('./db');
const userHelpers = require('./helpers/userHelpers')(db);
const apiHelpers = require('./helpers/apiHelpers')(db);

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', usersRouter(userHelpers));
app.use('/api/itineraries', apiRouter(apiHelpers));

module.exports = app;
