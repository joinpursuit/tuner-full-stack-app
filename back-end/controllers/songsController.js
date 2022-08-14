const express = require("express");
const songs = express.Router();
const reviewsController = require("./reviewsController.js");
const { 
  getAllSongs, 
  getSong, 
  createSong, 
  deleteSong, 
  updateSong } = require("../queries/songs.js");

const { 
  checkName, 
  checkBoolean, 
  checkArtist, 
  checkId,
  checkTime,
 } = require("../validations/checkSongs.js");

 songs.use("/:songId/reviews", reviewsController);

//index
songs.get("/", async (req, res) => {

  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});
//show
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (song.id) {
    res.json(song);
  } else {
    res.status(404).json({error: "wrong id"});
  }
});

songs.get("/:artist", async (req, res) => {
  const { artist } = req.params;
  const song = await getSong(artist);
  if (song) {
    res.json(song);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

//post create
songs.post("/", checkName, checkBoolean, checkArtist, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (error) {
    res.status(404).json({ error: "error"});
  }
});
//delete
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong)
  } else {
    res.status(404).json("Song not found!")
  }
});

//update
songs.put("/:id", checkName, checkArtist, checkBoolean, async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSong(req.body, id);
  if (updatedSong.id) {
    res.status(200).json(updatedSong);
  } else {
    res.status(404).json({error: "Song could not be updated"})
  }

});


module.exports = songs;