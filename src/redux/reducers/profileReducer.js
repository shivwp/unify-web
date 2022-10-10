import { SET_FREELANCER_PROFILE } from "../types";

const initialState = {};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FREELANCER_PROFILE:
      return {
        ...state,
        freelancerProfileList: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
