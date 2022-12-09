import {
  SET_JOB_BASED_FREELANCER_LIST,
  SET_INVITED_FREELANCER_LIST,
  SET_FREELANCER_INVITED,
  SET_SAVED_TALENT_LIST,
  SET_SAVED_TALENT,
  SET_REMOVE_SAVED_TALENT,
  SET_MAKE_PRIVATE_JOB,
  SET_ALL_JOB_PROPOSALS_LIST,
  SET_SAVE_PROPOSAL_IN_SHORTLIST,
  SET_REMOVE_PROPOSAL_IN_SHORTLIST,
  SET_PROPOSAL_SHORTLIST,
  SET_ARCHIEVED_LIST,
  SET_SAVE_PROPOSAL_IN_ARCHIEVED,
  SET_REMOVE_PROPOSAL_IN_ARCHIEVED,
  SET_SINGLE_FREELANCER,
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
    case SET_SAVE_PROPOSAL_IN_SHORTLIST:
      return {
        ...state,
        saveProposalInShortList: action.payload,
      };
    case SET_REMOVE_PROPOSAL_IN_SHORTLIST:
      return {
        ...state,
        removeProposalInShortList: action.payload,
      };
    case SET_PROPOSAL_SHORTLIST:
      return {
        ...state,
        proposalShortlist: action.payload,
      };
    case SET_ARCHIEVED_LIST:
      return {
        ...state,
        proposalArchievedlist: action.payload,
      };
    case SET_SAVE_PROPOSAL_IN_ARCHIEVED:
      return {
        ...state,
        saveProposalInArchieved: action.payload,
      };
    case SET_REMOVE_PROPOSAL_IN_ARCHIEVED:
      return {
        ...state,
        removeProposalInArchieved: action.payload,
      };
    case SET_SINGLE_FREELANCER:
      return {
        ...state,
        singleFreelancer: action.payload,
      };
    default:
      return state;
  }
};

export default freelancerReducer;
