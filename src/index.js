/* (c) 2016 Ari Porad (@ariporad) <http://ariporad.com>. License: ariporad.mit-license.org */
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux';
import Root from './components/Root';

ReactDOM.render(<Root store={store} />, document.getElementById('app'));
