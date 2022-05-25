import React from 'react';
import { useSelector } from 'react-redux';

const Card = () => {
  const { weather } = useSelector(store => store.weatherReducer)

  return (
    <div className='card bg-transparent border-0'> 
      <ul className="list-group list-group-horizontal border-0 d-flex justify-content-center">
        <li className="list-group-item border-0">{weather.wind ? <p className=''>Wind: {weather.wind.speed} mph</p> : null}</li>
        <li className="list-group-item border-0">{weather.main ? <p className=''>Humidity: {weather.main.humidity}%</p> : null}</li>
        <li className="list-group-item border-0">{weather.visibility ? <p className=''>Visibility: {weather.visibility} mi</p> : null}</li>
        <li className="list-group-item border-0">{weather.main ? <p className=''>Pressure: {weather.main.pressure} mb</p> : null}</li>
      </ul>
      <div>
        {weather.main ? <h1 className='text-center'>{weather.main.temp} °</h1> : null}
      </div>
    </div>
  )
}

export default Card;
