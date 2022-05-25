import { weatherTypes } from '../types/types';

export const fetchWeather = (city, country) => {
  return async (dispatch) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=03466c029a5cb94465f9618b36a14e09&units=metric`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    dispatch(fetchWeatherAction(data))
  }
}

export const fetchWeatherAction = (weather) => {
  return {
    type: weatherTypes.FETCH_WEATHER,
    payload: weather
  }
}

