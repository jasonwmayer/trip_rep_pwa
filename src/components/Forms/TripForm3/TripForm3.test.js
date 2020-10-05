import React from 'react';
import ReactDOM from 'react-dom';
import TripForm2 from './TripForm3';

describe('TripForm 2 Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< TripForm2 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
