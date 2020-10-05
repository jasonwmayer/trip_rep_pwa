import { LOGOUT , API_SUCCESS, API_ERROR } from "../actions/actionTypes";

export function getLoginResponse() {
    let rawLoginData = localStorage.getItem('loginResponse');
    let loginData = null;
    if (rawLoginData) {
        loginData  = JSON.parse(rawLoginData);
    }
    return loginData;
}

export function getClientId(){
    let loginResponse = getLoginResponse();
    let clientId;
    if(loginResponse && loginResponse.hasOwnProperty('client_id')){
        clientId = loginResponse.client_id;
    }
    return clientId;
}
function getUserAppStatus(){
    let loginResponse = getLoginResponse();
    let user_app_status;
    if(loginResponse && loginResponse.hasOwnProperty('user_app_status')){
        user_app_status = loginResponse.user_app_status;
    }
    return user_app_status;
}
function getToken(){
    let loginResponse = getLoginResponse();
    let token;
    if(loginResponse && loginResponse.hasOwnProperty('token')){
        token = loginResponse.token;
    }
    return token;
}
function getTokenExpiration(){
    let loginResponse = getLoginResponse();
    let token_expires;
    if(loginResponse && loginResponse.hasOwnProperty('token_expires')){
        token_expires = loginResponse.token_expires;
    }
    return token_expires;
}
export default (
    state = {
        isAuthUser: !!localStorage.getItem("user"),
        client_id: getClientId(),
        token: getToken(),
        token_expires:getTokenExpiration(),
        user_app_status: getUserAppStatus(),
        error: null
    },
    action
) => {
    switch (action.type) {
        case API_SUCCESS:
            localStorage.setItem("user", JSON.stringify(action.payload.user_full_name));
            state.isAuthUser = true;
            state.error = null;
            state.client_id = action.payload.client_id;
            state.user_app_status = action.payload.user_app_status;
            state.token = action.payload.token;
            state.token_expires = action.payload.token_expires;
            return {...state};
        case API_ERROR:
            state.isAuthUser = false;
            state.error = action.payload;
            return { ...state , error: action.payload};
        case LOGOUT:
            localStorage.removeItem("user");
            localStorage.removeItem("loginResponse");
            state.isAuthUser = false;
            state.error = null;
            state.client_id = null;
            state.user_app_status = null;
            state.token = null;
            state.token_expires = null;
            return { ...state};
        default:
            return state;
    }
};