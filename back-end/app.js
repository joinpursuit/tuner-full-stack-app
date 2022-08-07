const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  next();
});

const songsController = require("./controllers/songController.js");

app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

app.use("/songs", songsController);

app.get("*", (req, res) => {
  res.status(404).json({ error: "page not found" });
});

module.exports = app;
