const db = require("../db/dbConfig.js")

const getAllAlbums = async (song_id) => {
    try {
        const allAlbums = await db.any(
            "SELECT * FROM albums",
        );
        return allAlbums
    } catch(err){
        return err;
    }
};


module.exports = {
    getAllAlbums
}