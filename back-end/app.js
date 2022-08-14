const express = require('express');
const cors = require('cors')
const app = express();

const songController = require('./controllers/songController')


app.use(cors())
app.use(express.json())

app.use('/songs', songController);

app.get('/',(request,response)=>{
  response.send('Welcome to Tuner')
})

app.get('*',(request, response)=>{
  response.status(404).send('Page not found - this is from app.js on line 13')
})

module.exports = app;