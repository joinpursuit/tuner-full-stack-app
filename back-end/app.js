const cors = require("cors");
const express = require("express");
const app = express();

// MIDDLEWARE - What happens between the REQ but BEFORE it hits a route. After the REQ but before the ROUTE
app.use(cors());
app.use(express.json());

const songsController = require("./controllers/songController.js");
app.use("/songs", songsController);

// Bouncer at the club - Allows requests from other origins (like our REACT APP)
// PARSES JSON FOR US SO WE CAN USE IT - thanks Christine

//"Default Page / Home"
app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

//404
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
