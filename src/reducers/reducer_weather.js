import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]); // Old way. need to create new state and return it.
      return [ action.payload.data, ...state ]; // ES6
  }
  return state;
}