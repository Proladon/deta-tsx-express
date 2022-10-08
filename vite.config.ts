import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'

export default ({ mode }: { mode: any }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  process.env.MODE = mode

  return defineConfig({
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
    },
  })
}