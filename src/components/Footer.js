import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";
import HotPayLogo from '../img/hotpay-logo.webp'; // Zmieniona nazwa zmiennej dla jasności
import Blik from '../img/blik-logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faGooglePay, faApplePay } from '@fortawesome/free-brands-svg-icons'; 

const Footer = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() =>{
    const toggleVisibility = () =>{
      if(window.innerHeight > 300)
       {setIsVisible(true) }
      else
       { setIsVisible(false) }
    }
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [])
   return (
    <footer className="footer container" role="contentinfo" aria-label="Stopka strony Ring4U">
      <div className="footer-container">

        {/* Kolumna 1 - Menu / Nawigacja */}
        <div className="footer-column" aria-label="Menu">
          <button
            className="footer-title"
            aria-expanded={activeSection === "menu"}
            aria-controls="menu-links"
            onClick={() => toggleSection("menu")}
          >
            Menu
          </button>
          <ul
            className={`footer-links ${activeSection === "menu" ? "active" : ""}`}
            id="menu-links"
            role="menu"
          >
            <li role="none"><Link to="/" role="menuitem">Strona główna</Link></li>
            <li role="none"><Link to="/zakupy" role="menuitem">Zakupy</Link></li>
            <li role="none"><Link to="/podlikolczyki" role="menuitem">Podlikolczyki</Link></li>
            <li role="none"><Link to="/naszyjniki" role="menuitem">Naszyjniki</Link></li>
            <li role="none"><Link to="/bransoletki" role="menuitem">Bransoletki</Link></li>
          </ul>
        </div>

        {/* Kolumna 2 - Przydatne linki */}
        <div className="footer-column" aria-label="Przydatne linki">
          <button
            className="footer-title"
            aria-expanded={activeSection === "links"}
            aria-controls="links-links"
            onClick={() => toggleSection("links")}
          >
            Przydatne linki
          </button>
          <ul
            className={`footer-links ${activeSection === "links" ? "active" : ""}`}
            id="links-links"
            role="menu"
          >
            <li role="none"><Link to="/terms-of-services" role="menuitem">Regulamin sklepu</Link></li>
            <li role="none"><Link to="/privacypolicy" role="menuitem">Polityka prywatności / RODO / Cookies</Link></li>
            <li role="none"><Link to="/deliveryandreturns" role="menuitem">Dostawa i Zwroty</Link></li>
          </ul>
        </div>

        {/* Kolumna 3 - Konto */}
        <div className="footer-column" aria-label="Konto użytkownika">
          <button
            className="footer-title"
            aria-expanded={activeSection === "account"}
            aria-controls="account-links"
            onClick={() => toggleSection("account")}
          >
            Konto
          </button>
          <ul
            className={`footer-links ${activeSection === "account" ? "active" : ""}`}
            id="account-links"
            role="menu"
          >
            <li role="none"><Link to="/my-orders" role="menuitem">Moje zamówienia</Link></li>
            <li role="none"><Link to="/my-dm" role="menuitem">Moje wiadomości</Link></li>
            <li role="none"><Link to="/payment" role="menuitem">Koszyk</Link></li>
          </ul>
        </div>
      </div>


        {/* SEKCJA PŁATNOŚCI - Zoptymalizowana pod audyt HotPay */}
      <div className="payment-methods-wrapper" aria-label="Akceptowane metody płatności">
        <p className="payment-text">Bezpieczne płatności online obsługuje <strong>HotPay</strong></p>
        <div className="payment-icons">
          <a href="https://hotpay.pl" target="_blank" rel="noopener noreferrer">
            <img 
              alt="HotPay - Operator Płatności" 
              className="payment-logo main-operator" 
              src={HotPayLogo} 
              style={{ transition: "0.3s" }}
            />
          </a>
          <div className="payment-icon-box">
            <FontAwesomeIcon icon={faCcVisa} title="Visa" />
          </div>
          <div className="payment-icon-box">
            <FontAwesomeIcon icon={faCcMastercard} title="Mastercard" />
          </div>
          <div className="payment-icon-box">
            <FontAwesomeIcon icon={faGooglePay} title="Google Pay" size="2x" />
          </div>
          <div className="payment-icon-box">
            <FontAwesomeIcon icon={faApplePay} title="Apple Pay" size="2x" />
          </div>
          <img 
            alt="BLIK" 
            className="payment-icon-box" 
            src={Blik} 
            style={{ height: "18px", width: "auto", filter: "none", padding: "2px" }} 
          />
        </div>
      </div>

      <hr className="footer-divider" />

      {/* LOWER FOOTER - Pełne dane zgodne z prawem PL */}
     <div className="lower-footer">
        {/* POPRAWIONE: Klasa podmieniona na 'is-open' zgodnie z Twoim CSS */}
        <div className={`footer-company-info ${activeSection === 'company' ? 'is-open' : ''}`}>
          <h4 className='footer-title' onClick={() => toggleSection('company')} style={{ cursor: "pointer" }}>
            Dodatkowe informacje 
          </h4>
          <div className="company-details-content">
            <p><strong>Właścicielem sklepu jest:</strong> Joachim Esangbedo</p>
            <p>Adres do korespondencji: ul. Na Szańcach 8/2, 50-320 Wrocław </p>
            <p>NIP: 8943268275 | Sprzedaż w ramach działalności nierejestrowanej</p>
          </div>
        </div>
      </div>
      <button 
      className={`scroll-to-top ${isVisible ? 'show' : ''}`} 
      onClick={scrollToTop}
    >
      ↑
    </button>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ring4U. All rights reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;
