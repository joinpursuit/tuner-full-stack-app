const db = require("../db/dbConfig");

const getAllSongs = async () => {
  try {
   const allSongs = await db.any("SELECT * FROM songs");
   return allSongs;
  } catch(err) {
    return err
  } 
}


// we will have a bunch of exports
module.exports = { getAllSongs }