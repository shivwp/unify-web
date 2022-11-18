import {
  GOOGLE_SIGN_IN_FAIL,
  APPLE_SIGN_IN_FAIL,
  SET_COUNTRY,
  LOGIN_ERROR,
  SIGNUP_ERROR,
  FORGOT_PASS_ERROR,
  FORGOT_OTP_ERROR,
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
    case FORGOT_PASS_ERROR:
      return {
        ...state,
        forgotPassError: action.payload,
      };
    case FORGOT_OTP_ERROR:
      return {
        ...state,
        forgotOTPError: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
