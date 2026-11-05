# Muhammad Awais Kalyar - Portfolio

A responsive personal portfolio built with plain HTML, CSS and JavaScript (no build step), hosted on GitHub Pages.

Live: https://sohaib432002.github.io/awisklayar_proj/

## Sections

Home (hero with typing line and stats) · About & skills · Journey (experience and education) · Management approach ·
Awards & certifications with event photos · Contact form

## Features

- Dark and light themes (remembered between visits), responsive from phone to desktop
- Accessible: skip link, keyboard-friendly menu and lightbox, visible focus, reduced-motion support
- Scroll-reveal animations and active-section navigation (no hard-coded scroll positions)
- Contact form with validation and spam protection, delivered through Web3Forms
- Certificate and photo lightbox, CV download

## Structure

```
index.html            page
css/styles.css        styles and themes
javascript/main.js    behaviour (theme, menu, typing, lightbox, form)
assets/               optimized images
cv/                   downloadable CV
favicon.svg
```

## Contact form setup

Messages are sent with [Web3Forms](https://web3forms.com). The access key at the top of `javascript/main.js`
(`WEB3FORMS_ACCESS_KEY`) decides which inbox receives them: create a free key with your own email and replace it.

## Run locally

Open `index.html` through any static server, for example:

```bash
python -m http.server 8000
```
