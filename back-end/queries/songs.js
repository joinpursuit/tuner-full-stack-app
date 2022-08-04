const db = require("../db/dbConfig.js");

// async await is the modern way to handle promises
// we tried to show you earlier :'(
const getAllSongs = async () => {
  try {
    // .any() CAN return ANYTHING from the query
    // returns ALL rows that match the QUERY
    // that we pass
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (err) {
    return err;
  }
};

// CREATE
const createSong = async (song) => {
  try {
    const newSong = await db.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite]
    );
    return newSong;
  } catch (error) {
    return error;
  }
};

const getSong = async (id) => {
  try {
    const oneSong = await db.one(
      "SELECT * FROM songs WHERE id=$1", id
    );
    return oneSong;
  } catch (error) {
    return error;
  }
};

// we will have a bunch of exports
module.exports = {
  getAllSongs,
  getSong,
  createSong,
};
