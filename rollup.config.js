import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
const NODE_ENV = process.env.NODE_ENV;
console.log(" Rollup ENV ", NODE_ENV);

export default [
  {
    input: ["src/index.js"],
    output : {
      file: "dist/index.js", 
      format: "iife", 
      name:"main",
      sourcemap: true,
    },
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        preventAssignment: false
      }),
      nodeResolve({
        extensions: ['.js', '.jsx']
      }),
      commonjs({
        include: ['node_modules/**']
      }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
        presets: ["@babel/preset-react"]
      })
    ],
  }
]

    // {
    //   file: 'bundle.min.js',
    //   format: 'iife',
    //   name: 'version',
    //   plugins: [terser()]
    // }