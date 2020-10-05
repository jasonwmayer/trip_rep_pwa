import React from 'react';
import ReactDOM from 'react-dom';
import VesselHull from './VesselHull';

describe('VesselHull Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< VesselHull />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
