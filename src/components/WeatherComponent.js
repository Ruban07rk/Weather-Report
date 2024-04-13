import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherStart } from '../redux/actions';

function WeatherComponent() {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const weather = useSelector(state => state.weather.weather);
  const error = useSelector(state => state.weather.error);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchWeatherStart(city));
  };

  return (
    <div className='weather'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city name"
        />
        <button disabled={!city} type="submit" className='bt'>Submit</button>
      </form>
      {error && <p>Error: {error}</p>}
      {weather.main && (
        <div className='wt'>
          <h3>Weather in {weather.name}</h3>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherComponent;
