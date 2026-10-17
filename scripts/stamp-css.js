// After building styles.css, point index.html at styles.css?v=<content hash>.
// Browsers cache styles.css; a new version string forces them to fetch the
// copy that matches the page, so new layouts never show with old styles.
const fs = require('fs');
const crypto = require('crypto');

const hash = crypto.createHash('sha256').update(fs.readFileSync('styles.css')).digest('hex').slice(0, 10);
const html = fs.readFileSync('index.html', 'utf8');
const updated = html.replace(/href="styles\.css(\?v=[^"]*)?"/, `href="styles.css?v=${hash}"`);
if (updated === html && !html.includes(`styles.css?v=${hash}`)) {
  console.error('Could not find the styles.css link in index.html');
  process.exit(1);
}
fs.writeFileSync('index.html', updated);
console.log(`index.html -> styles.css?v=${hash}`);
