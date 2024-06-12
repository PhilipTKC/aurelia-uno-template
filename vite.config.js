import { defineConfig } from 'vite';

import UnoCSS from 'unocss/vite';
import aurelia from '@aurelia/vite-plugin';

export default defineConfig({
  plugins: [
    UnoCSS(),
    aurelia({ pre: true, useDev: true })
  ],
  esbuild: {
    target: "es2022"
  },
});
