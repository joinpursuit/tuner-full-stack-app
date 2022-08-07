const express = require("express");
const songs = express.Router();

//Queries
const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  editSong,
} = require("../queries/songs");

//Validations
const {
  checkBool,
  checkName,
  checkArtist,
} = require("../validations/checkSongs");

//Index
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    // A simple check to see if there is at least one song
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

//Routes
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (song) {
    res.json(song);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

songs.post("/", checkName, checkBool, checkArtist, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (error) {
    return error;
  }
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const song = await deleteSong(id);
    if (song.name !== "QueryResultError") {
      // Like most things I end up making, this feels gross. If so, how could this check be improved?
      res.status(200).send(song);
      /*
      This was super annoying, and required a lot of fiddling to get the test to actually pass. Ultimately - the response it's looking at is a big mess of nonsense in an object, with one of the fields being 'text'. The 'text' field should be the row that is returned from our query, and the test is looking for the song.name - in it's case, 'Fame'.

      This is an example of the returned data : text: '{"id":1,"name":"Fame","artist":"David Bowie","album":"Young Americans","time":"4:12","is_favorite":true}
      */
    } else {
      throw error;
    }
  } catch (error) {
    return res.status(404).send({ error: "Song with request id not found" });
  }
});
songs.put("/:id", checkName, checkBool, checkArtist, async (req, res) => {
  const { id } = req.params;
  try {
    const song = await editSong(req.body, id);
    res.status(200).send(song);
  } catch (error) {
    return error;
  }
});

module.exports = songs;
