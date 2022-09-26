import { SET_COUNTRY } from "../types";

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      return {
        ...state,
        getCountryList: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
