module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        128: '32rem',
        160: '40rem',
        192: '48rem',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
      borderWidth: ['responsive', 'last', 'hover', 'focus'],
      animation: ['responsive', 'motion-safe', 'motion-reduce'],
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
      rotate: ['responsive', 'hover', 'focus', 'group-hover'],
      textDecoration: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    },
  },
  plugins: [],
}
