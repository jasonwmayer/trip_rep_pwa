/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import TripForm from './TripForm';

describe('TripForm Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TripForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

