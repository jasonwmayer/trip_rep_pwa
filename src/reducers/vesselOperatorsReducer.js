import {
          VESSEL_OPERATOR_SUCCESS, 
          VESSEL_OPERATOR_ERROR
       } from "../actions/actionTypes";

import { getClientId } from './rootReducer';

function getvesselOperator(){
    let clientId = getClientId();
    let vesselOperator = [];
    if(clientId) {
        let rawvesselOperator = localStorage.getItem(
            "vesselOperator_"
            + clientId
            );
        if (rawvesselOperator) {
            vesselOperator = JSON.parse(rawvesselOperator);
        }
    }
    return vesselOperator;
}

export default (state = {trips: getvesselOperator()}, action) => {
    switch (action.type) {
        case VESSEL_OPERATOR_SUCCESS:
          console.log('vessel_operator Reducer_action', action);
          let clientId = getClientId();
            if(action.data.hasOwnProperty('DOC_LIST')
            ) {state.trips = action.data.DOC_LIST;
                if(clientId) {
                  localStorage.setItem(
                    "vesselOperator_" 
                    + clientId, 
                    JSON.stringify(action.data.DOC_LIST)
                  );
                }
            } else {
                console.log(action.data);
            }
            return {
                    ...state, 
                    trips: state.trips
                  };
        case VESSEL_OPERATOR_ERROR:
            state.trips = [];
            return {
                ...state, 
                error: action.error
            };
        default:
            return {...state}
    }
};
