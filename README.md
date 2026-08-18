# My-New_Portfolio

Personal portfolio for **Milad Shirvan** — Frontend developer, Malmö, Sweden.
Built with plain HTML, modern CSS and vanilla JavaScript. No build step, no dependencies.

Swiss / brutalist editorial direction: heavy Archivo grotesque type, a concrete-bone
paper background, near-black ink, and an orange accent (#EF6905). Includes a light/dark theme,
a rotating "skate wheel" seal, a marquee ticker, and project rows with a cursor-following
image preview.

## Structure

```
index.html      Markup and content
style.css       All styling + both themes (clamp-based, 2 breakpoints)
script.js       Theme toggle, mobile menu, scroll reveals, project preview, copy email
images/         Project preview images
CV.pdf          Your CV (add this yourself)
```

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server
```

## Customize

- **Project images** — replace `images/project-1.png` and `images/project-2.png` with real
  screenshots (any ratio, they're cropped to 4:3). Filenames are set via `data-img` on each
  `.project` in `index.html`.
- **CV** — drop your `CV.pdf` in the root (the hero button links to it).
- **Accent color** — change `--accent` in `:root` inside `style.css`.
- **Content** — projects, skills, experience and contact details all live in `index.html`.

## Deploy

Works on any static host. For Vercel: import the repo and deploy — no configuration needed.
