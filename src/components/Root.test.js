/* (c) 2016 Ari Porad (@ariporad) <http://ariporad.com>. License: ariporad.mit-license.org */
import React from 'react';
import assert from 'assert';
import { render } from 'enzyme';
import { connect } from 'react-redux';
import makeFakeStore from '../../test/_fakeStore';
import RootDev from './Root.dev';
import RootProd from './Root.prod';

describe('<Root /> (dev)', () => {
  it('renders successfully', () => {
    assert.doesNotThrow(() => render(
      <RootDev store={makeFakeStore()}><h1>Hi!</h1></RootDev>),
      'renders successfully'
    );
  });

  it('renders children', () => {
    const ret = render(<RootDev store={makeFakeStore()}><h1 className="foo">Hi!</h1></RootDev>);
    assert.equal(ret.find('h1.foo').length, 1, 'renders children');
  });

  it('renders children within a <Provider>', () => {
    let actualProps = null;
    const Component = connect(state => ({ redux: state }), dispatch => ({ dispatch }))(props => {
      actualProps = props;
      return <h1 className="foo">Hi!</h1>;
    });
    render(<RootDev store={makeFakeStore({ foo: 'bar' })}><Component /></RootDev>);
    assert.equal(typeof actualProps.dispatch, 'function', 'passes through dispatch');
    assert.equal(actualProps.redux.foo, 'bar', 'passes through state');
  });
});

describe('<Root /> (prod)', () => {
  it('renders successfully', () => {
    assert.doesNotThrow(() => render(
      <RootProd store={makeFakeStore()}><h1>Hi!</h1></RootProd>),
      'renders successfully'
    );
  });

  it('renders children', () => {
    const ret = render(<RootDev store={makeFakeStore()}><h1 className="foo">Hi!</h1></RootDev>);
    assert.equal(ret.find('h1.foo').length, 1, 'renders children');
  });

  it('renders children within a <Provider>', () => {
    let actualProps = null;
    const Component = connect(state => ({ redux: state }), dispatch => ({ dispatch }))(props => {
      actualProps = props;
      return <h1 className="foo">Hi!</h1>;
    });
    render(<RootDev store={makeFakeStore({ foo: 'bar' })}><Component /></RootDev>);
    assert.equal(typeof actualProps.dispatch, 'function', 'passes through dispatch');
    assert.equal(actualProps.redux.foo, 'bar', 'passes through state');
  });
});
