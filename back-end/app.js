//Dependencies
const express = require("express");
const cors = require("cors");
const songsController = require("./controllers/songController");

//Config
const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use("/songs", songsController);

//Routes
app.get("/", (req, res) => {
  res.send("This is Tuner. Welcome.");
});

module.exports = app;
