'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const homeRoute = require('./routes/index');
const tasks = require('./routes/tasks');

const isDev = !('NODE_ENV' in process.env && require('dotenv').config().config() && true);

const app = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server is listening on port ', PORT));

// set up some logging
app.use(logger(isDev ? 'dev' : 'common'));

// we're only going to accept json
app.use(bodyParser.json());

// generic error handler
app.use((err, req, res, next) => {
  console.error(err, next);
  res.status(500).send('Something broke!');
});

app.use('/', homeRoute);
app.use('/tasks', tasks);

