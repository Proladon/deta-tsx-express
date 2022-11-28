<h1 align="center">Deta Tsx Express Template</h1>
<p align="center">Deta micros template with typescript + tsx + express + tsup template</p>

[![Deploy](https://button.deta.dev/1/svg)](https://go.deta.dev/deploy?repo=https://github.com/Proladon/deta-tsx-express)

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

Deta currently does not have that many starter template options to choose from. In past, I always used [BetaHuhn/deta-express-starter](https://github.com/BetaHuhn/deta-express-starter), this starter template is very good, but some coding style and config do not suit me.

As a vue developer, I'm very used to using path alias. But implementing typescript path alias always has problems after complie.

Finally, after tried `vite-node / tsx` and `tsup / esbuild` can resolves all the problems.  
But `vite-node` `hmr(watch-mode)` has some problem that can't be used, so I'm choosing to use tsx

## Quickstart

> notice: rename .env.example to .env

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
