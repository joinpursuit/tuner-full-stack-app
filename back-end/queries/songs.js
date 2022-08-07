const database = require("../db/dbConfig");

const getAllSongs = async () => {
    try {
        const allSongs = await database.any("SELECT * FROM songs");
        return allSongs;
    } catch(err){
        return err;
    }
};

//oneOrNone resolves the QueryResultError issue when searching an incorrect key
const getSong = async (id) => {
    try{
        const song = await database.oneOrNone("SELECT * FROM songs WHERE id=$1", id);
        return song;
    }catch(err){
        return err;
    };
};

const createSong = async (song) => {
    const { name, artist, album, time, is_favorite } = song;
    try {
      const newSong = await database.one(
        "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [name, artist, album, time, is_favorite]
      );
      return newSong;
    } catch (err) {
      return err;
    };
};

const updateSong = async (song, id) => {
    const { name, artist, album, time, is_favorite } = song;

    try{
        const updatedSong = await database.one("UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *", [name, artist, album, time, is_favorite, id]);
        return updatedSong;
    }catch(err){
        return err;
    };
};

const deleteSong = async (id) => {
    try{
        const deletedSong = await database.one("DELETE FROM songs WHERE id=$1 RETURNING *", id);
        return deletedSong;
    }catch(err){
        return err;
    };
};

module.exports = { 
    getAllSongs, 
    getSong, 
    createSong, 
    updateSong, 
    deleteSong 
};