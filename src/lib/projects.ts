import { z } from "zod/v4";

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 5MB limit

// Updated list to include common mobile camera/screenshot formats
export const ACCEPTED_FILE_TYPES = [
  "image/jpeg", // Common for both platforms
  "image/png", // Common for both platforms (and screenshots)
  "image/webp", // Common modern format (often Android screenshots/exports)
  "image/heic", // High Efficiency Image File (iOS default)
  "image/heif", // High Efficiency Image File (related to HEIC)
];

export const ProjectSchema = z.object({
  category: z.number("Category is Required").int().positive(),
  title: z.string("Title is required").max(200),
  shortDescription: z.string().max(400).nullable().optional(),
  description: z.string("Description is Required"),
  featured: z
    .instanceof(File, { message: "A file is required." })
    .refine((file) => file.size > 0, "File cannot be empty.")
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 10MB.`)
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      "Please upload a valid image (JPG, PNG, WebP, HEIC/HEIF).",
    ),
  gallery: z
    .instanceof(File, { message: "A file is required." })
    .refine((file) => file.size > 0, "File cannot be empty.")
    .refine((file) => file.size <= 100 * 1024 * 1024, "Max file size is 10MB.")
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      "Please upload a valid image (JPG, PNG, WebP, HEIC/HEIF).",
    )
    .array()
    .min(1, "At least one image is required.")
    .max(10, "You can upload up to 10 images."),
});

export const BlogSchema = z.object({
  title: z.string("Title is required").max(200),
  shortDescription: z
    .string("Short Description is required")
    .max(400)
    .nullable()
    .optional(),
  content: z.string("Content is Required"),

  featured: z
    .instanceof(File, { message: "A file is required." })
    .refine((file) => file.size > 0, "File cannot be empty.")
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 10MB.`)
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      "Please upload a valid image (JPG, PNG, WebP, HEIC/HEIF).",
    ),
});

export const ProjectCategorySchema = z.object({
  name: z.string().min(2).max(100),
  description: z.string().max(400).nullable().optional(),
});
