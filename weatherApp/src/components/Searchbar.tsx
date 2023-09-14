import './styles/Searchbar.css';
import React, {useState, useEffect} from 'react';

interface SearchBarProps {
    onSearch: (city: string) => void;
}

export const Searchbar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [city, setCity] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);

    useEffect(() => {
        // Function to fetch suggestions from the API.
        const fetchSuggestions = async () => {
          if (city.trim() === '') {
            setSuggestions([]);
            return;
          }
    
          // Replace this with API data. Temporary local array.
          const cities = ['Trondheim', 'Steinkjer', 'Oslo', 'Narvik', 'Strinda'];

          const filteredSuggestions = cities.filter((c) => c.toLowerCase().includes(city.toLowerCase()));
          setSuggestions(filteredSuggestions);
        };
        fetchSuggestions();
    }, [city]);

    const handleSearch = () => {
        onSearch(city);
      };
    
    const handleSuggestionClick = (selectedCity: string) => {
        setCity(selectedCity);
        setSuggestions([]);
        onSearch(selectedCity);
    };

    return (
        <div className="searchbar-container">
        <input
            type="text"
            placeholder="Search..."
            value={city}
            onChange={(e) => {setCity(e.target.value)}}
        />
        <button onClick={handleSearch}>Search</button>
        {suggestions.length > 0 && (
            <ul className="suggestions-list">
            {suggestions.map((suggestCity) => (
                <li key={suggestCity} onClick={() => handleSuggestionClick(suggestCity)} className="suggestion-item">
                {suggestCity}
                </li>
            ))}
            </ul>
        )}
        </div>
    );
};