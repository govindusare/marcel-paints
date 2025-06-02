// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(305.68deg, #1210CA -29.17%, #FE7CFC 196.59%)',
      },
      fontFamily: {
        tenor: ['"Tenor Sans"', 'sans-serif'],
      },
      letterSpacing: {
        'wider-80': '0.08em',
      },
    },
  },
  plugins: [],
};
