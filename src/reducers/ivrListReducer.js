import * as types from "../actions/actionTypes";

export default function ivrListReducer(state = {}, action) {
  switch (action.type) {
    case types.LOAD_IVRS_SUCCESS:
      return action.ivrs;
    default:
      return state;
  }
}
