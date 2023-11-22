import React from 'react'
import React, { useState } from 'react';

const AC = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    if(temperatureValue === 30) return;
    const newTemperature = temperatureValue + 1;

    if (newTemperature >= 15) {
      setTemperatureColor('hot');
    }

    setTemperatureValue(newTemperature);
  };

  const decreaseTemperature = () => {
    if(temperatureValue === 0) return;
    const newTemperature = temperatureValue - 1;

    if (newTemperature < 15) {
      setTemperatureColor('cold');
    }

    setTemperatureValue(newTemperature);
  };

  return (
    <div className='app-container'>
      <div className={`temperature-display ${temperatureColor}`}>
      <div></div>
        <div> {temperatureValue + "°C"}</div>
      </div>
      <div className='button-container'>
        <button onClick={() => increaseTemperature()}>+</button>
        <button onClick={() => decreaseTemperature()}>-</button>
      </div>
    </div>
  );
};


export default AC