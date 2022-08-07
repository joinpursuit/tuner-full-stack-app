const express = require('express');
const cors = require("cors");
const app = express();
// this allows us to create our backend 

const songController = require("./controllers/songController.js")

app.use(express.json());
// Middle ware  needed to translate
app.use(cors());
// cors allows request from outside URL
app.use("/songs", songController);
// Routes everything that goes from songs to the songController
app.get('/', (req, res) => {
    res.send("Welcome to Tuner")
});


app.get("*", (req, res) => {
    res.status(404).send("page not found")
})

module.exports = app;