/**
 * File description:
 * Contains a component (weatherHook) responsible for fetching the data from the open-meto API.
 *
 * HOW TO GET WEATHER DATA
 * import weatherHook from './api_hooks/weatherHook';
 * const data = weatherHook(location);
 *
 * NOTE:
 * location is a string of the following format "latitude=63.4305&longitude=10.3951"
 * You may want to useState on both the location and the weatherHook to update them when changes occur.
 *
 */

import { useQuery } from '@tanstack/react-query'

const weatherHook = (location: string) => {
  // This can be changed if we want more weather data
  const url = `https://api.open-meteo.com/v1/forecast?${location}&hourly=temperature_2m,rain,cloudcover`

  const { data } = useQuery({
    queryKey: [location],
    queryFn: async () => {
      const res = await fetch(url) // The response to our query
      console.log('response' + res)
      const data = await res.json() // The response to our query in json format
      return data
    },
  })
  return data
}

export default weatherHook
