import {
  SET_ADD_EXPRIENCE,
  SET_DELETE_EXPRIENCE,
  SET_FREELANCER_PROFILE,
  SET_FREELANCER_SKILLS,
} from "../types";

const initialState = {};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default profileReducer;
