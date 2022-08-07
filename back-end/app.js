// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();
const songsController = require("./controllers/songController.js");

// MIDDLEWARE
app.use(express.json());
app.use(cors());

app.use("/songs", songsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});


// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;