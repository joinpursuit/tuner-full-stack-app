DROP DATABASE IF EXISTS song_db;
CREATE DATABASE song_db;
\c song_db;
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);