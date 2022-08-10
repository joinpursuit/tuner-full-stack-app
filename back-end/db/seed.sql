-- connecting to the datbaase
\c songs_dev;

-- insert values to the columns of our tables
INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('Dont Stop Till You Get Enough', 'Michael Jackson', 'Off the Wall', '1979', true),
('Good Morning Gorgeous', 'Mary J. Blige', 'Good Morning Gorgeous', '2022', true),
('Right On', 'Lil Baby', 'Mix Tape', '2022', false),
('Mixed Signals', 'Daniel John', 'Bad Connections', '2022', true);



-- INSERT INTO reviews (bookmark_id, reviewer, title, content, rating)
-- VALUES
-- ('1', 'Kim', 'My favorite', 'this site is cool',)

-- -- in the terminal run psql -U postgres -f db/schema.sql ... \c bookmarks_dev ... \dt (display all tables)