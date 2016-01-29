/* (c) 2016 Ari Porad (@ariporad) <http://ariporad.com>. License: ariporad.mit-license.org */
import React from 'react';
import { Provider } from 'react-redux';
import storeShape from 'react-redux/lib/utils/storeShape';
import App from './App'; // TODO: Make this children instead of hard coded to support router.

const Root = ({ store }) => (
  <Provider store={store}>
     <div>
        <App />
     </div>
  </Provider>
);

Root.propTypes = {
  store: storeShape.isRequired,
};

export default Root;
