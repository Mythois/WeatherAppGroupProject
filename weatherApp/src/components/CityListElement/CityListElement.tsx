
// This is the CityListElement component. It displays the city name, weather icon, and temperature for a city. 
// Users can also favorite the city. 

import React, { useState } from 'react';
import './CityListElement.css';

interface CityListElementProps {
  cityName: string;
  cityTemp: number;
  cityWeatherIcon: string;
  isFavorite: boolean;
}

function CityListElement({
  cityName,
  cityTemp,
  cityWeatherIcon
}: CityListElementProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(isFavorite => !isFavorite);
  };

  return (
    <div className='cityListElement'>
      <p>{cityName}</p>
      <p>{cityWeatherIcon}</p>
      <p>{cityTemp}℃</p>

      <label className='favorite-checkbox'>
        <input
          type='checkbox'
          checked={isFavorite}
          onChange={toggleFavorite}
          className='hidden-checkbox'
        />
        <span className='star'>&#9733;</span>
      </label>
    </div>
  );
}

export default CityListElement;
