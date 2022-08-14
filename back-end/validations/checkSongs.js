const checkName = (req, res, next) => {
    
  const { name } = req.body
  if ( name ) {
      next()
  } else {
      res.status(400).json({error: "Name is required"})
  }
};


  const checkArtist = (req, res, next) => {
    const { artist } = req.body
    if ( artist ) {
        next()
    } else {
        res.status(400).json({error: "Artist name is required"})
    }
};


  const checkBoolean = (req, res, next) => {
    const { is_favorite } = req.body
    if ( is_favorite === "true" || is_favorite === "false" || is_favorite === true || is_favorite === false || is_favorite === undefined ) {
        next()
    } else {
        res.status(400).json({error: "is_favorite should be a boolean"})
    }
};

  
  module.exports = { checkName, checkArtist, checkBoolean };