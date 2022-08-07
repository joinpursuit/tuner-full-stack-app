const checkName = (req, res, next) => {
    console.log("name is being checked");
    if (req.body.name) {
        console.log("we've got a name here!");
        next();
    } else {
        res.status(400).json({error: "We need a name..."})
    }
}

const checkArtist = (req, res, next) => {
    if (req.body.artist) {
        console.log("we've got an artist here!");
        next();
    } else {
        res.status(400).json({error: "We need an artist..."})
    }
}

module.exports = { checkName, checkArtist }