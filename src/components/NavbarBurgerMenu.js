import React, { useRef, useState } from "react";
import "../css/navbarBurgerMenu.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
import Pierscionek from "../img/Pierscionek.png";import { Link, useNavigate } from "react-router-dom";
const NavbarBurgerMenu = () => {
  const offcanvasRef = useRef(null);


  const [zakupyOpen, setZakupyOpen] = useState(false);
  const [kontaktOpen, setKontaktOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);


  const handleLinkClick = (e) => {
    // e.preventDefault(); // ⛔️ zapobiega przeładowaniu strony
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasRef.current);
    if (bsOffcanvas) {
      bsOffcanvas.hide();
      setTimeout(() => {
        document.body.classList.remove("offcanvas-backdrop");
        const backdrop = document.querySelector(".offcanvas-backdrop");
        if (backdrop) backdrop.remove();
      }, 200);
    }
  
    // 🚀 Ręcznie przejdź do trasy
    const link = e.currentTarget.getAttribute("href") || e.currentTarget.getAttribute("to");
    if (link) window.history.pushState({}, "", link);
  };
  
  


  const toggleZakupy = () => setZakupyOpen((prev) => !prev);
  const toggleKontakt = () => setKontaktOpen((prev) => !prev);
  const toggleAbout = () => setAboutOpen((prev) => !prev);
  const toggleSocial = () => setSocialOpen((prev) => !prev)
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      ref={offcanvasRef}
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
        <img src={Pierscionek} className="burger-menu-img"></img>  Menu
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Zamknij"
        ></button>
      </div>

      <hr />

      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          {/* 🛒 ZAKUPY */}
          <li className="nav-item">
            <button
              className="nav-link w-100 text-start d-flex justify-content-between align-items-center"
              onClick={toggleZakupy}
            >
              Zakupy
              <i
                className={`fa-solid fa-arrow-down transition ${
                  zakupyOpen ? "rotate-180" : ""
                }`}
              ></i>
            </button>
            <ul
              className={`submenu list-unstyled ps-3 ${
                zakupyOpen ? "submenu-open" : ""
              }`}
            >
              <hr></hr>
              <li>
  <Link
    to="/ear-rings"
    className="nav-link"
    onClick={handleLinkClick}
  >
    Kolczyki <i className="fa-solid fa-arrow-right"></i>
  </Link>
</li>
              <hr></hr>
              <li>
  <Link
    to="/necklace"
    className="nav-link"
    onClick={handleLinkClick}
  >
   Naszyjniki <i className="fa-solid fa-arrow-right"></i>
  </Link>
</li>
              <hr></hr>
              <li>
  <Link
    to="/bracelet"
    className="nav-link"
    onClick={handleLinkClick}
  >
    Branzoletki <i className="fa-solid fa-arrow-right"></i>
  </Link>
</li>
              <hr></hr>
              <li>
  <Link
    to="/rings"
    className="nav-link"
    onClick={handleLinkClick}
  >
    Pierścionki <i className="fa-solid fa-arrow-right"></i>
  </Link>
</li>
              <hr></hr>
           
             
            </ul>
          </li>

          <hr />



          {/* ℹ️ O NAS */}
          <li className="nav-item">
            <button
              className="nav-link w-100 text-start d-flex justify-content-between align-items-center"
              onClick={toggleAbout}
            >
              O nas
              <i
                className={`fa-solid fa-arrow-down transition ${
                  aboutOpen ? "rotate-180" : ""
                }`}
              ></i>
            </button>
            <ul
              className={`submenu list-unstyled ps-3 ${
                aboutOpen ? "submenu-open" : ""
              }`}
            >
              {/* <hr></hr>
              <li>
                <a href="#team" className="nav-link" onClick={handleLinkClick}>
                  Zespół
                </a>
              </li> */}
              <hr></hr>
              <li>
                <a href="#mission" className="nav-link" onClick={handleLinkClick}>
                  Nasza misja
                </a>
              </li>
            </ul>
          </li>
          <hr />
          <li className="nav-item">
  <button
    className="nav-link w-100 text-start d-flex justify-content-between align-items-center"
    onClick={toggleKontakt}
  >
    Kontakt
    <i
      className={`fa-solid fa-arrow-down transition ${
        kontaktOpen ? "rotate-180" : ""
      }`}
    ></i>
  </button>

  <ul
    className={`submenu list-unstyled ps-3 ${
      kontaktOpen ? "submenu-open" : ""
    }`}
  >
    <li>
      <a href="#contact" className="nav-link" onClick={handleLinkClick}>
        Formularz
      </a>
    </li>

    <li>
      <button
        className="nav-link w-100 text-start d-flex justify-content-between align-items-center"
        onClick={toggleSocial}
      >
        Social Media
        <i
          className={`fa-solid fa-arrow-down transition ${
            socialOpen ? "rotate-180" : ""
          }`}
        ></i>
      </button>

      {/* Submenu wewnętrzne dla Social Media */}
      <ul
        className={`submenu list-unstyled ps-3 ${
          socialOpen ? "submenu-open" : ""
        }`}
      ><hr></hr>
        <li>
          <a href="https://www.instagram.com" className="nav-link" onClick={handleLinkClick}>
          <i className="fa-brands fa-instagram"></i> Instagram

          </a>
        </li>
 
      </ul>
    </li>
  </ul>
</li>


<hr />
        </ul>
      </div>
    </div>
  );
};

export default NavbarBurgerMenu;
