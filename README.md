# Siddharth Goel Portfolio

Single-page portfolio website configured for GitHub Pages.

## Local preview

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Publish on GitHub Pages

1. Create a repo (example: `sidgoel7.github.io` for user site).
2. Push this folder contents to the repository root.
3. In GitHub: `Settings` -> `Pages` -> Source: `Deploy from a branch`.
4. Select `main` branch and `/ (root)` folder.
5. Your site will be live at:
   - `https://sidgoel7.github.io/` for user site repo
   - or `https://sidgoel7.github.io/<repo-name>/` for project site repo

## Files

- `index.html`: page structure and content
- `styles.css`: layout and styling
- `script.js`: dark/light mode + dynamic year
