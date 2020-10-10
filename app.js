const express = require('express');

const app = express();

const morgan = require('morgan');
const cors = require('cors');

const createError = require('http-errors');
const cookieParser = require('cookie-parser');

const usersRouter = require('./routes/users-router.js');
const productsRoutes = require('./routes/products');

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Routers
app.use('/api/users', usersRouter);
app.use('/api/products', productsRoutes);

// Routes
app.get('/', (req, res, next) => {
  res.status(200).json({ hello: 'World!' });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err.stack : {},
  });
});

module.exports = app;
