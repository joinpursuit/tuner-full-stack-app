const checkName = (req, res, next) => {
    const { name } = req.body;
    if (name) {
        next();
    } else {
        res.status(400).json({error: "A name must be added"})
    }
};

const checkArtist = (req, res, next) => {
    const { artist } = req.body
    if (artist) {
        next();
    } else {
        res.status(400).json({error: "An artist must be added"})
    }
};

const checkBoolean = (req, res, next) => {
    const { is_favorite } = req.body
    if (is_favorite === "true" ||
        is_favorite === "false" ||
        is_favorite === undefined
        ) {
        next()
    } else {
        res.status(400).json({error: "is_favorite should be a boolean"})
    }
};

module.exports = { checkName, checkArtist, checkBoolean };