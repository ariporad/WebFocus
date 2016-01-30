/* (c) 2016 Ari Porad (@ariporad) <http://ariporad.com>. License: ariporad.mit-license.org */
import React from 'react';
import { Provider } from 'react-redux';
import storeShape from 'react-redux/lib/utils/storeShape';

const Root = ({ store, children }) => (
  <Provider store={store}>
     <div>
       {children}
     </div>
  </Provider>
);

Root.propTypes = {
  store: storeShape.isRequired,
  children: React.PropTypes.node,
};

Root.defaultProps = {
  children: null,
};

export default Root;
