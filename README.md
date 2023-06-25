# @vue/apollo-ssr serializeJs issue "minimal" reproduction with Nuxt 3

## How to reproduce

Run:
```bash
npm install
npm run build
npm run start
```
...then visit: http://localhost:3000/

Result:
```bash
[nuxt] [request error] [unhandled] [500] serializeJs is not a function
  at serializeStates (./.output/server/chunks/app/server.mjs:35:11)
  at ./.output/server/chunks/app/server.mjs:661:32
  at ./.output/server/chunks/app/server.mjs:107:44
  at fn (./.output/server/chunks/app/server.mjs:179:44)
  at Object.callAsync (./.output/server/node_modules/unctx/dist/index.mjs:68:55)
  at ./.output/server/chunks/app/server.mjs:181:56
  at Object.runWithContext (./.output/server/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:3855:18)
  at callWithNuxt (./.output/server/chunks/app/server.mjs:181:24)
  at Object.runWithContext (./.output/server/chunks/app/server.mjs:76:29)
  at contextCaller (./.output/server/chunks/app/server.mjs:107:23)
```
