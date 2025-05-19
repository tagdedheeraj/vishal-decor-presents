
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				gold: {
					DEFAULT: '#FFA500', // Changed from #D4AF37 to orange
					light: '#FFD700', // Changed to yellow
					dark: '#FF8C00' // Changed to dark orange
				},
				navy: {
					DEFAULT: '#FFA500', // Changed to orange
					light: '#FFF8DC', // Changed to cream color
					dark: '#FF8C00' // Changed to dark orange
				},
				cream: {
					DEFAULT: '#FFF8DC',
					light: '#FFFAF0',
					dark: '#FFE4B5',
				},
				orange: {
					DEFAULT: '#FFA500',
					light: '#FFD700',
					dark: '#FF8C00',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"flip": {
					'0%': { transform: 'perspective(400px) rotateX(0)' },
					'100%': { transform: 'perspective(400px) rotateX(180deg)' },
				},
				"fade-in-down": {
					'0%': { opacity: '0', transform: 'translateY(-10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				"fade-in-up": {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"flip": "flip 1s ease-in-out infinite alternate",
				"fade-in-down": "fade-in-down 0.5s ease-out",
				"fade-in-up": "fade-in-up 0.5s ease-out",
			},
			fontFamily: {
				playfair: ['"Playfair Display"', 'serif'],
				poppins: ['Poppins', 'sans-serif']
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
