import { useQuery } from "@tanstack/react-query";

const weatherHook = (location : string) => {
    location = "latitude=63.4305&longitude=10.3951" // TODO --> This should not be a set variable
    
     // This can be changed if we want more weather data
    const url = `https://api.open-meteo.com/v1/forecast?${location}&hourly=temperature_2m`;

    const { data } = useQuery({
        queryKey: [location],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });
    return data;
};

export default weatherHook;

// HOW TO GET WEATHER DATA:
//
// import weatherHook from './api_hooks/weatherHook';
//
// const data = weatherHook(location);