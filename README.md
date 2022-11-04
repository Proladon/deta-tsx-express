<h1 align="center">Deta Tsx Express Template</h1>
<p align="center">Deta micros template with typescript + tsx + express + tsup template</p>

- [Quickstart](#quickstart)
- [Config path alias](#config-path-alias)
- [FAQ](#faq)

## Features
- 🔥 Path alias
- 🔥 Watch mode (like nodemon)
- 🔥 Simple config
- 🔥 ESNext syntax
- 🔥 Fast and minify!
    - minify build (default)
    - treeshake (default)


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
4. preview prod
```
$ yarn preview
```

## Config path alias
Default path alias is `@` target to the `src` folder.  
If you wanna change it or add new alias, just modify `tsconfig` paths:

tsconfig.ts
```json
"compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*":["./src/*"]
    },
}
```

## FAQ
- ### Why build output is a single file ?
If you want output to keep origin structure, just go `tsup.config.ts` and change the `entry` property to:
```
entry: ['src/**/*.ts']
```
