import {Divider} from "@material-ui/core";
import React , {Component} from "react";
import {connect} from "react-redux";
import { InputLabel } from '@material-ui/core';
import { MenuItem, Select } from '@material-ui/core';
import mapStateToProps from "../../services/mapStateToProps";

import './VesselPermit.scss';

const validations = {};

class VesselPermit extends Component {
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
  

  handleChange(event) {
    JSON.stringify(this.setState({
      validations: event.target.value,
      value: event.target.value,
    }));
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
        // if (this.props.showVesselPermitField) {
            return (
                <>
                <Divider/>
                <span className="vessel-input-container">
                <InputLabel className="trip-form-label" id="trip-form-label">
                Vessel Permit Number
                </InputLabel>
                  <div className="vessel-permit-container">
              <Select
                  labelId="vessel-permit-dropdown-label"
                  id="vessel-permit-dropdown-filled"
                  data-testid='vessel-permit-select'
                  value={this.state.permit || ''}
                  onChange={this.handleChange}
                  displayEmpty
              >
                      
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
              </Select>  
                  </div>
                </span>
                </>
            )
        // }else return null;
    }
}

               

export default connect(
mapStateToProps
)(VesselPermit);

