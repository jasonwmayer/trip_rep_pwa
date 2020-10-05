import React from 'react';
import ReactDOM from 'react-dom';
import StepOf from './StepOf';

describe('StepOf Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< StepOf />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
