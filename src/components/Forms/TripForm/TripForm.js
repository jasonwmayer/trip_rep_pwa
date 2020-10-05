import React, {Component} from 'react';
import {Button, Divider, MenuItem, FormControl, Select, InputLabel } from '@material-ui/core';
import NrCrew from '../../NrCrew/NrCrew';
import NrAnglers from '../../NrAnglers/NrAnglers';
import Alerts from '../../Alerts';

import './TripForm.scss';

class TripForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tripType: "",
          number_of_crew: null,
          number_of_anglers: null,
          showNrCrewField: true,
          showNrAnglersField: true,
          error: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getShowCrewField = this.getShowCrewField.bind(this);
        this.getShowAnglerField = this.getShowAnglerField.bind(this);
    }

    getShowCrewField(newTripType) {
        let showNrCrew = true;
        const tripShowCrew = [1, 2, 3];
        if (newTripType && !tripShowCrew.includes(newTripType)) {
            showNrCrew = false;
        }
        return showNrCrew;
    }

    getShowAnglerField(newTripType) {
        let showNrAnglers = true;
        const tripShowAnglers = [2, 3, 6];
        if (newTripType && !tripShowAnglers.includes(newTripType)) {
            showNrAnglers = false;
        }
        return showNrAnglers;
    }

    handleSubmit(event) {
        event.preventDefault();
        const localStorageKey = "newTrip";
        let errors = [];

        if (this.state.tripType === "") {
            errors[errors.length] = 'No Trip type provided';
        }

        if (this.getShowCrewField(this.state.tripType) === true) {
            if (!this.state.number_of_crew) {
                errors[errors.length] = 'No number of Crew provided';
            } else if (Number(this.state.number_of_crew) < 1) {
                errors[errors.length] = 'Invalid number of Crew provided';
            }
        }
        if (this.getShowAnglerField(this.state.tripType) === true) {
            if (!this.state.number_of_anglers) {
                errors[errors.length] = 'No number of Anglers provided';
            } else if (Number(this.state.number_of_anglers) < 1) {
                errors[errors.length] = 'Invalid number of Anglers provided';
            }
        }
        this.setState({
            error: errors
        });
        if (errors.length > 0) {
            console.log('TripForm_page_1_submit', errors);
            return;
        }

        localStorage.setItem(localStorageKey, JSON.stringify(this.state));
        console.log('TripForm_page1_next', this.state);
    }

    handleChange(event) {
        let newTripType = event.target.value;
        let showNrCrew = this.getShowCrewField(newTripType);
        let showNrAnglers = this.getShowAnglerField(newTripType);
        this.setState({
            tripType: newTripType,
            showNrCrewField: showNrCrew,
            showNrAnglersField: showNrAnglers
        });
        console.log('TripTypeChange', this.state);
    }
    handleInputChange(Event) {
        const value = Event.target.value;
        const name = Event.target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
    return (
    <div>
      <form 
        id="form-1"
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
                    )
                  }
              )
          }
          <FormControl 
            variant="filled"  
            className="trip-type-dropdown"
          >
              <InputLabel id="trip-type-dropdown-label">
                  Trip Type
              </InputLabel>
              <Select
                  labelId="trip-type-dropdown-label"
                  id="trip-type-dropdown-filled"
                  data-testid='triptype-select'
                  value={this.state.tripType || ''}
                  onChange={this.handleChange}
                  displayEmpty
              >
                {this.props.tripTypes.map(
                    function(d, idx){
                        return <MenuItem 
                                key={idx} 
                                id={d.KEY} 
                                name={d.VALUE} 
                                value={d.KEY}
                                >
                                  {d.VALUE}
                                </MenuItem>
                      }
                  )}
              </Select>
          </FormControl>
          {this.state.showNrCrewField && (
             <NrCrew handleInputChange={this.handleInputChange} number_of_crew={this.state.number_of_crew}/>)
          }
          {this.state.showNrAnglersField && (
              <NrAnglers 
                handleInputChange={this.handleInputChange} 
                number_of_anglers={this.state.number_of_anglers}
              />
            )
          }
          <Divider/>
          <span className="button-container-next">
          <Button
              type="submit" 
              form="form-1" 
              value="Next"
              variant="contained"
              color="primary"
              fullWidth
              className="form-input"
              size="large"
              onClick={this.props.nextStep}
              onMouseOver={this.handleSubmit}
            >
              Next
            </Button>
          </span>
        </form>
      </div>
      
    );
  }
}

export default TripForm;
