import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        dblue: '#87a3ac',
        lblue: '#abcfda',
        dgreen: '#80a997',
        xdgreen: '#739888',
        lgreen: '#d9e3cf',
        'brand-yellow': '#ffc600'
      },
      maxWidth: {
        content: '800px',
        site: '1140px'
      }
    }
  }
} satisfies Config
