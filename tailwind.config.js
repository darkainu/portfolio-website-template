module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#FFDD55',
        customOrange: '#EB7711',
        customGreen: '#00C6AE',
        customBlue: '#106EE8',
        customBlack: '#212121',
        customLightGray: '#F5F5F5',
        'customLightBlue': '#3B82F6', // This is equivalent to blue-500 in Tailwind
      },
      backgroundPosition: {
        'center-center': 'center center',
      },
      fontFamily: {
        sans: ['Montserrat', 'Poppins', 'sans-serif'],
        serif: ['Lora', 'serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
// tailwind.config.js
