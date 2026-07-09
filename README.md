# Yafiet Araya — Full Stack Java Developer Portfolio

Full Stack Java Developer with 6+ years of experience building high-performing backend and full-stack applications. This React + Vite portfolio showcases my expertise in Java, Spring Boot, cloud-native systems (GCP & AWS), and modern web technologies, with a light/dark theme toggle and GitHub Pages deployment.

**Skills:** Java 17+, Spring Boot, React, JavaScript, Python, PostgreSQL, MongoDB, AWS, GCP, Docker, Kubernetes, Jenkins, Kafka, OAuth, JWT

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Editing content

All portfolio content lives in `src/data.js` — edit that file to customize:
- **Profile info:** name, role, focus, email, phone, social links (LinkedIn, GitHub, Instagram)
- **Experience:** roles, companies, descriptions, and dates
- **Skills:** organized by category (languages, frameworks & web, cloud & devops, databases)
- **Education:** degrees, schools, and dates
- **Certifications:** credentials and completion dates

To update your CV, replace `public/cv.pdf` with your own file (keep the same
filename, or update the `href="cv.pdf"` in `src/components/Hero.jsx`).

## Deploying to GitHub Pages

**1. Set the base path** in `vite.config.js` to match your repo name:

```js
base: '/your-repo-name/'
```

For a user/org page (`https://<username>.github.io/`) or custom domain, set `base: '/'` instead.

**2. Push to GitHub**, then choose one of:

### Option A — GitHub Actions (recommended, auto-deploys on every push)
This repo already includes `.github/workflows/deploy.yml`. After pushing to
`main`:
1. Go to your repo → **Settings → Pages**
2. Under **Build and deployment → Source**, choose **GitHub Actions**
3. Push to `main` — the workflow builds and deploys automatically

### Option B — Manual deploy with `gh-pages`
```bash
npm run build
npm run deploy
```
This pushes the `dist/` folder to a `gh-pages` branch. Then in **Settings →
Pages**, set the source to the `gh-pages` branch.

Your site will be live at `https://<username>.github.io/<repo-name>/`.

## Connect & Contact

Your social links (email, LinkedIn, GitHub, Instagram) and phone number are displayed in the footer. Update these in `src/data.js` under the `profile` object.

## Adding visitor analytics

Optional — to track visitors, add Google Analytics, GoatCounter, or similar. The tracking snippet goes in `index.html` (script tag) or as a component in `src/App.jsx`.
