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

You can deploy the contents of the `dist` folder to platforms such as Vercel, Netlify, or GitHub Pages.

### Customization Notes

- Update project GitHub and live demo links in `src/components/Projects.jsx`.
- Replace the contact form `action` URL in `src/components/Contact.jsx` with your actual FormSubmit/Formspree/Web3Forms endpoint pointing to `chelsea.owusu@ashesi.edu.gh`.
- Replace the placeholder CV URL in `src/components/About.jsx` with a real PDF link.

