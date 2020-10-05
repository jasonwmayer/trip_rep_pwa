import {Divider} from "@material-ui/core";
import React , {Component} from "react";
import {connect} from "react-redux";
import { MenuItem, FormControl, TextField } from '@material-ui/core'; 
import Autocomplete from '@material-ui/lab/Autocomplete';
import mapStateToProps from "../../services/mapStateToProps";

import './VesselOperator.scss';

const validations = {};
const operator = {};

class VesselOperator extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      name: "",
      validations: validations,
      operator: operator,
      formValues: "" 
    };
    this.handleChange = this.handleChange.bind(this);
    this.defaultProps = this.defaultProps.bind(this);
    this.flatProps = this.flatProps.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
    defaultProps(operator) {
      this.setState({
    operator: operator,
    getOptionLabel: (operator) => operator.OPERATOR_KEY,
  });
  console.log(this.state.operator)
}
  
  flatProps(){
    this.props.operator.map(
      function(d, idx){
        return ( 
        <MenuItem 
          key={idx} 
          name={d.OPERATOR_KEY}
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
    ) 
    
  };


  handleChange(event) {
    this.setState({
      validations: event.target.value,
      value: event.target.value,
      operator: event.target.value,
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
        <Divider/>
        <FormControl variant="filled" className="operator-dropdown">
        <Autocomplete
          // {...flatProps}
          id="auto-select"
          autoSelect
          renderInput={(params) => <TextField {...params} label="autoSelect" margin="normal" />}
        />
              {/* <Autocomplete  
              id="vessel-operator-input"
              value={JSON.stringify(this.state.operator) || ''}
              options=""
              getOptionLabel={(operator) => JSON.stringify(operator.OPERATOR_KEY)}
              style={{ width: 500 }}
               renderInput={(params) =>  <TextField {...params} label="Operator" variant="outlined">          
        {this.props.operator.map(
            function(d, idx){
              return ( 
              <MenuItem 
                key={idx} 
                name={d.OPERATOR_KEY}
                id={d.OPERATOR_KEY} 
                value={
                  d.NAME_FIRST 
                  + " " + 
                  d.NAME_MIDDLE 
                  + " "  + 
                  d.NAME_LAST
                 }
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
              </TextField>}
              >
        
          </Autocomplete>   */}
        </FormControl>
      </div>
    )
  }
}
  


export default connect(
mapStateToProps
)(VesselOperator);

