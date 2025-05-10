
import React, { useState } from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
      );
      setWeather(response.data);
    } catch (error) {
      alert('City not found or API issue');
      setWeather(null);
    }
  };

  const getBackgroundImage = () => {
    if (!weather) return '/bg/default.jpg';

    const condition = weather.current.condition.text.toLowerCase();

    if (condition.includes('sunny') || condition.includes('clear')) return '/bg/sunny.jpg';
    if (condition.includes('cloud')) return '/bg/cloudy.jpg';
    if (condition.includes('rain') || condition.includes('drizzle')) return '/bg/rainy.jpg';
    if (condition.includes('snow')) return '/bg/snow.jpg';

    return '/bg/default.jpg';
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${getBackgroundImage()})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: 'white',
      }}
    >
      <div className="overlay">
        <SearchBar onSearch={fetchWeather} />
        {weather && <WeatherCard data={weather} />}
      </div>
    </div>
  );
}
export default App;