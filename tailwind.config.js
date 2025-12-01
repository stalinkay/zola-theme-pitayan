const path = require("path");
const Color = require("color");

const generateColorShades = (baseColorHex) => {
	const baseColor = Color(baseColorHex);
	return {
		50: baseColor.lighten(0.93).hex(),
		100: baseColor.lighten(0.7525).hex(),
		200: baseColor.lighten(0.575).hex(),
		300: baseColor.lighten(0.3975).hex(),
		400: baseColor.lighten(0.22).hex(),
		500: baseColor.hex(), // base
		600: baseColor.darken(0.22).hex(),
		700: baseColor.darken(0.3975).hex(),
		800: baseColor.darken(0.575).hex(),
		900: baseColor.darken(0.7525).hex(),
		950: baseColor.darken(0.93).hex(),
	};
};

const redBaseColor = "#E4002B";
const yellowBaseColor = "#FFCD00";
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	darkMode: "class",
	content: [
		path.resolve(__dirname, "assets/**/*.{ts,js,svg}"),
		"./templates/**/*.html",
	],
	theme: {
		extend: {
			colors: {
				red: generateColorShades(redBaseColor),
				yellow: generateColorShades(yellowBaseColor),
			},
			fontFamily: {
				sans: ['"Exo 2"', ...defaultTheme.fontFamily.sans],
				serif: ["Lora", "'Exo 2'", ...defaultTheme.fontFamily.serif],
				mono: ["'Exo 2'", ...defaultTheme.fontFamily.mono],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
