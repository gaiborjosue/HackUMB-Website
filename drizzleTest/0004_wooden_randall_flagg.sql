CREATE TABLE IF NOT EXISTS "registrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"track" text NOT NULL,
	"semester" text NOT NULL,
	"team" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_id_idx" ON "registrations" ("user_id");