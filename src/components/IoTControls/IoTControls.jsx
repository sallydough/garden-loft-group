import React from "react";
import "./iotcontrols.css";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import HttpsIcon from '@mui/icons-material/Https';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import { useState } from "react";


const IoTControls = () => {
  const iconStyle = {
    fontSize:'70px'
  }

const [light, setLight] = useState("Light Info")

const handleLightChange = () => {
  const light = [ 
    // "Sally", "Lema", "Merseret", "Chitra", "Jocelyn"
    
    {
    id: 1,
    name: "Device 1",
    state: true,
  },
  {
    id: 2,
    name: "Device 2",
    state: true,
  } 
  ];

  const lightDeviceAll = light.map(({id, name, state}) => {
    return (
      <div key={id} className="device">
        <h1>{name}</h1>
        <h1>{state}</h1>
      </div>
    )
  })
  setLight(lightDeviceAll);
};

  return (
    <section id="iotControls">
      <div className="iotControls-main">
        <article onClick={handleLightChange}className="control__card">
          <LightbulbIcon style={iconStyle}/>
          <h5>Lights</h5>
        </article>
        <article onClick={handleLightChange} className="control__card">
        <ThermostatIcon style={iconStyle}/>
          <h5>Temperature</h5>
        </article>
        <article onClick={handleLightChange} className="control__card">
          <HttpsIcon style={iconStyle}/>
          <h5>Lock</h5>
        </article>
        <article onClick={handleLightChange}className="control__card">
          <DevicesOtherIcon style={iconStyle}/>
          <h5>Other</h5>
        </article>
      </div>

      <div className="light-content">
        {light}
      </div>
    </section>
  );
};

export default IoTControls;
