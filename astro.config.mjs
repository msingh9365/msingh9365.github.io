import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://msingh9365.github.io',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // The "now" page was renamed to "status"; keep old links working.
  redirects: { '/now/': '/status/' },
});
