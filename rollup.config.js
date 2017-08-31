import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default {
    entry: './combo.js',
    format: 'cjs',
    exports: 'named',
    dest: './dist/app.js',
    moduleName: 'app',
    plugins: [
        nodeResolve({
            jsnext: true,
            main: true
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            babelrc: false,
            presets: [
                ['es2015', {
                    'modules': false
                }]
            ],
            plugins: [
                "external-helpers",
            ]
        }),
        uglify({
            compress:{
                drop_debugger: true,
                drop_console: true
              }
        })
    ]
};