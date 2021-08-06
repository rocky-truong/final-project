set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."users" (
	"userId" serial NOT NULL,
	"name" TEXT NOT NULL,
	"createdAt" timestamptz(6) not null default now(),
	"city" TEXT NOT NULL,
	"ntrpRating" integer NOT NULL,
	CONSTRAINT "users_pk"
  PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."messages" (
	"messageId" serial NOT NULL,
	"message" TEXT NOT NULL,
	"createdAt" timestamptz(6) not null default now(),
	"senderId" serial NOT NULL,
	"recipientId" serial NOT NULL,
	CONSTRAINT "messages_pk"
  PRIMARY KEY ("messageId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "messages" ADD CONSTRAINT "messages_fk0" FOREIGN KEY ("senderId") REFERENCES "users"("userId");
ALTER TABLE "messages" ADD CONSTRAINT "messages_fk1" FOREIGN KEY ("recipientId") REFERENCES "users"("userId");
