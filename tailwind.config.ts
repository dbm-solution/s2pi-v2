import type { Config } from "tailwindcss";

// all in fixtures is set to tailwind v3 as interims solutions

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/content/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// S2PI Custom Colors
				's2pi': {
					// Primary Colors
					'cocao-brown': 'var(--s2pi-cocao-brown)',
					'keppel': 'var(--s2pi-keppel)', 
					'turkey-red': 'var(--s2pi-turkey-red)',
					'licorice-black': 'var(--s2pi-licorice-black)',
					'gray': 'var(--s2pi-gray)',
					'silver': 'var(--s2pi-silver)',
					'lapis-blue': 'var(--s2pi-lapis-blue)',
					'blue-dark-card': 'var(--s2pi-blue-dark-card)',
					'white-seasalt': 'var(--s2pi-white-seasalt)',
					// Brand Colors
					'red': 'var(--s2pi-red)',
					'red-hover': 'var(--s2pi-red-hover)',
					'red-dark': 'var(--s2pi-red-dark)',
					'blue': 'var(--s2pi-blue)',
					'blue-dark': 'var(--s2pi-blue-dark)',
					'blue-600': 'var(--s2pi-blue)',
					'turquoise': 'var(--s2pi-turquoise)',
					// Secondary Colors
					'light-blue': 'var(--s2pi-light-blue)',
					'green': 'var(--s2pi-green)',
					'green-light': 'var(--s2pi-green-light)',
					'green-accent': 'var(--s2pi-green-accent)',
					'green-400': 'var(--s2pi-green)',
					'orange': 'var(--s2pi-orange)',
					'pink': 'var(--s2pi-pink)',
					'purple': 'var(--s2pi-purple)',
					// Text Colors
					'text': {
						'primary': 'var(--s2pi-text-primary)',
						'dark': 'var(--s2pi-text-dark)',
						'light': 'var(--s2pi-text-light)',
						'gray': 'var(--s2pi-text-gray)',
						'muted': 'var(--s2pi-text-muted)',
						'white': 'var(--s2pi-text-white)',
						'black': 'var(--s2pi-text-black)',
						'heading': 'var(--s2pi-text-dark)'
					},
					// Background Colors
					'background': {
						'body': 'var(--s2pi-background-body)',
						'white': 'var(--s2pi-background-white)',
						'dark': 'var(--s2pi-background-dark)',
						'gray': 'var(--s2pi-background-gray)',
						'light': 'var(--s2pi-background-light)'
					}
				}
			},
			fontFamily: {
				'sans': ['var(--font-roboto)', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
				'display': ['var(--font-oswald)', 'Oswald', 'sans-serif'],
				'serif': ['var(--font-prata)', 'Prata', 'serif'],
				'poppins': ['var(--font-poppins)', 'Poppins', 'sans-serif'],
				'open-sans': ['var(--font-open-sans)', 'Open Sans', 'sans-serif']
			},
			boxShadow: {
				's2pi': '4px 0px 17px -4px rgba(0,0,0,0.49)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
