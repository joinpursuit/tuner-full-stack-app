-- if the data base doesn't exist creates the songs data base

DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

-- connects our database
\c songs_dev;

-- create the table for our database with the columns  - id SERIAL PRIMARY KEY is automatically
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);




-- CREATE A REVIEW TABLE TO ESTABLISH ONE TO MANY
-- DROP TABLE IF EXISTS reviews;
-- CREATE TABLE reviews (
--     id SERIAL PRIMARY KEY,
--     reviewer TEXT,
--     content TEXT,
--     title TEXT,
--     rating NUMERIC,
--     CHECK (rating >= 0 AND rating <=5),
--     bookmark_id INTEGER REFERENCES bookmarks (id) --- FOREIGN KEY (REFERENCES)
--     ON DELETE CASCADE --- if bookmark id is deleted also delete it's reviews
-- );
-- in the terminal run psql -U postgres -f db/schema.sq .... \q
\r