import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['cjs', 'esm'],
  esbuildOptions(options) {
    Object.assign(options, {
      platform: 'browser',
      logLevel: 'error',
      legalComments: 'none',
      minifyWhitespace: false,
      minifyIdentifiers: false,
      minifySyntax: true,
    });
  },
  shims: false,
  dts: {
    entry: ['./src/index.ts'],
    resolve: true,
    banner: '/// <reference types="jest" />\n/// <reference types="@testing-library/jest-dom" />',
  },
});
