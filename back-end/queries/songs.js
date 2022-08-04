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

const createSong = async (song) => {
    try{
        const newSong = await db.one("INSERT INTO tunes (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5)RETURNING *", [song.name, song.artist, song.album, song.time, song.is_favorite]);
        return newSong;
    }catch(err){
        return error
    }
}

module.exports = { getAllSongs, getSong, createSong };
