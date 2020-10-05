import React from 'react';
import ReactDOM from 'react-dom';
import SelectVessel from './SelectVessel';

describe('SelectVessel Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SelectVessel />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
