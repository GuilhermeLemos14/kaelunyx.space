// @ts-check
import { defineConfig } from 'astro/config';

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
  integrations: [sitemap({
    filter: (page) => !page.includes("/credits")
  })]
});
