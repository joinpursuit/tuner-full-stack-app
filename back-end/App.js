const express = require ('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req,res) => {
    res.send("Welcome to the tuner app")
})

app.get("*", (req, res) => {
    res.status(404).send("page not found")
})

module.export = app;