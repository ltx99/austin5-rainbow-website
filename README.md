# austin5-rainbow-website

Website for Austin Assembly No. 5, International Order of the Rainbow for Girls: [austin5.org](https://austin5.org), hosted on GitHub Pages.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole site |
| `styles.css` | **Generated**: the site's styles, built by Tailwind. Don't edit by hand |
| `src/input.css` | Source for `styles.css`, including the few custom styles (rainbow banner, card hover) |
| `tailwind.config.js` | Tailwind settings: the rainbow colors and the Inter font |
| `og-image.png` | Picture shown when someone shares a link to the site |
| `AA1042025-2017.pdf` | Membership application (linked from the Join section) |

## Changing the page

Edit `index.html` and push. The **Build styles** GitHub workflow rebuilds `styles.css` automatically and commits it, so new Tailwind classes start working on their own a minute or so later.

To build locally instead (needs Node.js):

```
npm install
npm run build
```

Commit the updated `styles.css` along with your change.

## Contact email

The contact address is intentionally not written anywhere in `index.html`. The script near the bottom assembles it only when a visitor touches or clicks an email link, which keeps it away from scrapers. To change the address, edit the two reversed pieces in that script.
