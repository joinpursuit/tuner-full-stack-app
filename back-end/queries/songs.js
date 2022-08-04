const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM tunes");
    return allSongs;
  } catch (err) {
    return err
  }
};

const getSong = async (id) => {
    try{
        const oneBookmark = await db.one("SELECT * FROM tunes WHERE id=$1", id)
        return oneBookmark;
    }catch(err){
        return err
    }
}

module.exports = { getAllSongs, getSong };
