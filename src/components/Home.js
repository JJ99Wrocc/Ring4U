import React from "react";
import '../css/home.css';
import { FaChevronDown } from "react-icons/fa";


const Header = () =>{
  const handleClick = () => {
    document.getElementById('product').scrollIntoView({ behavior: 'smooth' });
  }
    return(
       
        <div>  <div className="img-box">
                <div className="img-shadow-box"></div>
                <h1 className="header-text">Biżuteria, która podkreśla każdą chwilę</h1>
                <a  href="#product" className="header-button">Poznaj ofertę </a>
          </div>
                
                <FaChevronDown className="arrow-down" onClick={handleClick} /></div>
        // </div>
    )
}

export default Header;