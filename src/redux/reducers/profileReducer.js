import {
  SET_ADD_EXPRIENCE,
  SET_CLIENT_INFO_DETAILS,
  SET_CLOSE_ACCOUNT_REASON_LIST,
  SET_DELETE_EXPRIENCE,
  SET_EDIT_CLIENT_INFO,
  SET_FREELANCER_PROFILE,
  SET_FREELANCER_SKILLS,
  SET_INDUSTRIES_LIST,
  SET_TIMEZONE_LIST,
} from "../types";

const initialState = {};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    // FREELANCER
    case SET_FREELANCER_PROFILE:
      return {
        ...state,
        freelancerProfileList: action.payload,
      };
    case SET_FREELANCER_SKILLS:
      return {
        ...state,
        getSkillList: action.payload,
      };
    case SET_DELETE_EXPRIENCE:
      return {
        ...state,
        deleteExprience: action.payload,
      };
    case SET_ADD_EXPRIENCE:
      return {
        ...state,
        addExprience: action.payload,
      };

    // CLIENT
    case SET_CLIENT_INFO_DETAILS:
      return {
        ...state,
        getClientDetails: action.payload,
      };
    case SET_INDUSTRIES_LIST:
      return {
        ...state,
        getIndustries: action.payload,
      };
    case SET_TIMEZONE_LIST:
      return {
        ...state,
        timezoneList: action.payload,
      };
    case SET_EDIT_CLIENT_INFO:
      return {
        ...state,
        editClientProfile: action.payload,
      };
    case SET_CLOSE_ACCOUNT_REASON_LIST:
      return {
        ...state,
        closeAccountReasons: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
