import React, {Component} from 'react';
import { MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';
// import SearchBox from '../SearchBox';

import './VesselsList.scss';

  


const validations = {};

class VesselList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      name: "",
      validations: validations,
      permit: {},
      operator: {},
      formValues: "",
    
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  // componentDidMount() {
  //   const validations = this.state.validations;
  //   const localStorageKey = "validations";
  //   localStorage.getItem(localStorageKey, "validations")
  //   this.setState({validations: validations});
  //   const permit = this.state.permit;
  //   const operator = this.state.operator;
  //   console.log('Fetching Permit data from local storage....');
  //   this.setState(
  //     {
  //       validations: alidations,
  //       permit: validations.permit,
  //       operator: validations.operator,
  //   });
  //   console.log("permit data from response...");
  //   console.log(validations.operator);
  //   console.log(validations.permit);
  //   console.log("...data from response set to state....");
  //   console.log(this.state.operator) 
  //   console.log(this.state.operator) 
  //   console.log(this.state.permit)   
  //   return (permit, operator, validations);
    
  // }

  handleChange(event) {
    this.setState({
      validations: event.target.value,
      value: event.target.value,
    });
      console.log(this.state.value)
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
       [name]: value
    });
  }
  
  render() {
    return (
      <div>
        <FormControl variant="filled" className="trip-type-dropdown">
        <InputLabel id="trip-type-dropdown-label">
                 Operator
              </InputLabel>
              <Select
                  labelId="trip-type-dropdown-label"
                  id="trip-type-dropdown-filled"
                  data-testid='operator-select'
                  value={this.state.operator || ''}
                  onChange={this.handleChange}
                  displayEmpty
              >
         {this.props.operator.map(
            function(d, idx){
              return ( 
              <MenuItem 
                key={idx} 
                id={d.OPERATOR_KEY} 
                value={d.OPERATOR_KEY}
              >
              {
                d.OPERATOR_KEY 
                + " " 
              }
               {
                 d.NAME_FIRST 
                 + " " + 
                 d.NAME_MIDDLE 
                 + " "  + 
                 d.NAME_LAST
                }
              </MenuItem>    
              )}
          )} 
          </Select>  
        </FormControl>
      </div>
    )
  }
}

export default VesselList;
  