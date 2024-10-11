import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';
import github from '@astrojs/github';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	integrations: [github()],
	// Add your base path if your repository is not your GitHub username
	base: '/personal-portfolio', // Replace 'your-repo-name' with your GitHub repository name
  });
  