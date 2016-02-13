/* (c) 2016 Ari Porad (@ariporad) <http://ariporad.com>. License: ariporad.mit-license.org */
/* eslint no-var: 0 prefer-template: 0 */
var confType = 'dev';

// TODO: CI, etc.

module.exports = require('./karma.conf.' + confType + '.js');
