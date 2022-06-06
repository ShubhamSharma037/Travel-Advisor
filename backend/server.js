var express = require('express')
var Route = require('./Routes/routes')
var userRoute = require('./Routes/users')
var mongoose = require('mongoose')
var cors = require('cors')

require('dotenv').config()

var app = express()

const uri = process.env.MONGO_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology : true})
.then(()=>console.log('Connection Successfull..'))
.catch((err)=>console.log('Connection Failed:',err))

app.use(cors())
app.use(express.json())
app.use('/',Route)
app.use('/users',userRoute)




app.listen(5000)