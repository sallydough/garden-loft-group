
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
    const lightDeviceAll = light.map(({ id, name }) => {
      return (
        <div key={id} className="device lock-content"style={ lock ? greenBackground : greyBackground}>
          <LightbulbIcon style={iconStyle} />
          <h1>{name}</h1>
        <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Off</Typography>
        <AntSwitch onClick={handleLockChange} defaultChecked inputProps={{ 'aria-label': 'ant design' }}  />
        <Typography>On</Typography>
      </Stack>
      <div onClick={toggleSwitch} className='light-switch'>Change Light</div>
      </div>
  
      );
    });

    setLight(lightDeviceAll);
  };

  // lock usestate
  // useState for changing color of lock
const [lock, setLock] = useState(false);

let greenBackground = {
  backgroundColor: 'green'
}
let greyBackground = {
  backgroundColor: 'grey'
}
const handleLockChange = () => {
  setLock(!lock)

  if(lock) {
    console.log("Lock is on")
    // color to be green
    // lockStyle.backgroundColor = 'green'
  } else {
    console.log("lock is off")
    // lockStyle.backgroundColor = 'grey'
    // color to be grey
  }
  // console.log("Lock is " + lock ? "on" : "off")
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

// Duncan's code for light

const delay = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));


const socket = new WebSocket("ws://homeassistant.local:8123/api/websocket");

socket.onopen = async (event) => {
  console.log("WebSocket connection opened:", event);

  // Authenticate with Home Assistant
  socket.send(
    JSON.stringify({
      type: "auth",
      access_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI3ZTA5NDg5M2E3NGI0MDY1OWFmMzYzYTJkMDYzOGJhMiIsImlhdCI6MTcwMDc3NDU5MCwiZXhwIjoyMDE2MTM0NTkwfQ.VV19RhjO5Dsc01D3g21NV27WlJeioWmvowtibkqsQ5k", // Replace with your access token
    })
  );

  // Listen to changes sent by IOT
  socket.send(
    JSON.stringify({
      id: incrimentalId,
      type: "subscribe_events",
    })
  );

  await delay(500);
  // Call getCurrentSwitchState immediately when the page loads

  getCurrentState();
};

let switchState;

//process recieved messages
socket.onmessage = (event) => {
  try {
    // console.log(event);
    const receivedData = JSON.parse(event.data);

    if (
      receivedData.type === "event"
      // && Array.isArray(receivedData.result)
    ) {
      let background = document.getElementById("background");
      let iotSwitch = document.getElementById("switch");

      // console.log("receivedData.event");

      if (receivedData.event.data.entity_id === "switch.thing2") {
        switchState = receivedData.event.data.new_state.state === "on";

        if (switchState) {
          //if its on, check the toggleswithc, and add "on" to the body
          iotSwitch.checked = true;
          background.classList.remove("on", "off");
          background.classList.add("on");
        } else {
          iotSwitch.checked = false; //if its off, check the toggle switch, and add "off" to the body
          background.classList.remove("on", "off");
          background.classList.add("off");
        }
      }

      // initial state sensing

      if (
        receivedData.type === "result" &&
        Array.isArray(receivedData.result)
      ) {
        const resultArray = receivedData.result;
        console.log(resultArray);
        for (let i = 0; i < resultArray.length; i++) {
          let currentEntry = resultArray[i];
          if (currentEntry.entity_id === "switch.thing2") {
            switchState = currentEntry.state;
            const iotThing = document.getElementById("switch");
            if (switchState === "on") {
              iotThing.checked = true;
            } else {
              iotThing.checked = false;
            }

            //console.log(switchState);
            switchContainer.classList.remove("on", "off"); //Remove both classes
            switchContainer.classList.add(switchState); // Add the current state as a class
            break;
          }
        }
      } else {
        // console.warn(
        //   "Received data does not match the expected format:",
        //   receivedData
        // );
      }
    }
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }

  // manualToggle = false; // make sure we know the button hasnt been pushed in the last wee bit
};

//closing the websocket
socket.onclose = (event) => {
  console.log("WebSocket connection closed:", event);
};
//sending message to the pi
// function sendMessage(message) {
//   console.log("Sending message:", message);
//   socket.send(message);
// }

function sendMessage(message) {
  if (socket.readyState === WebSocket.OPEN) {
    console.log("Sending message:", message);
    socket.send(message);
  } else {
    console.error('WebSocket not open yet. Unable to send message:', message);
  }
}


// start a counter so theres a different id every time
let incrimentalId = 1;

//get the current state of the switch
function getCurrentState() {
  const message = JSON.stringify({
    id: incrimentalId,
    type: "get_states",
  });
  incrimentalId++;
  console.log(message);
  sendMessage(message);
}

// Call getCurrentSwitchState every 2 seconds, unless theres been a manual switch recently
// setInterval(getCurrentState, 1000);

//tell the switch to toggle
function toggleSwitch() {
  // manualToggle = true;
  const message = JSON.stringify({
    id: incrimentalId,
    type: "call_service",
    domain: "switch",
    service: "Toggle",
    service_data: {
      entity_id: "switch.thing2", // Replace with whatever the entity ID is when copying
    },
  });
  sendMessage(message);
  incrimentalId++;
}
  

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