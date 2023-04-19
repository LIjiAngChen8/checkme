import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const config = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/checkme.js',
      format: 'cjs',
    },
    {
      file: 'dist/checkme.min.js',
      format: 'cjs',
      plugins: [terser()],
    },
    {
      file: 'dist/checkme.esm.js',
      format: 'es',
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript(),
  ],
};

export default config;
