import React, { useState, useEffect } from 'react';
import './Home.css';
import { Search } from '../../components/Search/Search';
import CityList from '../../components/CityList/CityList';
import { useWeatherData } from '../../coordinates/useWeatherData';


function Home() {
  const { weatherData } = useWeatherData(); // Bruk den tilpassede hooken her
  const [filter, setFilter] = useState("");

  return (
    <div className='home'>
      <Search onFilter={(value) => setFilter(value)} />
      <CityList weatherData={weatherData} filter={filter} />
    </div>
  );
}

export default Home;
