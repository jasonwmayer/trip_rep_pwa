import JsonMetaJson from "../json/jsonMeta.json";
import validationList from "../json/incrementals.json";
import { API_REQUEST, API_SUCCESS, API_ERROR } from "./actionTypes";

function createTimestampObject(timeInterval) {
  console.log("api_js", validationList);

  const validationLength = validationList.length;
  let timestampObject = {};
  for (let i = 0; i < validationLength; i++) {
    timestampObject[validationList[i]] = timeInterval[validationList[i]];
  }
  return timestampObject;
}

// action creators
export const apiRequest = ({ url, method, data }) => {
  let downloadTimestamps;
  let savedTimeInterval = localStorage.getItem("timestamp");
  if (savedTimeInterval === null || savedTimeInterval === "{}") {
    downloadTimestamps = createTimestampObject(JsonMetaJson);
    localStorage.setItem("timestamp", JSON.stringify(downloadTimestamps));
  } else {
    let parsedInterval = JSON.parse(savedTimeInterval);
    if (Object.getOwnPropertyNames(parsedInterval).length > 0) {
      downloadTimestamps = parsedInterval;
    }
  }

  if (Object.getOwnPropertyNames(downloadTimestamps).length > 0) {
    data.download_timestamps = downloadTimestamps;
  }

  return {
    type: API_REQUEST,
    meta: {
      api_request_url: url,
      api_request_method: method,
      api_request_data: data,
    },
  };
};

export const apiSuccess = ({ response }) => {
  return {
    type: API_SUCCESS,
    payload: response,
  };
};

export const apiError = ({ error }) => {
  let alertDiv = document.getElementsByClassName("alerts-login");
  alertDiv[0].children[1].innerHTML = error;
  alertDiv[0].classList.remove("hidden");
  return {
    type: API_ERROR,
    payload: error,
  };
};
