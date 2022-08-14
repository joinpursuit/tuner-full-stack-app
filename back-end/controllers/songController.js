
const express = require('express')
const songs = express.Router();

const{
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong
} = require('../queries/song.js');

const {
  checkName,
  checkBoolean,
  validateUrl
} = require('../validations/checkSongs.js')

songs.get('/', async(request,response)=>{
  const allSongs = await getAllSongs();
    if(allSongs[0]){
      response.status(200).json(allSongs);
    }else{
      response.status(500).json({error:'server error (line 19)! Song Controller'});
    }
});

songs.get('/:id', async(request, response)=>{
  const {id} = request.params;
  const song = await getSong(id);
  if(song.id){
    response.json(song);
  }else{
    response.status(404).json({error:'not found (line29)'})
  }
})

songs.post('/', checkName, validateUrl, checkBoolean, async(request, response)=>{
  try{
    const song = await createSong(request.body);
    response.json(song)
  }catch(error){
    return error;
  }
});

songs.delete('/:id',async(request, response)=>{
  const {id} = request.params;
  const deletedSong = await deleteSong(id);

  if(deletedSong.id){
    response.status(200).json(deleteSong)
  }else{
    response.status(404).json('Song not found!');
  }
})

songs.put('/:id', validateUrl, checkBoolean, checkName, async(request, response)=>{
  const {id} = request.params

  const updatedSong = await updateSong(request.body, id);
  if(updatedSong.id){
    response.status(200).json(updatedSong);
  }else{
    response.status(404).json({error:'Song not updated(line60)'})
  }
})

module.exports = songs