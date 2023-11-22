// import React from 'react';
import React, { useEffect, useState } from 'react';
import './entertainment.css'

const Entertainment = () => {


  const [lightReading, setLightReading] = useState(null);

  useEffect(() => {
      const socket = new WebSocket('ws://homeassistant.local:8123/api/websocket');  // Replace with the actual IP and port

      socket.onmessage = (event) => {
          const data = JSON.parse(event.data);
          setLightReading(data.lightReading);
      };

      return () => {
          socket.close();
      };
  }, []);

  return (
      <div>
          <h1>Light Sensor Reading: {lightReading}</h1>
      </div>
  );
}


export default Entertainment

