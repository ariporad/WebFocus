/* (c) 2016 Ari Porad (@ariporad) <http://ariporad.com>. License: ariporad.mit-license.org */
import { createStore, compose /* , applyMiddleware */ } from 'redux';
import { persistState } from 'redux-devtools';
import DevTools from './components/DevTools';

const finalCreateStore = compose(
  /* applyMiddleware(...) */
  DevTools.instrument(),
  // Taken from https://github.com/gaearon/redux-devtools
  persistState(() => {
    const matches = window.location.href.match(/[?&]debug=([^&]+)\b/);
    return (matches && matches.length > 0) ? matches[1] : null;
  })
)(createStore);

const store = finalCreateStore(require('./ducks').default);
export default store;

// HMR
if (module.hot) {
  module.hot.accept('./ducks', () => store.replaceReducer(require('./ducks').default));
}
