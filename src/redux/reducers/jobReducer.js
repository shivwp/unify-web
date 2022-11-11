import {
  DISLIKE_POST_REASONS,
  JOBS_LIST,
  JOB_POST_DETAILS,
  ON_DISLIKE_JOB_POST,
  SAVED_JOBS_LIST,
  SAVE_JOB_POST,
  SEND_JOB_PROPOSAL,
  SEND_PROPOSAL_DATA,
  SET_ALL_CLIENT_DRAFT_POSTING,
  SET_ALL_CLIENT_POSTING,
  SET_POST_YOUR_JOB_NOW,
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
    case SEND_JOB_PROPOSAL:
      return {
        ...state,
        sendJobProposal: action.payload,
      };
    case SEND_PROPOSAL_DATA:
      return {
        ...state,
        proposalData: action.payload,
      };
    case DISLIKE_POST_REASONS:
      return {
        ...state,
        dislikeJobReasons: action.payload,
      };
    case ON_DISLIKE_JOB_POST:
      return {
        ...state,
        onDislikeJobPost: action.payload,
      };
    case SET_ALL_CLIENT_POSTING:
      return {
        ...state,
        allClientPosting: action.payload,
      };
    case SET_ALL_CLIENT_DRAFT_POSTING:
      return {
        ...state,
        allClientDraftPosting: action.payload,
      };
    case SET_POST_YOUR_JOB_NOW:
      return {
        ...state,
        postYourJob: action.payload,
      };

    default:
      return state;
  }
};

export default jobReducer;
