import React from 'react';
import ReactDOM from 'react-dom';
import Vessels from './Vessels';

describe('Vessels Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< Vessels />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
