--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 13.1

-- Started on 2024-03-18 16:14:01

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


--
-- TOC entry 2987 (class 0 OID 1656259)
-- Dependencies: 204
-- Data for Name: props; Type: TABLE DATA; Schema: public; Owner: froullete
--

COPY public.props (slug, "readableName", colour) FROM stdin;
naranja	Naranja	orange
sandia	Sandia	#722F37
manzana	Manzana	red
pina	Piña	green
pera	Pera	aquamarine
\.


--
-- TOC entry 2994 (class 0 OID 1656323)
-- Dependencies: 211
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: froullete
--

COPY public.users (id, username, credits, "lastCreditReward") FROM stdin;
1	test	0	1710792280103
\.


--
-- TOC entry 2992 (class 0 OID 1656310)
-- Dependencies: 209
-- Data for Name: prop_basket; Type: TABLE DATA; Schema: public; Owner: froullete
--

COPY public.prop_basket (id, "propSlug", "userId", quantity) FROM stdin;
9	pera	1	1
11	pina	1	1
10	manzana	1	7
\.


--
-- TOC entry 2988 (class 0 OID 1656267)
-- Dependencies: 205
-- Data for Name: roulletes; Type: TABLE DATA; Schema: public; Owner: froullete
--

COPY public.roulletes (slug, "readableName", price) FROM stdin;
ruleta-a	Ruleta A	1
ruleta-b	Ruleta B	2
\.


--
-- TOC entry 2990 (class 0 OID 1656277)
-- Dependencies: 207
-- Data for Name: roullete_to_prop; Type: TABLE DATA; Schema: public; Owner: froullete
--

COPY public.roullete_to_prop (id, "propSlug", "roulleteSlug", weigth) FROM stdin;
20	pera	ruleta-a	20
21	manzana	ruleta-a	80
22	pina	ruleta-b	60
23	sandia	ruleta-b	10
24	naranja	ruleta-b	30
\.

--
-- TOC entry 3001 (class 0 OID 0)
-- Dependencies: 208
-- Name: prop_basket_id_seq; Type: SEQUENCE SET; Schema: public; Owner: froullete
--

SELECT pg_catalog.setval('public.prop_basket_id_seq', 11, true);


--
-- TOC entry 3002 (class 0 OID 0)
-- Dependencies: 206
-- Name: roullete_to_prop_id_seq; Type: SEQUENCE SET; Schema: public; Owner: froullete
--

SELECT pg_catalog.setval('public.roullete_to_prop_id_seq', 24, true);


--
-- TOC entry 3003 (class 0 OID 0)
-- Dependencies: 210
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: froullete
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


-- Completed on 2024-03-18 16:14:01

--
-- PostgreSQL database dump complete
--

