const express = require('express');

const app = express();

const morgan = require('morgan');
const cors = require('cors');

const cookieParser = require('cookie-parser');
const compression = require('compression');
const helmet = require('helmet');

const usersRouter = require('./src/routes/users.js');
const statesRouter = require('./src/routes/states.js');
const usersTestRouter = require('./src/routes/baseTest');

const { errorMessages, errorTypes } = require('./src/constants/errors');

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

// Routers
app.use('/auth', usersRouter);
app.use('/api/v1/test', usersTestRouter);
app.use('/api/v1/states', statesRouter);

// Routes
app.get('/', (req, res) => {
  res.status(200).json({ hello: 'World!' });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const error = new Error(`${req.originalUrl} - was not found`);
  res.status(404);
  next(error);
});

// error handler
// next is required as without it error handler breaks
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  // render the error page
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    status: statusCode,
    message: errorMessages[error.name] || error.message,
    stack: req.app.get('env') === 'production' ? '🥞🥞' : error.stack,
    errors: error.errors || undefined,
  });
});

module.exports = app;
