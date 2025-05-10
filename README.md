# Weather Dashboard

## Project Description

The Weather Dashboard is a minimalist, responsive React web application that provides real-time weather data for cities around the world. Users can search for a city using an intuitive search bar with autocomplete suggestions. Upon selection, the dashboard displays relevant weather metrics such as temperature, humidity, and forecast using data fetched from a weather API.

This project is designed for ease of use, clean UI aesthetics, and extensibility. It serves as a foundational template for developers looking to build or extend weather-based applications using React.

## 🚀 Live Demo

Check out the deployed app here: [Weather Dashboard Live](https://weather-dashboard-kappa-five.vercel.app/)

## 🖼️ Screenshot

![Weather Dashboard Screenshot](screenshot.png)

## Tech Stack

- React.js (Frontend framework)
- JavaScript (Logic and interactivity)
- CSS (Inline and utility styling)
- Weather API (WeatherAPI)
- HTML5 (Semantic structure)
- Optional: Vercel

## Features and Functionality

- Real-time weather data retrieval
- City search input with static autocomplete suggestions
- Clean, modern UI with responsive design
- Error handling for invalid inputs or unavailable data
- Modular component structure for maintainability
- Styled input elements with interactive suggestion dropdown
- Easily extendable for multi-day forecast or geolocation-based search

## Setup Instructions

1. **Clone the repository:**

   ```
   git clone https://github.com/anirudh-tyagi/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Install dependencies:**

   Ensure you have Node.js and npm installed. Then run:

   ```
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory and add your weather API key:

   ```
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```

4. **Run the development server:**

   ```
   npm start
   ```

   This will launch the app at `http://localhost:3000`.

5. **Build for production:**

   To create a production-ready build:

   ```
   npm run build
   ```

6. **Deploy (optional):**

   You can deploy the build folder using services like Vercel, Netlify, or GitHub Pages.

---

For issues or feature requests, please open an issue on the project repository.
