import { ASYNC_START, ASYNC_STOP, ASYNC_ERROR } from "../actionTypes";

const initialState = {
  isLoading: false,
  data: null,
  error: "",
};

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_START:
      return {
        ...state,
        isLoading: true,
      };
    case ASYNC_STOP:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case ASYNC_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default asyncReducer;
