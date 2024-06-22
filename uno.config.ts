// uno.config.ts
import { defineConfig, presetTypography, presetAttributify, presetWebFonts, presetUno, presetIcons } from 'unocss';

export default defineConfig({
  content: {
    pipeline: {
      include: [
        /\.([jt]sx?|html?)($|\?)/,
      ],
    },
  },
  theme: {
    fontFamily: {
      sans: '\'Nunito\', sans-serif',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Nunito:200,300,400,900'],
      },
    }),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/'
    }),
  ],
})