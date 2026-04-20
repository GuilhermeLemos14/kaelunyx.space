// @ts-check
import { defineConfig } from 'astro/config';

import robotsTxt from 'astro-robots-txt';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '/src': '/src'
      }
    }
  },
  site: "https://me.kaelunyx.space",
  integrations: [robotsTxt(), sitemap({
    filter: (page) => !page.includes("/credits")
  })]
});
