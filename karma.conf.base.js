// Karma configuration
// Generated on Fri Jan 29 2016 19:21:59 GMT-0800 (PST)
/* eslint no-var: 0 prefer-template: 0 */

module.exports = function getBaseConfig(config) {
  return {
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      'src/**/*.test.js',
      'src/*.test.js',
      'src/**/*.test.*.js',
      'src/*.test.*.js',
      'test/**/*.js',
      'test/*.js',
    ],

    // list of files to exclude
    exclude: [
      '**/_*.*',
      'test/fixture/**',
      'test/utils/**',
    ],

    webpackMiddleware: {
      quiet: true,
    },

    // For some reason, we have to explain that the webpack config file is for webpack.
    webpack: require('./webpack.config'),

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '{src,test}/**/*.js': ['webpack'],
      '{src,test}/*.js': ['webpack'],
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values:
    //   config.LOG_DISABLE || config.LOG_ERROR ||
    //   config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-chrome-launcher'),
    ],
  };
};
