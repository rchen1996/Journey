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
-- Data for Name: travel_parties; Type: TABLE DATA; Schema: public; Owner: labber
--

INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (1, 1, 1);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (2, 1, 2);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (3, 1, 3);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (4, 1, 4);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (5, 1, 5);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (6, 2, 2);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (7, 2, 3);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (8, 3, 3);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (9, 3, 5);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (10, 4, 1);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (11, 5, 4);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (12, 5, 2);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (13, 5, 1);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (14, 5, 3);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (15, 5, 5);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (16, 6, 5);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (17, 7, 5);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (18, 7, 1);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (19, 7, 3);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (20, 8, 5);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (21, 9, 5);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (22, 10, 5);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (23, 11, 5);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (24, 12, 5);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (25, 13, 5);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (26, 14, 5);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (27, 15, 5);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (28, 16, 5);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (29, 17, 5);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (30, 18, 5);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (31, 19, 5);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (32, 20, 5);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (33, 21, 5);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (34, 22, 5);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (35, 23, 5);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (36, 24, 5);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (37, 25, 5);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (38, 26, 1);
INSERT INTO public.travel_parties (id, itinerary_id, user_id) VALUES (39, 27, 1);


--
-- Name: travel_parties_id_seq; Type: SEQUENCE SET; Schema: public; Owner: labber
--

SELECT pg_catalog.setval('public.travel_parties_id_seq', 39, true);


--
-- PostgreSQL database dump complete
--

