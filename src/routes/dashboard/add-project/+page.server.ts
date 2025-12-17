import fs from "node:fs";
import path from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { env } from "$env/dynamic/private";
import { superValidate } from "sveltekit-superforms";
import { zod4 } from "sveltekit-superforms/adapters";
import {
  ProjectSchema as schema,
  ProjectCategorySchema as categorySchema,
} from "$lib/projects";
const FILES_DIR: string = env.FILES_DIR ?? ".tempFiles";

if (!fs.existsSync(FILES_DIR)) {
  fs.mkdirSync(FILES_DIR, { recursive: true });
}

import { db } from "$lib/server/db";
import { eq, and, sql } from "drizzle-orm";
import type { Actions, PageServerLoad } from "./$types";
import { fail } from "sveltekit-superforms";
import { setFlash } from "sveltekit-flash-message/server";
import {
  project,
  projectCategory,
  projectGallery,
} from "$lib/server/db/schema";

export const load: PageServerLoad = async () => {
  const form = await superValidate(zod4(schema));
  const catForm = await superValidate(zod4(categorySchema));

  const categories = await db
    .select({
      value: projectCategory.id,
      name: projectCategory.name,
    })
    .from(projectCategory);

  return {
    form,
    catForm,
    categories,
  };
};

export const actions: Actions = {
  addProject: async ({ request, cookies }) => {
    console.log("addProject action triggered");
    const form = await superValidate(request, zod4(schema));

    if (!form.valid) {
      // Stay on the same page and set a flash message
      setFlash(
        { type: "error", message: "Please check your form data." },
        cookies,
      );
      return fail(400, { form });
    }

    const {
      title,
      shortDescription,
      category,
      featured,
      gallery,
      description,
    } = form.data;

    try {
      const { randomUUID } = await import("node:crypto");

      const generateRandomId = (size = 8): string => {
        const ts = Date.now().toString(36); // timestamp component
        const uid = randomUUID().replace(/-/g, "").slice(0, size); // random component
        return `${ts}-${uid}`;
      };

      const imageName = `${generateRandomId()}${path.extname(featured.name)}`;

      const file_path: string = path.normalize(path.join(FILES_DIR, imageName));

      const nodejs_wstream = fs.createWriteStream(file_path);
      const web_rstream = featured.stream();
      const nodejs_rstream = Readable.fromWeb(web_rstream);
      await pipeline(nodejs_rstream, nodejs_wstream).catch(() => {
        setFlash(
          {
            type: "error",
            message: "Failed to upload featured image",
          },
          cookies,
        );
        return fail(500);
      });

      const galleryImages = await Promise.all(
        gallery.map(async (image) => {
          const imageName = `${generateRandomId()}${path.extname(image.name)}`;
          const file_path = path.normalize(path.join(FILES_DIR, imageName));
          const nodejs_wstream = fs.createWriteStream(file_path);
          const web_rstream = image.stream();
          const nodejs_rstream = Readable.fromWeb(web_rstream);
          await pipeline(nodejs_rstream, nodejs_wstream).catch(() => {
            setFlash(
              {
                type: "error",
                message: "Failed to upload gallery image",
              },
              cookies,
            );
            return fail(500);
          });
          return imageName;
        }),
      );

      const slug =
        title?.at(0).toLowerCase() + title.slice(1).replace(/\s+/g, "-");
      const altText = title + " Gallery Image";

      const [projectId] = await db
        .insert(project)
        .values({
          title,
          slug,
          shortDescription,
          description,
          category,
          featured: imageName,
        })
        .$returningId();

      await db.insert(projectGallery).values(
        galleryImages.map((url, index) => ({
          projectId: projectId.id,
          url,
          altText,
          sortOrder: index + 1,
        })),
      );

      delete form.data.featured;
      delete form.data.gallery;

      setFlash(
        { type: "success", message: "Project Added Successfully" },
        cookies,
      );
      return {
        form,
      };
    } catch (err) {
      setFlash(
        { type: "error", message: `Unexpected Error: ${err.message}` },
        cookies,
      );

      return fail(400, {
        form,
      });
    }
  },

  addCategory: async ({ request, cookies }) => {
    const form = await superValidate(request, zod4(categorySchema));

    if (!form.valid) {
      // Stay on the same page and set a flash message
      setFlash(
        { type: "error", message: "Please check your form data." },
        cookies,
      );
      return fail(400, { form });
    }
    const { name, description } = form.data;
    try {
      await db.insert(projectCategory).values({
        name,
        description,
      });

      setFlash(
        { type: "success", message: "Project Category Added Successfully!" },
        cookies,
      );
    } catch (err) {
      console.error("Error Creating Category:", err);
      setFlash(
        { type: "error", message: `Unexpected Error: ${err?.message}` },
        cookies,
      );
      return fail(400);
    }
  },
};
