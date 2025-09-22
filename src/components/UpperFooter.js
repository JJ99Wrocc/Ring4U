import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/index.css";

const UpperFooter = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <footer className="footer " role="contentinfo" aria-label="Stopka strony FlowMart">
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
            <li role="none"><Link to="/dostawa" role="menuitem">Dostawa</Link></li>
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

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FlowMart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default UpperFooter;
