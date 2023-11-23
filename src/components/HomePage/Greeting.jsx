import './greeting.css';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState, useEffect } from 'react';

function getDate() {
  const today = new Date();
  var options = { weekday: 'long', month: 'long', day: 'numeric' , year: 'numeric'};
  return today.toLocaleString('en-US', options);
}

function getTime() {
  const today = new Date();
  const showTime = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  return `${showTime}`
}

const Greeting = () => {
  const [currentDate, setCurrentDate] = useState(getDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(getDate());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const [currentTime, setCurrentTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getTime());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const iconStyle = {
    fontSize: '70px',
  };

  return (
    <section id="greeting-container">
      <div className="date-time">
        <p>{currentDate}</p>
        <p className='currentTime'>{currentTime}</p>
      </div>
      <div className="greeting-change">
        <h1>
          Good Morning <br />
          24 &deg; Sunny
        </h1>
        <LightModeIcon style={iconStyle} />
      </div>
    </section>
  );
};

export default Greeting;
