require('dotenv').config()

const express = require('express');
const authRouter = require('./route/authRoute');

const app = express();

app.get('/', (req,res)=>{
    res.status(200).json({
        status: 'success',
        message: 'It is working and running'
    });
});

app.use('/api/v1/auth', authRouter);

app.use('*', (req,res, next)=>{
    res.status(404).json({
        status: 'fail',
        message: 'route not found',
    });
});


const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is up and running on ${PORT}`);
});