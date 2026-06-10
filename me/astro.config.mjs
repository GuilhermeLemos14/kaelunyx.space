// @ts-check
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://me.kaelunyx.space",
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"@": "/src",
				"@public": "/public",
				"/src": "/src",
				"/public": "/public",
			},
		},
	},
	integrations: [
		sitemap({
			filter: (page) => !page.includes("/credits"),
		}),
	],
});
