import React, {useState} from 'react';
import {fetchWeather} from './utils/api';

export const WeatherInfo = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleChange = async ({ target: { value } }) => {
    setCity(value);
    const weather = await fetchWeather(value);
    setWeather(weather);
  };

  return (
    <div>
      <label htmlFor="city">Which city you want to check?</label>
      <input
        id="city"
        type="text"
        value={city}
        onChange={handleChange}
      />
      <h3>
        {city && weather ? `Weather in ${city} is ${weather}` : 'Provide city name'}
      </h3>
    </div>
  )
};
