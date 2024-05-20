const express = require('express');
const authRouter = require('./route/authRoute');

const app = express();

app.get('/', (req,res)=>{
    res.status(200).json({
        status: 'success',
        message: 'It is working and running'
    })
});

app.use('/api/v1/auth', authRouter);

app.listen(3000, ()=>{
    console.log('Server is up and running')
})