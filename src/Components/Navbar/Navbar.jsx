import React from 'react';
import logo from '../../assets/Home/logo.png'
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import './Navbar.css'

const Navbar = () => {
  return (

<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand" href="#"><img className="logo" src={logo} width="120" height="90" alt='logo...'/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars}/>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact Me</a>
      </li>
     
    </ul>
  </div>
</nav>
  )
}
export default Navbar;