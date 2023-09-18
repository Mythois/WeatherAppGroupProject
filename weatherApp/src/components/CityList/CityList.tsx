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
        const cityTemp = cityWeather?.weatherData?.hourly?.temperature_2m[0];  // The temperature is currently the first one in the array, fix this

        return (
          <CityListElement
            key={index}
            cityName={cityName}
            cityTempMax={cityTemp} // default
            cityTempMin={0} // default
            cityPersipitation={0} // default
            isFavorite={false} // default
            cloudCoverage={0} // default
          />
        );
      })}
    </div>
  );
}


export default CityList;


