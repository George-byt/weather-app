import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../redux/actions/weatherActions';

const Searcher = () => {
  const dispatch = useDispatch()

  const handleSubmit = e => {
      e.preventDefault()
      const { city, country } = e.target.elements
      const cityValue = city.value
      const countryValue = country.value
      dispatch(fetchWeather(cityValue, countryValue))
    }
  return (
    <section className='input-section'>
        <div className='container'>
          <form className='' onSubmit={handleSubmit}>
            <div className='input-group mb-3'>
              <input
              type='text'
              className='form-control rounded-pill me-2'
              name='city'
              id='city'
              placeholder='City' />
              <input
              type='text'
              className='form-control rounded-pill ms-2'
              name='country'
              id='country'
              placeholder='Country' />
              <button type='submit' className='btn btn-warning rounded-pill ms-2'>Get Weather</button>
            </div>
          </form>
        </div>
      </section>
  )
}

export default Searcher;
