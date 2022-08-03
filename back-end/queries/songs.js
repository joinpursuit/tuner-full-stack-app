const db = require("../db/dbConfig.js");

// async await is the modern way to handle promises
// we tried to show you earlier :'(
const getAllSongs = async () => {
  try {
    // .any() CAN return ANYTHING from the query
    // returns ALL rows that match the QUERY
    // that we pass
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (err) {
    return err;
  }
};

// we will have a bunch of exports
module.exports = { getAllSongs };
