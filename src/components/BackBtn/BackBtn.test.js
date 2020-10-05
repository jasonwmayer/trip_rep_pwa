import React from 'react';
import ReactDOM from 'react-dom';
import BackBtn from './BackBtn';

describe('BackBtn Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< BackBtn />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
