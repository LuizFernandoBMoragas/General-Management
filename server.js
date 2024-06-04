require('dotenv').config()

const express = require('express');
const authRouter = require('./route/authRoute');
const projectRouter = require('./route/projectRoute');
const userRouter = require('./route/userRoute');
const catchAsync = require('./utils/catchAsync');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controller/errorController');

const app = express();

app.use(express.json());

app.use('/api/v1/auth', authRouter);

app.use('/api/v1/projects', projectRouter);

app.use('/api/v1/users', userRouter);

app.use(
    '*', 
    catchAsync (async (req, res, next) => {
        throw new AppError(`Can't find the ${req.originalUrl} on this server`, 404);
    })
);

app.use(globalErrorHandler);

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is up and running on ${PORT}`);
});