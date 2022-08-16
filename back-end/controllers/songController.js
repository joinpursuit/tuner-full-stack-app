const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong, deleteSong, updateSong} = require("../queries/songs.js");
const {checkName, checkArtist, checkBoolean} = require("../validations/checkSongs.js");

songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(404).json({ error: "error" });
  };
});


 songs.get("/:id", async (req, res)=> {
  const {id} = req.params
  const song = await getSong(id);
  if (song) {
    res.status(200).json(song);
  } else {
    res.status(404).json({ error: "404" });
  };
});



songs.post("/", checkName, checkArtist, checkBoolean, async  (req, res)=> {
 try {
      const song = await createSong(req.body);
      res.json(song);
    } catch (error) {
  
    res.status(400).json({error: error})
    }
  });

  songs.delete("/:id", async (req, res)=> {
    const {id }= req.params;
    const deletedSong = await deleteSong(id);
    if (deletedSong.id){
      res.status(200).json(deletedSong)
    }else{
      res.status(404).json({error:"nothing here"})
    }
  })

  songs.put("/:id", checkName, checkArtist, checkBoolean, async (req, res)=> {
    const {id }= req.params;
    const updatedSong = await updateSong(id, req.body);
    if (updatedSong.id){
      res.status(200).json(updatedSong)
    }else{
      res.status(404).json({error: "error"});
    }
  })
  

module.exports = songs;





