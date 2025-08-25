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

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth > 768 && showBurgerMenu) {
  //       setShowBurgerMenu(false);
  //     }
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [showBurgerMenu]);

  return (
    <div>
      <nav
        id="nav"
        className="ui raised very padded segment"
        style={{ display: "block" }}
      >
        <a className="ui header nav-title">
          flow<span className="nav-title-span">mart</span>
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
        >
          
          <div
            className="search"
            onMouseEnter={() => setShowSearch(true)}
            onMouseLeave={() => setShowSearch(false)}
          >
            <a className="look ">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
            {showSearch && <SearchPreview />}
          </div>

          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: "relative", display: "inline-block" }}
          >
            <Link to="/payment" className="look">
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
              <div className="user-name-after-log-in">
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
          <span className="mobile-only main-page-mobile" onClick={()=>navigate("/")}>Główna</span>
        </div>
        
          <Link to="/" className="look desktop-only">
            Strona Główna
          </Link>
          <ShowSquare2 show={showSquare2} setShow={setShowSquare2} />
      </nav>
    </div>
  );
};

export default Navbar;
