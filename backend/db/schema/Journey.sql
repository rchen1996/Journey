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

CREATE TYPE "attraction_type" AS ENUM (
  'adult',
  'amusement',
  'accomodations',
  'landmarks',
  'sport',
  'food',
  'cultural',
  'nature'
);

CREATE TABLE "users" (
  "id" int PRIMARY KEY,
  "first_name" varchar(255) NOT NULL,
  "last_name" varchar(255) NOT NULL,
  "email" varchar(255) UNIQUE NOT NULL,
  "password" varchar(255) NOT NULL
);

CREATE TABLE "travel_party" (
  "id" int PRIMARY KEY,
  "itinerary_id" int NOT NULL,
  "user_id" int NOT NULL
);

CREATE TABLE "itineraries" (
  "id" int PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "description" text NOT NULL,
  "days" array NOT NULL,
  "trip_type" traveler_type,
  "visible" boolean NOT NULL DEFAULT false,
  "user_id" int NOT NULL
);

CREATE TABLE "locations" (
  "id" int PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "country" varchar(255) NOT NULL,
  "longitude" number NOT NULL,
  "latitude" number NOT NULL
);

CREATE TABLE "itinerary_locations" (
  "id" int PRIMARY KEY,
  "itinerary_id" int NOT NULL,
  "location_id" int NOT NULL
);

CREATE TABLE "attractions" (
  "id" int PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "description" text NOT NULL,
  "category" attraction_type NOT NULL,
  "image" string,
  "location" point NOT NULL
);

CREATE TABLE "time_slot" (
  "id" int PRIMARY KEY,
  "day" int NOT NULL,
  "start_time" time NOT NULL,
  "end_time" time NOT NULL,
  "attraction_id" int NOT NULL,
  "itinerary_id" int NOT NULL,
  "visible" boolean NOT NULL DEFAULT false
);

ALTER TABLE "travel_party" ADD FOREIGN KEY ("itinerary_id") REFERENCES "itineraries" ("id");

ALTER TABLE "travel_party" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "itineraries" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "itinerary_locations" ADD FOREIGN KEY ("itinerary_id") REFERENCES "itineraries" ("id");

ALTER TABLE "itinerary_locations" ADD FOREIGN KEY ("location_id") REFERENCES "locations" ("id");

ALTER TABLE "time_slot" ADD FOREIGN KEY ("attraction_id") REFERENCES "attractions" ("id");

ALTER TABLE "time_slot" ADD FOREIGN KEY ("itinerary_id") REFERENCES "itineraries" ("id");