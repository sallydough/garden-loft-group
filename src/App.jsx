import "./App.css";
import Nav from './components/Nav/Nav'
import HomePage from './components/HomePage/HomePage'
import Contacts from './components/Contacts/Contact'
import IoTControls from './components/IoTControls/IoTControls'
import Calendar from './components/Calendar/Calendar'
import Entertainment from './components/Entertainment/Entertainment'
import Settings from './components/Settings/Settings'
import Lights from "./components/IoTControls/Lights/Lights";
import AC from "./components/IoTControls/Temp/AC";
// import {BrowserRouter,Routes, Route, Link} from 'react-router-dom'


function App() {
  return (
    <>
    {/* <BrowserRouter>
      <Nav />
      <HomePage />
    <Routes>
      <Route path='/' element={<IoTControls />}></Route>
    </Routes>
    
    </BrowserRouter> */}
    <div id="/" className="App">
      <Nav />
     <Lights />
    {/* <IoTControls/>
     <HomePage/> 
      
      <Entertainment/>
      <AC />
      <Calendar/>
      <Contacts/>
      <Settings/> */}
      </div> 

    </>
  );
}

export default App;