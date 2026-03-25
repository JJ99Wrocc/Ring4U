import React from "react";
import { Link } from "react-router-dom";
import "../css/ShowSquere2.css"

const ShowSquare2 = ({ show, setShow }) => {
  return (
    <div className="nav-shopping-text"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{
        display: "inline-block",
        marginLeft: "20px",
        position: "relative",
        padding: "10px 15px",left:"-980px"
      }}
    >
      <a className="look desktop-only nav-shopping-text" href="#">
        Zakupy 
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
    <Link className="navbar-li-list" to="/ear-rings">Kolczyki</Link>
  </li>
  <li>
    <Link className="navbar-li-list" to="/necklace">Naszyjniki</Link>
  </li>
  <li>
    <Link className="navbar-li-list" to="/bracelet"> Branzoletki </Link>
  </li>
  <li>
    <Link className="navbar-li-list" to="/rings">Pierścionki</Link>
  </li>
  <li>

  </li>
</ul>

        </div>
      )}
    </div>
  );
};

export default ShowSquare2;
