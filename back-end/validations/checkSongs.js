const checkName = (req, res, next) => {
  console.log(req.body.name);
  console.log("Song name is being checked");
  req.body.name
    ? (console.log(req.body.name), console.log("Name passes"), next())
    : (console.log("No name"),
      res.status(400).json({ error: "Song name required" }));
};

const checkArtist = (req, res, next) => {
  console.log("artist is being checked");
  if (req.body.artist) {
    console.log("Artist detected");
    next();
  } else {
    return res.status(400).json({ error: "Artist name is required" });
  }
};

const checkBool = (req, res, next) => {
  const { is_favorite } = req.body;
  console.log(typeof is_favorite);
  if (
    is_favorite === true ||
    is_favorite === false ||
    is_favorite === "undefined"
  ) {
    console.log("Parameters accepted");
    next();
  } else {
    res
      .status(400)
      .json({ error: "This is required to be a boolean value (or nothing)" });
  }
};

module.exports = { checkBool, checkName, checkArtist };
