/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'grid-pattern': "linear-gradient(to right, grey 1px, transparent 1px), linear-gradient(to bottom, grey 1px, transparent 1px);",
		 	},
      fontFamily: {
        mono: ["IBMPlexMono-Regular.ttf", "IBMPlexMono-Bold.ttf"],
      },
			boxShadow: {
        'lg': '0.3rem 0.3rem black',
      }
    },
	},
	plugins: [],
}
