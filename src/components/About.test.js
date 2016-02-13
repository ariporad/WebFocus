/* (c) 2016 Ari Porad (@ariporad) <http://ariporad.com>. License: ariporad.mit-license.org */
import React from 'react';
import assert from 'assert';
import { render } from 'enzyme';
import About from './About';

describe('<About />', () => {
  it('renders successfully', () => {
    assert.doesNotThrow(() => render(<About />), 'renders successfully');
  });
});
