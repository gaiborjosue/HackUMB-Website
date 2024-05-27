ALTER TABLE "announcements" ALTER COLUMN "post_to_discord" SET DATA TYPE boolean;--> statement-breakpoint
ALTER TABLE "announcements" ALTER COLUMN "post_to_discord" SET DEFAULT false;--> statement-breakpoint
ALTER TABLE "announcements" ALTER COLUMN "post_to_discord" DROP NOT NULL;