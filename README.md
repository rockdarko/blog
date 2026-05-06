# blog.darko.vision

Personal blog of [Rock Martel-Langlois](https://github.com/rockdarko). Built with [Astro](https://astro.build), deployed to GitHub Pages, served at [blog.darko.vision](https://blog.darko.vision).

## Local development

```sh
npm install
npm run dev    # http://localhost:4321
npm run build  # produces ./dist/
```

Requires Node ≥22.12.

## Drafts

Posts with `draft: true` in the frontmatter are visible in `npm run dev` but excluded from production builds, the RSS feed, and the sitemap.

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds via [`withastro/action`](https://github.com/withastro/action) and deploys to GitHub Pages.

## Credit

Theme based on the default Astro blog starter (which itself draws from [Bear Blog](https://github.com/HermanMartinus/bearblog/)).
