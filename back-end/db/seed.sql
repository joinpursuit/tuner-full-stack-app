-- connecting to the datbaase
\c songs_dev;

-- insert values to the columns of our tables
INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('Dont Stop Till You Get Enough', 'Michael Jackson', 'Off the Wall', '4:07', true),
('Good Morning Gorgeous', 'Mary J. Blige', 'Good Morning Gorgeous', '2:55', true),
('Right On', 'Lil Baby', 'Mix Tape', '3:36', false),
('Mixed Signals', 'Daniel John', 'Bad Connections', '2:37', true),
('Come Through', 'H.E.R', 'H.E.R', '3:57', true),
('Feels Like Summer', 'Childish Gambino', 'Donald Glover', '4:46', true),
('Shoot Out', 'Jadakiss', 'Mix Tape', '4:19', true);




-- INSERT INTO reviews (bookmark_id, reviewer, title, content, rating)
-- VALUES
-- ('1', 'Kim', 'My favorite', 'this site is cool',)


-- INSERT INTO users  (username, email,admin, verified)
-- VALUES
-- (Kim', gmemonei@gmail.com, true, true,)

-- INSERT INTO users_bookmars (bookmark_id, user_id)
-- VALUES
-- (1,1),
-- (2,1)

-- -- in the terminal run psql -U postgres -f db/schema.sql ... psql -U postgres -f db/seed.sql ... \c bookmarks_dev ... \dt (display all tables)