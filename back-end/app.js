const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./controllers/songsController.js");

//Middlewares
app.use(express.json());
app.use(cors());

//routes HOME
app.get("/", (req, res) => {
  res.send("Welcome To Tuner");
});
//ROUTES
app.use("/songs", router);
//404
app.get("*", (req, res) => {
  res.send({ error: "page not found" });
});
module.exports = app;
