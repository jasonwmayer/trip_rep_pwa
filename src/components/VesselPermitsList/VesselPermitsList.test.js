import React from 'react';
import ReactDOM from 'react-dom';
import VesselPermitsList from './VesselPermitsList';

describe('VesselPermitsList Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< VesselPermitsList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
