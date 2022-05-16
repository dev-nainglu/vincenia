module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		extend: {
			colors: {
				milk: '#DFC7AB',
				paleGray: '#3F3F3F',
			},
			animation: {
				fade: 'fadeIn 0.5s ease-in-out',
			},

			// that is actual animation
			keyframes: (theme) => ({
				fadeIn: {
					'0%': { color: theme('colors.transparent') },
					'100%': {},
				},
			}),
		},
	},
	plugins: [],
};
