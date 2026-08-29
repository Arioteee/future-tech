import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
	plugins: [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()],

	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			// '@/components': path.resolve(__dirname, './src/components')
		},
	},

	server: {
		host: '0.0.0.0',
		port: 5173,
	},
})
