import { numeric, text, pgTable, serial, index, timestamp } from "drizzle-orm/pg-core";


export const expenses = pgTable(
  "expenses", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  },
  (expenses) => {
  return {
    userIdIndex: index("name_idx").on(expenses.userId),
  };
});