\c songs_dev;

INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('I Hate You', 'Sza', 'Single', '2:53', true),
('Like I want you', 'Giveon', 'Take Time', '4:20', true),
('Never Gonna Give You Up', 'Rick Astley', 'Whenever you need somebody', '3:33', false),
('Pressure', 'Ari Lennox', 'Pressure', '3:13', true),
('TSA', 'Tank and the Bangas ft. PJ Morton', 'Friend Goals', '3:43', true);

INSERT INTO albums (song_id, title, artist, release_date) VALUES
('2', 'Take Time', 'Giveon', 'March 27,2020'),
('2', 'When Its all said and done... Take Time', 'Giveon', 'March 12,2021')