import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { eq } from 'drizzle-orm';
import { project, projectCategory  } from '$lib/server/db/schema';

export const load: PageServerLoad = async () => {
    const allProjects = await db.select(
        {
            title: project.title,
            shortDescription: project.shortDescription,
            href: project.liveUrl,
            category: projectCategory.name,
            slug: project.slug
        }
    ).from(project)
    .leftJoin(
        projectCategory, eq(project.category, projectCategory.id)   
    );

    return { projects: allProjects };
};