import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp, boolean, jsonb } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  uid: text('uid').notNull().unique(), // Firebase Auth UID
  email: text('email').notNull(),
  role: text('role').default('Viewer'), // e.g., Super Admin, Content Admin, etc.
  createdAt: timestamp('created_at').defaultNow(),
});

export const pages = pgTable('pages', {
  id: serial('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  parentId: integer('parent_id'), // self-referencing
  status: text('status').default('Draft'), // Draft, Published, Archived
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
  createdBy: integer('created_by').references(() => users.id),
  updatedBy: integer('updated_by').references(() => users.id),
});

export const pageTranslations = pgTable('page_translations', {
  id: serial('id').primaryKey(),
  pageId: integer('page_id').notNull().references(() => pages.id, { onDelete: 'cascade' }),
  language: text('language').notNull(), // en, si, ta
  title: text('title').notNull(),
  content: text('content'),
  seoTitle: text('seo_title'),
  seoDescription: text('seo_description'),
});

export const newsArticles = pgTable('news_articles', {
  id: serial('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  featuredImage: text('featured_image'),
  category: text('category'),
  publishedDate: timestamp('published_date'),
  status: text('status').default('Draft'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
  authorId: integer('author_id').references(() => users.id),
});

export const newsTranslations = pgTable('news_translations', {
  id: serial('id').primaryKey(),
  articleId: integer('article_id').notNull().references(() => newsArticles.id, { onDelete: 'cascade' }),
  language: text('language').notNull(),
  title: text('title').notNull(),
  summary: text('summary'),
  body: text('body'),
  seoTitle: text('seo_title'),
  seoDescription: text('seo_description'),
});

export const events = pgTable('events', {
  id: serial('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  eventDate: timestamp('event_date'),
  venue: text('venue'),
  registrationLink: text('registration_link'),
  featuredImage: text('featured_image'),
  status: text('status').default('Draft'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const eventTranslations = pgTable('event_translations', {
  id: serial('id').primaryKey(),
  eventId: integer('event_id').notNull().references(() => events.id, { onDelete: 'cascade' }),
  language: text('language').notNull(),
  title: text('title').notNull(),
  description: text('description'),
});

export const resources = pgTable('resources', {
  id: serial('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  category: text('category'),
  language: text('language'),
  year: integer('year'),
  fileUrl: text('file_url'),
  fileSize: integer('file_size'),
  fileType: text('file_type'),
  version: text('version'),
  publishedDate: timestamp('published_date'),
  status: text('status').default('Published'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const resourceTranslations = pgTable('resource_translations', {
  id: serial('id').primaryKey(),
  resourceId: integer('resource_id').notNull().references(() => resources.id, { onDelete: 'cascade' }),
  language: text('language').notNull(),
  title: text('title').notNull(),
  description: text('description'),
});

export const institutions = pgTable('institutions', {
  id: serial('id').primaryKey(),
  acronym: text('acronym'),
  logo: text('logo'),
  websiteUrl: text('website_url'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const institutionTranslations = pgTable('institution_translations', {
  id: serial('id').primaryKey(),
  institutionId: integer('institution_id').notNull().references(() => institutions.id, { onDelete: 'cascade' }),
  language: text('language').notNull(),
  name: text('name').notNull(),
  description: text('description'),
  focusAreas: text('focus_areas'),
  contactDetails: text('contact_details'),
});

export const procurementNotices = pgTable('procurement_notices', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  deadline: timestamp('deadline'),
  openingDate: timestamp('opening_date'),
  status: text('status'), // Open, Closed, Awarded, Cancelled
  documentUrl: text('document_url'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const settings = pgTable('settings', {
  id: serial('id').primaryKey(),
  key: text('key').notNull().unique(),
  value: text('value'),
  createdAt: timestamp('created_at').defaultNow(),
});
