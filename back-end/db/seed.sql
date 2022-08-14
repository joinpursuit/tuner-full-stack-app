\c songs_dev

INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('Wonderful World', 'Louis Armstrong', 'What a wonderful world', '2:20', true),
('Rose Rouge', 'St Germain', 'Tourist', '6:55', true),
('Carmina Burana', 'Carl Orff', 'The 50 Greatest Pieces of Classical Music', '2:42', true),
('Groovin', 'The Young Rascals', 'Groovin', '2:31', true),
('Cafe de Flore', 'Doctor Rockit', 'Hotel Costes 4', '5:35', true),
('Sing It Back', 'Moloko', 'Catalogue', '4:38', true),
('Imagine', 'John Lennon', 'Imagine', '3:07', true),
('Love Is The Message', 'MFSB', 'The Essential MFSB', '6:36', true),
('These are The Days Of Our Lives', 'Queen','Innuendo', '4:14', true),
('The Whistle Song', 'Frankie Knuckles', 'Beyond the Mix', '6:57', true),
('Idiosyncracy', 'Osunlade', 'Pyrography', '5:06', true),
('Jugando Con Fuego, Pt.2', 'Mr. Hermano', 'Free as the Morning Sun', '8:39', true);

INSERT INTO reviews (song_id, reviewer, title, content, rating) VALUES 
('1', 'Chris', 'All time favorite', 'it is a wonderful world', 4),
('1', 'Rita', 'My favorite', 'this song just makes you fall in love with the world', 5),
('1', 'Amy', 'All time favorite', 'makes me happy', 4),
('2', 'Chris', 'top of favs', 'super groovy', 4),
('3', 'Joe', 'All time favorite', 'so full of passion! gets me going!', 4),
('4', 'Chris', 'old school favorite', 'feels like sitting drinking some chill tea on a hoy day!', 4),
('8', 'Rita', 'Timeless classic', 'love, love , love', 4),
('9', 'Amy', 'top on my list', 'not played snough but just so beautiful', 4),
('8', 'Chris', 'Classic', 'best of dancing times', 4),
('4', 'Joe', 'Summer fav', 'so happy n groovy', 4);


