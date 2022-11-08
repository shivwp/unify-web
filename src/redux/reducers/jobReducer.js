import {
  JOBS_LIST,
  JOB_POST_DETAILS,
  SAVED_JOBS_LIST,
  SAVE_JOB_POST,
  UNSAVE_JOB_POST,
} from "../types";

const initialState = {};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOBS_LIST:
      return {
        ...state,
        jobsList: action.payload,
      };
    case SAVED_JOBS_LIST:
      return {
        ...state,
        savedJobsList: action.payload,
      };
    case SAVE_JOB_POST:
      return {
        ...state,
        saveJobsPost: action.payload,
      };
    case UNSAVE_JOB_POST:
      return {
        ...state,
        unSaveJobsPost: action.payload,
      };
    case JOB_POST_DETAILS:
      return {
        ...state,
        singleJobDetails: action.payload,
      };

    default:
      return state;
  }
};

export default jobReducer;
