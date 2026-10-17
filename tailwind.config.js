/** Tailwind settings for austin5.org. Run `npm run build` (or let the
 *  "Build styles" GitHub workflow do it) after changing index.html. */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Custom colors reflecting the Rainbow lessons
        // Shades chosen so white text on each passes WCAG AA (4.5:1)
        'rainbow-red': '#dc2626', // Love
        'rainbow-orange': '#c2410c', // Religion
        'rainbow-yellow': '#facc15', // Nature (bright; pair with dark text only)
        'rainbow-gold': '#a16207', // readable yellow for text on white
        'rainbow-green': '#047857', // Immortality
        'rainbow-blue': '#2563eb', // Fidelity
        'rainbow-indigo': '#4f46e5', // Patriotism
        'rainbow-violet': '#7c3aed', // Service
      },
    },
  },
  plugins: [],
};
