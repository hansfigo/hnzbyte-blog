// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
// Define schema (similar to interface in TS) to make our data consistent
// Astro use Zod to make schema
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(), 
    seoImg : z.string().optional(),
    description: z.string(),
    publishDate: z.date(),
    authorContact: z.string().email(),
    draft : z.boolean().optional()
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
};