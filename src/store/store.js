import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import sideReducer from "./reducers/sideReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    sidemenu: sideReducer,
  }),
  {},
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
