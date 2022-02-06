DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev

CREATE TABLE songs(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);

DROP TABLE IF EXISTS albums;

CREATE TABLE albums(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    artist TEXT,
    release_date TEXT,
    song_id INTEGER REFERENCES songs (id)
    ON DELETE CASCADE
)