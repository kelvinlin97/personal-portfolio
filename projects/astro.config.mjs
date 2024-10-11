import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	outDir: 'dist',
	site: 'https://kelvinlin.github.io',
	integrations: [mdx(), sitemap()],
	base: 'personal-portfolio',
});
