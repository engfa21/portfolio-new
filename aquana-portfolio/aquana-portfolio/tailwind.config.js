/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        head: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        bg:      '#09090E',
        bg2:     '#0F0F16',
        surface: '#14141D',
        accent:  '#A78BFA',
        accent2: '#F472B6',
        gold:    '#FBBF24',
        muted:   '#6B7280',
        light:   '#E8E8F0',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}
