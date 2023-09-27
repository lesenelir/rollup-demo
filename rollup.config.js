// pnpm rollup --config / pnpm rollup -c
// pnpm rollup --config --watch / pnpm rollup -c -w
// pnpm rollup --config rollup.dev.config.js / pnpm rollup -c rollup.prod.config.js

import json from 'rollup-plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'

export default {
  // 多入口打包可以实现，代码分割，公共代码提取
  input: ["src/index.ts", "src/index2.ts"],
  output: [
    {
      dir: "dist",
      format: "esm",
      sourcemap: true
    },
    {
      dir: "dist/min",
      format: "esm",
      sourcemap: true,
      plugins: [terser()]
    }
  ],
  plugins: [typescript(), commonjs(), json(), resolve()]
}
