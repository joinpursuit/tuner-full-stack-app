const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
  try {
   const allSongs = await db.any("SELECT * FROM songs");
   return allSongs;
  } catch(err) {
    return err
  } 
}

const getSong = async (id) => {
  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return oneSong;
  } catch (error) {
    return error;
  }
};

const createSong = async (song) => {
  const { name, artist, album, time, is_favorite } = song;
  try {
    const newSong = await db.one(
      "INSERT INTO songs (name, artist,album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, artist,album, time, is_favorite]
    );
    return newSong;
  } catch (error) {
    return error;
  }
};

const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one("DELETE FROM songs WHERE id=$1 RETURNING * ", id);
    return deletedSong;
  } catch(err) {
    return err;
  }
};

const updateSong = async (song, id) => {
  const { name, artist, album, time, is_favorite } = song;
  try {
    const newUpdate = await db.one (
      "UPDATE songs SET name = $1, artist = $2, album = $3 , time = $4, is_favorite = $5 WHERE id = $6  RETURNING *", [name, artist, album, time , is_favorite, id]);
      return newUpdate;

  } catch (error) {
    return error
  }
}


module.exports = { getAllSongs, getSong, createSong, deleteSong, updateSong };