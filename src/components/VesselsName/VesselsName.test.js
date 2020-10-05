import React from 'react';
import ReactDOM from 'react-dom';
import VesselsName from './VesselsName';

describe('VesselsName Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< VesselsName />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
