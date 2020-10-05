import React from 'react';
import { InputLabel, Box } from '@material-ui/core';

import './TitleBar.scss';


const TitleBar = (props) => (
  <div className="title-bar">
    <Box className="title-bar-text-box">
      <InputLabel
        className="trip-form-label"
      >
        {props.title}
      </InputLabel>
    </Box>
  </div>
);

export default TitleBar;
