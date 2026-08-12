// @ts-check
import { defineConfig } from 'astro/config';

const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? '/').split('/');
const isProjectPages = Boolean(owner && repository && repository !== `${owner}.github.io`);

export default defineConfig({
  site: owner ? `https://${owner}.github.io` : 'https://example.com',
  base: process.env.GITHUB_ACTIONS === 'true' && isProjectPages ? `/${repository}` : '/',
  trailingSlash: 'always',
});
