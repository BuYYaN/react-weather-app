import { MAP_CLICKED, MAP_LOADED, UPDATE_HISTORY } from "../actionTypes";

const initialState = {
  currCoords: null,
  weatherHistory: [],
  currentWeatherData: null,
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
        currCoords: action.payload,
        currentWeatherData: null,
      };
    case UPDATE_HISTORY:
      return {
        ...state,
        weatherHistory: [...state.weatherHistory, action.payload],
        currentWeatherData: action.payload,
      };
    default:
      return state;
  }
};

export default mapReducer;
