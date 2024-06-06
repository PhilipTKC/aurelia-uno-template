import { defineConfig } from 'vite';

import UnoCSS from 'unocss/vite';

import aurelia from '@aurelia/vite-plugin';

import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    UnoCSS(),
    nodePolyfills(),
    aurelia({ pre: true, useDev: true })
  ],
  esbuild: {
    target: "es2022"
  },
});
