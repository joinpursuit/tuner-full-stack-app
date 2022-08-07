const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong, updateSong } = require("../queries/songs");
const { checkName, checkArtist, checkBoolean } = require("../validations/checkSongs.js")

//GET:INDEX
songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    if(allSongs[0]){
        res.status(200).json(allSongs);
    }else{
        res.status(500).json({error: "error"})
    }
});

//GET:SHOW
songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await getSong(id);
    if(song){
        res.json(song);
    }else{
        res.status(404).json({error: "song not found"});
    };
});

//CREATE
songs.post("/", checkName, checkArtist, checkBoolean, async (req, res) => {
    try{
        const song = await createSong(req.body);
        res.status(200).json(song);
    }catch(err){
        return err;
    }
});

//UPDATE
// songs.put("/:id", async (req, res) => {
//     const { id } = req.params;
//     try{
//         const song = await updateSong(req.body);
//         res.status(200).json(song);
//     }catch(err){
//         return err;
//     }
// });

//DELETE
// songs.delete("/:id", (req, res) => {
//     const { id } = req.params;

// });

module.exports = songs;