const database = require("../db/dbConfig");

const getAllSongs = async () => {
    try {
        const allSongs = await database.any("SELECT * FROM songs");
        return allSongs;
    } catch(err){
        return err;
    }
};

const getSong = async (id) => {
    try{
        const song = await database.one("SELECT * FROM songs WHERE id=$1", id);
        return song;

    }catch(err){
        return err;
    };
};

const createSong = async (song) => {
    const { name, artist, album, time, is_favorite } = song;
    try {
      const newSong = await db.one(
        "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [name, artist, album, time, is_favorite]
      );
      return newSong;
    } catch (error) {
      return error;
    };
};

module.exports = { getAllSongs, getSong, createSong };