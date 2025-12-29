import React from "react";

function WeatherDisplay({ weather }) {
  const { temperature, conditions } = weather;

  // Conditional styling: red if > 20°C, else blue
  const tempStyle = {
    color: temperature > 20 ? "red" : "blue"
  };

  return (
    <div>
      <p>
        Temperature: <span style={tempStyle}>{temperature}</span>
      </p>
      <p>Conditions: {conditions}</p>
    </div>
  );
}

export default WeatherDisplay;
