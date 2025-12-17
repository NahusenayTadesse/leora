import type { PageServerLoad } from "./$types";
import { db } from "$lib/server/db";
import { eq, sql } from "drizzle-orm";
import {
  project,
  projectCategory,
  projectGallery,
} from "$lib/server/db/schema";

export const load: PageServerLoad = async ({ params }) => {
  const { slug } = params;
  const allProjects = await db
    .select({
      id: project.id,
      title: project.title,
      shortDescription: project.shortDescription,
      category: projectCategory.name,
      slug: project.slug,
      image: sql<string>`CONCAT('/files/', ${project.featured})`.as("image"),
    })
    .from(project)
    .leftJoin(projectCategory, eq(project.category, projectCategory.id))
    .where(eq(project.slug, slug))
    .then((rows) => rows[0]);

  const gallery = await db
    .select({
      thumb: sql<string>`CONCAT('/files/', ${projectGallery.url})`.as("thumb"),
      full: sql<string>`CONCAT('/files/', ${projectGallery.url})`.as("full"),
      alt: projectGallery.altText,
    })
    .from(projectGallery)
    .where(eq(projectGallery.projectId, allProjects?.id));

  const galleryWithIndex = gallery.map((item, i) => ({
    ...item,
    id: i + 1,
  }));

  return { project: allProjects, gallery: galleryWithIndex };
};
