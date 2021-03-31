// import
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// app config
const app = express();

// db config
const dbURI = process.env.DBURI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => {
        console.log('connected to database')
    })
    .catch((err) => {
        console.log(err)
    });

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log('app listening on port '+ port);
})
// routes
app.get('/',(req, res)=>{
    res.send("Hello");
})
app.use('/food',require('./routes/userRoutes'));
