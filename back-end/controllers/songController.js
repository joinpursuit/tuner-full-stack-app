const express = require("express");
// const { errors } = require("pg-promise");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

const {
  checkName,
  checkBoolean,
  checkArtist,
} = require("../validations/checkSongs.js");

songs.get('/', async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

//CREATE ROUTE
songs.post("/", checkBoolean, checkName, checkArtist, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//READ - SHOW ROUTE
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (song.id) {
    res.json(song);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// UPDATE ROUTE
songs.put("/:id", checkName, checkArtist, checkBoolean, async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSong(req.body, id);
  if (updatedSong.id) {
      res.status(200).json(updatedSong);
  } else {
      res.status(404).json({ error: "Not found" })
  }
});

// DELETE ROUTE
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json("Song not found");
  }
});

module.exports = songs;
