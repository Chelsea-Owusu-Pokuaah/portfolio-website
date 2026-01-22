## Chelsea Owusu – Portfolio Website

This is a modern, responsive portfolio website for **Chelsea Owusu**, an AI/ML Engineer & Intelligent Systems Developer based in Accra, Ghana. It showcases professional background, projects, skills, and contact information, built according to the project requirements in `REQUIREMENTS.md`, `CONTENT.md`, and `DESIGN.md`.

### Tech Stack

- **Framework**: React (with Vite-style setup)
- **Styling**: Tailwind CSS
- **Routing**: React Router

### Getting Started

1. Install Node.js (LTS) from the official website if you do not already have it.
2. In a terminal, change into this project directory:

```bash
cd path/to/portfolio_website
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

5. Open the URL printed in the terminal (typically `http://localhost:5173`) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

### Deploy to GitHub Pages

This project is configured for GitHub Pages deployment. You have two options:

#### Option 1: Automatic Deployment with GitHub Actions (Recommended)

1. **Enable GitHub Pages in your repository settings:**
   - Go to your GitHub repository → **Settings** → **Pages**
   - Under **Source**, select **"GitHub Actions"**
   - Save the settings

2. **Update the base path in `vite.config.mts`:**
   - If your repository is named `portfolio_website`, the current config should work
   - If your repository has a different name, update the `base` property:
     ```typescript
     base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
     ```

3. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

4. **Automatic deployment:**
   - GitHub Actions will automatically build and deploy your site
   - Check the **Actions** tab in your repository to see the deployment progress
   - Your site will be available at: `https://your-username.github.io/portfolio_website/`

#### Option 2: Manual Deployment with gh-pages

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Deploy:**
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages:**
   - Go to your GitHub repository → **Settings** → **Pages**
   - Under **Source**, select the **`gh-pages`** branch
   - Your site will be available at: `https://your-username.github.io/portfolio_website/`

#### Important Notes:

- **Repository name matters:** If your repository is not named `portfolio_website`, update the `base` path in `vite.config.mts` to match your repository name
- **Custom domain:** If you want to use a custom domain, add a `CNAME` file in the `public` folder
- **First deployment:** It may take a few minutes for GitHub Pages to process your first deployment

### Deploy to Other Platforms

You can also deploy the contents of the `dist` folder to platforms such as Vercel or Netlify.

### Customization Notes

- Update project GitHub and live demo links in `src/components/Projects.jsx`.
- Replace the contact form `action` URL in `src/components/Contact.jsx` with your actual FormSubmit/Formspree/Web3Forms endpoint pointing to `chelsea.owusu@ashesi.edu.gh`.
- Replace the placeholder CV URL in `src/components/About.jsx` with a real PDF link.

