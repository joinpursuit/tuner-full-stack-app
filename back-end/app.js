// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());


const songsController = require("./controllers/songController");

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome Tuner");
});


app.use("/songs", songsController);

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });


// EXPORT
module.exports = app;