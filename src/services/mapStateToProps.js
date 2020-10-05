export default function mapStateToProps(state, ownProps) {
  //console.log('authroute mapping state',state);
  //console.log('authroute mapping properties',ownProps);
  const prop1 = state.auth.isAuthUser;
  const prop2 = ownProps.type;
  return { isAuthUser: prop1, type: prop2 };
}

export function mapLoginStateToProps(state, ownProps) {
  //console.log('login mapping state',state);
  console.log("login mapping properties", ownProps);
  const prop1 = state.auth.isAuthUser;
  return { isAuthUser: prop1 };
}

export function mapVtrStateToProps(state, ownProps) {
  console.log("vtr mapping state", state);
  console.log("vtr mapping properties", ownProps);
  const prop1 = state.vtrList.trips;
  const prop2 = state.auth;
  return { trips: prop1, auth: prop2, actions: {} };
}

export function mapUserDetailStateToProps(state, ownProps) {
  console.log("user detail mapping state", state);
  console.log("user detail mapping properties", ownProps);
  const prop1 = state.auth.isAuthUser;
  const prop2 = state.auth.client_id;
  const prop3 = state.auth.token;
  const prop4 = state.auth.token_expires;
  const prop5 = state.auth.user_app_status;
  return {
    isAuthUser: prop1,
    client_id: prop2,
    token: prop3,
    token_expires: prop4,
    user_app_status: prop5,
  };
}

export function mapIvrStateToProps(state, ownProps) {
  console.log("ivr mapping state", state);
  console.log("ivr mapping properties", ownProps);
  const prop1 = state.ivrList;
  const prop2 = state.auth;
  return { ivrs: prop1, auth: prop2, actions: {} };
}
