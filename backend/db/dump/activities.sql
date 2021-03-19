--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.25
-- Dumped by pg_dump version 9.5.25

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: activities; Type: TABLE DATA; Schema: public; Owner: labber
--

INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (1, 1, '16:00:00', '21:00:00', '', 1, 1);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (2, 2, '12:00:00', '19:00:00', '', 2, 1);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (3, 3, '12:00:00', '15:00:00', '', 3, 1);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (4, 3, '16:00:00', '19:00:00', '', 2, 1);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (5, 4, '16:00:00', '19:00:00', '', 3, 1);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (6, 5, '16:00:00', '19:00:00', '', 1, 1);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (7, 6, '16:00:00', '19:00:00', '', 3, 1);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (8, 7, '16:00:00', '19:00:00', '', 12, 2);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (9, 8, '16:00:00', '19:00:00', '', 4, 2);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (10, 9, '12:00:00', '14:00:00', '', 4, 2);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (11, 9, '16:00:00', '20:00:00', '', 5, 2);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (12, 10, '09:00:00', '19:00:00', '', 5, 2);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (13, 11, '09:00:00', '19:00:00', '', 6, 2);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (14, 12, '09:00:00', '19:00:00', '', 7, 2);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (15, 13, '09:00:00', '19:00:00', '', 6, 2);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (16, 14, '09:00:00', '19:00:00', '', 7, 2);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (17, 15, '09:00:00', '12:00:00', '', 8, 2);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (18, 15, '13:00:00', '19:00:00', '', 9, 2);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (19, 16, '19:00:00', '22:00:00', '', 10, 2);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (20, 17, '12:00:00', '19:00:00', '', 11, 2);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (21, 18, '10:00:00', '13:00:00', '', 12, 2);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (22, 19, '10:00:00', '13:00:00', '', 13, 3);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (23, 20, '10:00:00', '13:00:00', '', 14, 3);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (24, 21, '10:00:00', '13:00:00', '', 13, 3);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (25, 22, '10:00:00', '13:00:00', '', 15, 3);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (26, 23, '10:00:00', '13:00:00', '', 15, 3);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (27, 23, '13:30:00', '18:00:00', '', 16, 3);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (28, 24, '10:00:00', '13:00:00', '', 17, 4);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (29, 25, '10:00:00', '13:00:00', '', 17, 4);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (30, 26, '10:00:00', '13:00:00', '', 17, 4);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (31, 27, '10:00:00', '13:00:00', '', 18, 4);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (32, 28, '10:00:00', '13:00:00', '', 18, 4);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (33, 29, '10:00:00', '13:00:00', '', 18, 4);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (34, 30, '10:00:00', '13:00:00', '', 19, 5);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (35, 31, '10:00:00', '13:00:00', '', 19, 5);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (36, 31, '14:00:00', '18:00:00', '', 20, 5);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (37, 32, '10:00:00', '13:00:00', '', 19, 5);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (38, 33, '10:00:00', '13:00:00', '', 19, 5);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (39, 34, '10:00:00', '16:00:00', '', 19, 5);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (40, 34, '17:00:00', '22:00:00', '', 20, 5);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (41, 35, '10:00:00', '13:00:00', '', 19, 5);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (42, 36, '10:00:00', '13:00:00', '', 19, 5);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (43, 37, '08:00:00', '09:00:00', '', 19, 5);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (44, 37, '09:00:00', '10:00:00', '', 20, 5);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (45, 1, NULL, NULL, '', 2, 1);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (46, NULL, NULL, NULL, '', 1, 1);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (47, 37, '10:00:00', '11:00:00', 'Wake up', 20, 5);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (48, 37, '11:00:00', '12:00:00', 'Eat Brunch', 20, 5);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (49, 37, '12:00:00', '13:00:00', 'Take a nap', 20, 5);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (50, 37, '13:00:00', '14:00:00', 'Hang out with everyone', 20, 5);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (51, 37, '14:00:00', '15:00:00', 'Hot tub!', 20, 5);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (52, 37, '15:00:00', '16:00:00', 'Order in a massage', 20, 5);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (53, 37, '16:00:00', '17:00:00', 'Get ready for the dinner party', 20, 5);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (54, 37, '17:00:00', '20:00:00', 'Party time!', 20, 5);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (55, 39, NULL, NULL, '', 183, 8);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (56, 39, NULL, NULL, '', 190, 8);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (57, 39, NULL, NULL, '', 191, 8);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (60, 44, NULL, NULL, '', 195, 8);
INSERT INTO public.activities (id, day_id, start_time, end_time, notes, attraction_id, itinerary_id) VALUES (61, 131, NULL, NULL, '', 214, 17);


--
-- Name: activities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: labber
--

SELECT pg_catalog.setval('public.activities_id_seq', 61, true);


--
-- PostgreSQL database dump complete
--

