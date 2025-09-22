import React from "react";
import { Link } from "react-router-dom";

const ShowSquare2 = ({ show, setShow }) => {
  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{
        display: "inline-block",
        marginLeft: "20px",
        position: "relative",
        padding: "10px 15px",
      }}
    >
      <a className="look desktop-only" href="#">
        Zakupy <i className="fa-solid fa-arrow-down"></i>
      </a>

      {show && (
        <div
          className="Navbar-squeres desktop-only"
          style={{
            width: "150px",
            height: "200px",
            left: "0",
            top: "40px",
          }}
        >
   

<ul  className="ui list navbar-ul-list list " style={{ fontSize: '14px',listStyleType: 'none !important', padding: 0, margin: '10px'}}>
  <li>
    <Link className="navbar-li-list" to="/category/electronics">Kolczyki</Link>
  </li>
  <li>
    <Link className="navbar-li-list" to="/category/fashion"> Branzoletki </Link>
  </li>
  <li>
    <Link className="navbar-li-list" to="/category/beauty">Naszyjniki</Link>
  </li>
  <li>
    <Link className="navbar-li-list" to="/category/home"> Dom</Link>
  </li>
  <li>
    <Link className="navbar-li-list" to="/category/sport">Sport    </Link>
  </li>
</ul>

        </div>
      )}
    </div>
  );
};

export default ShowSquare2;
