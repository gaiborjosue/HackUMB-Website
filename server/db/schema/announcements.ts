import { pgTable, serial, text, timestamp, index } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { z } from "zod";

export const announcements = pgTable(
  "announcements", {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (announcements) => {
    return {
      userIdIndex: index("name_idx").on(announcements.userId),
    };
});


export const insertAnnouncementSchema = createInsertSchema(announcements, {
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters" }),
  description: z.string(),
})

export const selectAnnouncementsSchema = createInsertSchema(announcements)