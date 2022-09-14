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
-- in the terminal run psql -U postgres -f db/schema.sql .... \q
-- CREATE A user TABLE TO ESTABLISH MANY TO MANY
-- The Intranet is a Bookmark that would have many to many relationship
-- DROP TABLE IF EXISTS user;
-- CREATE TABLE user (
--     id SERIAL PRIMARY KEY,
--     username TEXT UNIQUE NOT NULL, --- user name must not be used and not blank
--     email TEXT UNIQUE NOT NULL,
--     admin BOOLEAN DEFAULT false ,
--     verified TEXT,
--     CHECK (rating >= 0 AND rating <=5),
--     bookmark_id INTEGER REFERENCES bookmarks (id) --- FOREIGN KEY (REFERENCES)
--     ON DELETE CASCADE --- if bookmark id is deleted also delete it's reviews
-- users to bookmarks in common GITHUB is a bookmark used by several users
-- CREATE TABLE users_bookmarks (
--     bookmark_id INTEGER NOT NULL,
--     user_id INTERGER NOT NULL,
--     created TIMESTAMP DEFAULT NOW()
-- )
--
-- connecting to the datbaase
\c songs_dev;
-- insert values to the columns of our tables
INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('Love on the brain', 'Rihanna', '', '4:07', true),
('To be happy', 'Mary J. Blige', 'What's the 411', '2:55', true),
('Millionaire', 'Lil Wayne', 'Mix Tape', '3:36', false),
('Mixed Signals', 'Daniel John', 'Bad Connections', '2:37', true),
('Focus', 'H.E.R', 'H.E.R', '3:57', true),
('I have nothing', 'Whitney Houston', 'I will always love you', '4:46', true),
('Rock with you', 'Micheal Jackson', 'Cool Kids', '4:19', true);

-- INSERT INTO reviews (bookmark_id, reviewer, title, content, rating)
-- VALUES
-- ('1', 'Kelly', 'My favorite', 'this site is cool',)
-- INSERT INTO users  (username, email,admin, verified)
-- VALUES
-- (Kim', kmighty64@.com, true, true,)
-- INSERT INTO users_bookmars (bookmark_id, user_id)
-- VALUES
-- (1,1),
-- (2,1)