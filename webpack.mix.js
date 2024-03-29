const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

let config = {
    output: {
        chunkFilename: 'js/[name].js?id=[chunkhash]'
    }
};

// mix.sass('resources/sass/app-build.scss', 'css');

mix.webpackConfig(config)
    .js('resources/js/app.js', 'js');

