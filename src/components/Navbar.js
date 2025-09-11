import React, { useState, useEffect, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase"; // upewnij się, że ścieżka jest poprawna
import { CartContext } from "./CartContext";
import { Link, useNavigate } from "react-router-dom";
import CartPreview from "./CartPreview";
import CartAddedProduct from "./CartPreview2";
import ShowSquare2 from "./ShowSquere2";
import LogInPreview from "./LogInPreview";
import SearchPreview from "./SearchPreview";
import "../css/index.css";
import LogInAfter from "../components/LogInAfter"

const Navbar = () => {
  const [showCartPreview, setShowCartPreview] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSquare2, setShowSquare2] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const { selectedProducts } = useContext(CartContext);

  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleMouseEnter = () => {
    setShowCartPreview(true);
  };
  const handleMouseLeave = () => {
    setShowCartPreview(false);
  };

  return (
    <div>
      <nav
        id="nav"
        className="ui raised very padded segment"
        style={{ display: "block" }}
        role="navigation"
        aria-label="Główne menu"
      >
        <a 
          className="ui header nav-title" 
          href="/"
          tabIndex="0"
          aria-label="Ring for You - Strona główna"
        >
          Ring<span className="nav-title-span">4</span>U
        </a>

        <div
          className="ui right floated header"
          style={{
            position: "relative",
            right: "30px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
          role="menubar"
        >
          <div
            className="search"
            onMouseEnter={() => setShowSearch(true)}
            onMouseLeave={() => setShowSearch(false)}
            role="menuitem"
            tabIndex="0"
            aria-haspopup="true"
            aria-expanded={showSearch}
            aria-label="Szukaj produktów"
          >
            <a className="look" role="button" tabIndex="0">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
            {showSearch && <SearchPreview />}
          </div>

          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: "relative", display: "inline-block" }}
            role="menuitem"
            tabIndex="0"
            aria-haspopup="true"
            aria-expanded={showCartPreview}
            aria-label="Koszyk"
          >
            <Link to="/payment" className="look" aria-label="Przejdź do płatności" tabIndex="0">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            {selectedProducts.length === 0 ? (
              <CartPreview show={showCartPreview} setShow={setShowCartPreview} />
            ) : (
              <CartAddedProduct
                show={showCartPreview}
                setShow={setShowCartPreview}
              />
            )}
          </div>

          {user ? (
            <>
              <div 
                className="user-name-after-log-in" 
                tabIndex="0"
                aria-label={`Zalogowany użytkownik: ${user.displayName || "Użytkownik"}`}
              >
                Cześć, {user.displayName || "Użytkowniku"}
              </div>
              <LogInAfter show={showLogin} setShow={setShowLogin}/>
            </>
          ) : (
            <LogInPreview show={showLogin} setShow={setShowLogin} />
          )}
        </div>

        <div
          className="ui left floated header nav-main"
          style={{ position: "relative" }}
        >
          <span 
            className="mobile-only main-page-mobile" 
            onClick={()=>navigate("/")}
            role="link"
            tabIndex="0"
            aria-label="Przejdź na stronę główną"
          >
            Główna
          </span>
        </div>
        
        <Link 
          to="/" 
          className="look desktop-only" 
          role="link" 
          tabIndex="0" 
          aria-label="Strona główna"
        >
          Strona Główna
        </Link>

        <ShowSquare2 show={showSquare2} setShow={setShowSquare2} />
      </nav>
    </div>
  );
};

export default Navbar;
