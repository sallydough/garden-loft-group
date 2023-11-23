
import './lights.css'
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import HttpsIcon from "@mui/icons-material/Https";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import { useState } from "react";
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/material";
// import LockOpenIcon from '@mui/icons-material/LockOpen';

const Lights = () => {
  const iconStyle = {
    fontSize: "70px",
  };

  // array of devices and useState for Light button
  const [light, setLight] = useState("Light Info");

  const handleLightChange = () => {
    const light = [
      {
        id: 1,
        name: "Living Room",
        state: true,
      },
      {
        id: 2,
        name: "Bedroom",
        state: true,
      },
      {
        id: 3,
        name: "Bathroom",
        state: true,
      },
      {
        id: 4,
        name: "Dining Room",
        state: true,
      },
    ];

    // maps through array of light devices and displays them in useState component {light} below
    const lightDeviceAll = light.map(({ id, name, state }) => {
      return (
        <div key={id} className="device">
          <LightbulbIcon style={iconStyle} />
          <h1>{name}</h1>
          <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Off</Typography>
        <AntSwitch style={iconStyle} defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
        <Typography>On</Typography>
      </Stack>
        </div>
      );
    });

    setLight(lightDeviceAll);
  };

  // toggle button of lock
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));

  // const lock = [
  //   {
  //     id: 1,
  //     icon: '<LockOpenIcon />',
  //     toggle: 'defaultChecked',
  //   }

    
  // ]

  // TODO check what the original state is when the component
  // is mounted instead of defaulting to false
  // TODO listen for changes on external light switch data
  /**
   * IOTListener((lightData) => {
   *    if(lightData.on) setLock(true)
   *    else setLock(false)
   * })
   */
  

  return (
    <section id="lightControls">
      <div className="lightControls-main">
        <article onClick={handleLightChange} className="control__card-light">
          <LightbulbIcon style={iconStyle} />
          <h5>Lights</h5>
        </article>
        <article onClick={handleLightChange} className="control__card-light">
          <ThermostatIcon style={iconStyle} />
          <h5>Temperature</h5>
        </article>
        <article onClick={handleLightChange} className="control__card-light">
          <HttpsIcon style={iconStyle} />
          <h5>Lock</h5>
        </article>
        <article onClick={handleLightChange} className="control__card-light">
          <DevicesOtherIcon style={iconStyle} />
          <h5>Other</h5>
        </article>
      </div>

      <div className="lights-content">{light}</div>

      
    </section>
  );
};

export default Lights;