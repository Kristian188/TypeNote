CREATE TYPE "public"."priority" AS ENUM('low', 'medium', 'high');--> statement-breakpoint
CREATE TYPE "public"."status" AS ENUM('in progress', 'completed');--> statement-breakpoint
CREATE TABLE "tasksTable" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"priority" "priority" NOT NULL,
	"status" "status" NOT NULL,
	"user_id" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "tasksTable" ADD CONSTRAINT "tasksTable_user_id_userTable_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."userTable"("id") ON DELETE no action ON UPDATE no action;