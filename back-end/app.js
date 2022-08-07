const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());

const songsController = require('./controllers/songController');
app.use("/songs", songsController);

app.get("/", (req, res) => {
    res.send("Welcome to Tuner");
});

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

module.exports = app;