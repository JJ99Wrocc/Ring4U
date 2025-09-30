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
import "../css/nav.css"
import LogInAfter from "../components/LogInAfter"

const Navbar = () => {
  const [showCartPreview, setShowCartPreview] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSquare2, setShowSquare2] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scroll, setScroll] = useState(false);
  const { selectedProducts } = useContext(CartContext);

  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleMouseEnter = () => {
    setShowCartPreview(true);
  };
  const handleMouseLeave = () => {
    setShowCartPreview(false);
  };

  return (<div className="container">
<div>
      <nav
        id="nav"
        className={`   navbar  ${scroll ? "scroll" : ""}`}
        style={{ display: "flex" }}
        role="navigation"
        aria-label="Główne menu"
      >
        <h1><a 
          className="ui header nav-title" 
          href="/"
          tabIndex="0"
          aria-label="Ring for You - Strona główna"
        >
          Ring<span className="nav-title-span pink">4</span>U
        </a></h1>

        <div
          className="ui right floated header "
          style={{
            position: "relative",
            right: "-450px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
          role="menubar"
        >
          <div
            className=" search-bar"
            onMouseEnter={() => setShowSearch(true)}
            onMouseLeave={() => setShowSearch(false)}
            role="menuitem"
            tabIndex="0"
            aria-haspopup="true"
            aria-expanded={showSearch}
            aria-label="Szukaj produktów"
          >
            
            <input type="text" placeholder="Wyszukaj" />
             <button><i class="fa-solid fa-magnifying-glass"></i></button>
           
           
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
            <Link to="/payment" className="look icon" aria-label="Przejdź do płatności" tabIndex="0">
            <span className="icon-circle">
            <i class="fa-solid fa-bag-shopping fa-fw"></i>
            </span>
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

   
     

        <ShowSquare2 show={showSquare2} setShow={setShowSquare2} />
      </nav>
    </div>

  </div>
      );
};

export default Navbar;
