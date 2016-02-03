/* (c) 2016 Ari Porad (@ariporad) <http://ariporad.com>. License: ariporad.mit-license.org */
import { createStore } from 'redux';
import DevTools from '../src/components/DevTools';

export default (state = {}) => createStore(store => store, state, DevTools.instrument());
