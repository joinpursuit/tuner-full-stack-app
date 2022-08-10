/** @format */

// Require the `pg-promise` package so we can use it.
const pgp = require('pg-promise')();

// Config object to grab all our environment vars for postgres.
require('dotenv').config();

// `cn` is short for connection. Here we define our CONNECTION OBJECT.
const cn = {
	host: process.env.PG_HOST,
	port: process.env.PG_PORT,
	database: process.env.PG_DATABASE,
	user: process.env.PG_USER,
};

// invoke `PG-promise` with our connection object and store it to a variable.
const db = pgp(cn);

// EXPORT the `db` variable.
module.exports = db;