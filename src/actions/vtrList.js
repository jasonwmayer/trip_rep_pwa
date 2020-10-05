import {
    VTR_LIST_ERROR,
    VTR_LIST_REQUEST,
    VTR_LIST_SUCCESS
} from "./actionTypes";

export const vtrListRequest = payload => {
    return {
        type: VTR_LIST_REQUEST,
        meta: payload
    };
};

export const vtrLoadSucces = ({ response }) =>{
    return{
        type: VTR_LIST_SUCCESS,
        data: response
    };
}

export const vtrLoadError = ({ error }) => {
    return {
        type: VTR_LIST_ERROR,
        error: error
    };
}



