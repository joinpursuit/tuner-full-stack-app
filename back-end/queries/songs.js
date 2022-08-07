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
		const oneSong = await db.one('SELECT * FROM songs WHERE id=$1', id);
		return oneSong;
	} catch (error) {
		return error;
	}
};

// NEW Song
const createSong = async (song) => {
	const { name, artist, album, year, time, is_favorite } = song;
	try {
		const newSong = await db.one(
			'INSERT INTO songs (name, artist, album, year, time, is_favorite) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
			[name, artist, album, year, time, is_favorite]
		);
		return newSong;
	} catch (error) {
		return error;
	}
};

// DELETE Song
const deleteSong = async (id) => {
	try {
		const deletedSong = await db.one(
			'DELETE FROM songs WHERE id = $1 RETURNING *',
			id
		);
		return deletedSong;
	} catch (error) {
		return error;
	}
};

// UPDATE Song
// We need to pass in the SONG - the information to change
// && the ID of the song to access it in the DB.
const updateSong = async (song, id) => {
	const { name, artist, album, year, time, is_favorite } = song;
	try {
		// first argument is the QUERY string
		// second argument is the actual DATA
		const updatedSong = await db.one(
			'UPDATE songs SET name = $1, artist = $2, album = $3, year = $4, time = $5, is_favorite = $6 WHERE  id = $7 RETURNING *',
			// remember the order MATTERS here
			[name, artist, album, year, time, is_favorite, id]
		);
		return updatedSong;
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
	deleteSong,
	updateSong,
};
