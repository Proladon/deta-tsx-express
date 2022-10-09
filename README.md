# deta-vitexpress
Deta with typescript + vite + express template

Deta currently is no too much starter template options to chose. In past, I always used [BetaHuhn/deta-express-starter](https://github.com/BetaHuhn/deta-express-starter), this starter template is very good, but some coding style and config dose not suit to me.

me as a vue developer, I'm very used to use path alias. But implement typescript path alias always have problems after complied.

Some keys I want:
1. `hmr (hot module reload) in development`
2. can use path alias
3. paths alias no problems after complied

And finally, after tried `vite-node` and `tsup/esbuild` can resolves all the problems.

