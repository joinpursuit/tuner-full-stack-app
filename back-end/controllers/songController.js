const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, deleteSong, updateSong, createSong } = require("../queries/songs");
const {
	checkBoolean,
	checkName,
	checkForNoAdditionalParams,
} = require("../validations/checkSongs");

songs.get("/", async (request, response) => {
	const allSongs = await getAllSongs();
	if (allSongs[0]) {
		response.status(200).json(allSongs);
	} else {
		console.error(allSongs);
		response.status(500).json({ error: "server error" });
	}
});

// Show
songs.get("/:id", async (request, response) => {
	const { id } = request.params;
	const song = await getSong(id);
	if (song) {
		response.json(song);
	} else {
		response.status(404).json({ error: "not found" });
	}
});
// Create
songs.post("/", checkBoolean, checkName, checkForNoAdditionalParams, async (request, response) => {
	try {
		const song = await createSong(request.body);
		response.json(song);
	} catch (error) {
		response.status(400).json({ error: error });
	}
});

// UPDATE
songs.put(
	"/:id",
	checkBoolean,
	checkName,
	checkForNoAdditionalParams,
	async (request, response) => {
		try {
			const song = await updateSong(request.params.id, request.body);
			response.json(song);
		} catch (error) {
			response.status(400).json({ error: error });
		}
	}
);

//DELETE
songs.delete("/:id", async (request, response) => {
	const { id } = request.params;
	const deletedSong = await deleteSong(id);
	if (deletedSong) {
		if (deletedSong.id) {
			response.status(200).json(deletedSong);
		} else {
			response.status(404).json({ error: "Song not found" });
		}
	} else {
 		response.status(500).json({ error: "server error" });
	}
});

module.exports = songs;
