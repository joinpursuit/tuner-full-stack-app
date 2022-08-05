const db = require("../db/dbConfig.js");


const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");
        return allSongs;
    } catch(err){
        return err
    }
}

const getSong = async(id) => {
    try {
        const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
        return oneSong;
    } catch (error){
        return error
    }
}

const createSong = async (song) => {
    try {
        const newSong = await db.one(
            "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *", 
            [song.name, song.url, song.category, song.is_favorite]
        );
        return newSong
    } catch (error){
        return error
    }
}
// we will have a bunch of exports
module.exports = { getAllSongs, getSong, createSong }