# Holborn Clothing — Landing Page (Coming Soon)
This repository contains a lightweight, dependency-free landing page used as a temporary customer touchpoint while the full e-commerce platform is under development. It's tuned for fast mobile access (QR tag scans), a premium dark theme, and easy customization.

Table of contents
 - Features
 - Project structure
 - Quick start (local + deploy)
 - Customization
 - Email capture integration
 - QR code tracking
 - Accessibility & performance notes
 - Contributing & support
 - License

Features
 - Mobile-first, responsive landing page
 - Animated, floating background elements and subtle particles
 - Email capture UI (client-side) — integrate with Formspree or your backend to persist emails
 - Social links (placeholder anchors) for brand profiles
 - QR-code optimized: reads `?product=` URL param and shows it in the UI
 - Dark premium theme using brand red & blue color variables
 - No build step — pure HTML/CSS/vanilla JS

Project structure
```
holborn-clothing-landing/
├─ index.html          # Main landing page (single-file app)
├─ README.md           # This file
├─ LICENSE             # MIT license
└─ assets/
    └─ images/
         ├─ logo.jpg      # Header / favicon (placeholder)
         └─ logo.svg      # SVG placeholder logo
```

Quick start

Option A — open locally
1. Clone the repo:

```powershell
git clone https://github.com/HOLBORN-CLOTHING-PVT-LTD/holborn-clothing-landing.git
cd holborn-clothing-landing
```

2. Open `index.html` directly in a browser, or run a small local server (recommended for mobile testing):

```powershell
# serve on http://localhost:8080
python -m http.server 8080
# then open http://localhost:8080 in your browser
```

Option B — GitHub Pages
1. Push your copy, then in the repository Settings → Pages set Source to branch `main` (or `dev`) and folder `/(root)`.
2. After a moment the site will be available at `https://<your-username>.github.io/holborn-clothing-landing/`.

Option C — Netlify / Vercel
Connect the repository and deploy the root folder. Use branch `main` or `dev` as preferred.

Customization
 - Replace the logo: update `assets/images/logo.jpg` or `assets/images/logo.svg` and ensure `index.html` points to the correct file.
 - Theme colors: edit CSS variables at the top of `index.html`:

```css
:root{--red:#d32f2f;--blue:#1565c0;--bg:#0a0a0a}
```

 - Social links: replace `href="#"` anchors in `index.html` with your real social URLs.
 - Favicon: `index.html` already references `assets/images/logo.jpg` as `rel="icon"` and `rel="apple-touch-icon"`. You can add PNG/SVG variants for better compatibility.

Email capture
 - The form in `index.html` currently provides client-side validation and a simulated success UX. To persist emails, wire the form to one of the following:
    - Formspree: set the form `action="https://formspree.io/f/your-form-id"` and `method="POST"`.
    - Your backend API: POST to an endpoint you control and store emails securely.

Example (Formspree):

```html
<form action="https://formspree.io/f/your-form-id" method="POST">
   <input type="email" name="email" required>
   <button type="submit">Notify Me</button>
</form>
```

QR code tracking
 - Generate QR codes that point to your deployed URL and include a `product` parameter to identify the scanned product, e.g.:

```
https://your-site.com/?product=shirt-001
```

The landing page reads that param and shows it in the top-right indicator for quick tracking.

Accessibility & performance notes
 - Reduced motion: animations are disabled for users with `prefers-reduced-motion` enabled.
 - Fonts: the page loads Inter via Google Fonts — if you want offline/fully self-hosted behavior for QR-tag usage, remove the external import and rely on system fonts.
 - The page is intentionally lightweight (single-file) for faster QR scan-to-load experience.

Contributing & support
 - This is a private company project. For suggestions or contributions, contact `contact@holbornclothing.com` or open an issue in this repo if appropriate.

License
This project is licensed under the MIT License — see the `LICENSE` file for details.

Made with ❤️ by Holborn Clothing Development Team

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
