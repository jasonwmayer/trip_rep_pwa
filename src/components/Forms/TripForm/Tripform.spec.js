/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';

import TripForm from "./index";
import {Provider} from "react-redux";

import configureStore from "../../../configureStore";

describe('StartNewTrip Form page 1', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const store = configureStore();

    function getTripTypes(){
      return [{"VALUE":"Commercial", "KEY":1},{"VALUE":"Party", "KEY":2},{"VALUE":"Charter", "KEY":3},{"VALUE":"Private Recreational <br> Private use of a federally permitted vessel", "KEY":6}];
    }
    ReactDOM.render(<Provider store={store}>
          <TripForm tripTypes={getTripTypes()} />
        </Provider>,
        div
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
