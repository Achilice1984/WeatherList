import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  state: WeatherReducer
});

export default rootReducer;
