import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/ShowSquere2.css";

const ShowSquare2 = ({ show, setShow }) => {
  const navigate = useNavigate();
  const menuRef = useRef(null);
 
  // Główne kategorie
  const [openKolczyki, setOpenKolczyki] = useState(false);
  const [openNaszyjniki, setOpenNaszyjniki] = useState(false);
  const [openBransoletkiReka, setOpenBransoletkiReka] = useState(false);
  const [openBransoletkiStopa, setOpenBransoletkiStopa] = useState(false);
  const [openPierścionki, setOpenPierścionki] = useState(false);

  // Podkategorie
  const [openKolczykiStal, setOpenKolczykiStal] = useState(false);
  const [openKolczykiFashion, setOpenKolczykiFashion] = useState(false);
  
  const [openNaszyjnikiStal, setOpenNaszyjnikiStal] = useState(false);
  const [openNaszyjnikiFashion, setOpenNaszyjnikiFashion] = useState(false);

  const [openBransoletkiRekaStal, setOpenBransoletkiRekaStal] = useState(false);
  const [openBransoletkiRekaFashion, setOpenBransoletkiRekaFashion] = useState(false);

  const [openBransoletkiNogaStal, setOpenBransoletkiNogaStal] = useState(false);
  const [openBransoletkiNogaFashion, setOpenBransoletkiNogaFashion] = useState(false);

  const [openPierścionkiStal, setOpenPierścionkiStal] = useState(false);
  const [openPierścionkiFashion, setOpenPierścionkiFashion] = useState(false);

  // Obsługa kliknięcia w końcowy link
  const handleLinkClick = (path) => {
    navigate(path);
    resetAllMenus();
  };

  const resetAllMenus = () => {
    setShow(false);
    setOpenKolczyki(false);
    setOpenNaszyjniki(false);
    setOpenBransoletkiReka(false);
    setOpenBransoletkiStopa(false);
    setOpenPierścionki(false);
    setOpenKolczykiStal(false);
    setOpenKolczykiFashion(false);
    setOpenNaszyjnikiStal(false);
    setOpenNaszyjnikiFashion(false);
    setOpenBransoletkiRekaStal(false);
    setOpenBransoletkiRekaFashion(false);
    setOpenBransoletkiNogaStal(false);
    setOpenBransoletkiNogaFashion(false);
    setOpenPierścionkiStal(false);
    setOpenPierścionkiFashion(false);
  };

  const handleMainClick = (e) => {
    e.preventDefault();
    if (show) {
      resetAllMenus();
    } else {
      setShow(true);
    }
  };

  // Zamknięcie menu po kliknięciu poza jego obszar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        resetAllMenus();
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <div 
      className="nav-shopping-text"
      ref={menuRef}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => resetAllMenus()} // Zmieniono na resetowanie całego stanu przy opuszczeniu
      style={{
        display: "inline-block",
        marginLeft: "20px",
        position: "relative",
        padding: "10px 15px",
        left: "-980px"
      }}
    >
      <a 
        className="look desktop-only nav-shopping-text" 
        onClick={handleMainClick} 
        style={{ cursor: "pointer", background: "none", border: "none" }}
      >
        Zakupy 
      </a>

      {show && (
        <div
          className="Navbar-squeres desktop-only"
          style={{
            width: "240px",         
            minHeight: "200px",
            height: "auto",        
            left: "0",
            top: "40px",
            position: "absolute",   
            backgroundColor: "#fff", 
            boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
            zIndex: 9999,
            padding: "10px"
          }}
        >
          <ul className="ui list navbar-ul-list list" style={{ fontSize: '14px', listStyleType: 'none', padding: 0, margin: 0 }}>
            
            {/* 1. KOLCZYKI */}
            <li>
              <a 
                className="navbar-li-list w-100 text-start d-flex justify-content-between align-items-center bg-transparent border-0"
                onClick={() => setOpenKolczyki(!openKolczyki)}
                style={{ cursor: 'pointer', padding: '8px 0', textAlign: 'left', width: '100%' }}
              >
                Kolczyki
                <i className={`fa-solid fa-arrow-right transition ${openKolczyki ? "rotate-90" : ""}`}></i>
              </a>
              
              {openKolczyki && (
                <ul className="ps-3 list-unstyled">
                  <li>
                    <a 
                      className="nav-link w-100 text-start d-flex justify-content-between align-items-center bg-transparent border-0"
                      style={{ cursor: 'pointer'}}
                      onClick={() => setOpenKolczykiStal(!openKolczykiStal)}
                    >
                      <span>Stal Chirurgiczna</span>
                      <i className={`fa-solid fa-arrow-right transition ${openKolczykiStal ? "rotate-90" : ""}`}></i>
                    </a>
                    {openKolczykiStal && (
                      <ul className="ps-3 list-unstyled text-muted" style={{ cursor: 'pointer' }}>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/ear-rings/stal/pozlacane")}>Pozłacane</span></li>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/ear-rings/stal/platerowane")}>Platerowane</span></li>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/ear-rings/stal/srebrne")}>Srebrne</span></li>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/ear-rings/stal/kwiaty")}>Motywy Kwiatowe</span></li>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/ear-rings/stal/serca-kokardy")}>Serca i Kokardy</span></li>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/ear-rings/stal/ślublne")}>Kolekcja Ślubna</span></li>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/ear-rings/stal/literki")}>Personalizowane (Literki)</span></li>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/ear-rings/stal/wykwintne")}>Fashion</span></li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <a 
                      className="nav-link w-100 text-start d-flex justify-content-between align-items-center bg-transparent border-0"
                      style={{ cursor: 'pointer'}}
                      onClick={() => setOpenKolczykiFashion(!openKolczykiFashion)}
                    >
                      <span>Kolczyki Fashion</span>
                      <i className={`fa-solid fa-arrow-right transition ${openKolczykiFashion ? "rotate-90" : ""}`}></i>
                    </a>
                    {openKolczykiFashion && (
                      <ul className="ps-3 list-unstyled text-muted" style={{ cursor: 'pointer' }}>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/ear-rings/sztuczna/chwosty")}>Chwosty</span></li>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/ear-rings/sztuczna/uchu")}>Przy Uchu</span></li>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/ear-rings/sztuczna/wiszace")}>Wiszące</span></li>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/ear-rings/sztuczna/kwiaty")}>Kwiaty</span></li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
            
            {/* 2. NASZYJNIKI */}
            <li>
              <a 
                className="navbar-li-list w-100 text-start d-flex justify-content-between align-items-center bg-transparent border-0"
                onClick={() => setOpenNaszyjniki(!openNaszyjniki)}
                style={{ cursor: 'pointer', padding: '8px 0', textAlign: 'left', width: '100%' }}
              >
                Naszyjniki
                <i className={`fa-solid fa-arrow-right transition ${openNaszyjniki ? "rotate-90" : ""}`}></i>
              </a>
              {openNaszyjniki && (
                <ul className="ps-3 list-unstyled">
                  <li>
                    <a 
                      className="nav-link w-100 text-start d-flex justify-content-between align-items-center bg-transparent border-0"
                      style={{ cursor: 'pointer'}}
                      onClick={() => setOpenNaszyjnikiStal(!openNaszyjnikiStal)}
                    >
                      <span>Stal Chirurgiczna</span>
                      <i className={`fa-solid fa-arrow-right transition ${openNaszyjnikiStal ? "rotate-90" : ""}`}></i>
                    </a>
                    {openNaszyjnikiStal && (
                      <ul className="ps-3 list-unstyled text-muted" style={{ cursor: 'pointer' }}>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/necklace/stal/pozlacane")}>Pozłacane</span></li>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/necklace/stal/serca-kokardy")}>Serca i Kokardy</span></li>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/necklace/stal/literki")}>Personalizowane (Literki)</span></li>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/necklace/stal/kwiaty")}>Motywy Kwiatowe</span></li>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/necklace/stal/wykwintne")}>Fashion</span></li>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/necklace/stal/srebro")}>Srebrne</span></li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <a 
                      className="nav-link w-100 text-start d-flex justify-content-between align-items-center bg-transparent border-0"
                      style={{ cursor: 'pointer'}}
                      onClick={() => setOpenNaszyjnikiFashion(!openNaszyjnikiFashion)}
                    >
                      <span>Naszyjniki Fashion</span>
                      <i className={`fa-solid fa-arrow-right transition ${openNaszyjnikiFashion ? "rotate-90" : ""}`}></i>
                    </a>
                    {openNaszyjnikiFashion && (
                      <ul className="ps-3 list-unstyled text-muted" style={{ cursor: 'pointer' }}>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/necklace/sztuczna/choker")}>Chokery</span></li>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/necklace/sztuczna/kolia")}>Kolia</span></li>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/necklace/sztuczna/fashion")}>Fashion</span></li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>

            {/* 3. PIERŚCIONKI */}
            <li>
              <a 
                className="navbar-li-list w-100 text-start d-flex justify-content-between align-items-center bg-transparent border-0"
                onClick={() => setOpenPierścionki(!openPierścionki)}
                style={{ cursor: 'pointer', padding: '8px 0', textAlign: 'left', width: '100%' }}
              >
                Pierścionki
                <i className={`fa-solid fa-arrow-right transition ${openPierścionki ? "rotate-90" : ""}`}></i>
              </a>
              {openPierścionki && (
                <ul className="ps-3 list-unstyled">
                  <li>
                    <a 
                      className="nav-link w-100 text-start d-flex justify-content-between align-items-center bg-transparent border-0"
                      style={{ cursor: 'pointer'}}
                      onClick={() => setOpenPierścionkiStal(!openPierścionkiStal)}
                    >
                      <span>Stal Chirurgiczna</span>
                      <i className={`fa-solid fa-arrow-right transition ${openPierścionkiStal ? "rotate-90" : ""}`}></i>
                    </a>
                    {openPierścionkiStal && (
                      <ul className="ps-3 list-unstyled text-muted" style={{ cursor: 'pointer' }}>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/pierscionekStal/stal/pozlacane")}>Pozłacane</span></li>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/pierscionekStal/stal/srebro")}>Posrebrzane i białe złoto</span></li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <a 
                      className="nav-link w-100 text-start d-flex justify-content-between align-items-center bg-transparent border-0"
                      style={{ cursor: 'pointer'}}
                      onClick={() => setOpenPierścionkiFashion(!openPierścionkiFashion)}
                    >
                      <span>Pierścionki Fashion</span>
                      <i className={`fa-solid fa-arrow-right transition ${openPierścionkiFashion ? "rotate-90" : ""}`}></i>
                    </a>
                    {openPierścionkiFashion && (
                      <ul className="ps-3 list-unstyled text-muted" style={{ cursor: 'pointer' }}>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/pierscionekStal/stal/fashion")}>Fashion</span></li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>

            {/* 4. BRANSOLETKI NA RĘKĘ */}
            <li>
              <a 
                className="navbar-li-list w-100 text-start d-flex justify-content-between align-items-center bg-transparent border-0"
                onClick={() => setOpenBransoletkiReka(!openBransoletkiReka)}
                style={{ cursor: 'pointer', padding: '8px 0', textAlign: 'left', width: '100%' }}
              >
                Bransoletki na ręce
                <i className={`fa-solid fa-arrow-right transition ${openBransoletkiReka ? "rotate-90" : ""}`}></i>
              </a>
              {openBransoletkiReka && (
                <ul className="ps-3 list-unstyled">
                  <li>
                    <a 
                      className="nav-link w-100 text-start d-flex justify-content-between align-items-center bg-transparent border-0"
                      onClick={() => setOpenBransoletkiRekaStal(!openBransoletkiRekaStal)}
                      style={{ cursor: 'pointer' }}
                    >
                      <span>Stal Chirurgiczna</span>
                      <i className={`fa-solid fa-arrow-right transition ${openBransoletkiRekaStal ? "rotate-90" : ""}`}></i>
                    </a>
                    {openBransoletkiRekaStal && (
                      <ul className="ps-3 list-unstyled text-muted" style={{ cursor: 'pointer' }}>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/branzoletkiHand/stal/pozlacane")}>Pozłacane</span></li>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/branzoletkiHand/stal/serca-kokardy")}>Serca i kokardy</span></li>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/branzoletkiHand/stal/kwiaty")}>Motywy kwiatowe</span></li>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/branzoletkiHand/stal/fashion")}>Fashion</span></li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <a 
                      className="nav-link w-100 text-start d-flex justify-content-between align-items-center bg-transparent border-0"
                      style={{ cursor: 'pointer'}}
                      onClick={() => setOpenBransoletkiRekaFashion(!openBransoletkiRekaFashion)}
                    >
                      <span>Bransoletki Fashion</span>
                      <i className={`fa-solid fa-arrow-right transition ${openBransoletkiRekaFashion ? "rotate-90" : ""}`}></i>
                    </a>
                    {openBransoletkiRekaFashion && (
                      <ul className="ps-3 list-unstyled text-muted" style={{ cursor: 'pointer' }}>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/branzoletkiHand/sztuczna/fashion")}>Fashion</span></li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
            
            {/* 5. BRANSOLETKI NA NOGĘ */}
            <li>
              <a 
                className="navbar-li-list w-100 text-start d-flex justify-content-between align-items-center bg-transparent border-0"
                onClick={() => setOpenBransoletkiStopa(!openBransoletkiStopa)}
                style={{ cursor: 'pointer', padding: '8px 0', textAlign: 'left', width: '100%' }}
              >
                Bransoletki na stopy
                <i className={`fa-solid fa-arrow-right transition ${openBransoletkiStopa ? "rotate-90" : ""}`}></i>
              </a>
              {openBransoletkiStopa && (
                <ul className="ps-3 list-unstyled">
                  <li>
                    <a 
                      className="nav-link w-100 text-start d-flex justify-content-between align-items-center bg-transparent border-0"
                      onClick={() => setOpenBransoletkiNogaStal(!openBransoletkiNogaStal)}
                      style={{ cursor: 'pointer' }}
                    >
                      <span>Stal Chirurgiczna</span>
                      <i className={`fa-solid fa-arrow-right transition ${openBransoletkiNogaStal ? "rotate-90" : ""}`}></i>
                    </a>
                    {openBransoletkiNogaStal && (
                      <ul className="ps-3 list-unstyled text-muted" style={{ cursor: 'pointer' }}>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/branzoletkiFoot/stal/pozlacane")}>Pozłacane</span></li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <a 
                      className="nav-link w-100 text-start d-flex justify-content-between align-items-center bg-transparent border-0"
                      style={{ cursor: 'pointer'}}
                      onClick={() => setOpenBransoletkiNogaFashion(!openBransoletkiNogaFashion)}
                    >
                      <span>Bransoletki  Fashion</span>
                      <i className={`fa-solid fa-arrow-right transition ${openBransoletkiNogaFashion ? "rotate-90" : ""}`}></i>
                    </a>
                    {openBransoletkiNogaFashion && (
                      <ul className="ps-3 list-unstyled text-muted" style={{ cursor: 'pointer' }}>
                        <li><span className="d-block py-1" onClick={() => handleLinkClick("/branzoletkiFoot/sztuczna/fashion")}>Fashion</span></li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShowSquare2;