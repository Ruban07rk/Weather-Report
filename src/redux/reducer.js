import { FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from './actions';

const initialState = {
  weather: {},
  error: ''
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.payload,
        error: ''
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default weatherReducer;
