//Dan & Adnan's Final Push

const express = require ('express');
const cors = require('cors');
const app = express();
const songsController = require("./controllers/songController");

app.use(express.json());
app.use(cors());
app.use('/songs', songsController);




app.get('/', (req,res) => {
    res.send("Welcome to Tuner")
})

app.get("*", (req, res) => {
    res.status(404).send("Page Not Found")
})

module.exports = app;