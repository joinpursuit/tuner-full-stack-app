//Dependencies
const cors = require("cors");
const express = require("express");

//Config
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to it's not a tuner");
});

const songsController = require("./controllers/songsController");
app.use("/songs", songsController);

//404
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

//Export
module.exports = app;
