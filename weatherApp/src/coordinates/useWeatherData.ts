import { useState, useEffect } from 'react';
import weatherHook from '../api_hooks/weatherHook';
import cityCoordinates from './cityCoordinates';

export function useWeatherData() {
  const [weatherData, setWeatherData] = useState<{ city: string; weatherData: any; }[]>([]);

  useEffect(() => {
    async function fetchWeatherDataForCities() {
      const cities = Object.keys(cityCoordinates);

      try {
        const newWeatherData = await Promise.all(
          cities.map(async (city) => {
            const location = cityCoordinates[city];
            const cityWeatherData = await weatherHook(location);
            return { city, weatherData: cityWeatherData };
          })
        );

        setWeatherData(newWeatherData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }

    fetchWeatherDataForCities();
  }, []);

  return { weatherData };
}
