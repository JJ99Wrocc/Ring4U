import React from "react";
import '../css/index.css';


const Header = () =>{
  
    return(
        <div className="ui raised very padded text home-segment main header-animate">
          <div className="img-header">
                <h2 className="header-text"><span className="pink">Biżuteria</span>, która podkreśla każdą chwilę</h2>
                <a  href="#product" className="header-button">Poznaj ofertę </a>
          </div>
        </div>
    )
}

export default Header;