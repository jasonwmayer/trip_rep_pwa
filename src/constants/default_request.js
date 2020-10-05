export const baseServerUrl = "https://www.greateratlantic.fisheries.noaa.gov";

function vendor_app_name() {
  return "Android";
}

function vendor_software_version() {
  return "10.0.9";
}
function vendor_id() {
  return "37901";
}

export function login_request(username, password) {
  return {
    authorization: {
      username: username,
      password: password,
      vendor_app_name: vendor_app_name(),
      vendor_software_version: vendor_software_version(),
      vendor_id: vendor_id(),
    },
  };
}

export function default_request(client_id, token, user_app_status) {
  let test_user;
  if (user_app_status === "TEST") {
    test_user = true;
  }
  return {
    authorization: {
      client_id: client_id,
      token: token,
      vendor_app_name: vendor_app_name(),
      vendor_software_version: vendor_software_version(),
      vendor_id: vendor_id(),
    },
    test_user: test_user,
  };
}

export function ivrRequest(client_id, token, user_app_status, vesselNbr) {
  const test_user = user_app_status === "TEST" ? true : false;

  return {
    authorization: {
      client_id,
      token,
    },
    test_user: test_user,
    vessel: vesselNbr,
  };
}
