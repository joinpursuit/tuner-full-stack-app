const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs.js");
const {
  checkName,
  checkBoolean,
  checkArtist,
} = require("../validations/checkSongs.js");

songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (song) {
    res.json(song);//changed code here!!!! linev28
  } else {
    res.status(404).json({ error: "not found" });
  }
});

songs.post("/", checkName, checkBoolean, checkArtist, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (err) {
    res.status(400).json({ error: error });
  }
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json({ error: "Song not found!" });
  }
});

songs.put("/:id", checkArtist, checkName, checkBoolean, async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSong(req.body, id);
  if (updatedSong.id) {
    console.log("song updated", updatedSong)
    res.status(200).json(updatedSong);
  } else {
    res.status(404).json({ error: "This song could not be updated!" });
  }
});

module.exports = songs;
