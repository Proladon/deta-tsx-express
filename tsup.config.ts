import { defineConfig } from 'tsup'

export default defineConfig({
  // entry: ['src/**/*.ts'], // keep all files structure
  entry: ['src/index.ts'], // single file
  sourcemap: false,
  clean: true,
  minify: true,
  treeshake: true,
  outDir: 'build',
})
