import React, { useState } from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    if (!apiKey) {
      alert('API key not found.');
      return;
    }

    try {
      const { data } = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
      );
      setWeather(data);
    } catch (error) {
      alert('City not found or API issue');
      setWeather(null);
    }
  };

  const backgroundImage = getBackgroundImage(weather);

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      
      <div className="overlay">
        <h1 className="Weather Dashboard using React and API">Weather Dashboard</h1>
        <SearchBar onSearch={fetchWeather} />
        {weather && <WeatherCard data={weather} />}
      </div>
    </div>
  );
}

function getBackgroundImage(weather) {
  if (!weather) return '/bg/default.jpg';

  const condition = weather.current.condition.text.toLowerCase();

  if (condition.includes('sunny') || condition.includes('clear')) return '/bg/sunny.jpg';
  if (condition.includes('cloud')) return '/bg/cloudy.jpg';
  if (condition.includes('rain') || condition.includes('drizzle')) return '/bg/rainy.jpg';
  if (condition.includes('snow')) return '/bg/snow.jpg';

  return '/bg/default.jpg';
}

export default App;
