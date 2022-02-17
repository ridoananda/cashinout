module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				'sm': '540px',
			},
			colors: {
				'dark': '#161621',
				'dark-border': '#2D2D3B',
				'dark-primary': '#1E1E2E',
				'white-primary': '#F8F8F8',
				'white-border': '#D6D6D6',
				'white-text': '#2A2A2A',
			},
			container: {
				center: true,
				padding: '1rem'
			},
			borderRadius: {
				'4xl': '2rem'
			}
		},
	},
	plugins: [],
}
