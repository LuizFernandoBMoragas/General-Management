require('dotenv').config()

const express = require('express');
const authRouter = require('./route/authRoute');
const catchAsync = require('./utils/catchAsync');
const AppError = require('./utils/appError');

const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
    res.status(200).json({
        status: 'success',
        message: 'It is working and running'
    });
});

app.use('/api/v1/auth', authRouter);

app.use(
    '*', 
    catchAsync (async (req, res, next) => {
        throw new AppError('this is error', 404);
    })
);

app.use((err, req, res, next) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        stack: err.stack
    });
});

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is up and running on ${PORT}`);
});