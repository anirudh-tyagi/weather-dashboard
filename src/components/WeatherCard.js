import React from 'react';

function WeatherCard({ data }) {
  const { location, current } = data;

  return (
    <div className="weather-fade">
      <h2>{location.name}, {location.country}</h2>
      <img src={current.condition.icon} alt={current.condition.text} />
      <p>{current.condition.text}</p>
      <h1>{current.temp_c}°C</h1>
      <div style={{ fontSize: '14px', opacity: 0.85 }}>
        <p>Feels like: {current.feelslike_c}°C</p>
        <p>Humidity: {current.humidity}%</p>
        <p>Wind: {current.wind_kph} kph</p>
      </div>
    </div>
  );
}

export default WeatherCard;
