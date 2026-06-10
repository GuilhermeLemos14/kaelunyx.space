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
				"@public": "/public",
				"/src": "/src",
				"/public": "/public",
			},
		},
	},
	site: "https://kaelunyx.space",
	integrations: [
		sitemap({
			customSitemaps: ["https://me.kaelunyx.space/sitemap-index.xml"],
			filter: (page) => {
				return (
					!page.includes("/communities/form") &&
					!page.includes("/webrings")
				);
			},
		}),
	],
});
