// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // or your actual path
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(305.68deg, #1210CA -29.17%, #FE7CFC 196.59%)',
      },
    },
  },
  plugins: [],
};
