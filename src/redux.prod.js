/* (c) 2016 Ari Porad (@ariporad) <http://ariporad.com>. License: ariporad.mit-license.org */
import { createStore } from 'redux';
import reducer from './ducks';

const store = createStore(reducer);

export default store;
