import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";
import jobReducer from "./reducers/jobReducer";
import subscriptionReducer from "./reducers/subscriptionReducer";

let middleware = [thunk];

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  job: jobReducer,
  subscription: subscriptionReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
