import React, { useEffect, useState } from 'react';
import './CityList.css';
import CityListElement from '../CityListElement/CityListElement';

interface CityListProps {
  weatherData: any;
  filter: string;
}

function CityList({ filter, weatherData }: CityListProps) {
  const cities = ['Oslo', 'Bergen', 'Stavanger', 'Trondheim', 'Stockholm', 'København', 'Helsinki', 'Berlin', 'Paris', 'London'];
  const [suggestions, setSuggestions] = useState<string[]>(cities);

  useEffect(() => {
    setSuggestions(
      cities.filter((c) => c.toLowerCase().includes(filter.toLowerCase()))
    );
  }, [filter]);

  return (
    <div className='cityList'>
      {suggestions.map((cityName, index) => {
        const cityWeather = weatherData.find((cityData: { city: string; }) => cityData.city === cityName);

        // Find the lowest / highest temp
        let maxTemp = cityWeather?.weatherData?.hourly?.temperature_2m[0];
        let minTemp = cityWeather?.weatherData?.hourly?.temperature_2m[0];
        for (let i = 0; i < 24; i++) {
          if (cityWeather?.weatherData?.hourly?.temperature_2m[i] < minTemp) {
            minTemp = cityWeather?.weatherData?.hourly?.temperature_2m[i];
          }
          if (cityWeather?.weatherData?.hourly?.temperature_2m[i] > maxTemp) {
            maxTemp = cityWeather?.weatherData?.hourly?.temperature_2m[i];
          }
        }
        const cityTempMax = maxTemp;
        const cityTempMin = minTemp;

        // Finds the average of rain/clouds
        let sumOfRain = 0;
        let sumOfClouds = 0;
        for (let i = 0; i < 24; i++) {
          sumOfRain += cityWeather?.weatherData?.hourly?.rain[i];
          sumOfClouds += cityWeather?.weatherData?.hourly?.cloudcover[i];
        }
        const cityPersipitation = parseFloat((sumOfRain/24).toFixed(2));
        const cloudCoverage = parseFloat((sumOfClouds/24).toFixed(2));

        return (
          <CityListElement
            key={index}
            cityName={cityName}
            cityTempMax={cityTempMax}
            cityTempMin={cityTempMin}
            cityPersipitation={cityPersipitation}
            isFavorite={false}
            cloudCoverage={cloudCoverage}
          />
        );
      })}
    </div>
  );
}


export default CityList;


