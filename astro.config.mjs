import svelte from '@astrojs/svelte';
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true,
  },
  integrations: [tailwind(), svelte()]
});