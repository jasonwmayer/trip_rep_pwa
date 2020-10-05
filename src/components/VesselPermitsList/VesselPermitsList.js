import React, {Component} from 'react';
import { MenuItem, FormControl} from '@material-ui/core';
import SearchBox from '../SearchBox';

import './VesselPermitsList.scss';

  

const validations = {};

class VesselsPermitsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      operator: {},
      name: "",
      validations: validations,
      permit: {},
      formValues: "",
    
    };
    this.handleChange = this.handleChange.bind(this);
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
  //       validations: validations,
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
          <span className="trip-type-container">
          <SearchBox />
         {this.props.permit.map(
            function(d, idx){
              return ( 
              <MenuItem 
                className="vessel-card-container"
                key={idx} 
                id={d.HULL_ID} 
                value={d.OPERATOR_KEY}
              >
              <span className="vessel-card-label-data">
              <span>Vessel Name</span>
               <span>
                 {d.VES_NAME}
               </span>
              </span>
              <span className="vessel-card-label-data">
                <span>Registration</span>
                  <span>
                    {d.HULL_ID}
                  </span>
              </span>
              <span className="vessel-card-label-data">
                 <span>Permit Number</span>
                   <span>
                    {d.PNUM}
                  </span>
              </span>
              </MenuItem> 
   
              )}
          )}   
          </span>
        </FormControl>
      </div>
    )
  }
}

export default VesselsPermitsList;
  