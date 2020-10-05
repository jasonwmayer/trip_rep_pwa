// This is just a sample script. Paste your real code (javascript or HTML) here.
import React, {Component} from 'react';
import Alerts from "../../Alerts";
import {
  InputLabel, 
  Button, 
  Divider
} from '@material-ui/core';
import VesselsName from '../../VesselsName';
import VesselHull from '../../VesselHull';
import VesselPermit from '../../VesselPermit';
import VesselOperator from '../../VesselOperator';

import "./TripForm2.scss";




class TripForm2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
          name: "",
          value: "",
          operatorsAndPermits: "",
          permits: "",
          permit: null,
          hull: null,
          operator: null,
          vessel_name: null,
          showVesselNameField: true,
          showVesselOperatorField: true,
          anchorEl: null,
          error: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.getOperators = this.getOperators.bind(this);
        this.getPermits = this.getPermits.bind(this);
        this.handlePermitChange = this.handlePermitChange.bind(this);
        this.handleVesselNameChange = this.handleVesselNameChange.bind(this);
        this.getShowVesselOperatorField = this.getShowVesselOperatorField.bind(this);
        this.getVesselNameField = this.getVesselNameField.bind(this);
    }

getOperators = (props) => {
  let rawValidations = localStorage.getItem('validations');
  let validations = JSON.parse(rawValidations);
    if (validations && validations.hasOwnProperty('operator')){
      return validations.operator;
    }
    return null;
  };
  
 getPermits = (props) => {
      let rawValidations = localStorage.getItem('validations');
      let validations = JSON.parse(rawValidations);
        if (validations && validations.hasOwnProperty('permit')){
          return validations.permit;
        }
        return null;
      };
  

    getVesselNameField(newPermits) {
      let showVesselNameField = true;
      const showVesselName = [];
      if (newPermits && !showVesselName.includes(newPermits)) {
          showVesselNameField = false;
      }
      return showVesselNameField;
    }

    getShowVesselOperatorField(newOperators) {
      let showVesselOperatorField= true;
      const showVesselOperator = "Private Recreational - Private use of a federally permitted vessel";
      if (newOperators && !showVesselOperator.includes(newOperators)) {
          showVesselOperatorField= false;
      }
      return  showVesselOperatorField;
    }
 
    handleSubmit(event) {
        event.preventDefault();
        const localStorageKey = "newTrip";
        let errors = [];
        if (this.state.operatorsAndPermits === "") {
            errors[errors.length] = 'No vessel name provided';
        }
        this.setState({
            error: errors
        });
        if (errors.length > 0) {
            console.log('TripForm_page_2_submit', errors);
            return;
        }
        localStorage.setItem(localStorageKey, this.state);
        console.log('TripForm_page2_next', this.state);
    }

    handlePermitChange(event) {
        let newPermit = event.target.value;
        const value = event.target.value;
        const name = event.target.name;
        let showVessleName = this.getVesselNameField(newPermit);
        let showVesselOperator = this.getVesselOperator(newPermit);
        this.setState({
            [name]: value,
            permit: newPermit,
            showVessleNameField: showVessleName,
            showVesselOperatorField: showVesselOperator
        });
        console.log('Permit Change', this.state);
    }

    handleOperatorChange(event) {
      let newOperator = event.target.value;
      const value = event.target.value;
      const name = event.target.name;
      let showVessleName = this.getVesselNameField(newOperator);
      let showVesselOperator = this.getVesselOperator(newOperator);
      this.setState({
          [name]: value,
          operator: newOperator,
          showVessleNameField: showVessleName,
          showVesselOperatorField: showVesselOperator
      });
      console.log('Operators Change', this.state);
  }


    handleVesselNameChange(event) { 
      const value = event.target.value;
      const name = event.target.name;
      this.setState({
          [name]: value
      });
  }


    render() {
    return (
    <div>
      <form 
        id="form-2"
        className="trip-form-container" 
        onSubmit={this.handleSubmit}
      >
        {this.state.error.length > 0 &&
            this.state.error.map(
                function (value, index, array) {
                    return (
                      <Alerts
                        className="error-log"
                        severity="error"
                        alertMessage={value}
                        key={index}
                      />
                      )}
                    )
              }
              <InputLabel className="select-title">Select Vessel</InputLabel>
              <VesselsName
                onClick={this.props.nextStep}
                showVesselNameField={this.state.showVesselNameField} 
                permit={this.getPermits()}
                handleInputChange={this.handleVesselNameChange} 
                vessel_name={this.state.vessel_name} 
              />
              <VesselHull
                permit={this.getPermits()}
                onclick={this.props.nextStep} 
                handleInputChange={this.handleInputChange}
                vessel_hull={this.state.hull} 
              />
              <VesselPermit
                permit={this.getPermits()}
                handleInputChange={this.handleInputChange} 
                vessel_permit={this.state.permit} 
              /> 
              <VesselOperator
                showVesselOperatorField={this.state.showVesselOperatorField} 
                handleInputChange={this.handleOperatorChange} 
                operator={this.getOperators()}
              />   
            <Divider />
            <span className="bottom-nav-container">
            <Button
              type="submit" form="form2" value="Submit"
              variant="contained"
              color="primary"
              fullWidth
              className="form-input"
              size="large"
              onBlur={this.props.firstStep}
              onClick={this.handleSubmit}
            >
            Back
          </Button>
          <Button
            type="submit" 
            form="form-2" 
            value="Next"
            variant="contained"
            color="primary"
            fullWidth
            className="form-input"
            size="large"
            onBlur={this.props.nextStep}
            onClick={this.handleSubmit}
            >
            Next
          </Button>
          </span>
        <Divider />
      </form>
      </div>
    );
  }
}

export default TripForm2;
