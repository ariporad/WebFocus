/* (c) 2016 Ari Porad (@ariporad) <http://ariporad.com>. License: ariporad.mit-license.org */
import React from 'react';
import assert from 'assert';
import { render } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders successfully', () => {
    assert.doesNotThrow(() => render(<App />), 'renders successfully');
  });
});
