import React, {useState} from 'react';

import StepWizard from 'react-step-wizard';
import TripFormsNav from '../TripFormsNav';
import TripForm from '../Forms/TripForm';
import TripForm2 from '../Forms/TripForm2';
import TripForm3 from '../Forms/TripForm3';


import './TripFormsWizard.scss';



const TripFormsWizard = (props) => {
    const [state, updateState] = useState({
        form: {},
    });

const getTripTypes = (props) => {
  let rawValidations = localStorage.getItem('validations');
  let validations = JSON.parse(rawValidations);
  if (validations && validations.hasOwnProperty('tripType')){
      return validations.tripType;
  }
  return null;
};


const updateForm = (key, value) => {
    const { form } = state;
        form[key] = value;
        updateState({
            ...state,
            form,
        });
    };

    // Do something on step change
    const onStepChange = (stats) => {
        updateForm(stats)
        // console.log(stats);
    };
    // const { SW } = state;

    const setInstance = SW => updateState({
        ...state,
        SW,
    });



    return (
        <div className="wizard-container">
            <div className="jumbotron">
                <div className="row">
                    <div className="col-12 col-sm-6 offset-sm-3">
                        <StepWizard
                          className="trip-forms-wizard-container"
                          onStepChange={onStepChange}
                          isHashEnabled
                          nav={<TripFormsNav />}
                          instance={setInstance}
                        >
                            <TripForm 
                             tripTypes={getTripTypes()} 
                            />
                            <TripForm2 />
                            <TripForm3 />
                        </StepWizard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TripFormsWizard;