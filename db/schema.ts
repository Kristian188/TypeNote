import { integer, text, boolean, pgTable } from "drizzle-orm/pg-core";

export const userTable = pgTable("userTable", {
    id: integer("id").primaryKey(),
    email: text("email").notNull().unique(),
    hash_password: boolean("hash_password").notNull(),

});