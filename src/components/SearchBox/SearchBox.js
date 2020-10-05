import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import './SearchBox.scss';
  
export default class SearchBox extends Component {
 
  render() {
    return (
      <div>
        <Autocomplete
          id="Vessel List"
          // options={}
          getOptionLabel={(option) => option.title}
          style={{ width: 700 }}
          renderInput={
            (params) => <TextField {...params} label="Vessel List" variant="outlined" />
          }
        />
      </div>
    )
  }
}
  