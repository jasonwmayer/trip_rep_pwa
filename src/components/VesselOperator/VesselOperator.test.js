import React from 'react';
import ReactDOM from 'react-dom';
import VesselOperator from './VesselOperator';

describe('VesselOperator Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VesselOperator />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
