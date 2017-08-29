import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
//import eslint from 'rollup-plugin-eslint';

// import replace from 'rollup-plugin-replace';
//import uglify from 'rollup-plugin-uglify';
//import { minify } from 'uglify-js';

//import postcss from 'rollup-plugin-postcss';
//import cssnano from 'cssnano';

export default {
    entry: './combo.js',
    format: 'cjs',
    exports: 'named',
    dest: './dist/app.js',
    moduleName: 'app',
    useStrict: false,
    // external: [],
    plugins: [
        /*postcss({
            plugins: [cssnano()],
            extensions: [ '.wxss' ]
        }),*/
        nodeResolve({
            jsnext: true,  // Default: false
            main: true
        }),
        commonjs(),
        //eslint({ exclude: [ './src/**', ] }),
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