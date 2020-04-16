const express = require('express');
const morgan = require('morgan');

const app = express();
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const memberRouter = require('./routes/memberRoutes');
const userRouter = require('./routes/userRoutes');

module.exports = app;

// 1- MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3- ROUTES
app.use('/api/v1/member', memberRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this Server`, 404));
});

app.use(globalErrorHandler);
