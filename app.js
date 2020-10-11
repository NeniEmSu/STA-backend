const express = require('express');

const app = express();

const morgan = require('morgan');
const cors = require('cors');

const createError = require('http-errors');
const cookieParser = require('cookie-parser');

const usersRouter = require('./routes/user.js');
const productsRoutes = require('./routes/products');
const usersTestRouter = require('./routes/baseTest');

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Routers
app.use('/auth', usersRouter);
app.use('/api/v1/test', usersTestRouter);
app.use('/api/v1/products', productsRoutes);

// Routes
app.get('/', (req, res) => {
  res.status(200).json({ hello: 'World!' });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
// next is required as without it error handler breaks
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    stack: req.app.get('env') === 'development' ? err.stack : {},
  });
});

module.exports = app;
