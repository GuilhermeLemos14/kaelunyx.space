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
  site: "https://me.kaelunyx.space",
  integrations: [sitemap({
    filter: (page) => !page.includes("/credits")
  })]
});
