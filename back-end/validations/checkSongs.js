const checkBoolean = (req, res, next) => {
  const { is_favorite } = req.body;
  if (
    is_favorite == "true" ||
    is_favorite == "false" ||
    is_favorite == Boolean
  ) {
    next();
  } else {
    res.status(400).json({ error: "is_favorite must be a boolean value" });
  }
};

const checkName = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

module.exports = { checkBoolean, checkName };