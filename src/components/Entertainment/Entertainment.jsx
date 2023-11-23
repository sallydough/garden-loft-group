import './entertainment.css'
import { useState } from 'react';
import LockIcon from "@mui/icons-material/Lock";
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/material";


const Entertainment = () => {

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


  return (
      <div id="entertainment">
               <div className="lock-content" style={ lock ? greenBackground : greyBackground}>
        <LockIcon />
        {/* {lock} */}
        <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Off</Typography>
        <AntSwitch onClick={handleLockChange} defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
        <Typography>On</Typography>
      </Stack>
      </div>
      </div>
  );
}


export default Entertainment

