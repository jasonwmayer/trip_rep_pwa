import { applyMiddleware, combineReducers, createStore } from "redux";
import { appMiddleware } from "./middlewares/app";
import { apiMiddleware } from "./middlewares/core";

import { composeWithDevTools } from "redux-devtools-extension";

import monitorReducersEnhancer from "./enhancers/monitorReducer";
import loggerMiddleware from "./middlewares/logger";
import rootReducer from "./reducers/rootReducer";
import vtrListReducer from "./reducers/vtrListReducer";
import ivrListReducer from "./reducers/ivrListReducer";

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, appMiddleware, apiMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const reducers = combineReducers({
    auth: rootReducer,
    vtrList: vtrListReducer,
    ivrList: ivrListReducer,
  });
  const store = createStore(reducers, preloadedState, composedEnhancers);

  return store;
}
