/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import StartNewTrip from './StartNewTrip';
import { withRouter } from 'react-router';

describe('StartNewTrip Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    withRouter(ReactDOM.render(<StartNewTrip />, div));
    ReactDOM.unmountComponentAtNode(div);
  });
});
