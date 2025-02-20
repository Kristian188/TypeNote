CREATE TABLE "session" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"expires_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
ALTER TABLE "userTable" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "userTable" ALTER COLUMN "hash_password" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "session" ADD CONSTRAINT "session_user_id_userTable_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."userTable"("id") ON DELETE no action ON UPDATE no action;