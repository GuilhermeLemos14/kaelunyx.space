// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				'@': '/src',
				'/src': '/src'
			}
		}
	},
	site: 'https://kaelunyx.space',
	integrations: [
		sitemap({
			customSitemaps: [
				"https://me.kaelunyx.space/sitemap-index.xml"
			],
			filter: (page) => {
				return !page.includes("/communities/form") && !page.includes("/webrings");
			}
		})
	]
});