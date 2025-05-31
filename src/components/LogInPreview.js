import React from "react";
import { Link } from "react-router-dom";


const LogInPreview = ({ show, setShow }) => {
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
          className="Navbar-squeres"
          style={{
            width: "170px",
            height: "160px",
            left: "-100px",
            top: "40px",
          }}
        >
          <ul style={{ listStyleType: 'none', padding: 0, margin: '10px' }}>
            <li className="custom-link">
              <Link to="/login">Zaloguj się / Zarejestruj</Link>
            </li>
            <hr />
            <li className="custom-link">
              <Link to="/login">Moje zamówienia</Link>
            </li>
            <li className="custom-link">
              <Link to="/login">Moje wiadomości</Link>
            </li>
            <li className="custom-link">
              <Link to="/login">Moje Kupony</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LogInPreview;
