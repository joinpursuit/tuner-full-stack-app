const db = require('../db/dbConfig.js');

//Gets all songs using an async function 
// We use a try and catch, within the try we created a variable called allSongs
// this variable takes in an await function that check if the database is truthy or falsey with the use of the function .any() if truthy is does the database call.
// and the result is returned via the return allSongs

//if the try does not go threw we are returning an error.
const getAllSongs = async () =>{
  try{
    const allSongs = await db.any('SELECT * FROM songs');
    console.log(allSongs)
    return allSongs
  }catch(err){
    return err;
  }
};

const getSong = async(id)=>{
try{
  const oneSong = await db.one("SELECT * FROM songs WHERE id= $1", id);
  return oneSong;
}catch(error){
  return error;
}
};



//function createSong is an async function with a parameter of song (singular)
// we destructor song creating an object of name, artist, album, time, is_favorite
//using a try and catch we created a variable called newSong that takes in an await function. Allowing use to interact with the database.
//the function .one() allows us use of only on song within the database. Meaning that we only have access to one placeholder.
//We are the inserting specified information on line 28. If it follows the schema.sql protocol then it should return newSong

//else it should run the error within the catch function.
const createSong = async (song)=>{
  const {name, artist, album, time, is_favorite} = song
  try{
    const newSong = await db.one(
      'INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4) RETURNING *',[name, artist, album, time, is_favorite]
    );
    return newSong
  }catch(error){
    return error;
  }
};

const deleteSong = async(id) =>{
  try{
    const deletedSong = await db.one('DELETE FROM songs WHERE id=$1 RETURNING *',id )
    return deletedSong
  }catch(error){
    return error;
  }
}

const updateSong = async(song, id) =>{
  const {name, artist, album, time, is_favorite} = song
  try{ 
      const updatedSong = await db.one('UPDATE songs SET name = $1, artist = $2 album = $3, time = $4, is_favorite = $5 WHERE id = $5 RETURNING *',[name, artist, album, time, is_favorite, id]);
      return updatedSong;
    }catch(error){
      return error
    }
  }

  //Export all functions using a module.export

  module.exports ={
    getAllSongs,
    getSong,
    createSong,
    deleteSong,
    updateSong
  }


