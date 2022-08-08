const db = require("../db/dbConfig.js");

// INDEX
const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    return error;
  }
};

// SHOW
const getSong = async (id) => {
  try {
    const oneSong = await db.oneOrNone("SELECT * FROM songs WHERE id=$1", id);
    return oneSong;
  } catch (error) {
    return error;
  }
};

// CREATE
const createSong = async (song) => {
  console.log(song)
  try {
    const newSong = await db.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite]
    );
    console.log("create successful");
    return newSong;
  } catch (error) {
    console.log("create unsuccessful", error);
    return error;
  }
};

const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one(
      "DELETE FROM songs WHERE id = $1 RETURNING *",
      id
    );
    return deletedSong;
  } catch (error) {
    return error;
  }
};

const updateSong = async (id, song) => {
  try {
    const updatedSong = await db.one(
      "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 where id=$6 RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite, id]
    );
    return updatedSong;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllSongs, getSong, createSong, deleteSong, updateSong };

