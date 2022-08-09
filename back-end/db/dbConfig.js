const pgp = require("pg-promise")();
//pg-promise is a package
require("dotenv").config();

//connection object that has all the information about our database
const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
};

const db = pgp(cn);

module.exports = db;

//dbConfig file brings in our database
//allows our database and server to communicate
