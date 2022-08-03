/** @format */

// Bring our connection to the database.
const db = require('../db/dbConfig.js');

// First function that will have an SQL query.
// IMPORTANT - this will be an `async `function. We need to be sure we wait for the response from the database before we try to return a value.
// `async await` is the modern way to handle promises.
// ALL Songs
const getAllSongs = async () => {
	try {
		// `db.any()` is a function that takes a string as a first argument.
		// `.any()` CAN return ANYTHING from the query. Means it will accept any return from the database, no rows, one row, or many rows of data.
		// Returns ALL rows that match the QUERY that we pass.
		const allSongs = await db.any('SELECT * FROM songs');
		return allSongs;
	} catch (error) {
		return error;
	}
};

// Get one song by `index`.
// Create an `async` arrow function and be sure to include it in `module.exports`.
// ONE Song
const getSong = async (id) => {
	try {
		const oneSong = await db.one('SELECT * FROM songs WHERE id=$[id]', {
			id: id,
		});
		return oneSong;
	} catch (error) {
		return error;
	}
};

// NEW Song
const createSong = async (song) => {
	try {
		const newSong = await db.one(
			'INSERT INTO songs (name, artist, album, year, time, is_favorite) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
			[
				song.name,
				song.artist,
				song.album,
				song.year,
				song.time,
				song.is_favorite,
			]
		);
		return newSong;
	} catch (error) {
		return error;
	}
};

// Export the database.
// Note: with `module.exports` we are returning an object, because we are going to return more than one function, therefore, we will store it in an object.
module.exports = {
	createSong,
	getAllSongs,
	getSong,
};
