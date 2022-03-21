import { APP_LOADED, UPDATE_HISTORY } from "../actionTypes";

const initialState = {
  history: [],
};

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADED:
    case UPDATE_HISTORY:
      return {
        history: action.payload,
      };
    default:
      return state;
  }
};

export default statsReducer;
