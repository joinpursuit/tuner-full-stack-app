// DEPENDENCIES
const cors = require("cors");
// TURN SERVER ON 
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE - above the CONTROLLER!
// STEP 3
app.use(cors());
// STEP 2 client makes request USE express 
app.use(express.json());


// user makes request use data from songsController
const songsController = require("./controllers/songController");

// calling the 
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