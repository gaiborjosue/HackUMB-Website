DROP TABLE "expenses";--> statement-breakpoint
DROP INDEX IF EXISTS "announcement_idx";--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "announcements" ("user_id");