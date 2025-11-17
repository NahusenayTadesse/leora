import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters"),
  
  phone: z
    .string()
    .regex(/^\+?[0-9\s\-()]{7,20}$/, "Invalid phone number format"),
  
  email: z
    .email("Invalid email address"),
  
  company: z
    .string()
    .max(150, "Company name must be under 150 characters")
    .optional(),
   service: z
    .string()
    .optional(),
   
  message: z
    .string()
    .min(5, "Message must be at least 5 characters")
    .max(2000, "Message must be under 2000 characters")
    .optional(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
