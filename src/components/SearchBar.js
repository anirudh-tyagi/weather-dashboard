import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
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
    </form>
  );
}

export default SearchBar;
