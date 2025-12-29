import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";

function App() {
  // Hardcoded weather data
  const [weather, setWeather] = useState({
    temperature: 25,
    conditions: "Sunny"
  });

  return (
    <div className="App">
      <h1>Weather Report</h1>
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;
