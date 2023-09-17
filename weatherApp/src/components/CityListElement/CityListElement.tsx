import React from 'react';
import './CityListElement.css';

interface CityListElementProps {
  cityName: string;
  cityTemp: number;
  cityWeatherIcon: string;
  onClick?: () => void; // Make onClick optional
}

function CityListElement({ cityName, cityTemp, cityWeatherIcon, onClick }: CityListElementProps) {
  return (
    <div className='cityListElement' onClick={onClick}>
      <p>{cityName}</p>
      <p>{cityWeatherIcon}</p>
      <p>{cityTemp}℃</p>
    </div>
  );
}

export default CityListElement;
