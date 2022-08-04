const express = require("express");
const cors = require("cors");
const app = express();

const songController = require("./controllers/songController.js");
// MIDDLEWARE - What happens between the REQ but BEFORE it hits a route. After the REQ but before the ROUTE
app.use("/songs", songController);

app.use(cors());
// Bouncer at the club - Allows requests from other origins (like our REACT APP)
app.use(express.json());
// PARSES JSON FOR US SO WE CAN USE IT - thanks Christine

app.get("/", (req, res) => {
  res.send("welcome to the TUNER API - Spencer Simon Mixtape");
});

//404
app.get("*", (req, res) => {
  res.status(404).send("YO, THE PAGE AINT HERE!");
});

module.exports = app;
