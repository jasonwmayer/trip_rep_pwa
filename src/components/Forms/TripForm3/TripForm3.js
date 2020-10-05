// This is just a sample script. Paste your real code (javascript or HTML) here.
import React, {Component} from 'react';
import {
  InputLabel, 
  Button, 
  Divider,
  // Popover
} from '@material-ui/core';




import "./TripForm3.scss";



class TripForm3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dateSalied: "",
          error: []
        };
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleVesselNameChange = this.handleVesselNameChange.bind(this);
    }

  //   getVesselNameField(newOperatorsAndPermits) {
  //     let showVesselNameField = true;
  //     const tripShowCrew = [];
  //     if (newOperatorsAndPermits && !tripShowCrew.includes(newOperatorsAndPermits)) {
  //         showVesselNameField = false;
  //     }
  //     return showVesselNameField;
  // }

  // getShowVesselOperatorField(newOperatorsAndPermits) {
  //     let showVesselOperatorField= true;
  //     const tripShowAnglers = [3, 6];
  //     if (newOperatorsAndPermits && !tripShowAnglers.includes(newOperatorsAndPermits)) {
  //         showVesselOperatorField= false;
  //     }
  //     return  showVesselOperatorField;
  // }

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
            console.log('TripForm_page_3_submit', errors);
            return;
        }
        localStorage.setItem(localStorageKey, this.state);
        console.log('TripForm_page3_next', this.state);
    }

  //   handleChange(event) {
  //       let newOperatorsAndPermits = event.target.value;
  //       let showVessleName = this.getVesselNameField(newOperatorsAndPermits);
  //       let showVesselOperator = this.getVesselOperator(newOperatorsAndPermits);
  //       this.setState({
  //           operatorsAndPermits: newOperatorsAndPermits,
  //           showVessleNameField: showVessleName,
  //           showVesselOperatorField: showVesselOperator
  //       });
  //       console.log('OperatorsAndPermitsChange', this.state);
  //   }
  //   handleInputChange(Event) {
  //       const value = Event.target.value;
  //       const name = Event.target.name;
  //       this.setState({
  //           [name]: value
  //       });
  //   }

  //   handleVesselNameChange(event) { 
  //     const value = event.target.value;
  //     const name = event.target.name;
  //     this.setState({
  //         [name]: value
  //     });
  // }

    render() {
    return (
    <div>
      <form 
        id="form-3"
        className="trip-form-container" 
        onSubmit={this.handleSubmit}
      >
        {/* {this.state.error.length > 0 &&
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
              } */}
              <InputLabel className="select-title">Date Sailed</InputLabel>
                
            <Divider />
            <span className="bottom-nav-container">
            <Button
              type="submit" form="form-3" value="Submit"
              variant="contained"
              color="primary"
              fullWidth
              className="form-input"
              size="large"
              onBlur={this.handleSubmit}
              onClick={this.props.firstStep}
              // onClick={this.handleSubmit}
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
              onBlur={this.handleSubmit}
              onClick={this.handleSubmit}
              // onClick={this.handleSubmit}
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

export default TripForm3;
