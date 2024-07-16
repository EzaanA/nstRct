import { useState } from 'react';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

const Header = ()=>{

  const[buttonEl,setbuttonEl]=useState("login");
  
  // console.log('header componenet called');

  return(
  <div className="navbar">
    <div className="logo">
    <img className="logoimg" 
    src={logo} />
    </div>
    <div className="navItems">
      <ul className="ulList">

        <li>
        <Link to="/">Home</Link>
        </li>

        <li>
        <Link to="/about">About Us</Link>
        </li>
        <li>
        <Link to="/contact">Contact Us</Link>
        </li>
        <li>Cart</li>
        <button className="logiin"
        onClick={()=>{
          buttonEl === "login" ? setbuttonEl("logout") : setbuttonEl("login");
        }}
        >{buttonEl}</button>
      </ul>
    </div>
  </div>
  )
};

export default Header;