import {
          VESSEL_PERMIT_SUCCESS, 
          VESSEL_PERMIT_ERROR
       } from "../actions/actionTypes";

import { getClientId } from './rootReducer';

function getVesselPermit(){
    let clientId = getClientId();
    let vesselPermit = [];
    if(clientId) {
        let rawvesselPermit = localStorage.getItem(
            "vesselPermit_"
            + clientId
            );
        if (rawvesselPermit) {
            vesselPermit = JSON.parse(rawvesselPermit);
        }
    }
    return vesselPermit;
}

export default (state = {trips: getVesselPermit()}, action) => {
    switch (action.type) {
        case VESSEL_PERMIT_SUCCESS:
          console.log('vtrReducer_action', action);
          let clientId = getClientId();
            if(action.data.hasOwnProperty('DOC_LIST')
            ) {state.trips = action.data.DOC_LIST;
                if(clientId) {
                  localStorage.setItem(
                    "vesselPermit_" 
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
        case VESSEL_PERMIT_ERROR:
            state.trips = [];
            return {
                ...state, 
                error: action.error
            };
        default:
            return {...state}
    }
};
