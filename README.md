# blog.darko.vision

Personal blog of [Rock Martel-Langlois](https://github.com/rockdarko). Built on the [AstroPaper](https://github.com/satnaing/astro-paper) theme by Sat Naing, dark-mode only, deployed to GitHub Pages, served at [blog.darko.vision](https://blog.darko.vision).

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # produces ./dist/
```

Requires Node ≥22.

## Authoring posts

Posts live in `src/data/blog/`. Frontmatter fields (see `src/content.config.ts` for the schema): `title`, `description`, `pubDatetime`, optional `modDatetime`, `tags`, `featured`, `draft`, `ogImage`, `canonicalURL`.

Posts with `draft: true` are excluded from the homepage, archive, RSS feed, sitemap, and search index.

## Theme tweaks applied

- Dark mode hardcoded (`<html data-theme="dark">` in `src/layouts/Layout.astro`); `SITE.lightAndDarkMode = false` removes the toggle button.
- Edit-post link disabled (`SITE.editPost.enabled = false`).
- Socials in `src/constants.ts`: GitHub + LinkedIn + Mail.
- Sample/docs posts removed; site identity in `src/config.ts`.

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds via [`withastro/action`](https://github.com/withastro/action) on Node 22 and deploys to GitHub Pages.

## License

Theme files retain the original [MIT license](./LICENSE) from AstroPaper upstream. Post content is © Rock Martel-Langlois.
