module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    './src/**/*.{vue, js}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem'
      }
    },
    extend: {
      fontFamily: {
        'sans': ['Kumbh Sans', 'sans-serif']
      },
      colors: {
        orange: {
          DEFAULT: 'hsl(26, 100%, 55%)',
          pale: ' hsl(25, 100%, 94%)'
        },
        'grayish-blue': {
          DEFAULT: 'hsl(220, 14%, 75%)',
          light: 'hsl(223, 64%, 98%)',
          dark: 'hsl(219, 9%, 45%)',
        },
        'vark-blue': 'hsl(220, 13%, 13%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}