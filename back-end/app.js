/** @format */

// DEPENDENCIES
const cors = require('cors');
const express = require('express');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get('/', (req, res) => {
	res.send('Welcome to the Tuner Full-Stack App 🎼 🎹!');
});

// Songs ROUTES
const songController = require('./controllers/songController.js');
// MIDDLEWARE - What happens between the REQ but BEFORE it hits a route. After the REQ but before the ROUTE
app.use('/songs', songController);

// 404 PAGE
app.get('*', (req, res) => {
	res.status(404).send('Page not found');
});

// EXPORT
module.exports = app;
