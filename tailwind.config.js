/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				rubikBlack: ["RubikBlack", "sans-serif"],
				rubikBold: ["RubikBold", "sans-serif"],
				dmSans: ["DMSans"],
			},
		},
		screens: {
			xs: { max: "440px" },
			rxs: { min: "440px" },
		},
	},
	plugins: [],
};
