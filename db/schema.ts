import { text, pgTable, timestamp } from "drizzle-orm/pg-core";

export const userTable = pgTable("userTable", {
    id: text("id").primaryKey(),
    email: text("email").notNull().unique(),
    hash_password: text("hash_password").notNull(),

});

export const sessionTable = pgTable("session", {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => userTable.id),
    expiresAt: timestamp("expires_at", {
      withTimezone: true,
      mode: "date",
    }).notNull(),
  });
  