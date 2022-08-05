const express = require("express");
const songs = express.Router();
// const favSongs = require("../models/songs");
const db = require("../db/dbConfig");

// Index of all listed Songs
songs.get("/", async (req, res) => {
  const allSongs = await db.any("SELECT * FROM song");
  console.log(allSongs)
  res.json({ success: true, payload: allSongs });
});

//Individual Song
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const songs = await db.one("SELECT * FROM song WHERE id=$1", id)
  console.log(id);
  res.status(200).json({ success: true, payload: songs });
});

// Create a new song
songs.post("/new", (req, res) => {
  const newSong = req.body;
  console.log(newSong);
  // favSongs.push(newSong);
  const newSongs = db.any("INSERT INTO song (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *", [req.body.name, req.body.artist, req.body.album, req.body.time, req.body.is_favorite])
  res.status(200).json({ success: true, payload: newSongs });
});

module.exports = songs;
