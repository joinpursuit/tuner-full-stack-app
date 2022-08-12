const checkName = (req, res, next) => {
  console.log("name is being checked");
  if (req.body.name.length !== 0) {
    console.log("Name! We've got Name here! See, no one cares. - Dennis Nedry");
    next();
  } else {
    res.status(400).json({ error: "At least a name is required" });
  }
};

const checkArtist = (req, res, next) => {
  console.log("artist is being checked");
  if (req.body.artist) {
    console.log("Artist detected");
    next();
  } else {
    res.status(400).json({ error: "Artist name is required" });
  }
};

const checkBool = (req, res, next) => {
  const { is_favorite } = req.body;
  if (
    is_favorite === "true" ||
    is_favorite === "false" ||
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
