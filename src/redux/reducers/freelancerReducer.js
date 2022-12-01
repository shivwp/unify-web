import {
  SET_JOB_BASED_FREELANCER_LIST,
  SET_INVITED_FREELANCER_LIST,
  SET_FREELANCER_INVITED,
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
    default:
      return state;
  }
};

export default freelancerReducer;
