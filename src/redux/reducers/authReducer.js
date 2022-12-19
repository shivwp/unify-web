import {
  GOOGLE_SIGN_IN_FAIL,
  APPLE_SIGN_IN_FAIL,
  SET_COUNTRY,
  HOME_PAGE_DATA,
  FOOTER_PAGE_DATA,
  RESEND_OTP_SUCCESS,
  CATEGORY_SKILL_DATA,
  SKILLS_DEVELOPER_DATA,
  INSTANT_LOGIN_EMAIL,
  POST_JOB_LIKE_THIS,
  CLIENT_BUSINESSSIZE,
  SET_ONLINE_STATUS,
} from "../types";

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_PAGE_DATA:
      return {
        ...state,
        homePageData: action.payload,
      };
    case CATEGORY_SKILL_DATA:
      return {
        ...state,
        categorySkillData: action.payload,
      };
    case SKILLS_DEVELOPER_DATA:
      return {
        ...state,
        skillDevData: action.payload,
      };
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
    case FOOTER_PAGE_DATA:
      return {
        ...state,
        footerPageData: action.payload,
      };
    case RESEND_OTP_SUCCESS:
      return {
        ...state,
        resendOtpSuccess: action.payload,
      };
    case INSTANT_LOGIN_EMAIL:
      return {
        ...state,
        instantLoginEmail: action.payload,
      };
    case POST_JOB_LIKE_THIS:
      return {
        ...state,
        postJob: action.payload,
      };
    case CLIENT_BUSINESSSIZE:
      return {
        ...state,
        clientBusinesssize: action.payload,
      };
    case SET_ONLINE_STATUS:
      return {
        ...state,
        onlineStatus: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
