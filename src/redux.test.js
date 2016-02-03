/* (c) 2016 Ari Porad (@ariporad) <http://ariporad.com>. License: ariporad.mit-license.org */
import assert from 'assert';

const isStore = maybeStore => [
  'replaceReducer',
  'dispatch',
  'getState',
  'subscribe',
].reduce((probStore, prop) => probStore && typeof maybeStore[prop] === 'function');

describe('redux.dev', () => {
  it('exports a redux store', () => {
    const redux = require('./redux.dev');
    assert(isStore(redux.default));
  });
});

describe('redux.prod', () => {
  it('exports a redux store', () => {
    const redux = require('./redux.prod');
    assert(isStore(redux.default));
  });
});
