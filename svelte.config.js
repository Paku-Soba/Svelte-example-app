import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		prerender: {
			entries: [
				'/products/svelte-book',
				'/products/react-book',
				'/products/vue-book',
				'/products/angular-book'
			],
			origin: 'https://svelte-book-sample-app.vercel.app'
		}
	},
	preprocess: vitePreprocess()
};

export default config;
