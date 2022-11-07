import { JOBS_LIST } from "../types";

const initialState = {};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOBS_LIST:
      return {
        ...state,
        jobsList: action.payload,
      };

    default:
      return state;
  }
};

export default jobReducer;
