DROP TYPE IF EXISTS traveler_type CASCADE;
CREATE TYPE "traveler_type" AS ENUM (
  'couples',
  'groups',
  'families',
  'backpackers',
  'solo',
  'luxury',
  'business',
  'accessibility'
);

DROP TYPE IF EXISTS attraction_type CASCADE;
CREATE TYPE "attraction_type" AS ENUM (
  'adult',
  'amusement',
  'accomodation',
  'landmark',
  'sport',
  'food',
  'cultural',
  'nature'
);

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE "users" (
  "id" serial PRIMARY KEY NOT NULL,
  "first_name" varchar(255) NOT NULL,
  "last_name" varchar(255) NOT NULL,
  "email" varchar(255) UNIQUE NOT NULL,
  "password" varchar(255) NOT NULL
);

DROP TABLE IF EXISTS itineraries CASCADE;
CREATE TABLE "itineraries" (
  "id" serial PRIMARY KEY NOT NULL,
  "name" varchar(255) NOT NULL,
  "description" text NOT NULL,
  "image" text,
  "trip_type" traveler_type,
  "visible" boolean NOT NULL DEFAULT false,
  "creator_id" int NOT NULL,
  "start_date" date,
  "end_date" date
);

DROP TABLE IF EXISTS travel_parties CASCADE;
CREATE TABLE "travel_parties" (
  "id" serial PRIMARY KEY NOT NULL,
  "itinerary_id" int NOT NULL,
  "user_id" int NOT NULL
);

DROP TABLE IF EXISTS locations CASCADE;
CREATE TABLE "locations" (
  "id" serial PRIMARY KEY NOT NULL,
  "name" varchar(255) NOT NULL,
  "country" varchar(255) NOT NULL,
  "latitude" float NOT NULL,
  "longitude" float NOT NULL
);

DROP TABLE IF EXISTS days CASCADE;
CREATE TABLE "days" (
  "id" serial PRIMARY KEY NOT NULL,
  "itinerary_id" int NOT NULL,
  "location_id" int NOT NULL,
  "day_order" int NOT NULL,
  "date" date
);

DROP TABLE IF EXISTS attractions CASCADE;
CREATE TABLE "attractions" (
  "id" serial PRIMARY KEY NOT NULL,
  "name" varchar(255) NOT NULL,
  "description" text NOT NULL,
  "category" attraction_type NOT NULL,
  "image" text,
  "address" text NOT NULL,
  "location" point NOT NULL,
  "visible" boolean NOT NULL DEFAULT true
);

DROP TABLE IF EXISTS activities CASCADE;
CREATE TABLE "activities" (
  "id" serial PRIMARY KEY NOT NULL,
  "day_id" int,
  "start_time" time,
  "end_time" time,
  "attraction_id" int NOT NULL,
  "itinerary_id" int NOT NULL
);

ALTER TABLE "travel_parties" ADD FOREIGN KEY ("itinerary_id") REFERENCES "itineraries" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "travel_parties" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "itineraries" ADD FOREIGN KEY ("creator_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "days" ADD FOREIGN KEY ("itinerary_id") REFERENCES "itineraries" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "days" ADD FOREIGN KEY ("location_id") REFERENCES "locations" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "activities" ADD FOREIGN KEY ("attraction_id") REFERENCES "attractions" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "activities" ADD FOREIGN KEY ("itinerary_id") REFERENCES "itineraries" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "activities" ADD FOREIGN KEY ("day_id") REFERENCES "days" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
