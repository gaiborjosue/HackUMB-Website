import { pgTable, text, serial, index, timestamp } from "drizzle-orm/pg-core";

export const registrations = pgTable(
  "registrations", {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull(),
    track: text("track").notNull(),
    semester: text("semester").notNull(),
    team: text("team").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (registrations) => {
    return {
      userIdIndex: index("user_id_idx").on(registrations.userId),
    };
  }
);
