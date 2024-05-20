const express = require('express')

const app = express();

app.get('/', (req,res)=>{
    res.status(200).json({
        status: 'success',
        message: 'It is working and running'
    })
});

app.listen(3000, ()=>{
    console.log('Server is up and running')
})