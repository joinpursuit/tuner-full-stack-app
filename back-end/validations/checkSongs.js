const checkName = (req, res, next) => {
 
    if (req.body.name) {
        next();
    } else {
        res.status(400).json({error: "We need a name..."})
    }
}
const checkArtist = (req, res, next) => {
    if (req.body.artist) {
        next();
    } else {
        res.status(400).json({error: "please input Artist"})
    }
}
const checkId = (req, res, next) => {
    console.log(req.body.id);
    if (!!req.body.id) {     
        next();
    } else {
        res.status(404).json({error: "incorrect id" })
    }
}
const checkBoolean = (req, res, next) => {
    const { is_favorite } = req.body
    if (is_favorite === "true" ||
        is_favorite === "false" ||
        is_favorite === undefined
        ) {
        console.log(is_favorite)
        next()
    } else {
        res.status(400).json({error: "is_favorite should be a boolean"})
    }
};
const checkTime = (req, res, next) => {
    if (req.body.time) {
        console.log("we have the time");
        next();
    } else {
        res.status(404).json({error: "song time not given" })
    }
}

module.exports = { checkName, checkBoolean, checkArtist, checkId, checkTime }