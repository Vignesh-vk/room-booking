const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const userRoute = require("./src/routes/userRoute")
const roomsroute=require('./src/routes/roomsroute')
const bookingsRoute= require('./src/routes/bookingroute')
const confirmRouter=require('./src/routes/confirm')
const app = express();

app.use(express.json());

app.use(morgan('dev'));
app.use(cors());

app.use('/api/users' , userRoute);
app.use('/api/rooms',roomsroute);
app.use('/api/movie',roomsroute);
app.use('/api/bookings',bookingsRoute);
app.use('/api/confirm',confirmRouter);

app.use(express.json())
if(process.env.NODE_ENV ==='production')
{
    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

        res.sendFile(path.resolve(__dirname  , 'client/build/index.html'))

    })
}

app.listen(2000,()=>{
    console.log('Running at Localhost:2000');
})

mongoose.connect("mongodb://localhost:27017/project",()=>{
    console.log("Successfully connected");
})