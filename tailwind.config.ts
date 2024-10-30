import { url } from 'inspector'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'playfair-display-semibold-italic': ["playfair-display-semibold-italic"],
      'dm-sans-medium': ["dm-sans-medium"],
      'playfair-display-regular': ["playfair-display-regular"],
      'dm-sans-regular': ["dm-sans-regular"],
      'dm-sans-thin': ["dm-sans-thin"],
      'dm-sans-bold': ["dm-sans-bold"],
    },
    extend: {
      backgroundImage: (theme) => ({
        'hero-image': "url('../public/images/hero.svg')",
        'aboutus-image': "url('../public/images/aboutus.svg')",
      }),
      colors: {
        'olive-green': '#DBDFD0',
        'burgundy': '#AD343E',
        'dark-white': '#F9F9F7',
        'dark-chalk': '#474747',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
export default config
