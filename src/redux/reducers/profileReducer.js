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
  SET_DEGREE_LIST,
  SET_DELETE_EDUCATION,
  SET_EDIT_FREELANCER_INFO,
  SET_EDIT_FREELANCER_LOCATION,
  SET_EDIT_LANGUAGE,
  SET_LANGUAGE_LIST,
  SET_HWP_LIST,
  SET_HOURS_PER_WEEK,
  SET_EDIT_SKILLS,
  SET_EDIT_CERTIFICATE,
  SET_DELETE_CERTIFICATE,
  SET_PROFILE_IMG_CHANGE,
  SET_EDIT_TESTIMONIAL,
  SET_EDIT_EDUCATION,
  SET_EDIT_DESIGNATION,
  SET_EDIT_PORTFOLIO,
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
    case SET_DEGREE_LIST:
      return {
        ...state,
        getDegreeList: action.payload,
      };
    case SET_DELETE_EDUCATION:
      return {
        ...state,
        deleteEducation: action.payload,
      };
    case SET_EDIT_FREELANCER_INFO:
      return {
        ...state,
        editFreelancerInfo: action.payload,
      };
    case SET_EDIT_FREELANCER_LOCATION:
      return {
        ...state,
        editFreelancerLocation: action.payload,
      };
    case SET_EDIT_LANGUAGE:
      return {
        ...state,
        editFreelancerLanguage: action.payload,
      };
    case SET_LANGUAGE_LIST:
      return {
        ...state,
        getLanguageList: action.payload,
      };
    case SET_HWP_LIST:
      return {
        ...state,
        getHoursPerWeekList: action.payload,
      };
    case SET_HOURS_PER_WEEK:
      return {
        ...state,
        editHoursPerWeek: action.payload,
      };
    case SET_EDIT_SKILLS:
      return {
        ...state,
        editSkills: action.payload,
      };
    case SET_EDIT_CERTIFICATE:
      return {
        ...state,
        editCertificate: action.payload,
      };
    case SET_DELETE_CERTIFICATE:
      return {
        ...state,
        deleteCertificate: action.payload,
      };
    case SET_PROFILE_IMG_CHANGE:
      return {
        ...state,
        profileImgChange: action.payload,
      };
    case SET_EDIT_TESTIMONIAL:
      return {
        ...state,
        edtiTestimonial: action.payload,
      };
    case SET_EDIT_EDUCATION:
      return {
        ...state,
        editEducation: action.payload,
      };
    case SET_EDIT_DESIGNATION:
      return {
        ...state,
        editDesignation: action.payload,
      };
    case SET_EDIT_PORTFOLIO:
      return {
        ...state,
        editPortfolio: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
