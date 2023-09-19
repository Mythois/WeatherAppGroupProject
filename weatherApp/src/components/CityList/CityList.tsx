import React, { useEffect, useState } from 'react';
import './CityList.css';
import CityListElement from '../CityListElement/CityListElement';

interface CityListProps {
  filter: string;
}

function CityList({ filter }: CityListProps) {
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
        return (
          <CityListElement
            key={index}
            cityName={cityName}
          />
        );
      })}
    </div>
  );
}


export default CityList;


