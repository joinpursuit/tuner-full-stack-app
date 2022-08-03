/** @format */

const express = require('express');
const songs = express.Router();
// Require `getAllSongs` function and update `songs.get(/)` INDEX route to be `async`. Require `getSong` function and update `songs.get(/:id)` SHOW route.
const { createSong, getAllSongs, getSong } = require('../queries/songs');
const { checkBoolean, checkName } = require('../validations/checkSongs.js');

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
// Add `checkName`, `checkBoolean` functions as middleware for the create route.
songs.post('/', checkBoolean, checkName, async (req, res) => {
	try {
		const song = await createSong(req.body);
		res.json(song);
	} catch (error) {
		res.status(400).json({ error: error });
	}
});

// EXPORT
module.exports = songs;
