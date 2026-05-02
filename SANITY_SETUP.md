# Sanity Setup — Blog CMS

This site uses [Sanity](https://www.sanity.io) as the CMS for the blog. The schema, studio config, and front-end code are already wired — you just need to create a Sanity project and connect it. Five-minute setup.

---

## 1. Create a Sanity account + project

1. Go to **https://www.sanity.io/manage** and log in (free account, GitHub or Google sign-in works).
2. Click **Create new project**.
   - **Name:** Sacred Tree Service
   - **Dataset:** `production` *(default — leave it)*
   - **Plan:** Free *(plenty for a blog)*
3. Once the project is created, you'll see a **Project ID** on the project page (e.g. `abc12def`). Copy it.

## 2. Add credentials to your local `.env`

In the repo root, create a file named `.env` (already gitignored):

```bash
PUBLIC_SANITY_PROJECT_ID=abc12def
PUBLIC_SANITY_DATASET=production
```

That's the only required config.

## 3. Allow your dev URL in Sanity's CORS settings

Sanity blocks browsers from fetching content unless your domain is whitelisted.

1. In Sanity Manage, go to **API → CORS origins → Add CORS origin**.
2. Add: `http://localhost:1234` — check **Allow credentials**.
3. When you deploy, add the production URL too (e.g. `https://sacredtreeservice.com`).

## 4. Run the site + open the Studio

```bash
npm run dev
```

Visit:
- **Public site:** http://localhost:1234
- **Studio (where you write posts):** http://localhost:1234/studio

The first time you open `/studio`, Sanity will ask you to log in (same account from step 1). After that, you can write posts, upload images, and publish — they'll appear on the public site automatically on the next load.

## 5. (Optional) Deploy a hosted Studio URL

Right now the Studio runs at `/studio` on whatever site is deployed. If you'd rather have a dedicated studio URL like `sacredtreeservice.sanity.studio`, run:

```bash
npx sanity@latest deploy
```

It'll prompt you for a hostname and deploy the studio for free.

---

## Content model

Three document types are defined out of the box:

- **Post** — title, slug, excerpt, hero image, body (rich text), author, categories, publish date, optional SEO overrides
- **Author** — name, photo, role, bio, "ISA Certified Arborist" toggle (shows the badge on bylines)
- **Category** — title, slug, description

Edit them in `sanity/schemas/` if you need new fields.

## How content shows up on the site

- **Blog index** (`/blog/`): lists all published posts, newest first
- **Single post** (`/blog/[slug]/`): full article with author byline + ISA badge if checked
- **Schema:** Each post gets `Article` JSON-LD automatically for SEO/AEO

## Troubleshooting

- **"Sanity isn't configured yet"** on `/blog/` — `.env` is missing or has `placeholder` values. Fix and restart `npm run dev`.
- **Posts don't appear** — check Sanity Manage that the post is actually **Published** (not Draft). Drafts won't show on the public site without a read token.
- **CORS error in browser console** — you forgot step 3.
