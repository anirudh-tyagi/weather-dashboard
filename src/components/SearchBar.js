import React, { useState } from 'react';

const citySuggestions = [
  'New York', 'London', 'Paris', 'Tokyo', 'Mumbai', 'Delhi',
  'Bangalore', 'Ghaziabad', 'Sydney', 'Toronto', 'Dubai', 'Singapore', 'Cairo'
];

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setCity(value);

    if (value.length > 1) {
      const filtered = citySuggestions.filter((c) =>
        c.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
      setFilteredCities([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion);
    onSearch(suggestion);
    setFilteredCities([]);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem', position: 'relative' }}>
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={handleChange}
        style={{
          padding: '12px 20px',
          borderRadius: '999px',
          border: 'none',
          width: '100%',
          outline: 'none',
          fontSize: '16px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      />
      {filteredCities.length > 0 && (
        <ul
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            background: 'white',
            color: 'black',
            borderRadius: '0 0 12px 12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            maxHeight: '200px',
            overflowY: 'auto',
            zIndex: 1000,
          }}
        >
          {filteredCities.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{
                padding: '10px 20px',
                cursor: 'pointer',
                borderBottom: '1px solid #eee',
              }}
              onMouseDown={(e) => e.preventDefault()} // prevent losing focus
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SearchBar;
