const express = require("express");
const songs = express.Router();

songs.get("/", (req, res) => {
  res.json({ success: true });
});

module.exports = songs