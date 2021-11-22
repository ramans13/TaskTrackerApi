const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
// const bodyParser = require('body-parser')
const url = "mongodb://localhost/AlienDBex"
const tasksRouter= require('./routes/aliens.js');
const app = express();

app.use(express.json());
// app.use(bodyParser.urlencoded({extended:false}))
// console.log(aliensRouter)
app.use(cors());
app.use('/aliens',tasksRouter);

mongoose.connect(url,{useNewUrlParser: true});

const con = mongoose.connection;

con.on('open',()=>{console.log("Connected.....");});

app.listen(5000,()=>{console.log("Server Started..................................");})
// Imports=============================================================================================================