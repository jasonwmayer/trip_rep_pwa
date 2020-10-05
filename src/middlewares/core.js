import axios from "axios";
import {
  API_REQUEST,
  VTR_LIST_REQUEST,
  LOAD_IVRS_REQUEST,
} from "../actions/actionTypes";
import { apiError, apiSuccess } from "../actions/api";
import { updateValidations } from "../actions/saveValidations";
import { baseServerUrl } from "../constants/default_request";
import { vtrLoadSucces, vtrLoadError } from "../actions/vtrList";
import { ivrLoadSuccess, ivrLoadError } from "../actions/ivrActions";

export const apiMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === API_REQUEST) {
    const {
      api_request_url,
      api_request_method,
      api_request_data,
    } = action.meta;
    console.log("core_data", api_request_data);
    console.log("core_method", api_request_method);
    console.log("core_url", api_request_url);

    axios({
      method: api_request_method,
      url: api_request_url,
      data: JSON.stringify(api_request_data),
    })
      .then((response) => {
        console.log("LoginResponse", response.data);
        //API responded Oke , but now we need to find out if user is
        // logged in
        if (!response.data.hasOwnProperty("Status")) {
          dispatch(apiError({ error: "Unknown status returned" }));
        }
        if (response.data.hasOwnProperty("Status")) {
          const responseStatus = response.data.Status.toUpperCase();
          const outStatus = ["LOGGED OUT", "ERROR"];
          const inStatus = ["LOGGED IN", "SUCCESS"];
          if (outStatus.includes(responseStatus)) {
            console.log("logged out");
            localStorage.removeItem("loginResponse");
            dispatch(apiError({ error: "Invalid credentials" }));
          }
          if (inStatus.includes(responseStatus)) {
            localStorage.setItem(
              "loginResponse",
              JSON.stringify(response.data)
            );
            dispatch(updateValidations({ response: response.data }));
            dispatch(apiSuccess({ response: response.data }));
          }
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(apiError({ error: error }));
      });
  }

  if (action.type === VTR_LIST_REQUEST) {
    let request_url = baseServerUrl + "/apps/fol/base_api/vtr_list";
    if (action.meta.test_user) {
      request_url.concat("/test", request_url);
    }
    axios({
      method: "post",
      url: request_url,
      data: JSON.stringify(action.meta),
    })
      .then((response) => {
        if (
          response.data.hasOwnProperty("STATUS") &&
          response.data.STATUS.toUpperCase() === "SUCCES"
        ) {
          dispatch(vtrLoadSucces({ response: response.data }));
        } else {
          dispatch(vtrLoadError({ error: response.data }));
        }
      })
      .catch((error) => {
        console.log("getVtrList_error", error);
        dispatch(vtrLoadError({ error: error }));
      });
  }

  if (action.type === LOAD_IVRS_REQUEST) {
    let requestUrl = baseServerUrl + "/apps/fol/base_api/ivr_vessel";
    if (action.meta.test_user) requestUrl = requestUrl.concat("/test");

    axios({
      method: "post",
      url: requestUrl,
      data: JSON.stringify(action.meta),
    })
      .then((response) => {
        if (
          response.data.hasOwnProperty("status") &&
          response.data.status.toUpperCase() === "SUCCESS"
        ) {
          return dispatch(ivrLoadSuccess(response.data));
        } else {
          return dispatch(ivrLoadError(response.data));
        }
      })
      .catch((error) => {
        console.log("getIvrListError", error.message);
        dispatch(ivrLoadError({ error: error }));
      });
  }
};
