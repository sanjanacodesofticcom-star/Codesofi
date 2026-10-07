module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0066ff",
          blueHover: "#0052e0",
          sky: "#00a4ff",
          neon: "#00e7ff",
          darkRoyal: "#000675",
          navy: "#04044a",
          dark: "#0f172a",
          charcoal: "#111827",
        },
      },
      fontFamily: {
        sans: ['var(--font-main)', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'sm': '8px',
        'md': '14px',
        'lg': '20px',
        'full': '9999px',
      },
      boxShadow: {
        'card': '0 2px 12px rgba(0,0,0,0.04)',
        'card-hover': '0 12px 32px -4px rgba(0,102,255,0.12)',
        'glow-blue': '0 8px 24px rgba(0,102,255,0.3)',
        'glow-cyan': '0 8px 24px rgba(0,231,255,0.35)',
      },
      maxWidth: {
        'site': '1440px',
      },
    },
  },
  plugins: [],
}
