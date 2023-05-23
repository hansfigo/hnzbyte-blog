/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						// color: '#333',
						// a: {
						// 	color: '#3182ce',
						// 	'&:hover': {
						// 		color: '#2c5282',
						// 	},
						// },
						code:{
							color : 'hsl(var(--p))'
						},
						pre: {
							'code.hljs': {
								'overflow-x': 'auto',
								'padding' : '20px',
								'&::-webkit-scrollbar': {
									'height': '4px',
								},
								'&::-webkit-scrollbar-thumb': {
									background: 'hsl(var(--p))',
								  }
							}
						}
					},
				},
			},
		}
	},
	plugins: [require("daisyui"), require('@tailwindcss/typography'), require('tailwind-scrollbar'),
	],
}
