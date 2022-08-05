const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
} = require("../queries/songs");

const { checkBool, checkName } = require("../validations/checkSongs")

//Index
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    // A simple check to see if there are any songs
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

//Routes
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (song) {
    res.json(song);
  } else {
    res.status(404).json({ error: "not found" });
  }
});
songs.post("/", checkName, checkBool, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (error) {
    return error;
  }
});
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const song = await deleteSong(id);
    res.status(200).send("Song successfully delete or not found");
  } catch (error) {
    // I think i'm getting an error back instead of the above, but it's succeeding?
    return error;
  }
});
songs.put("/:id", async (req, res) => {});

module.exports = songs;
