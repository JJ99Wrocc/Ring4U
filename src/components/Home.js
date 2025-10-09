import React from "react";
import '../css/index.css';


const Header = () =>{
  
    return(
        <div className=" very padded text home-segment main header-animate container">
          <div className="img-header">
                <h2 className="header-text"><span className="pink">Biżuteria</span>, która podkreśla każdą chwilę</h2>
                <a  href="#product" className="header-button">Poznaj ofertę </a>
          </div>
          {/* <div className="img-header-shadow"></div> */}

        </div>
    )
}

export default Header;