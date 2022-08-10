const pgp = require("pg-promise")();
require("dotenv").config();

// allows our server to communicate with our database
// config object to grab all our enviornment var for postgres - to set up the data base
const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
};

// invoke database with promise woth our connections object 
const db = pgp(cn);

module.exports = db;

