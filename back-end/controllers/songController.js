const express = require("express");
const songs = express.Router();
// const favSongs = require("../models/songs");
const db = require("../db/dbConfig");
const {
  getAllSongs,
  getASong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

// Index of all listed Songs
songs.get("/", async (req, res) => {
  const allSongs = await db.any("SELECT * FROM song");
  console.log(allSongs);
  res.json({ success: true, payload: allSongs });
});

//Individual Song
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const songs = await db.one("SELECT * FROM song WHERE id=$1", id);
  console.log(id);
  if (songs) {
    res.status(200).json({ success: true, payload: songs });
  } else {
    res.status(404).send(`No track exists with the id of ${id}`);
  }
});

// Create a new song
songs.post("/new", (req, res) => {
  const newSong = req.body;
  console.log(newSong);
  // favSongs.push(newSong);
  const newSongs = db.any(
    "INSERT INTO song (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [
      req.body.name,
      req.body.artist,
      req.body.album,
      req.body.time,
      req.body.is_favorite,
    ]
  );
  res.status(200).json({ success: true, payload: newSongs });
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await db.one(
    "DELETE FROM song WHERE id=$1 RETURNING *",
    id
  );
  if (deletedSong) {
    res.status(200).json({ success: true, payload: deletedSong });
  } else {
    res.status(404).send(`No track exists with that ${id}.`);
  }
});

songs.put("/:id", async (req, res) => {
  try {
    const song = await updateSong(req.params.id, req.body);
    res.json(song);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = songs;
