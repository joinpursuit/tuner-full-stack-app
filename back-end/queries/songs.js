const db = require("../db/dbConfig");
//all
const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (err) {
    return err;
  }
};
//show
const getSong = async (id) => {
  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return oneSong;
  } catch (error) {
    return error;
  }
};
//create
const createSong = async (song) => {
  const { name, artist, album, time, is_favorite } = song;
  try {
    const newSong = await db.one(
      "INSERT INTO songs ( name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, artist, album, time, is_favorite]
    );
    return newSong;
  } catch (error) {
    return error;
  }
};
//delete
const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one(
      "DELETE FROM songs WHERE id = $1 RETURNING *",
      id
    );
    return deletedSong;
  } catch (err) {
    return err;
  }
};
//update
const updateSong = async (song, id) => {
  const { name, artist, album, time, is_favorite } = song;
  try {
    const updatedSong = await db.one("UPDATE songs SET name = $1, artist = $2, album = $3, time = $4, is_favorite = $5 WHERE id=$6 RETURNING *", [ name, artist, album, time, is_favorite, id ]);
    return updatedSong;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong
};
