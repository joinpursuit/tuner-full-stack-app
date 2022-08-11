const db = require("../db/dbConfig");

// GET
const getAllSongs = async () => {
	try {
		const allSongs = await db.any("SELECT * FROM songs");
		return allSongs;
	} catch (error) {
		return error;
	}
};

// CREATE
const createSong = async ({ name, artist, album, time, is_favorite }) => {
	//console.log(otherStuff);
	try {
		return await db.one(
			"INSERT INTO Songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
			[name, artist, album, time, is_favorite]
		);
	} catch (error) {
		return error;
	}
};

//GET/:id
const getSong = async (id) => {
	try {
		return await db.one("SELECT * FROM songs WHERE id=$1", id);
	} catch (error) {
		return error;
	}
};
//DEL
const deleteSong = async (id) => {
	try {
		return await db.one("DELETE FROM songs WHERE id=$1 RETURNING *", id);
	} catch (error) {
		return error;
	}
};

//UPDATE
const updateSong = async (id, { name, artist, album, time, is_favorite }) => {
	try {
		return await db.one(
			"UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 where id=$6 RETURNING *",
			[name, artist, album, time, is_favorite, id]
		);
	} catch (error) {
		return error;
	}
};

module.exports = {
	getAllSongs,
	createSong,
	deleteSong,
	updateSong,
	getSong,
};
