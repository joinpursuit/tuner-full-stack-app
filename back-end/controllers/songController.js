/** @format */

const express = require('express');
const songs = express.Router();
const { getAllSongs } = require('../queries/songs');
// Extends our app so that we can create a new route for our SONGS resource
// we need to make this ASYNC as well
songs.get('/', async (req, res) => {
	const allSongs = await getAllSongs();
	if (allSongs[0]) {
		// if there is one index that gets returned then the data exists - John P 8/2/2022
		// an empty array is TRUTHY - so we need to check for an element
		res.status(200).json(allSongs);
	} else {
		res.status(500).json({ error: 'server error!' });
	}
});

module.exports = songs;
// EXPORT our Songs Router
