import React, { useState, useEffect } from 'react';
import './Home.css';
import { Search } from '../../components/Search/Search';
import CityList from '../../components/CityList/CityList';
import weatherHook from '../../api_hooks/weatherHook';
import cityCoordinates from '../../coordinates/cityCoordinates';

function Home() {
  const [weatherData, setWeatherData] = useState<any[]>([]); // Initialize with an empty array
  const [filter, setFilter] = useState("");


  useEffect(() => {
    async function fetchWeatherDataForCities() {
      const cities = Object.keys(cityCoordinates);

      const newWeatherData = await Promise.all(
        cities.map(async (city) => {
          try {
            const location = cityCoordinates[city];
            const cityWeatherData = await weatherHook(location);
            return { city, weatherData: cityWeatherData };
          } catch (error) {
            console.error(`Error fetching weather data for ${city}:`, error);
            return { city, weatherData: null };
          }
        })
      );

      setWeatherData(newWeatherData);
    }

    fetchWeatherDataForCities();
  }, []);

  return (
    <div className='home'>
      <Search onFilter={(value) => setFilter(value)} />
      <CityList weatherData={weatherData} filter={filter} />
    </div>
  );
}

export default Home;
