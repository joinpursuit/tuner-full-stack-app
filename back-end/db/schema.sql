DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album Text ,
    time TEXT,
    is_favorite BOOLEAN
);
-- DROP DATABASE IF EXISTS users;
-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     username TEXT UNIQUE NOT NULL,
--     email TEXT UNIQUE NOT NULL,
--     admin BOOLEAN DEFAULT false,
--     verified BOOLEAN DEFAULT false,
-- );

-- DROP DATABASE IF EXISTS users_songs;
-- CREATE TABLE users_songs (
--     bookmark_id INTEGER NOT NULL,
--     user_id INTEGER NOT NULL,
--     created TIMESTAMP DEFAULT NOW(),
-- );