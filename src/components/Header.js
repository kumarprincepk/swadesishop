import React from "react";
import '../style/Header.css';
import nav from "../assets/images/navigation_icon.png";
import logo from "../assets/images/logo.png";
import dropico from '../assets/images/caret_icon.png';
import bagicon from '../assets/images/icon_bag.png';
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <>
    
    {/* nav icon and logo */}
    <nav class="navbar-light navbg">
        <div className="nlogo">
          <a href="https://fontawesome.com/icons/pencil?s=solid" rel="noreferrer" target="_blank">
            <img src={nav} alt="navigation_icon" />
          </a>
          <a href="https://fontawesome.com/icons/pencil?s=solid" rel="noreferrer" target="_blank">
            <img className="swadesi" src={logo} alt="navigation_icon" />
          </a>
        </div>
    {/* input and search */}
        <div className="insearch">
        <input type="text" placeholder="Search"/>
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>

      <div className="allimg">
    {/* profile name and dropdown */}
        <div className="proname">
            <div class="dropdown">
            <h4>Jhon Doe <img src={dropico} alt="" /></h4>
  
  <div class="dropdown-content">
    <a href="https://fontawesome.com/icons/pencil?s=solid" rel="noreferrer" target="_blank">Profile</a>
    <a href="https://fontawesome.com/icons/pencil?s=solid" rel="noreferrer" target="_blank">My Address</a>
    <a href="https://fontawesome.com/icons/pencil?s=solid" rel="noreferrer" target="_blank">Logout</a>
  </div>
</div>
        </div>
       
  <div className="vl"></div>
    {/* wishlist         */}
    <div className="wih">
        <a className="wishlink" to='/wish'><i class="fa-solid fa-heart"></i><h4> Wishlist</h4>
        <div className="wish">
            
        </div>
            </a>
</div>
        <div className="vl"></div>
    {/* bag */}
        <div className="bag">
        <img src={bagicon} alt="bagicon" />
            <h4> Bag</h4>
        </div>
        </div>
      </nav>
        
    </>
  );
}
