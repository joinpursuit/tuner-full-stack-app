/** @format */

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
// Bouncer at the club - Allows requests from other origins (like our REACT APP)
app.use(express.json());
// PARSES JSON FOR US SO WE CAN USE IT - thanks Christine

app.get('/', (req, res) => {
	res.send('Welcome to the Tuner Full-Stack App 🎼 🎹!');
});

const songController = require('./controllers/songController.js');
// MIDDLEWARE - What happens between the REQ but BEFORE it hits a route. After the REQ but before the ROUTE
app.use('/songs', songController);

//404
app.get('*', (req, res) => {
	res.status(404).send('Page not found');
});

module.exports = app;
