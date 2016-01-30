/* (c) 2016 Ari Porad (@ariporad) <http://ariporad.com>. License: ariporad.mit-license.org */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import store from './redux';
import Root from './components/Root';
import App from './components/App';
import About from './components/About';

const WrappedRoot = (props) => (
  <Root
    {...props}
    store={store}
    children={props.children || <App />} // We need this so that `App` can be the default/home page.
  />
);

ReactDOM.render((
  <Router history={hashHistory} >
    <Route path="/" component={WrappedRoot}>
      <Route path="about" component={About} />
    </Route>
  </Router>
), document.getElementById('app'));
