import React, { useState, useEffect } from 'react';
import './Home.css';
import { Search } from '../../components/Search/Search';
import CityList from '../../components/CityList/CityList';
import weatherHook from '../../api_hooks/weatherHook';

function Home() {
  const [weatherData, setWeatherData] = useState<any[]>([]); // Initialize with an empty array
  const [filter, setFilter] = useState("");


  useEffect(() => {
    async function fetchWeatherDataForCities() {
      const cityCoordinates: { [key: string]: string } ={
        Oslo: 'latitude=59.9127&longitude=10.7461',
        Bergen: 'latitude=60.393&longitude=5.3242',
        Stavanger: 'latitude=58.9701&longitude=5.7333',
        Trondheim: 'latitude=63.4305&longitude=10.3951',
        Stockholm: 'latitude=59.3294&longitude=18.0687',
        København: 'latitude=55.6506&longitude=12.5978',
        Helsinki: 'latitude=60.1695&longitude=24.9354',
        Berlin: 'latitude=52.5244&longitude=13.4105',
        Paris: 'latitude=48.8534&longitude=2.3488',
        London: 'latitude=51.5085&longitude=-0.1257',
      };

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
