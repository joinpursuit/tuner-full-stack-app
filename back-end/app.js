// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE - above the CONTROLLER!
app.use(cors());
app.use(express.json());


// Song ROUTES
const songsController = require("./controllers/songController");
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