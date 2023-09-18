import './Search.css';
import React, { useState, useEffect } from 'react';

interface SearchBarProps {
  onFilter: (filter: string) => void;
}

export const Search: React.FC<SearchBarProps> = ({ onFilter }) => {
  const [filter, setFilter] = useState("");   

  const handleFilterChange = (value: string) => {
    setFilter(value);
    onFilter(value);
  };

  return (
    <div className="homeSearch">
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={(e) => { handleFilterChange(e.target.value) }}
      />
    </div>
  );
};
