
import {
    VESSEL_OERATOR_ERROR,
    VESSEL_OERATOR_REQUEST,
    VESSEL_OERATOR_SUCCESS
} from "./actionTypes";

export const vesselListRequest = ()=> {
    return {
        type: VESSEL_OERATOR_REQUEST
    }
};

export const vesselLoadSucces = ({ response }) =>{
    return{
        type: VESSEL_OERATOR_SUCCESS,
        data: response
    };
}

export const vesselLoadError = ({ error }) => {
    return {
        type: VESSEL_OERATOR_ERROR,
        error: error
    };
}



