const express = require("express");
const { errors } = require("pg-promise");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

const { checkName, checkBoolean } = require("../validations/checkSongs.js");

// Extends our app so that we can create a new route for our SONGS resource
// we need to make this ASYNC as well
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    // if there is one index that gets returned then the data exists - John P 8/2/2022
    // an empty array is TRUTHY - so we need to check for an element
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

//CREATE
songs.post("/", checkBoolean, checkName, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//READ
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (song) {
    res.json(song);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// UPDATE
songs.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSong(id, req.body);
  res.status(200).json(updatedSong);
});

// DELETE
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res
      .status(404)
      .json("Song not found! Are you sure you're not looking for movies?");
  }
});

// EXPORT our SONGS Router
module.exports = songs;
