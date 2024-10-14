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
    },
    extend: {
      backgroundImage: (theme) => ({

      }),
      colors: {
        'olive-green': '#DBDFD0'
      }
    },
  },
  plugins: [],
}
export default config
