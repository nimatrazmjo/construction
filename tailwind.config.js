/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    "scale": {
      "0": "0",
      "25": ".25",
      "50": ".5",
      "75": ".75",
      "80": ".8",
      "90": ".9",
      "95": ".95",
      "100": "1",
      "105": "1.05",
      "110": "1.1",
      "125": "1.25",
      "150": "1.5",
      "200": "2",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // add custom colors
      colors: {
        primary: {
          red:  '#d80000',
          gray: '#333333',
          gray_light: '#5c5c5c',
        }
      },
      backdropFilter: {
        none: 'none',
        blur: 'blur(20px)',
      }
    },
  },
  plugins: [],
}
