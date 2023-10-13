import React from "react";
import "../style/Header.css";
import Logo from "../components/images/Logo.png";
import Show from '../components/images/Component 1.png'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="banner">
      <div>
        <img className="logo" src={Logo} alt="" />

        <div>
          <p className="T1">
            Looking to sell African
            <br />
            <span> things in the USA?</span>
          </p>
        </div>

        <div className="Pbtn">
          <button className="btn">Join Mamaket</button>
          <p className="btn-text">
            An African marketplace for buying, selling and celebrating culture
          </p>
        </div>
      </div>
      <div className="greenbackground">
         <img src={Show} alt="" className="show-pic" />
      </div>
    </div>
  );
};

export default Header;
