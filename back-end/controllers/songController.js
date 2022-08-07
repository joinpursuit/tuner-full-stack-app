const express = require('express');
const songs = express.Router();
const { getAllSongs,getSong, createSong, deleteSong, updateSong} = require('../queries/songs.js');
const { checkName, checkBoolean, checkArtist, } = require('../validations/checkSongs.js');


songs.get('/', async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs) {  
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: 'server error!' });
  }
});

songs.get('/:id', async (req, res) => { 
  const { id } = req.params
  const song = await getSong(id);
  if (song.id) {
    res.json(song)
  } else {
    res.status(404).json({error: 'not found'})
  }
  
})



songs.post('/', checkName, checkBoolean,checkArtist, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (error) {
    return error;
  }
});



songs.delete('/:id', async (req, res) => {
  const { id } = req.params
  const song = await deleteSong(id);
 if (song.id) {
   res.json(song);
 } else {
   res.status(404).json({ error: 'not found' });
 }   
    
});

songs.put('/:id', async (req, res) => {
  const { id } = req.params;
  const song = await updateSong(req.body, id);
   if (song.id) {
     res.json(song);
   } else {
     res.status(404).json({ error: 'not found' });
   }   
})

module.exports = songs;
