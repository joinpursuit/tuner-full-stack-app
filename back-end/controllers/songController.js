const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong } = require("../queries/songs");
const { checkName, checkArtist, checkBoolean } = require("../validations/checkSongs.js")


songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    if(allSongs[0]){
        res.status(200).json(allSongs);
    }else{
        res.status(500).json({error: "error"})
    }
});

songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await getSong(id);
    if(song){
        res.json(song);
    }else{
        res.status(404).json({error: "song not found"})
    };
});

songs.post("/", checkName, checkArtist, checkBoolean, async (req, res) => {
    try{
        const song = await createSong(req.body);
        res.status(200).json(song);
    }catch(err){
        return err;
    }
});

module.exports = songs;