import {
  GOOGLE_SIGN_IN_FAIL,
  APPLE_SIGN_IN_FAIL,
  SET_COUNTRY,
} from "../types";

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      return {
        ...state,
        getCountryList: action.payload,
      };
    case APPLE_SIGN_IN_FAIL:
      return {
        ...state,
        apppleSignFailError: action.payload,
      };
    case GOOGLE_SIGN_IN_FAIL:
      return {
        ...state,
        googleLoginFailError: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
