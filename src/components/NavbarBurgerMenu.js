import React, { useRef, useState } from "react";
import "../css/navbarBurgerMenu.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
import Pierscionek from "../img/Pierscionek.png";import { Link, useNavigate } from "react-router-dom";
const NavbarBurgerMenu = () => {
  const offcanvasRef = useRef(null);
  const navigate = useNavigate();


  const [zakupyOpen, setZakupyOpen] = useState(false);
  const [kontaktOpen, setKontaktOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);
  const [openKolczyki, setOpenKolczyki] = useState(false);
  const [openNaszyjniki, setOpenNaszyjniki] = useState(false);
const [openSztuczne, setOpenSztuczne] = useState(false);
const [openStal, setOpenStal] = useState(false);
const [openStalNaszyjnik, setOpenStalNaszyjnik] = useState(false);
const [openSztucznaNaszyjnik, setOpenSztucznaNaszyjnik] = useState(false);


  const handleLinkClick = (path) => {
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasRef.current);
    if (bsOffcanvas) {
      bsOffcanvas.hide();
      setTimeout(() => {
        document.body.classList.remove("offcanvas-backdrop");
        const backdrop = document.querySelector(".offcanvas-backdrop");
        if (backdrop) backdrop.remove();
        navigate(path);
      }, 150);
    } else {
      navigate(path);
    }
  };
  
  
  

  const toggleSubmenu = (submenu) => {
    if(submenu === "kolczyki") { setOpenKolczyki((prev) => !prev)}
  }
  const toggleSubmenu2 = (submenu) => {
    if(submenu === "naszyjniki") {setOpenNaszyjniki((prev) => !prev)}
  } 
  
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
        <img src={Pierscionek} className="burger-menu-img" alt="" /> Menu
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
    <i className={`fa-solid fa-arrow-down transition ${zakupyOpen ? "rotate-180" : ""}`}></i>
  </button>

  {/* GŁÓWNE SUBMENU ZAKUPÓW */}
  <ul className={`submenu list-unstyled ps-3 ${zakupyOpen ? "submenu-open" : ""}`}>
    <hr />

    {/* 1. KOLCZYKI (z pod-submenu) */}
   {/* 1. KOLCZYKI */}
<li>
  <button
    className="nav-link w-100 text-start d-flex justify-content-between align-items-center"
    onClick={() => toggleSubmenu("kolczyki")}
  >
    Kolczyki
    <i className={`fa-solid fa-arrow-down transition ${openKolczyki ? "rotate-180" : ""}`}></i>
  </button>

  <ul className={`submenu list-unstyled ps-3 ${openKolczyki ? "submenu-open" : ""}`}>
    {/* Stal Chirurgiczna - podkategorie */}
    <li className="nav-item">
      <button className="nav-link w-100 text-start d-flex justify-content-between align-items-center" onClick={() => setOpenStal(!openStal)}>
        Stal Chirurgiczna
        <i className={`fa-solid fa-arrow-down transition ${openStal ? "rotate-180" : ""}`}></i>
      </button>
      <ul className={`submenu list-unstyled ps-4 ${openStal ? "submenu-open" : ""}`}>
        {/* PRAWIDŁOWA NAWIGACJA: */}
        <li><Link className="nav-link" onClick={() => handleLinkClick("/ear-rings/stal/pozlacane")}>Pozłacane</Link></li>
        <li><Link className="nav-link" onClick={() => handleLinkClick("/ear-rings/stal/platerowane")}>Platerowane</Link></li>
        <li><Link className="nav-link" onClick={() => handleLinkClick("/ear-rings/stal/srebrne")}>Srebrne</Link></li>
        <li><Link className="nav-link" onClick={() => handleLinkClick("/ear-rings/stal/kwiaty")}>Kwiaty</Link></li>
        <li><Link className="nav-link" onClick={() => handleLinkClick("/ear-rings/stal/serca-kokardy")}>Serca / Kokardy</Link></li>
        <li><Link className="nav-link" onClick={() => handleLinkClick("/ear-rings/stal/ślublne")}>Ślubne</Link></li>
        <li><Link className="nav-link" onClick={() => handleLinkClick("/ear-rings/stal/literki")}>Literki</Link></li>
        <li> <Link className="nav-link" onClick={() => handleLinkClick("/ear-rings/stal/wykwintne")}>Wykwintne</Link></li>
      </ul>
    </li>

    {/* Sztuczne */}
    <li className="nav-item">
      <button className="nav-link w-100 text-start d-flex justify-content-between align-items-center" onClick={() => setOpenSztuczne(!openSztuczne)}>
        Sztuczne
        <i className={`fa-solid fa-arrow-down transition ${openSztuczne ? "rotate-180" : ""}`}></i>
      </button>
      <ul className={`submenu list-unstyled ps-4 ${openSztuczne ? "submenu-open" : ""}`}>

<li><Link className="nav-link" onClick={() => handleLinkClick("/ear-rings/sztuczna/chwosty")}>Chwosty</Link></li>
<li><Link className="nav-link" onClick={() => handleLinkClick("/ear-rings/sztuczna/uchu")}>Przy Uchu</Link></li>
<li><Link className="nav-link" onClick={() => handleLinkClick("/ear-rings/sztuczna/wiszace")}>Wiszące</Link></li>
<li><Link className="nav-link" onClick={() => handleLinkClick("/ear-rings/sztuczna/kwiaty")}>Kwiaty</Link></li>
      </ul>
    </li>
   <li className="nav-item">
  <button 
    className="nav-link w-100 text-start d-flex justify-content-between align-items-center" 
    onClick={() => handleLinkClick("/ear-rings/srebro")} // TO JEST KLUCZOWE
  >
    Srebrne
  </button>
</li>
  </ul>
</li>
    <hr />

    {/* 2. NASZYJNIKI */}
{/* 2. NASZYJNIKI */}
{/* 2. NASZYJNIKI */}
<li>
  <button
    className="nav-link w-100 text-start d-flex justify-content-between align-items-center"
    onClick={() => toggleSubmenu2("naszyjniki")}
  >
    Naszyjniki
    <i className={`fa-solid fa-arrow-down transition ${openNaszyjniki ? "rotate-180" : ""}`}></i>
  </button>
  
  <ul className={`submenu list-unstyled ps-3 ${openNaszyjniki ? "submenu-open" : ""}`}>
    {/* Stal Chirurgiczna - podkategorie */}
    <li className="nav-item">
      <button 
        className="nav-link w-100 text-start d-flex justify-content-between align-items-center" 
        onClick={() => setOpenStal(!openStal)} // Używamy openStal do kontrolowania tej listy
      >
        Stal Chirurgiczna
        <i className={`fa-solid fa-arrow-down transition ${openStal ? "rotate-180" : ""}`}></i>
      </button>
      
    
      <ul className={`submenu list-unstyled ps-4 ${openStal ? "submenu-open" : ""}`}>
        <li><Link className="nav-link" onClick={() => handleLinkClick("/necklace/stal/pozlacane")}>Pozłacane</Link></li>
        <li><Link className="nav-link" onClick={() => handleLinkClick("/necklace/stal/serca-kokardy")}>Serca / Kokardy</Link></li>
        <li><Link className="nav-link" onClick={() => handleLinkClick("/necklace/stal/literki")}>Literki / Napisy</Link></li>
        <li><Link className="nav-link" onClick={() => handleLinkClick("/necklace/stal/kwiaty")}>Kwiaty</Link></li>
        <li><Link className="nav-link" onClick={() => handleLinkClick("/necklace/stal/wykwintne")}>Wykwintne</Link></li>
        <li><Link className="nav-link" onClick={() => handleLinkClick("/necklace/stal/srebro")}>Srebrne</Link></li>
      </ul>
    </li>
    <li className="nav-item">
      <button 
        className="nav-link w-100 text-start d-flex justify-content-between align-items-center" 
        onClick={() => setOpenStal(!openSztuczne)} // Używamy openStal do kontrolowania tej listy
      >
        Sztuczne
        <i className={`fa-solid fa-arrow-down transition ${openSztuczne ? "rotate-180" : ""}`}></i>
      </button>
      
    
      <ul className={`submenu list-unstyled ps-4 ${openSztuczne ? "submenu-open" : ""}`}>
        <li><Link className="nav-link" onClick={() => handleLinkClick("/necklace/sztuczna/pozlacane")}>Pozłacane</Link></li>
        <li><Link className="nav-link" onClick={() => handleLinkClick("/necklace/sztuczna/serca-kokardy")}>Serca / Kokardy</Link></li>
        <li><Link className="nav-link" onClick={() => handleLinkClick("/necklace/sztuczna/literki")}>Literki / Napisy</Link></li>
        <li><Link className="nav-link" onClick={() => handleLinkClick("/necklace/sztuczna/kwiaty")}>Kwiaty</Link></li>
        <li><Link className="nav-link" onClick={() => handleLinkClick("/necklace/sztuczna/wykwintne")}>Wykwintne</Link></li>
        <li><Link className="nav-link" onClick={() => handleLinkClick("/necklace/sztuczna/srebro")}>Srebrne</Link></li>
      </ul>
    </li>
  </ul>
</li>
    <hr />

    {/* 3. BRANSOLETKI */}
    <li>
      <Link to="/bracelet" className="nav-link" onClick={(e) => { e.preventDefault(); handleLinkClick("/bracelet"); }}>
        Bransoletki <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </li>
    <hr />

    {/* 4. PIERŚCIONKI */}
    <li>
      <Link to="/rings" className="nav-link" onClick={(e) => { e.preventDefault(); handleLinkClick("/rings"); }}>
        Pierścionki <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </li>
    <hr />
  </ul>
</li>
              <hr></hr>
             
           

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
