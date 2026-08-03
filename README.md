# Aqeel Ahmed Sheikh — Portfolio

A modern, animated, single-page portfolio built with React, Vite, Tailwind CSS and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  data/
    portfolioData.js   ← all editable content lives here (name, skills, tools,
                          experience, social links, Formspree endpoint)
  components/
    Navbar.jsx
    Hero.jsx            ← animated "typing terminal" hero
    About.jsx
    Skills.jsx           ← tech stack + tools/AI list
    Projects.jsx           ← project showcase cards
    Experience.jsx          ← internship timeline (commit-log style)
    Contact.jsx               ← Formspree contact form
    Footer.jsx
    SectionHeading.jsx        ← shared section header
    Lightbox.jsx               ← full-size image viewer (used for certificates)
public/
  certificates/          ← put your certificate images/PDFs here
  projects/               ← put your project screenshot images here
  App.jsx
  main.jsx
  index.css
```

Because content is centralized in `src/data/portfolioData.js`, most updates
(adding an internship, changing a skill, updating a link) only require
editing that one file — no need to touch the component code.

## Adding your 3 internships

Open `src/data/portfolioData.js` and edit the `experience` array. Each
object is one entry in the timeline:

```js
{
  role: 'Frontend Developer Intern',
  company: 'Company Name',
  period: 'Jun 2024 — Aug 2024',
  summary: 'What you worked on and the outcome.',
  stack: ['React', 'Tailwind CSS'],
}
```

Entries render in the order you list them (top of the array = most recent).

## Adding completion certificates

Each internship entry has a `certificates` array — add one object per
certificate (some internships can have two, or more):

1. Drop your certificate image (or a screenshot of a PDF) into
   `public/certificates/`, e.g. `public/certificates/company-1-completion.png`.
2. In `src/data/portfolioData.js`, add it to that internship's
   `certificates` array:

   ```js
   certificates: [
     { name: 'Completion Certificate', url: '/certificates/company-1-completion.png' },
     { name: 'Excellence Award', url: '/certificates/company-1-excellence.png' },
   ]
   ```

Certificates show up as clickable thumbnails under that internship and open
full-size in a lightbox when clicked. Leave the array empty (`[]`) to show
no certificates for that entry.

## Adding projects

Edit the `projects` array in `src/data/portfolioData.js`. Each project
supports an optional screenshot (`image`, put files in `public/projects/`),
a tech-stack tag list, and optional demo/GitHub links — leave any of those
blank to hide that part of the card.

## Setting up the contact form (Formspree)

The form on the Contact section posts to Formspree, which forwards
submissions straight to your inbox — no backend needed.

1. Go to [formspree.io](https://formspree.io) and create a free account
   using **aqeelrehmat713@gmail.com**.
2. Create a new form. Formspree will give you an endpoint that looks like
   `https://formspree.io/f/xxxxabcd`.
3. Open `src/data/portfolioData.js` and replace the placeholder:

   ```js
   export const formspreeEndpoint = 'https://formspree.io/f/xxxxabcd'
   ```

4. Formspree will send a confirmation email the first time you test the
   form — confirm it once, and every future submission lands in your inbox.

## Other things you'll likely want to personalize

- `profile.resumeUrl` — link to a hosted PDF of your CV.
- `profile.socials` — your real GitHub / LinkedIn URLs.
- Favicon and `index.html` meta tags.

## Deploying

This is a static Vite app, so it deploys anywhere static hosting is
supported — Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc. The
build output lands in `dist/` after `npm run build`.
