import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['./src/index.ts'],
    format: ['cjs'],
    esbuildOptions(options, context) {
      Object.assign(options, {
        platform: 'browser',
        logLevel: 'error',
        legalComments: 'none',
        minifyWhitespace: false,
        minifyIdentifiers: false,
        minifySyntax: true,
      })
    },
    shims: false,
    
  },
  {
    entry: ['./src/index.ts'],
    format: ['esm'],
    dts: {
      entry: ['./src/index.ts'],
      resolve: true,
    },
    esbuildOptions(options, context) {
      Object.assign(options, {
        platform: 'browser',
        logLevel: 'error',
        legalComments: 'none',
        minifyWhitespace: false,
        minifyIdentifiers: false,
        minifySyntax: true,
      })
    },
    shims: false,
  },
]);
