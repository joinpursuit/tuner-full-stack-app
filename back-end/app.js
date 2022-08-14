const express = require("express");
const cors = require("cors");
const app = express();

const songsController = require("./controllers/songsController.js")

app.use(express.json()); // must put first before controller - !!
app.use(cors());

app.use("/songs", songsController);

app.get("/", (req,res) => {
    res.send("Welcome to Tuner")
});

app.get("*", (req, res) => {
    res.status(404).send("Song not found")
})

module.exports = app;