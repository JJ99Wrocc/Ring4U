import React from "react";
import '../css/index.css';


const Header = () =>{
  
    return(
        <div className="ui raised very padded text home-segment main">
          <div className="img-header">
                <div className="header-text">MASZ TO</div>
                <a  href="#product" className="header-button">Zrób zakupy </a>
                <button  className="heder-button-shadow"></button>
          </div>
        </div>
    )
}

export default Header;