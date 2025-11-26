import {
  mysqlTable,
  int,
  varchar,
  datetime,
  text,
  timestamp
} from "drizzle-orm/mysql-core";

export const user = mysqlTable("user", {
  id: varchar("id", { length: 255 }).primaryKey(),
  age: int("age"),
  username: varchar("username", { length: 32 }).notNull().unique(),
  passwordHash: varchar("password_hash", { length: 255 }).notNull(),
});

export const session = mysqlTable("session", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: varchar("user_id", { length: 255 })
    .notNull()
    .references(() => user.id),
  expiresAt: datetime("expires_at").notNull(),
});

export const contactSubmissions = mysqlTable('contact_submissions', {
  id: int('id').primaryKey().autoincrement(), // cuid / uuid
  fullName: varchar('full_name', { length: 120 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 30 }).notNull(),
  company: varchar('company', { length: 180 }), // optional
  service: varchar('service', { length: 120 }).notNull(), // “budget” in your <select>
  message: text('message').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;
