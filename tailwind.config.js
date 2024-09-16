/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				// alert
				"success": "#3BCE89",
				"warning": "#FF950A",
				"danger": "#E90C1B",
				"info": "#2092E9",

				// gray
				"base-gray": "#676C6F",
				"medium-gray": "#BFC3C4",
				"light-gray": "#E9EBED",
				"super-light-gray": "#F4F5F6",

				// basic

				// pink
				"base-pink": "#F23D5E",
				"medium-pink": "#F67E94",
				"light-pink": "#FBBEC9",
				"super-light-pink": "#FCD8DF",

				// blue
				"base-blue": "#0D8BD8",
				"medium-blue": "#5EB2E5",
				"light-blue": "#AED8F2",
				"super-light-blue": "#CFE8F7",

				// orange
				"base-orange": "#F2801D",
				"medium-orange": "#F6AA68",
				"light-orange": "#FBD5B4",
				"super-light-orange": "#FCE6D2",

				// green
				"base-green": "#1E8C81",
				"medium-green": "#69B2AB",
				"light-green": "#B4D9D5",
				"super-light-green": "#D2E8E6"
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif']
			},
			fontSize: {
				'10xl': '10rem',
				'11xl': '12rem',
				'12xl': '14rem',
			},
		},
	},
	plugins: [],
}

