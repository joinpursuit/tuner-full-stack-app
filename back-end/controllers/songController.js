// invoke express
const express = require("express");
// creates the server route for songs to EXPORT
const songs = express.Router();
const { getAllSongs, getSong, createSong, deleteSong, updateSong } = require("../queries/songs");
// extend out app so that we can create a new route for
const { checkName, checkBoolean, checkArtist  } = require("../validations/checkSongs.js");
// routes to specific data
// INDEX - for this route(data) use this function
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});
// SHOW - for this route(data) use this function
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (song) {
    res.json(song);
  } else {
    res.status(404).json({ error: "not found" });
  }
});
// CREATE - for this route(data) use this function
songs.post("/",checkName,checkBoolean, checkArtist, async (req, res) => {
  console.log(req);
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
// DELETE - for this route(data) use this function
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json("Song not found");
  }
});
// UPDATE - for this route(data) use this function
songs.put("/:id", checkName, checkArtist, async (req, res) => {
  const { id } = req.params;
  // console.log(id)
  // console.log(req.body)
  const updatedSong = await updateSong(id, req.body);
  if (updatedSong.id) {
    res.status(200).json(updatedSong);
  } else {
    res.status(404).json({error: "Unable to update song"});
  }
})
module.exports = songs;








