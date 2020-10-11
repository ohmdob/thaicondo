const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: {
      mode: 'all',
      content: ['./**/**/*.html', './**/**/*.svelte'],
      options: {
        whitelistPatterns: [/svelte-/],
      },
    },
    // purge: false,
    theme: {
      extend: {
        fontFamily: {
          sans: ['Prompt', ...defaultTheme.fontFamily.sans],
        },
        colors: {
          'primary-500': "#b027b0",
          'secondary-500': "#009688",
          'error-500': "#f44336",
          'success-500': "#4caf50",
          'alert-500': "#ff9800",
          'blue-500': "#2196f3",
          'dark-500': "#212121",
          'maroon-500': "#5a0b0e",
          'gold-500': "#ffd31e",
          'orange-500': "#ff790f",
        }
      },
    },
    variants: {},
    plugins: [],
  };