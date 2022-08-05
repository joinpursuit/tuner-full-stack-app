const checkSongName = (req, res, next) => {
    console.log("song name is being checked")
    if (req.body.name) {
        console.log("we've got the song name!");
        next();
    } else {
        res.status(400).json({ error: "We need the song name -___-' ..." });
    }
}

const checkArtist = (req, res, next) => {
    console.log("Artist's name is being checked")
    if (req.body.artist) {
        console.log("we've got the artist's name!");
        next();
    } else {
        res.status(400).json({ error: "We need the artist's name .____. plz..." });
    }
}


const checkBoolean = (req, res, next) => {
    const { is_favorite } = req.body
    if (is_favorite === "true" || is_favorite === "false" || is_favorite === undefined) {
        console.log(is_favorite)
        next()
    } else {
        res.status(400).json({ error: "is_favorite should be a boolean..." })
    }
}

module.exports = { checkSongName, checkArtist, checkBoolean }