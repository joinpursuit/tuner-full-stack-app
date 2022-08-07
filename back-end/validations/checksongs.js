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

const checkBoolean = (req, res, next) => {
  const { is_favorite } = req.body;
//   if (
//     is_favorite === "true" ||
//     is_favorite === "false" ||
//     is_favorite === undefined
//   ) {
    console.log(typeof is_favorite);
    if(is_favorite || !is_favorite ){

    
    next();
  } else {
    res.status(400).json({ error: "is_favorite should be a boolean" });
  }
};

module.exports = { checkName, checkBoolean, checkArtist };
