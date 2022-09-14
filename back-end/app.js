//dependency
const cors = require("cors");
//  server on
const express = require("express");
// configuraiton
const app = express();
// middleware - always above controller!
// STEP 3
app.use(cors());
// STEP 2 client makes request USE express
app.use(express.json());
// user makes request using data from songsController
const songsController = require("./controllers/songController");
// calling the
app.use("/songs", songsController);

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to Kenya Karaoke's Tuner");
});
// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});
// EXPORT
module.exports = app;