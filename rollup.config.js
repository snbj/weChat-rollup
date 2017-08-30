import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

//import replace from 'rollup-plugin-replace';
//import uglify from 'rollup-plugin-uglify';

import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';

export default {
    entry: './combo.js',
    format: 'cjs',
    exports: 'named',
    dest: './dist/app.js',
    moduleName: 'app',
    plugins: [
        postcss({
            plugins: [cssnano()],
            extensions: [ '.css','.wxss' ]
        }),
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
        // replace({
        // }),
        //uglify()
    ]
};