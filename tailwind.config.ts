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
    },
    extend: {
      backgroundImage: (theme) => ({
        'hero-image': "url('../public/images/hero.svg')",
      }),
      colors: {
        'olive-green': '#DBDFD0',
        'burgundy': '#AD343E',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
export default config
