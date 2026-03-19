import React from "react";
import '../css/home.css';


const Header = () =>{
  
    return(
        <div className=" very padded text home-segment main header-animate container">
          <div className="img-header">
                <h1 className="header-text">Biżuteria, która podkreśla każdą chwilę</h1>
                <a  href="#product" className="header-button">Poznaj ofertę </a>
          </div>
        

        </div>
    )
}

export default Header;