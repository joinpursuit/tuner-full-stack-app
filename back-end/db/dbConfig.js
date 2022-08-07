const pgp = require("pg-promise")();
// Install your pg promise then invoke the pgp
require("dotenv").config();

const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
}
// Connection object host, port , database and user

const db = pgp(cn);


module.exports = db;