import React from 'react';
import ReactDOM from 'react-dom';
import VesselPermit from './VesselPermit';

describe('VesselPermit Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< VesselPermit />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
