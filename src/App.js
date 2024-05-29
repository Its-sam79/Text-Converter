import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import Textbox from './Components/Textbox.js';
import showAlert from './Components/Alert.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import { useState } from 'react';
import Alert from './Components/Alert.js';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// import { BrowserRouter as Router, Routes, Route, Switch, Link } from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout ( () =>{
      setAlert(null);
    },1000);
  }
  


  return (
    <>
      {/* <Router> */}

        <Navbar title="ConvertText" about="AboutCovert" showAlert={showAlert} />
        <Alert alert={alert} />

        {/* <Routes> */}

          {/* <Route path="/textbox" element={ */}
            <Textbox heading="Enter Text to Convert" showAlert={showAlert}/>
          {/* } /> */}

          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path='/contact' element={<Contact/>} /> */}

        {/* </Routes> */}

      {/* </Router> */}

    </>
  );
}

export default App;
