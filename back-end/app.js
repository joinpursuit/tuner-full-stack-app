const express = require("express");
const app = express();
const cors = require("cors");
const songsController = require("./controllers/songController");

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
	response.send("Welcome to Tuner");
});

app.use("/songs", songsController);

app.get("*", (request, response) => {
	response.status(404).json({ status: "this route does not exist. please try again" });
});

module.exports = app;
