
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Saira',
    },
    container: {
      padding: {
        DEFAULT: '1.5rem',
        // lg: '3rem',
      },
    },
    screens: {
      ssm:'370px',
      mv: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#23262F',
        accent: '#286F6C',
        grey: {
          DEFAULT: '#919297',
          1: '#D9D9D9',
          2: '#E7E9EB',
          3: '#F5F5F5',
        },
        white: '#fff',
        pink: 'pink',
      },
      bounce: {
        '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
        '40%': { transform: 'translateY(-15px)' },
        '60%': { transform: 'translateY(-10px)' },
      },
      backgroundImage: {
        hero: 'url("/src/assets/img/Hero_image.jpeg")',
        newsletter: 'url("/src/assets/img/newsletter.png")',
      },
      dropShadow: {
        primary: '0px 4px 10px rgba(15, 27, 51, 0.05);',
      },
    },
  },
  plugins: [],
};
