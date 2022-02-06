const express = require("express");

const albums = express.Router({mergeParams: true});
const {getAllAlbums} = require("../queries/albums");

albums.get("/", async (req,res)=>{
    const { songId } = req.params;
   const allAlbums = await getAllAlbums();
   try{
       const allAlbums = await getAllAlbums(songId);
       res.json(allAlbums)
   } catch (err) {
       res.json(err)
   }
});

module.exports= albums;