# blog.darko.vision

Personal blog of [Rock Martel-Langlois](https://github.com/rockdarko). Built on the [Astro Micro](https://github.com/trevortylerlee/astro-micro) theme by Trevor Tyler Lee, deployed to GitHub Pages, served at [blog.darko.vision](https://blog.darko.vision).

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # produces ./dist/
```

Requires Node ≥22.

## Drafts

Posts and projects with `draft: true` in their frontmatter are excluded everywhere — homepage lists, archive pages, post URLs, RSS, and the sitemap.

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds via [`withastro/action`](https://github.com/withastro/action) and deploys to GitHub Pages.

## License

Theme files retain the original [MIT license](./LICENSE) from Astro Micro upstream. Post content is © Rock Martel-Langlois.
