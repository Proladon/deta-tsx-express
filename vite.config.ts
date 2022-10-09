import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import { config } from 'dotenv'
config()

export default ({ mode }: { mode: any }) => {
  // Load app-level env vars to node-level env vars.
  // Because vite need use `import.meta.env` to access, but common js not support this syntax
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  process.env.MODE = mode

  return defineConfig({
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
    },
  })
}