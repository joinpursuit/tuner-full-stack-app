// DEPENDENCIES
const express = require('express');
const cors = require('cors');


// CONFIGURATION
const app = express();

const songController = require('./controllers/songController.js')

// MIDDLEWARE
app.use(express.json());
app.use(cors());

app.use('/songs', songController)

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to Tuner');
});

app.get('*', (req, res) => {
  res.status(404).send('page not found - this is from line 20 by the way');
});

// EXPORT
module.exports = app;
