import * as types from "./actionTypes";

export const ivrLoadSuccess = (ivrs) => {
  return { type: types.LOAD_IVRS_SUCCESS, ivrs };
};

export const ivrLoadError = ({ error }) => {
  return {
    type: types.LOAD_IVRS_ERROR,
    error: error,
  };
};

export const ivrListRequest = payload => {
  return {
    type: types.LOAD_IVRS_REQUEST,
    meta: payload
  };
};
