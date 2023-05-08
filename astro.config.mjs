import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import tailwind from "@astrojs/tailwind";
import { loadEnv } from 'vite';

import svelte from "@astrojs/svelte";
const env = loadEnv("", process.cwd(), 'STORYBLOK');


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      blogPost: 'storyblok/BlogPost',
    },
  })]
});