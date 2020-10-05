import React from 'react';
import ReactDOM from 'react-dom';
import VesselsList from './VesselsList';

describe('VesselsList Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VesselsList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
