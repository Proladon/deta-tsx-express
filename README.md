# deta-vitexpress
Deta with typescript + vite + express template

- [Quickstart](#quickstart)
- [Config path alias](#config-path-alias)
- [FAQ](#faq)

## Features
- 🔥Path alias
- 🔥Clean config
- 🔥Mordern and Fast! (vite and esbuild)
    - minify code
    - treeshake
- ❔hmr (currently `vite-node` not implement yet 😣)

Deta currently is no too much starter template options to chose. In past, I always used [BetaHuhn/deta-express-starter](https://github.com/BetaHuhn/deta-express-starter), this starter template is very good, but some coding style and config dose not suit to me.

Me as a vue developer, I'm very used to use path alias. But implement typescript path alias always have problems after complied.

Finally, after tried `vite-node` and `tsup/esbuild` can resolves all the problems.

## Quickstart
1. install the deps
```
$ yarn
```
2. development start
```
$ yarn dev
```
3. build for prod
```
$ yarn build
```
4. serve prod
```
$ yarn serve
```

## Config path alias
Default path alias is `@` target to `src` folder.  
If you wanna change it, you need to config both in `tsconfig` and `vite.config` files.

tsconfig.ts
```json
"compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*":["./src/*"]
    },
}
```
vite.config.ts
```ts
resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
},
```

## FAQ
- ### Why build output is single file ?
If you want output to keep origin structure, just go `tsup.config.ts` and change the `entry` property.
