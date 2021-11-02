import { TICK } from "../constants/actionTypes";

const INIT_STATE = {
  countdown: 10,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case TICK: {
      return {
        ...state,
        countdown: action.cowndown,
      };
    }
    default:
      return state;
  }
};
