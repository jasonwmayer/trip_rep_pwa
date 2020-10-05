
import {
    VESSEL_PERMIT_ERROR,
    VESSEL_PERMIT_REQUEST,
    VESSEL_PERMIT_SUCCESS
} from "./actionTypes";

export const vesselListRequest = ()=> {
    return {
        type: VESSEL_PERMIT_REQUEST
    }
};

export const vesselLoadSucces = ({ response }) =>{
    return{
        type: VESSEL_PERMIT_SUCCESS,
        data: response
    };
}

export const vesselLoadError = ({ error }) => {
    return {
        type: VESSEL_PERMIT_ERROR,
        error: error
    };
}



