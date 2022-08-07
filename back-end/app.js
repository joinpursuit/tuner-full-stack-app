const express = require('express');
const cors = require("cors");
const app = express();

const songsController = require("./controllers/songsController.js")

app.use(express.json());
app.use(cors());

app.use("/songs", songsController);


app.get('/', (req, res) => {
    res.send("Welcome to Tuner")
});

//404
app.get("*", (req, res) => {
    res.status(404).send("page not found")
})

module.exports = app;