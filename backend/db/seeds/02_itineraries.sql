INSERT INTO itineraries (name, description, image, trip_type, creator_id)
VALUES ('My Ireland Trip','Soaring cliffs, buzzing little towns and a way of life forever inspired by the sea, that''s what you''ll find on the world’s longest defined coastal touring route.', 'https://images.adsttc.com/media/images/5bd6/fd00/f197/ccaa/4a00/027c/newsletter/shutterstock_1116656705.jpg?1540816099', 'groups', 1),
('Our Honeymoon in Europe','Oui oui baguette','https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900','couples',2),
('Japan!','Food and Shopping','https://cdn-image.departures.com/sites/default/files/1576002985/header-tokyo-japan-LUXETOKYO1219.jpg','families',3);

INSERT INTO itineraries (name, description, image, trip_type, creator_id, start_date)
VALUES('My Norway Getaway','Experience the castles, fjords, glaciers, cities and countrysides of Scandinavia!','https://cdn.kimkim.com/files/a/content_articles/featured_photos/91f73b325868f65a810731f7277b731a553db51f/big-1e3cac6bb208d30558f1623b379e121a.jpg','solo',1, '2021-10-10'),
('Aspen','Skiing and shopping in the village','https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d1573f34c687b00085b1145%2F0x0.jpg','luxury',4,'2021-12-20');

INSERT INTO itineraries (creator_id, name, description, image, trip_type)
VALUES (5,'Trip to Nowhere', 'Have not decided where to go but we will get there! Eventually..', 'https://images.unsplash.com/photo-1503221043305-f7498f8b7888?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80','groups');

INSERT INTO itineraries (creator_id, name, description, image, trip_type)
VALUES (5,'Trip to Amsterdam', 'A quick weekend getaway - an endless amount of attractions, houseboats to ogle over, quaint side streets to get lost on and local specialities to savour.', 'https://images.unsplash.com/photo-1503221043305-f7498f8b7888?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80','groups');