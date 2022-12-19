/* eslint-disable jsx-a11y/alt-text */
import { useRef } from "react";
import { FaBars, FaTimes ,FaUser , FaEnvelope, FaBook } from "react-icons/fa";
import "./Navbar.css";
import Logo from "./Images/butterfly.png";
// import HomePage from '../Home Page/homePage'
// import {
// 	BrowserRouter as Router,
// 	Switch,
// 	Route,
// 	Redirect,
//   } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="header ">
      <h1>
        <img className="image" src={Logo} /> Mindance{" "}
      </h1>
      <nav ref={navRef}>
        <a href="/#">Contact</a>
        <a href="/#homePage">FAQ</a>
        <a href="/#">About us</a>
        <a href="/#"><FaEnvelope /></a>
        <a href="/#"><FaBook/></a>
        <a href="/#"><FaUser /></a>

        
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;
