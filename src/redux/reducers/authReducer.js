import { GOOGLE_SIGN_IN_FAIL, APPLE_SIGN_IN_FAIL, SET_COUNTRY, LOGIN_ERROR, SIGNUP_ERROR } from "../types";

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
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        signupError: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
