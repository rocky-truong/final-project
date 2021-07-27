set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

 CREATE TABLE "public.users" (
	"userId" serial NOT NULL,
	"name" TEXT NOT NULL,
	"createdAt" timestamp with time zone NOT NULL,
	"city" TEXT NOT NULL,
	"ntrpRating" integer NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);
