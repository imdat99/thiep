import { cloudflare } from '@cloudflare/vite-plugin'
import { defineConfig } from 'vite'
import ssrPlugin from 'vite-ssr-components/plugin'
import unocss from 'unocss/vite'
export default defineConfig({
	plugins: [unocss(), cloudflare(), ssrPlugin()]
})
