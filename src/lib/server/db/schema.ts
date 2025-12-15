import {
  mysqlTable,
  int,
  varchar,
  datetime,
  text,
  timestamp,
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

export const contactSubmissions = mysqlTable("contact_submissions", {
  id: int("id").primaryKey().autoincrement(), // cuid / uuid
  fullName: varchar("full_name", { length: 120 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 30 }).notNull(),
  company: varchar("company", { length: 180 }), // optional
  service: varchar("service", { length: 120 }).notNull(), // “budget” in your <select>
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const blogPost = mysqlTable("blog_post", {
  id: varchar("id", { length: 255 }).primaryKey(),
  slug: varchar("slug", { length: 200 }).notNull().unique(),
  title: varchar("title", { length: 200 }).notNull(),
  excerpt: varchar("excerpt", { length: 500 }),
  content: text("content").notNull(),
  authorId: varchar("author_id", { length: 255 }).references(() => user.id),
  isPublished: int("is_published").notNull().default(0),
  publishedAt: datetime("published_at"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const project = mysqlTable("project", {
  id: varchar("id", { length: 255 }).primaryKey(),
  category: int("category")
    .notNull()
    .references(() => projectCategory.id),
  slug: varchar("slug", { length: 200 }).notNull().unique(),
  title: varchar("title", { length: 200 }).notNull(),
  shortDescription: varchar("short_description", { length: 400 }),
  description: text("description").notNull(),
  featured: int("featured").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const projectCategory = mysqlTable("project_category", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 150 }).notNull().unique(),
  description: varchar("description", { length: 500 }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type ProjectCategory = typeof projectCategory.$inferSelect;

export const projectGallery = mysqlTable("project_gallery", {
  id: int("id").primaryKey().autoincrement(),
  projectId: varchar("project_id", { length: 255 })
    .notNull()
    .references(() => project.id),
  url: varchar("url", { length: 1000 }).notNull(),
  altText: varchar("alt_text", { length: 255 }),
  sortOrder: int("sort_order").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type BlogPost = typeof blogPost.$inferSelect;
export type Project = typeof project.$inferSelect;
export type ProjectGalleryItem = typeof projectGallery.$inferSelect;
export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;
