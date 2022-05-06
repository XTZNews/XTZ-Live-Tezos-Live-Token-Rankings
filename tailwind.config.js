module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#4e93fa',
        DEFAULT: '#2c7df7',
        dark: '#123262',
      },
      gray: {
        light: '#f0f0f0',
        DEFAULT: '#5f5b5c',
        dark: '#191414',
      },
      green: {
        light: '#27e4bb',
        DEFAULT: '#27e4bb',
      },
      orange: {
        DEFAULT: '#f7931a',
      },
      purple: {
        DEFAULT: '#9524ef',
      },
      red: {
        DEFAULT: '#f3566b',
      },
    },
    container: {
      padding: '1.5rem',
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.2rem',
      xl: '1.4rem',
      '2xl': '1.6rem',
      '3xl': '1.8rem',
      '4xl': '2rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {},
  },
  variants: {
    extend: {
      padding: ['hover'],
    },
    transitionProperty: ['responsive'],
  },
  plugins: [],
}

