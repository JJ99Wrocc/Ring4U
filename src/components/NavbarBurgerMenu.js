import React, { useRef, useState } from "react";
import "../css/navbarBurgerMenu.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
import Pierscionek from "../img/Pierscionek.png";
import { Link, useNavigate } from "react-router-dom";
import ourMission from "./OurMision";

const NavbarBurgerMenu = () => {
  const offcanvasRef = useRef(null);
  const navigate = useNavigate();

  const [zakupyOpen, setZakupyOpen] = useState(false);
  const [kontaktOpen, setKontaktOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);
  const [openKolczyki, setOpenKolczyki] = useState(false);
  const [openNaszyjniki, setOpenNaszyjniki] = useState(false);
  const [openBranzoletkiHand, setOpenBranzoletkiHand] = useState(false);
  const [openSztuczne, setOpenSztuczne] = useState(false);
  const [openStal, setOpenStal] = useState(false);
  const [openStalNaszyjnik, setOpenStalNaszyjnik] = useState(false);
  const [openSztuczneNaszyjniki, setOpenSztuczneNaszyjniki] = useState(false);
  const [openBranzoletkiStalHand, setOpenBranzoletkiStalHand] = useState(false);
  const [openBranzoletkiSztuczneHand, setOpenBranzoletkiSztuczneHand] = useState(false);
  
  // Poprawione i uporządkowane stany dla bransoletek na stopy (Foot)
  const [openBranzoletkiSztuczneFake, setopenBranzoletkiSztuczneFake] = useState(false);
  const [openBranzoletkiFootStal, setOpenBransoletkiFootStal] = useState(false);
  const [openBranzoletkiFootFake, setOpenBransoletkiFootFake] = useState(false);

const [openRingMain, setOpenRingMain] = useState(false);     
const [openRingSteel, setOpenRingSteel] = useState(false);    // Podmenu: Stal Chirurgiczna
const [openRingFake, setOpenRingFake] = useState(false);
  const handleLinkClick = (path) => {
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasRef.current);
    if (bsOffcanvas) {
      bsOffcanvas.hide();
      setTimeout(() => {
        document.body.classList.remove("offcanvas-backdrop");
        const backdrop = document.querySelector(".offcanvas-backdrop");
        if (backdrop) backdrop.remove();
        if (typeof path === "string") navigate(path);
      }, 150);
    } else {
      if (typeof path === "string") navigate(path);
    }
  };

  const toggleSubmenu = (submenu) => {
    if (submenu === "kolczyki") { setOpenKolczyki((prev) => !prev) }
  }
  const toggleSubmenu2 = (submenu) => {
    if (submenu === "naszyjniki") { setOpenNaszyjniki((prev) => !prev) }
  }

  const toggleSubmenu3 = (submenu) => {
    if (submenu === "branzoletkiHand") { setOpenBranzoletkiHand((prev) => !prev) }
  }
  const toggleSubmenu4 = (submenu) => {
    if (submenu === "branzoletkiFoot") { setopenBranzoletkiSztuczneFake((prev) => !prev) }
  }
  const toggleSubmenu5 = (submenu) => {
    if (submenu === "pierscionekStal") { setOpenRingMain((prev) => !prev) }
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
            <ul className={`submenu list-unstyled  ${zakupyOpen ? "submenu-open" : ""}`}>
              <hr />

              {/* 1. KOLCZYKI */}
              <li>
                <button
                  className="nav-link w-100 text-start d-flex justify-content-between align-items-center"
                  onClick={() => toggleSubmenu("kolczyki")}
                >
                  Kolczyki
                  <i className={`fa-solid fa-arrow-down transition ${openKolczyki ? "rotate-180" : ""}`}></i>
                </button>

                <ul className={`submenu list-unstyled  ${openKolczyki ? "submenu-open" : ""}`}>
                  {/* Stal Chirurgiczna - podkategorie */}
                  <li className="nav-item">
                    <button className="nav-link w-100 text-start d-flex justify-content-between align-items-center" onClick={() => setOpenStal(!openStal)}>
                      Stal Chirurgiczna
                      <i className={`fa-solid fa-arrow-down transition ${openStal ? "rotate-180" : ""}`}></i>
                    </button>
                    <ul className={`submenu list-unstyled ps-4 ${openStal ? "submenu-open" : ""}`}>
                      <li><Link className="nav-link" onClick={() => handleLinkClick("/ear-rings/stal/pozlacane")}>Pozłacane</Link></li>
                      <li><Link className="nav-link" onClick={() => handleLinkClick("/ear-rings/stal/platerowane")}>Platerowane</Link></li>
                      <li><Link className="nav-link" onClick={() => handleLinkClick("/ear-rings/stal/srebrne")}>Srebrne</Link></li>
                      <li><Link className="nav-link" onClick={() => handleLinkClick("/ear-rings/stal/kwiaty")}>Motywy Kwiatowe</Link></li>
                      <li><Link className="nav-link" onClick={() => handleLinkClick("/ear-rings/stal/serca-kokardy")}>Serca i Kokardy</Link></li>
                      <li><Link className="nav-link" onClick={() => handleLinkClick("/ear-rings/stal/ślublne")}>Kolekcja Ślubna</Link></li>
                      <li><Link className="nav-link" onClick={() => handleLinkClick("/ear-rings/stal/literki")}>Personalizowane (Literki)</Link></li>
                      <li><Link className="nav-link" onClick={() => handleLinkClick("/ear-rings/stal/wykwintne")}>Fashion</Link></li>
                    </ul>
                  </li>

                  {/* Sztuczne */}
                  <li className="nav-item">
                    <button className="nav-link w-100 text-start d-flex justify-content-between align-items-center" onClick={() => setOpenSztuczne(!openSztuczne)}>
                      Kolczyki Fashion
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
                      onClick={() => handleLinkClick("/ear-rings/srebro")}
                    >
                      Srebrne
                    </button>
                  </li>
                </ul>
              </li>
              <hr />

              {/* 2. NASZYJNIKI */}
              <li>
                <button
                  className="nav-link w-100 text-start d-flex justify-content-between align-items-center"
                  onClick={() => toggleSubmenu2("naszyjniki")}
                >
                  Naszyjniki
                  <i className={`fa-solid fa-arrow-down transition ${openNaszyjniki ? "rotate-180" : ""}`}></i>
                </button>
                
                <ul className={`submenu list-unstyled  ${openNaszyjniki ? "submenu-open" : ""}`}>
                  {/* Stal Chirurgiczna - podkategorie */}
                  <li className="nav-item">
                    <button 
                      className="nav-link w-100 text-start d-flex justify-content-between align-items-center" 
                      onClick={() => setOpenStal(!openStal)}
                    >
                      Stal Chirurgiczna
                      <i className={`fa-solid fa-arrow-down transition ${openStal ? "rotate-180" : ""}`}></i>
                    </button>
                    
                    <ul className={`submenu list-unstyled ps-4 ${openStal ? "submenu-open" : ""}`}>
                      <li><Link className="nav-link" onClick={() => handleLinkClick("/necklace/stal/pozlacane")}>Pozłacane</Link></li>
                      <li><Link className="nav-link" onClick={() => handleLinkClick("/necklace/stal/serca-kokardy")}>Serca i Kokardy</Link></li>
                      <li><Link className="nav-link" onClick={() => handleLinkClick("/necklace/stal/literki")}>Personalizowane (Literki)</Link></li>
                      <li><Link className="nav-link" onClick={() => handleLinkClick("/necklace/stal/kwiaty")}>Motywy Kwiatowe</Link></li>
                      <li><Link className="nav-link" onClick={() => handleLinkClick("/necklace/stal/wykwintne")}>Fashion</Link></li>
                      <li><Link className="nav-link" onClick={() => handleLinkClick("/necklace/stal/srebro")}>Srebrne</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <button 
                      className="nav-link w-100 text-start d-flex justify-content-between align-items-center" 
                      onClick={() => setOpenSztuczneNaszyjniki(!openSztuczneNaszyjniki)}
                    >
                      Naszyjniki Fashion
                      <i className={`fa-solid fa-arrow-down transition ${openSztuczneNaszyjniki ? "rotate-180" : ""}`}></i>
                    </button>
                    
                    <ul className={`submenu list-unstyled ps-4 ${openSztuczneNaszyjniki ? "submenu-open" : ""}`}>
                      <li><Link className="nav-link" onClick={() => handleLinkClick("/necklace/sztuczna/choker")}>Chokery</Link></li>
                      <li><Link className="nav-link" onClick={() => handleLinkClick("/necklace/sztuczna/kolia")}>Kolia</Link></li>
                      <li><Link className="nav-link" onClick={() => handleLinkClick("/necklace/sztuczna/fashion")}>Fashion</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <hr />

              {/* 3. BRANSOLETKI NA RĘCE */}
              <li>
                <button
                  className="nav-link w-100 text-start d-flex justify-content-between align-items-center"
                  onClick={() => toggleSubmenu3("branzoletkiHand")}
                >
                  Branzoletki na ręce 
                  <i className={`fa-solid fa-arrow-down transition ${openBranzoletkiHand ? "rotate-180" : ""}`}></i>
                </button>

                <ul className={`submenu list-unstyled  ${openBranzoletkiHand ? "submenu-open" : ""}`}>
                  <li className="nav-item">
                    <button
                      className="nav-link w-100 text-start d-flex justify-content-between align-items-center"
                      onClick={() => setOpenBranzoletkiStalHand(!openBranzoletkiStalHand)}
                    >
                      Stal Chirurgiczna
                      <i className={`fa-solid fa-arrow-down transition ${openBranzoletkiStalHand ? "rotate-180" : ""}`}></i>
                    </button>
                    
                    <ul className={`submenu list-unstyled ps-4 ${openBranzoletkiStalHand ? "submenu-open" : ""}`}>
                      <li><Link className="nav-link" onClick={() => handleLinkClick("/branzoletkiHand/stal/pozlacane")}>Pozłacane</Link></li>
                      <li><Link className="nav-link" onClick={() => handleLinkClick("/branzoletkiHand/stal/serca-kokardy")}>Serca i kokardy</Link></li>
                      <li><Link className="nav-link" onClick={() => handleLinkClick("/branzoletkiHand/stal/kwiaty")}>Motywy kwiatowe</Link></li>
                      <li><Link className="nav-link" onClick={() => handleLinkClick("/branzoletkiHand/stal/fashion")}>Fashion</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link w-100 text-start d-flex justify-content-between align-items-center"
                      onClick={() => setOpenBranzoletkiSztuczneHand(!openBranzoletkiSztuczneHand)}
                    >
                      Fashion
                      <i className={`fa-solid fa-arrow-down transition ${openBranzoletkiSztuczneHand ? "rotate-180" : ""}`}></i>
                    </button>
                    
                    <ul className={`submenu list-unstyled ps-4 ${openBranzoletkiSztuczneHand ? "submenu-open" : ""}`}>
                     
                      <li><Link className="nav-link" onClick={() => handleLinkClick("/branzoletkiHand/sztuczna/fashion")}>Fashion</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <hr />

              {/* 4. BRANSOLETKI NA STOPY */}
              <li>
                <button
                  className="nav-link w-100 text-start d-flex justify-content-between align-items-center"
                  onClick={() => toggleSubmenu4("branzoletkiFoot")}
                >
                  Branzoletki na stopy
                  <i className={`fa-solid fa-arrow-down transition ${openBranzoletkiSztuczneFake ? "rotate-180" : ""}`}></i>
                </button>

                <ul className={`submenu list-unstyled  ${openBranzoletkiSztuczneFake ? "submenu-open" : ""}`}>
                  <li className="nav-item">
                    <button
                      className="nav-link w-100 text-start d-flex justify-content-between align-items-center"
                      onClick={() => setOpenBransoletkiFootStal(!openBranzoletkiFootStal)}
                    >
                      Stal Chirurgiczna
                      <i className={`fa-solid fa-arrow-down transition ${openBranzoletkiFootStal ? "rotate-180" : ""}`}></i>
                    </button>
                    
                    <ul className={`submenu list-unstyled ps-4 ${openBranzoletkiFootStal ? "submenu-open" : ""}`}>
                      <li><Link className="nav-link" onClick={() => handleLinkClick("/branzoletkiFoot/stal/pozlacane")}>Pozłacane</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link w-100 text-start d-flex justify-content-between align-items-center"
                      onClick={() => setOpenBransoletkiFootFake(!openBranzoletkiFootFake)}
                    >
                      Fashion
                      <i className={`fa-solid fa-arrow-down transition ${openBranzoletkiFootFake ? "rotate-180" : ""}`}></i>
                    </button>
                    
                    <ul className={`submenu list-unstyled ps-4 ${openBranzoletkiFootFake ? "submenu-open" : ""}`}>
                      <li><Link className="nav-link" onClick={() => handleLinkClick("/branzoletkiFoot/sztuczna/fashion")}>Fashion</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <hr />

              {/* 5. PIERŚCIONKI */}
           {/* 5. 💍 PIERŚCIONKI */}
<li>
  <button
    className="nav-link w-100 text-start d-flex justify-content-between align-items-center"
    onClick={() => toggleSubmenu5("pierscionekStal")} // Wywołuje funkcję z poprawnym argumentem
  >
    Pierścionki
    <i className={`fa-solid fa-arrow-down transition ${openRingMain ? "rotate-180" : ""}`}></i>
  </button>

  {/* Główne menu pierścionków sterowane stanem openRingMain */}
  <ul className={`submenu list-unstyled  ${openRingMain ? "submenu-open" : ""}`}>
    
    {/* Podkategoria: Stal Chirurgiczna */}
    <li className="nav-item">
      <button
        className="nav-link w-100 text-start d-flex justify-content-between align-items-center"
        onClick={() => setOpenRingSteel(!openRingSteel)} // Zmiana stanu dedykowanego stali w pierścionkach
      >
        Stal Chirurgiczna
        <i className={`fa-solid fa-arrow-down transition ${openRingSteel ? "rotate-180" : ""}`}></i>
      </button>
      
      <ul className={`submenu list-unstyled ps-4 ${openRingSteel ? "submenu-open" : ""}`}>
        <li>
          <Link className="nav-link" onClick={() => handleLinkClick("/pierscionekStal/stal/pozlacane")}>
            Pozłacane
          </Link>
        </li>
        
        <li>
          <Link className="nav-link" onClick={() => handleLinkClick("/pierscionekStal/stal/srebro")}>
            Posrebrzane i białe złoto
          </Link>
        </li>
        
        <li>
          <Link className="nav-link" onClick={() => handleLinkClick("/pierscionekStal/stal/fashion")}>
            Fashion
          </Link>
        </li>
      </ul>
    </li>


                </ul>
              </li>
              <hr />
            </ul> {/* TUTAJ brakowało tego tagu zamykającego listę główną zakupów! */}
          </li>
          <hr />


          {/* <hr /> */}

          {/* ℹ️ O NAS */}
          <li className="nav-item">
            <button
              className="nav-link w-100 text-start d-flex justify-content-between align-items-center"
              onClick={toggleAbout}
            >
              O nas
              <i className={`fa-solid fa-arrow-down transition ${aboutOpen ? "rotate-180" : ""}`}></i>
            </button>
            <ul className={`submenu list-unstyled  ${aboutOpen ? "submenu-open" : ""}`}>
              <hr />
              <li>
                <a href="#mission" className="nav-link" onClick={() => handleLinkClick("/our-mission")}>
                  Nasza misja
                </a>
              </li>
            </ul>
          </li>
          <hr />

          {/* 📞 KONTAKT */}
         {/* 📞 KONTAKT */}
<li className="nav-item">
  <button
    className="nav-link w-100 text-start d-flex justify-content-between align-items-center"
    onClick={toggleKontakt}
  >
    Kontakt
    <i className={`fa-solid fa-arrow-down transition ${kontaktOpen ? "rotate-180" : ""}`}></i>
  </button>

  <ul className={`submenu list-unstyled  ${kontaktOpen ? "submenu-open" : ""}`}>
    <li>
      {/* POPRAWKA: Przekazujemy adres "/contactForm" wewnątrz funkcji strzałkowej */}
      <Link className="nav-link" onClick={() => handleLinkClick("/contactForm")}>
        Formularz
      </Link>
    </li>

    <li>
      <button
        className="nav-link w-100 text-start d-flex justify-content-between align-items-center"
        onClick={toggleSocial}
      >
        Social Media
        <i className={`fa-solid fa-arrow-down transition ${socialOpen ? "rotate-180" : ""}`}></i>
      </button>

      <ul className={`submenu list-unstyled  ${socialOpen ? "submenu-open" : ""}`}>
        <hr />
        <li>
          {/* POPRAWKA: Jeśli link prowadzi na zewnętrzną stronę (Instagram), wywołujemy funkcję bez przekazywania ścieżki do routera */}
          <a href="https://www.instagram.com/ring4upl/" className="nav-link" target="_blank" rel="noreferrer" onClick={() => handleLinkClick()}>
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