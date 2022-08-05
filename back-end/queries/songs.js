const db = require("../db/dbConfig.js");

// (name, artist, album, time, is_favorite)

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM SONGS");
    return allSongs;
  } catch (error) {
    return error;
  }
};

const getSong = async (id) => {
  try {
    // db one takes a string of SQL commands;   id=$1 allows us to interpolate our
    // second parameter safely. $x per parameter (1, 2, etc.);
    const oneSong = await db.oneOrNone("SELECT * FROM songs WHERE id=$1", id);
    return oneSong;
  } catch (error) {
    return error;
  }
};

const createSong = async (song) => {
  try {
    const newSong = await db.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite]
    );
    return newSong;
  } catch (error) {
    return error;
  }
};

const editSong = async (song) => {
  try {
  } catch (error) {
    return error;
  }
};

const deleteSong = async (id) => {
  try {
    const deadSong = await db.one("DELETE FROM songs WHERE id=$1 RETURNING *", id);
    return deadSong;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllSongs, getSong, createSong, deleteSong };
