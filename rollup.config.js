import rollup from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'

export default {
    entry: 'app/main.js',
    dest: 'dist/build.js',
    sourceMap: true,
    format: 'iife',
    moduleName: 'esh-app.module.js',
    plugins: [
        nodeResolve({jsnext: true, module: true}),
        commonjs(),
        uglify()
    ]
}