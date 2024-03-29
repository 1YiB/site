import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {

	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),

		alias: {
				$lib: './src/routes/lib/',
				$style: './src/styles/'
		}
	},
};

export default config;

// path: https://kit.svelte.dev/docs/integrations#preprocessors
