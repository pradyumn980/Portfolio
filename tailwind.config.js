/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#020617',
        surface: '#0F172A',
        surfaceSecondary: '#1E293B',
        primaryAccent: '#3B82F6',
        secondaryAccent: '#06B6D4',
        highlightAccent: '#8B5CF6',
        successColor: '#22C55E',
        textColorPrimary: '#F8FAFC',
        textColorSecondary: '#CBD5E1',
        borderColor: '#334155',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s infinite ease-in-out',
        'float-slow': 'float-slow 8s infinite ease-in-out',
        'float-medium': 'float-medium 6s infinite ease-in-out',
        'float-fast': 'float-fast 4s infinite ease-in-out',
        'gradient-x': 'gradient-x 15s ease infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(3deg)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-3deg)' },
        },
        'float-fast': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-6px) rotate(1deg)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      boxShadow: {
        'neon-blue': '0 0 15px rgba(59, 130, 246, 0.45)',
        'neon-cyan': '0 0 15px rgba(6, 182, 212, 0.45)',
        'neon-purple': '0 0 15px rgba(139, 92, 246, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
