const db = require("../db/dbConfig.js");

const getAllSongs = async (order, favorite) => {
  try {
    let songs = [];
    if (order === "asc") {
      songs = await db.any("SELECT * FROM songs ORDER BY name");
    } else if (order === "desc") {
      songs = await db.any("SELECT * FROM songs ORDER BY name DESC");
    } else if (favorite === "true") {
      songs = await db.any("SELECT * FROM songs WHERE is_favorite=TRUE");
    } else if (favorite === "false") {
      songs = await db.any("SELECT * FROM songs WHERE is_favorite=FALSE");
    } else {
      songs = await db.any("SELECT * FROM songs");
    }
    return songs;
  } catch (error) {
    return error;
  }
};
const oneSong = async (id) => {
  try {
    const song = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return song;
  } catch (error) {
    return error;
  }
};
const createSong = async (song) => {
  try {
    const createdSong = await db.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1,$2,$3,$4,$5) RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite]
    );
    return createdSong;
  } catch (error) {
    return error;
  }
};
const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one(
      "DELETE FROM songs WHERE id=$1 RETURNING *",
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
    return updatedSong;
  } catch (error) {
    return error;
  }
};
module.exports = { getAllSongs, oneSong, createSong, deleteSong, updateSong };
