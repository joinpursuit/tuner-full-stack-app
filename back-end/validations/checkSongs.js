const checkName = (req, res, next) => {
  console.log('name is being checked');
  if (req.body.name) {
    console.log("we've got a name here!");
    next();
  } else {
    res.status(400).json({ error: 'We need a name...' });
  }
};

const checkArtist = (req, res, next) => {
  console.log('artist is being checked');
  if (req.body.artist) {
    console.log("we've got a name here!");
    next();
  } else {
    res.status(400).json({ error: 'We need a name...' });
  }
};



const checkBoolean = (req, res, next) => {
  if (req.body.is_favorite) {
    next();
  } else {
    res.status(400).json({ error: 'is_favorite must be a boolean value' });
  }
};

module.exports = { checkName, checkBoolean, checkArtist, };
