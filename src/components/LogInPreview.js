import React, { useState } from "react";
import { Link } from "react-router-dom";


const LogInPreview = ({ show, setShow }) => {
  const [user,setUser] = useState(null)
  return (
    <div  className="log"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
     
    >
      <Link to="/login" className="look">
        <i className="fa-solid fa-user "></i>
      </Link> 
      {show && (
        <div
          className="Navbar-squeres after-log-in"
          style={{
            width: "170px",
            height: "85px",
            left: "-100px",
            top: "40px",
          }}
        >
          <ul >
            <li className="custom-link">
              <Link to="/login">Zaloguj się / Zarejestruj</Link>
            </li>
            <hr />
   
          </ul>
        </div>
      )}
    </div>
  );
};

export default LogInPreview;
