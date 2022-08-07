const checkName = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ error: "Please provide a name..." });
  }
};

const checkArtist = (req, res, next) => {
  if (req.body.artist) {
    next();
  } else {
    res.status(400).json({ error: "Please provide an artist..." });
  }
};

const checkId = (req, res, next) => {
  const { id } = req.params;

  if (!isNaN(Number(id))) {
    next();
  } else {
    res.status(400).json({ error: "Please provide a valid ID" });
  }
};

const checkTime = (req, res, next ) => {
  if(!isNaN(Number(req.body.time))){
    next();
  } else {
    res.status(404).json({ error: "Please provide a valid time" })
  }
}

const checkBoolean = (req, res, next) => {
  const { is_favorite } = req.body;
    if (
      is_favorite === "true" ||
      is_favorite === "false" ||
      is_favorite === undefined
    ) {
    next();
  } else {
    res.status(400).json({ error: "is_favorite should be a boolean" });
  }
};



module.exports = { checkName, checkBoolean, checkArtist, checkId, checkTime };
