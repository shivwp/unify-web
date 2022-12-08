import {
  SET_JOB_BASED_FREELANCER_LIST,
  SET_INVITED_FREELANCER_LIST,
  SET_FREELANCER_INVITED,
  SET_SAVED_TALENT_LIST,
  SET_SAVED_TALENT,
  SET_REMOVE_SAVED_TALENT,
  SET_SAVED_TALENT_ERROR,
  SET_MAKE_PRIVATE_JOB,
  SET_ALL_JOB_PROPOSALS_LIST,
} from "../types";
const initialState = {};

const freelancerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOB_BASED_FREELANCER_LIST:
      return {
        ...state,
        jobBasedFreelancerList: action.payload,
      };
    case SET_INVITED_FREELANCER_LIST:
      return {
        ...state,
        invitedFreelancerList: action.payload,
      };
    case SET_FREELANCER_INVITED:
      return {
        ...state,
        invitedFreelancer: action.payload,
      };
    case SET_SAVED_TALENT_LIST:
      return {
        ...state,
        getSavedTalentList: action.payload,
      };
    case SET_SAVED_TALENT:
      return {
        ...state,
        savedTalent: action.payload,
      };
    case SET_REMOVE_SAVED_TALENT:
      return {
        ...state,
        removeSavedTalent: action.payload,
      };
    case SET_SAVED_TALENT_ERROR:
      return {
        ...state,
        savedTalentError: action.payload,
      };
    case SET_MAKE_PRIVATE_JOB:
      return {
        ...state,
        privatePublicJob: action.payload,
      };
    case SET_ALL_JOB_PROPOSALS_LIST:
      return {
        ...state,
        jobBasedProposalsList: action.payload,
      };
    default:
      return state;
  }
};

export default freelancerReducer;
