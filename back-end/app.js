const express = require('express');
const cors = require("cors");
const app = express();

// Connecting the controller file - pt 1

const songController = require("./controllers/songController.js");

app.use(express.json());
app.use(cors());

// Connecting the controller file - pt 2
app.use('/songs', songController);

app.get('/', (req, res) => {
    res.send("Welcome to Tuner")
})

//404 
app.get('*', (req, res) => {
    res.status(404).send("error was made")
})

module.exports = app;
