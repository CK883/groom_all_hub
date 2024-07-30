/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        main: {
          primary: '#0033A2',
          secondary: '#fcaf17',
          tertiary: '#2B375F',
          info: '#4f88ff',
          yellow: '#fcaf17',
          soft: '#98b9ff',
          excel: '#0d7239',
          success: '#7ac332',
          base: '#f9fbff',
          danger: '#f13131',
          'base-line-man': '#fbfbfb',
          blue: '#0085ff',
          scania: '#394156',
          link: '#0029ff',
          orange: '#F97300',
          lighten: '#e3ecff'
        },
        base: {
          white: '#FFFFFF',
          black: '#000000',
          'gray-lighten': '#f0f0f0',
          'gray-darken': '#A7A7A8',
          'gray-default': '#D9D7D5'
        }
      },
      fontSize: {
        '3xs': '8px',
        xxs: '10px',
        xs: '12px',
        sm: '14px',
        base: '16px',
        md: '18px',
        lg: '20px',
        xl: '22px'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
