import React, { useState, useEffect } from "react";
import '../css/index.css';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Sprawdź w localStorage
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // opóźnij ustawienie widoczności o 100ms, żeby upewnić się że DOM załadowany
      setTimeout(() => setVisible(true), 100);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div className="cookie-banner" role="alert" aria-live="polite">
          <p>
            Nasza strona używa plików cookies w celach niezbędnych do działania strony, analityki i marketingu. 
            Możesz zaakceptować wszystkie pliki cookies lub używać tylko niezbędnych. 
            Więcej informacji znajdziesz w <a href="/privacypolicy">Polityce Prywatności</a>.
          </p>
          <div className="cookie-buttons">
            <button className="cookie-accept" onClick={handleAccept}>Akceptuję</button>
            <button className="cookie-decline" onClick={handleDecline}>Tylko niezbędne</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
