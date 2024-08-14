import { Link } from "react-router-dom";
import React from 'react';
import { Grid } from "antd";

import FurniroLogo from "../Assets/Images/FurniorLogo.png";
import { FaRegHeart, FaRegUser, FaSistrix, FaShoppingCart } from "react-icons/fa";
function Header() {
  

  return (
    <>
      <div className="header-container container">
        <div className="header-logo">
          <img src={FurniroLogo} alt="logo" />
        </div>

        <div className="links ">
          <Link to="/">Home</Link>
          <Link  to={{ pathname: "/Shop", state: { greet: "hello" } }} >Shop</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>

        <div className="icons">
          <span>
            <FaRegUser />
          </span>
          <span>
            <FaRegHeart />
          </span>
          <span>
            <FaSistrix />
          </span>
          <span>
          <FaShoppingCart />
          </span>
        </div>
      </div>


    


      
    </>
  );
}

export default Header;
