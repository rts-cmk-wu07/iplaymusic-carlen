/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#ff1168",
					200: "#341931",
					300: "#111625",
				},
				gradient: {
					100: "#ee0979",
					200: "#ff6a00",
				},
				catColor: {
					100: "#a15793",
					200: "#00a1cb",
					300: "#0abebe",
					400: "#aa7634",
					500: "#5eb11c",
					600: "#5eb11c",
					700: "#f2bc06",
					800: "#f18d05",
					800: "#a54028",
				},
			},
		},
	},
	plugins: [],
};
