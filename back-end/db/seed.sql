-- step 1 connect to the db
\c songs_dev;

-- step 2 add pre-made data to be able to add
INSERT INTO song (name, artist, album, time, is_favorite) VALUES 
('Alison', 'Slowdive', 'Souvlaki', 233, TRUE),
('Pennons Aloft', 'Nobuo Uematsu', 'Final Fantasy XIV: Before the Meteor', 237, FALSE),
('Keep Your Head Up', 'Kane Grocerys and MexikoDro','Goth Money Records', 179, TRUE);