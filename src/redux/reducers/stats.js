import { APP_LOADED } from "../actionTypes";

const initialState = {
  history: [],
};

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADED:
      return {
        history: action.payload,
      };

    default:
      return state;
  }
};

export default statsReducer;
