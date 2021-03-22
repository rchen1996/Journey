INSERT INTO activities(itinerary_id,day_id, start_time, end_time, attraction_id)
VALUES(1,1, '16:00:00', '21:00:00', 1),
(1,2, '12:00:00', '19:00:00', 2),
(1,3,'12:00:00', '15:00:00',3),
(1,3,'16:00:00', '19:00:00',2),
(1,4,'16:00:00', '19:00:00',3),
(1,5,'16:00:00', '19:00:00',1),
(1,6,'16:00:00', '19:00:00',3),

(2,7,'16:00:00', '19:00:00',12),
(2,8,'16:00:00', '19:00:00',4),
(2,9,'12:00:00', '14:00:00',4),
(2,9,'16:00:00', '20:00:00',5),
(2,10,'09:00:00', '19:00:00',5),

(2,11,'09:00:00', '19:00:00',6),
(2,12,'09:00:00', '19:00:00',7),
(2,13,'09:00:00', '19:00:00',6),
(2,14,'09:00:00', '19:00:00',7),

(2,15,'09:00:00', '12:00:00',8),
(2,15,'13:00:00', '19:00:00',9),
(2,16,'19:00:00', '22:00:00',10),

(2,17,'12:00:00', '19:00:00',11),
(2,18,'10:00:00', '13:00:00',12),

(3,19,'10:00:00', '13:00:00',13),
(3,20,'10:00:00', '13:00:00',14),
(3,21,'10:00:00', '13:00:00',13),

(3,22,'10:00:00', '13:00:00',15),
(3,23,'10:00:00', '13:00:00',15),
(3,23,'13:30:00', '18:00:00',16),

(4,24,'10:00:00', '13:00:00',17),
(4,25,'10:00:00', '13:00:00',17),
(4,26,'10:00:00', '13:00:00',17),
(4,27,'10:00:00', '13:00:00',18),
(4,28,'10:00:00', '13:00:00',18),
(4,29,'10:00:00', '13:00:00',18),

(5,30,'10:00:00', '13:00:00',19),
(5,31,'10:00:00', '13:00:00',19),
(5,31,'14:00:00', '18:00:00',20),
(5,32,'10:00:00', '13:00:00',19),
(5,33,'10:00:00', '13:00:00',19),
(5,34,'10:00:00', '16:00:00',19),
(5,34,'17:00:00', '22:00:00',20),
(5,35,'10:00:00', '13:00:00',19),
(5,36,'10:00:00', '13:00:00',19),
(5,37,'08:00:00', '09:00:00',19),
(5,37,'09:00:00', '10:00:00',20);



INSERT INTO activities(itinerary_id,day_id,attraction_id)
VALUES(1,1,2);

INSERT INTO activities(itinerary_id, attraction_id)
VALUES(1, 1);


INSERT INTO activities(itinerary_id,day_id, start_time, end_time, attraction_id,notes)
VALUES
(5,37,'10:00:00', '11:00:00',20,'Wake up'),
(5,37,'11:00:00', '12:00:00',20,'Eat Brunch'),
(5,37,'12:00:00', '13:00:00',20,'Take a nap'),
(5,37,'13:00:00', '14:00:00',20,'Hang out with everyone'),
(5,37,'14:00:00', '15:00:00',20,'Hot tub!'),
(5,37,'15:00:00', '16:00:00',20,'Order in a massage'),
(5,37,'16:00:00', '17:00:00',20,'Get ready for the dinner party'),
(5,37,'17:00:00', '20:00:00',20,'Party time!');

INSERT INTO activities (day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 39, NULL, NULL, '', 183, 8);
INSERT INTO activities (day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 39, NULL, NULL, '', 190, 8);
INSERT INTO activities (day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 39, NULL, NULL, '', 191, 8);
INSERT INTO activities (day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 44, NULL, NULL, '', 195, 8);
INSERT INTO activities (day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 131, NULL, NULL, '', 214, 17);

INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (203, '14:00:00', '15:00:00', 'Booking Id: C1234-678
Phone:  +81 3-3476-3000', 288, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (203, '12:00:00', '14:00:00', 'Have lunch before checking in.', 292, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (NULL, NULL, NULL, '', 273, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (203, '15:30:00', '16:30:00', '', 306, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (203, '17:00:00', '21:00:00', 'Shopping and dinner', 316, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 209, NULL, NULL, '', 494, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (204, '06:00:00', '10:00:00', 'Checkout the tuna auction and have sushi', 281, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (204, NULL, NULL, '', 277, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (204, NULL, NULL, '', 280, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (204, NULL, NULL, '', 347, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (205, NULL, NULL, '', 363, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (205, NULL, NULL, '', 358, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (205, NULL, NULL, '', 360, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (205, '11:00:00', '12:00:00', 'Booking Id: 1234567
', 355, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (205, '12:30:00', '14:00:00', 'If weather permits', 356, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (NULL, NULL, NULL, '', 15, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (NULL, NULL, NULL, '', 374, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (NULL, NULL, NULL, '', 382, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (209, NULL, NULL, '', 48, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (206, '12:00:00', '14:30:00', '', 379, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (206, '15:00:00', '17:00:00', '', 377, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (206, NULL, NULL, '', 402, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (206, NULL, NULL, '', 394, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 209, NULL, NULL, '', 49, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (206, '10:00:00', '12:00:00', '', 391, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (206, NULL, NULL, '', 375, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (207, NULL, NULL, '', 422, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (207, NULL, NULL, '', 428, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (207, NULL, NULL, 'More sushi!', 440, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (207, '12:30:00', '13:30:00', 'BookingId: cD123445678', 429, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (208, NULL, NULL, '', 463, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (208, NULL, NULL, '', 458, 26);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (223, '16:00:00', '19:00:00', '', 46, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (209, '12:00:00', '13:30:00', 'Booking ID: CS535267235
Phone: +06 63527-37455', 488, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (209, '14:00:00', '16:00:00', '', 8, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 222, NULL, NULL, '', 544, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 222, '11:00:00', '15:00:00', '', 549, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 222, '16:00:00', '21:00:00', '', 535, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 210, NULL, NULL, '', 553, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 211, NULL, NULL, '', 574, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (223, '09:00:00', '10:30:00', '', 47, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (223, '10:30:00', '12:00:00', '', 51, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (223, '13:30:00', '15:00:00', '', 54, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( NULL, NULL, NULL, '', 555, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( NULL, NULL, NULL, '', 562, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 210, '09:30:00', '11:00:00', '', 571, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 210, '11:00:00', '12:00:00', '', 563, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 210, '12:00:00', '15:00:00', '', 554, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( NULL, NULL, NULL, '', 576, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 211, NULL, NULL, '', 576, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 211, '10:00:00', '12:00:00', '', 573, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 211, '12:00:00', '13:00:00', '', 575, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 211, '13:00:00', '15:00:00', '', 579, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 212, NULL, NULL, '', 42, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 212, NULL, NULL, '', 7, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 212, NULL, NULL, '', 44, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 212, NULL, NULL, '', 55, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 212, NULL, NULL, '', 56, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 212, NULL, NULL, '', 583, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 213, NULL, NULL, '', 584, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 213, NULL, NULL, '', 589, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 213, NULL, NULL, '', 592, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 213, NULL, NULL, '', 587, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 224, NULL, NULL, '', 588, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 224, NULL, NULL, '', 593, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 224, NULL, NULL, '', 594, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 214, NULL, NULL, '', 605, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 214, NULL, NULL, '', 607, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 214, '13:00:00', '14:00:00', 'Booking Id: CS63464-7464
', 606, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 214, NULL, NULL, 'Shopping and lunch', 602, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 215, NULL, NULL, '', 612, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 215, NULL, NULL, '', 614, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 215, NULL, NULL, '', 611, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 215, NULL, NULL, '', 616, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 216, NULL, NULL, '', 625, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 216, NULL, NULL, '', 626, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 216, NULL, NULL, '', 628, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 216, NULL, NULL, '', 631, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 216, NULL, NULL, '', 630, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 217, NULL, NULL, '', 66, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 217, NULL, NULL, '', 67, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 217, NULL, NULL, '', 4, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 217, NULL, NULL, '', 37, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 225, NULL, NULL, '', 38, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 225, NULL, NULL, '', 72, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 225, NULL, NULL, '', 70, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 225, NULL, NULL, '', 69, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 225, NULL, NULL, '', 68, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 225, NULL, NULL, '', 638, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( NULL, NULL, NULL, '', 659, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 219, '18:30:00', '20:00:00', 'Dinner reservation under Alice Wonderland', 656, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 219, '20:00:00', '22:00:00', 'Shopping before bedtime', 660, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 219, '09:00:00', '10:00:00', '', 652, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 219, '10:00:00', '12:00:00', '', 654, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 219, '12:30:00', '14:00:00', 'Lunch', 655, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 219, NULL, NULL, 'If we have time', 657, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 220, '20:00:00', '22:00:00', '', 664, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 220, '13:00:00', '15:00:00', 'Lunch', 670, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 220, '09:00:00', '10:00:00', '', 667, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 220, '10:00:00', '13:00:00', '', 662, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 220, '15:00:00', '17:00:00', '', 665, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 221, NULL, NULL, '', 685, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 221, NULL, NULL, '', 687, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 221, NULL, NULL, '', 686, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 221, NULL, NULL, '', 688, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 221, NULL, NULL, '', 710, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 226, '18:00:00', '20:30:00', 'Watch the Real vs Atletico game', 729, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 226, '13:00:00', '14:00:00', '', 690, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 226, '14:00:00', '15:00:00', '', 713, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 226, '10:00:00', '12:00:00', '', 710, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 218, '22:00:00', '23:30:00', 'Flight to Barcelona: Vueling Economy VY2913 GATE A6
', 739, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 218, '09:30:00', '10:30:00', '', 643, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 218, '10:30:00', '11:30:00', '', 644, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 218, '16:00:00', '18:00:00', '', 647, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 218, '13:00:00', '14:30:00', '', 650, 27);
INSERT INTO activities ( day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES ( 222, NULL, NULL, '', 742, 27);
