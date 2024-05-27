ALTER TABLE "expenses" RENAME COLUMN "title" TO "firstName";--> statement-breakpoint
ALTER TABLE "expenses" RENAME COLUMN "amount" TO "lastName";--> statement-breakpoint
ALTER TABLE "expenses" ALTER COLUMN "lastName" SET DATA TYPE text;