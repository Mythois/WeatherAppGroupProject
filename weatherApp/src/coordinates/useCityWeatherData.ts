import { useEffect, useState } from 'react';
import weatherHook from '../api_hooks/weatherHook';
import cityCoordinates from './cityCoordinates';

export function useCityWeatherData(cityName: string) {
  const [cityWeatherData, setCityWeatherData] = useState<any | null>(null);

  async function fetchCityWeatherData() {
    try {
      const location = cityCoordinates[cityName];
      const cityWeatherData = await weatherHook(location);
      setCityWeatherData(cityWeatherData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  useEffect(() => {
    fetchCityWeatherData();
  }, [cityName]);

  return cityWeatherData;
}

export default useCityWeatherData;
