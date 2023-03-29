/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts,css}'],
  theme: {
    extend: {
      colors: {
        'blue': '#3294F8',
        'base-title': '#E7EDF4',
        'base-subtitle': '#C4D4E3',
        'base-text': '#AFC2D4',
        'base-span': '#7B96B2',
        'base-label': '#3A536B',
        'base-border': '#1C2F41',
        'base-post': '#112131',
        'base-profile': '#0B1B2B',
        'base-background': '#071422',
        'base-input': '#040F1A'
      },
      width: {
        '17': '4.25rem',
        '37': '9.25rem'
      },
      maxWidth: {
        '4xl': '54rem'
      },
      height: {
        '54': '13.25rem',
        '72': '18.5rem'
      },
      backgroundImage: {
        'banner-image': "url('/src/assets/banner.svg')",
      },
      borderRadius: {
        'profile': '10px'
      },
      boxShadow: {
        'custom': '0px 2px 28px rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [],
}
