DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT,
    content TEXT,
    title TEXT, 
    rating INTEGER,
    CHECK ( rating >= 0 AND rating <= 5 ),
    song_id INTEGER REFERENCES songs (id)
    ON DELETE CASCADE
);