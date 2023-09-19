import React from 'react';
import './CountryFilter.css';

interface CountryFilterProps {
  countries: string[];
  selectedCountry: string | null;
  onSelectCountry: (country: string | null) => void;
}

const CountryFilter: React.FC<CountryFilterProps> = ({ countries, selectedCountry, onSelectCountry }) => {
  return (
    <div className="countryFilter">
      <button
        className={`countryButton ${selectedCountry === null ? 'active' : ''}`}
        onClick={() => onSelectCountry(null)}
      >
        All
      </button>
      {countries.map((country, index) => (
        <button
          key={index}
          className={`countryButton ${selectedCountry === country ? 'active' : ''}`}
          onClick={() => onSelectCountry(country)}
        >
          {country}
        </button>
      ))}
    </div>
  );
};

export default CountryFilter;
