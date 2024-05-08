/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*{.js,.css}"],
	theme: {
		extend: {
			colors: {
				accent: "#f23a2e",
				"accent-hover": "#eb1c0f",
				grey: "#8d8d8d",
				dark: "#445963",
				yellow: "#fef8e0",
				pink: "#ffcdd2",
				white: "#fefefe",
				"white-hover": "#f7f7f7",
				light: "#f8f9fa",
				"light-gray": "#dddddd",
				black: "#151515",
				green: "#95E346",
				"light-green": "#dbf2c3",
			},
			fontFamily: {
				light: ["MontserratLight", "serif"],
				regular: ["MontserratRegular", "serif"],
				medium: ["MontserratMedium", "serif"],
				semiBold: ["MontserratSemiBold", "serif"],
				bold: ["MontserratBold", "serif"],
			},
			transitionDuration: {
				DEFAULT: "0.25s",
			},
		},
	},
	plugins: [],
};

// z-100 header
// shadow-lg
// rounded-lg
// p-4
// mb-4
// flow
//sm:mx-0 mx-4 для xs
// py-10 padding у section
