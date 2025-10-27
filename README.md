# Clone your new repo
git clone https://github.com/YOUR-USERNAME/holborn-clothing-landing.git
cd holborn-clothing-landing

# Add the index.html file (save the landing page as index.html)
# Replace the README.md with the one I created above

# Commit and push
git add .
git commit -m "Initial commit: Coming Soon landing page"
git push origin main
```

3. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   # Holborn Clothing — Landing Page (Coming Soon)

   This repository holds a lightweight, dependency-free landing page used as a temporary site while the full e-commerce platform is being developed. The page is optimized for QR-code access from product tags and is designed for fast mobile performance and a premium dark theme.

   Features
   - Responsive design (mobile-first)
   - Animated, floating background blobs
   - Email capture (client-side UX; integrates with Formspree / backend if configured)
   - Social media links
   - QR-code optimized: read URL params (e.g., `?product=shirt-001`)
   - Dark premium theme using brand colors (red & blue)
   - No external dependencies — pure HTML, CSS and vanilla JavaScript

   Project structure
   ```
   holborn-clothing-landing/
   │
   ├── index.html          # Main landing page
   ├── README.md           # This documentation
   ├── LICENSE             # MIT License
   └── assets/
         └── images/
               └── logo.svg    # Placeholder logo
   ```

   Quick start

   Option 1 — Direct (local):
   1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/holborn-clothing-landing.git
   cd holborn-clothing-landing
   ```

   2. Open `index.html` in your browser.

   Option 2 — GitHub Pages:
   1. Fork the repository (or use your own copy).
   2. In GitHub: Settings → Pages → Source: `main` branch, folder `/ (root)`
   3. Save. Your site will be available at `https://YOUR-USERNAME.github.io/holborn-clothing-landing/`.

   Option 3 — Netlify / Vercel:
   - Drag the repo or point your deploy to this repository's `main` branch and root folder.

   Customization
   - Update the logo: replace `assets/images/logo.svg` with your brand asset. Use the same filename or update the `src` in `index.html`.
   - Colors: edit CSS variables at the top of `index.html` (`--red`, `--blue`, `--bg`).
   - Social links: update the anchor `href` values in `index.html`.
   - Email capture: to persist emails, change the form `action` to Formspree or your backend API.

   Example (Formspree):

   ```html
   <form action="https://formspree.io/f/your-form-id" method="POST">
      <input type="email" name="email" required>
      <button type="submit">Notify Me</button>
   </form>
   ```

   QR code integration & tracking
   - Generate a QR that points to your deployed URL with optional params, e.g. `https://your-site.com/?product=shirt-001`.
   - The landing page reads `product` from the URL and shows it in the top-right indicator.

   Security & privacy
   - This template does not collect emails unless you wire a form action. If you collect emails, follow local data protection and privacy regulations.

   Future work (phase roadmap)
   - Phase 2: Full e-commerce site (catalog, cart, checkout, payments)
   - Phase 3: Mobile apps, loyalty and AR features

   Support & contributing
   - This is a private company project; reach out to `contact@holbornclothing.com` for suggestions.
   +- For technical questions, create an issue in this repo or email `support@holbornclothing.com`.

   License
   This project is licensed under the MIT License — see the `LICENSE` file.

   Made with ❤️ by Holborn Clothing Development Team
