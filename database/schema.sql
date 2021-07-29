set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

create table "public"."users" (
	"userId"      serial  NOT NULL,
	"name"        TEXT    NOT NULL,
	"city"        TEXT    NOT NULL,
	"ntrpRating"  integer  NOT NULL,
	"createdAt" timestamptz(6) not null default now(),
	constraint "users_pk"
  primary key ("userId")
);
