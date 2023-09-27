// pnpm rollup --config / pnpm rollup -c
// pnpm rollup --config --watch / pnpm rollup -c -w
// pnpm rollup --config rollup.dev.config.js / pnpm rollup -c rollup.prod.config.js

import json from 'rollup-plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "esm"
  },
  plugins: [commonjs(), json(), resolve()]
}
