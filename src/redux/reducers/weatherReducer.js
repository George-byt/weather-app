import { weatherTypes } from "../types/types";

const weatherReducer = (state = { weather: [] }, action) => {
  switch (action.type) {
    case weatherTypes.FETCH_WEATHER:
      return {
        weather: action.payload
      }
    default:
      return state
  }
}

export default weatherReducer;
