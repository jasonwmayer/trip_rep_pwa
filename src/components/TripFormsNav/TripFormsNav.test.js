import React from 'react';
import ReactDOM from 'react-dom';
import TripFormsNav from './TripFormsNav';

describe('TripFormsNav Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< TripFormsNav />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
