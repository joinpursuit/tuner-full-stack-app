const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong, updateSong, deleteSong} = require("../queries/songs");
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
//you can do song.name === "QueryResultError" to allow for the error handling
//another option is song.id
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
//try and catch block will return a object error from the server and not a javascript error
//if you want a better form of error handling, use and if/else statement and check for an key of id
//error object will most likely never have an id
songs.put("/:id", checkName, checkArtist, checkBoolean, async (req, res) => {
    const { id } = req.params;
    const updatedSong = await updateSong(req.body, id);
    if(updatedSong.id){
        res.status(200).json(updatedSong);
    }else{
        res.status(404).json("Song not found");
    }
});

//DELETE
songs.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    if(deletedSong.id){
        res.status(200).json(deletedSong);
    }else{
        res.status(404).json("Song not found");
    };
});

module.exports = songs;