/** @format */

const express = require('express');
const songs = express.Router();
// Require `getAllSongs` function and update `songs.get(/)` INDEX route to be `async`. Require `getSong` function and update `songs.get(/:id)` SHOW route.
const {
	createSong,
	deleteSong,
	getAllSongs,
	getSong,
	updateSong,
} = require('../queries/songs');
const {
	checkArtist,
	checkBoolean,
	checkName,
} = require('../validations/checkSongs.js');

// Create the `INDEX` route. Test it with browser/Postman.
// INDEX
songs.get('/', async (req, res) => {
	const allSongs = await getAllSongs();
	if (allSongs[0]) {
		// If there is one index that gets returned then the data exists.
		// An empty array is TRUTHY - so we need to check for an element.
		// Send the `allSongs` array of objects as JSON to the browser.
		res.status(200).json(allSongs);
	} else {
		res.status(500).json({ error: 'server error!' });
	}
});

// Create the `SHOW` route and test it in the browser/Postman.
// SHOW ROUTE
songs.get('/:id', async (req, res) => {
	const { id } = req.params;
	const song = await getSong(id);
	if (song) {
		res.json(song);
	} else {
		res.status(404).json({ error: 'not found' });
	}
});

// Create the `CREATE` route and test it with Postman.
// CREATE ROUTE
// Add `checkArtist`, `checkName`, `checkBoolean` functions as middleware for the `CREATE` route.
songs.post('/', checkArtist, checkBoolean, checkName, async (req, res) => {
	try {
		const song = await createSong(req.body);
		res.json(song);
	} catch (error) {
		res.status(400).json({ error: error });
	}
});

// DESTROY ROUTE
songs.delete('/:id', async (req, res) => {
	const { id } = req.params;
	const deletedSong = await deleteSong(id);
	// if our response has an ID we are good to go!
	// an error will NOT have an id
	if (deletedSong.id) {
		res.status(200).json(deletedSong);
	} else {
		res.status(404).json('Song not found!');
	}
});

// UPDATE ROUTE
// Add `checkArtist`, `checkName`, `checkBoolean` functions as middleware for the `UPDATE` route.
songs.put('/:id', checkArtist, checkBoolean, checkName, async (req, res) => {
	const { id } = req.params;
	// updatedSong will either be a MASSIVE error object from SQL
	// OR it will be a song with the keys and values we expected.
	const updatedSong = await updateSong(req.body, id);
	if (updatedSong.id) {
		res.status(200).json(updatedSong);
	} else {
		res.status(404).json({ error: 'Song not updated' });
	}
});

// EXPORT our Songs Router
module.exports = songs;
