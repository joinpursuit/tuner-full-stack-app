-- step 1 incase there is a database already, drop it
DROP DATABASE IF EXISTS songs_dev;

-- step 2 create the db
CREATE DATABASE songs_dev;

-- step 3 connect to the db
\c songs_dev;

--step 4 blueprint out any tables we need
CREATE TABLE song (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT NOT NULL,
    time INT,
    is_favorite BOOLEAN
);

--psql -U postgres -f db/schema.sql

