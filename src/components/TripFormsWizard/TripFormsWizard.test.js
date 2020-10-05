import React from 'react';
import ReactDOM from 'react-dom';
import TripFormsWizard from './TripFormsWizard';

describe('TripFormsWizard Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< TripFormsWizard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
