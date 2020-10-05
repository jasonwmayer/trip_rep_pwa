import {Divider} from "@material-ui/core";
import React , {Component} from "react";
import {connect} from "react-redux";
import mapStateToProps from "../../services/mapStateToProps";
import { MenuItem, Select } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';

import './VesselsName.scss';
const validations = {};
const permit = "";

class VesselsName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      operator: "",
      name: "",
      validations: validations,
      permit: permit,
      formValues: "",
    
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      permit: event.target.value[0],
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
        // if (this.props.showVesselsNameField) {
            return (
                <>
                <Divider/>
                <span className="vessel-input-container">
                <InputLabel className="trip-form-label" id="trip-form-label">
                  Vessel Name
                </InputLabel>
                  <div className="vessel-container">
                  {/* <TextField 

                    label="Vessel Name" 
                    variant="outlined" 
                    placeholder="Search by name or federal permit number"
                    className="number-of-input"
                    value={this.props.vessel_name}
                    name="vessel_name"
                    onChange={e => this.props.handleInputChange(e)}
                  /> */}
                <Select
                  labelId="vessel-name-dropdown-label"
                  id="vessel-name-dropdown-filled"
                  data-testid='vessel-name-select'
                  value={JSON.stringify(this.state.permit)|| ''}
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
                value={d.VES_NAME}
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
)(VesselsName);

