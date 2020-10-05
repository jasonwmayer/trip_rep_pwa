import {
    VTR_LIST_SUCCESS, VTR_LIST_ERROR, LOGOUT
} from "../actions/actionTypes";

import {getClientId } from './rootReducer';

function getVtrList(){
    let clientId = getClientId();
    let vtrList = [];
    if(clientId) {
        let rawVtrList = localStorage.getItem("vtrList_"+ clientId);
        if (rawVtrList) {
            vtrList = JSON.parse(rawVtrList);
        }
    }
    return vtrList;
}

export default (
    state = {
        trips: getVtrList()
    },
    action
) => {
    switch (action.type) {
        case VTR_LIST_SUCCESS:
            console.log('vtrReducer_action',action);
            let clientId = getClientId();
            if(action.data.hasOwnProperty('DOC_LIST')) {
                //TODO should we check if there is a difference in the data
                // before updating the state, or would that cost more
                // performance than updating the state?
                state.trips = action.data.DOC_LIST;
                if(clientId) {
                    localStorage.setItem("vtrList_"+clientId,
                     JSON.stringify(action.data.DOC_LIST));
                    console.info('vtrListReducer , we have doc list')
                }
            }else{
                console.log('ERROR_VTR_REDUCER', action.data);
            }
            return {...state, trips: state.trips};
        case VTR_LIST_ERROR:
            //I think to keep the list being displayed we don't change the
            // state of the trip list.
            //state.trips = [];
            return {...state, error: action.error};
        case LOGOUT:
            //When logging out reset the state so the state comes from the
            // user logged in
            state.trips = [];
            // falls through
        default:
            return {...state}
    }
};
