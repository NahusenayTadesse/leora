import type { PageServerLoad } from "./$types";
import { db } from "$lib/server/db";
import { eq } from "drizzle-orm";
import { project, projectCategory } from "$lib/server/db/schema";

export const load: PageServerLoad = async () => {
  const allProjects = await db
    .select({
      title: project.title,
      shortDescription: project.shortDescription,
      category: projectCategory.name,
      slug: project.slug,
      image: project.featured,
    })
    .from(project)
    .leftJoin(projectCategory, eq(project.category, projectCategory.id));

  const categories = await db.select().from(projectCategory);

  return { projects: allProjects };
};
