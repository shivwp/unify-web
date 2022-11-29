import { SET_SUBSCRIPTION_LIST } from "../types";
const initialState = {};

const subscriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUBSCRIPTION_LIST:
      return {
        ...state,
        subscriptionList: action.payload,
      };
    default:
      return state;
  }
};

export default subscriptionReducer;
