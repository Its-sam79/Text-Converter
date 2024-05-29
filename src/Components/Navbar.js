import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert.js';
import App from '../App.js';
// import  form from './Textbox.js'

// import { Link } from "react-router-dom";

export default function Navbar(props) {

  const [textmode, setText] = useState("black");
  const [mode, setMode] = useState('light');
  
  const togglemode = () =>{
    if(mode === 'light'){
      setMode('dark');
      setText("white")
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.textarea.style.backgroundColor="black";
      props.showAlert("Dark mode enable","success");

    }
    else{
      setMode('light')
      setText("dark")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";

    }
    
  }

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${mode} text-${textmode}`}>
        <div className="container-fluid">
          {/* <Link className={`navbar-brand text-${textmode}`} to="/textbox">{props.title}</Link> */}
          <a className={`navbar-brand text-${textmode}`} href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className={`nav-link active text-${textmode}`} aria-current="page" to="/about">{props.about}</Link> */}
                <a className={`nav-link active text-${textmode}`} aria-current="page" href="/">{props.about}</a>
              </li>
              <li className="nav-item">
                {/* <Link className={`nav-link text-${textmode}`} to="/contact">Contact</Link> */}
                <a className={`nav-link text-${textmode}`} href="/contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link disable text-${textmode}`} aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" onClick= {togglemode} role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" for="flexSwitchCheckDefault">{mode}</label>
              </div>
            </form>
          </div>
        </div>
      </nav>


    </>

  );
}

// Navbar.propsType = {
//   title = PropsType.String,
// };
