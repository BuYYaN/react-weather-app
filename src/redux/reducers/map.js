import { MAP_CLICKED, MAP_LOADED } from "../actionTypes";

const initialState = {
  clickedCoords: null,
  currCoords: null,
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAP_LOADED:
      return {
        ...state,
        currCoords: action.payload,
      };
    case MAP_CLICKED:
      return {
        ...state,
        clickedCoords: action.payload,
      };
    default:
      return state;
  }
};

export default mapReducer;
