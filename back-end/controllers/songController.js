const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  updateSong,
} = require("../queries/songs.js");
const {
  checkName,
  checkBoolean,
  checkArtist,
  checkId,
} = require("../validations/checksongs");

songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

songs.get("/:id", checkId, async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);

  console.log(song);
  if (song.name !== "QueryResultError" && song.name !== "error") {
    res.json(song);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

songs.post("/", checkName, checkBoolean, checkArtist, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (error) {
    return error;
  }
});

songs.put("/:id", checkName, checkBoolean, checkArtist, async (req, res) => {
  try {
    const song = await updateSong(req.body);
    res.json(song);
  } catch (error) {
    return error;
  }
});
module.exports = songs;
