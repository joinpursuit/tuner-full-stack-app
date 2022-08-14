// request to the database use this path to data brings the data
const db = require("../db/dbConfig.js");

// async handle promises

// configured to respond to the database
// INDEX
const getAllSongs = async () => {
  try {
    // .any( can return anything in the query)
    // returns all rows thta match the query
    // that we pas
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
      "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite, id]
    );
    console.log(updatedSong)
    return updatedSong;
  } catch (error) {
    console.log("YOU ARE HERERE____")
    return error;
  }
};

module.exports = { getAllSongs, getSong, createSong, deleteSong, updateSong };

