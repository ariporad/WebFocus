/* (c) 2016 Ari Porad (@ariporad) <http://ariporad.com>. License: ariporad.mit-license.org */
/* eslint no-var: 0 prefer-template: 0 */
var makeConf = require('./karma.conf.base');

module.exports = function karmaConfSingleRun(config) {
  config.set(makeConf(config)); // TODO: add more browsers.
};
