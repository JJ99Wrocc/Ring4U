import React, { useState } from "react";
import "../css/ourMission.css"; 

const OurMision = () => {
  // Stan do kontrolowania, które sekcje są rozwinięte na mobile
  const [activeSections, setActiveSections] = useState({
    inspirations: false,
    vision: false,
  });

  // Funkcja przełączająca stan danej sekcji
  const toggleSection = (section) => {
    setActiveSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="container our-mission-container">
      <div className="row">
        <div className="mission-page-wrapper">
          <div className="terms-container">
            
            {/* HERO SECTION */}
            <section className="mission-hero">
              <h1 className="mission-h1">Nasza Misja</h1>
              <hr className="hr-line" />
              <p className="lead-text">
                W <strong>Ring4U</strong> wierzymy, że prawdziwe piękno tkwi w detalach, którymi otaczasz się każdego dnia. 
                Nasza przygoda rozpoczęła się od pasji do wyjątkowej biżuterii, ale nasze spojrzenie na świat sięga znacznie dalej. 
                Chcemy towarzyszyć Ci w każdym momencie – od porannej kawy, przez codzienne wyzwania, aż po wieczorny relaks.
              </p>
            </section>

            {/* SEKCJA 1: CO NAS INSPIRUJE */}
            <h2 
              className={`mission-h2 ${activeSections.inspirations ? "active" : ""}`}
              onClick={() => toggleSection("inspirations")}
            >
              Co nas inspiruje?
            </h2>
            
            {/* wrapper kontrolujący rozwijanie na mobile */}
            <div className={`mobile-toggle-content ${activeSections.inspirations ? "open" : ""}`}>
              <section>
                <h3>Twój Unikalny Styl</h3>
                <p>
                  Niezależnie od tego, czy wybierasz subtelne kolczyki przy uchu, efektowne kolczyki wiszące, czy personalizowaną biżuterię z literkami – tworzymy przestrzeń, w której możesz w pełni wyrazić siebie. Nasza biżuteria ze stali szlachetnej łączy w sobie ponadczasową elegancję z trwałością i bezpieczeństwem dla Twojej skóry.
                </p>
              </section>

              <section>
                <h3 className="mission-h3">Codzienny Komfort i Lifestyle</h3>
                <p>
                  Moda to nie tylko biżuteria. To także stylowe torebki, okulary przeciwsłoneczne, chusty czy stroje kąpielowe, które pozwalają Ci cieszyć się życiem w dynamicznym stylu. Dbamy o każdy element Twojego wizerunku – od ozdób do włosów po bransoletki na stopy.
                </p>
              </section>

              <section>
                <h3 className="mission-h3">Piękno w Twoim Domu</h3>
                <p>
                  Wierzymy, że przestrzeń, w której żyjesz, wpływa na Twoje samopoczucie. Dlatego w naszej ofercie znajdziesz starannie dobrane dodatki do domu – nastrojowe lampki, miękkie koce, estetyczne poszewki na poduszki oraz szklanki termiczne, które zamienią zwykłe chwile w wyjątkowe rytuały.
                </p>
              </section>

              <section>
                <h3 className="mission-h3">Harmonia i Organizacja</h3>
                <p>
                  Wiemy, jak ważny jest porządek wokół nas. Nasze kuferki i organizery na biżuterię nie tylko chronią Twoje cenne drobiazgi, ale stanowią ozdobę samą w sobie. Wprowadzamy funkcjonalność do Twojego biura i codzienności dzięki przemyślanym organizerom i akcesoriom.
                </p>
              </section>
            </div>

            {/* SEKCJA 2: NASZA WIZJA */}
            <h2 
              className={`mission-h2 ${activeSections.vision ? "active" : ""}`}
              onClick={() => toggleSection("vision")}
            >
              Nasza Wizja
            </h2>
            
            <div className={`mobile-toggle-content ${activeSections.vision ? "open" : ""}`}>
              <section className="mission-summary">
                <p>
                  Naszą misją jest dostarczanie produktów, które łączą w sobie <strong>estetykę, funkcjonalność i jakość</strong>. 
                  Chcemy inspirować do tworzenia pięknych przestrzeni wokół siebie i celebrowania własnej wyjątkowości. 
                  Od drobnego pierścionka, przez modne dodatki, aż po przytulne wyposażenie domu – <strong>Ring4U jest stworzone z myślą o Tobie.</strong>
                </p>
              </section>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMision;