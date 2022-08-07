/** @format */

// Check for a missing `name` value.
// Ok, we get our error message. But if we enter a name now, how to we get back to our rote? We use the `next` function.
const checkName = (req, res, next) => {
	if (req.body.name) {
		next();
	} else {
		res.status(400).json({ error: 'Name is required' });
	}
};

const checkArtist = (req, res, next) => {
	if (req.body.artist) {
		next();
	} else {
		res.status(400).json({ error: 'Artist is required' });
	}
};

// Check for a `Boolean` value. We can end up where the user/front end app does not give a `Boolean` value.
const checkBoolean = (req, res, next) => {
	const { is_favorite } = req.body;
	if (
		is_favorite === 'true' ||
		is_favorite === 'false' ||
		is_favorite === 'undefined'
	) {
		next();
	} else {
		res.status(400).json({ error: 'is_favorite must be a boolean value' });
	}
};

module.exports = { checkArtist, checkBoolean, checkName };
