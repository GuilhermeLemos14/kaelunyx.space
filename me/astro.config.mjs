// @ts-check
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"@": "/src",
				"/src": "/src",
			},
		},
	},
	site: "https://me.kaelunyx.space",
	integrations: [
		sitemap({
			filter: (page) => !page.includes("/credits"),
		}),
	],
});
