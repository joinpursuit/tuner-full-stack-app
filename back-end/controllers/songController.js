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

const { checkName, checkBoolean, checkArtist} = require("../validations/checkSongs.js");

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

//CREATE ROUTE
songs.post("/", checkBoolean, checkName, checkArtist, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (error) {
    return error;
  }
});

//READ - SHOW ROUTE
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (song) {
    res.json(song);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// UPDATE ROUTE
songs.put("/:id", checkName, checkBoolean, checkArtist, async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSong(id, req.body);
  if (updatedSong.id) {
  res.status(200).json(updatedSong);
  } else {
    res.status(404).json({error: "Song's not updated for some reason..."})
  }
});

// DELETE ROUTE
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json("Song not found!");
  }
});

// EXPORT our SONGS Router
module.exports = songs;
