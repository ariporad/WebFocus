/* (c) 2016 Ari Porad (@ariporad) <http://ariporad.com>. License: ariporad.mit-license.org */
if (__DEV__) {
  module.exports = require('./Root.dev');
} else {
  module.exports = require('./Root.prod');
}
