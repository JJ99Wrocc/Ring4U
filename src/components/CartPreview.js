import React from "react";

const CartPreview = ({ show }) => {
  if (!show) return null;

  return (
    <div className="Navbar-squeres Cart">
      <div className="fa-cart-shop" style={{ textAlign: "center", fontSize: "50px", margin: "20px"}}>
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
      <p className="test">Twój koszyk jest pusty</p>
      <p className="test">
        Witamy z powrotem! Jeśli miałaś przedmioty w swoim koszyku, zapisaliśmy je dla
        Ciebie. Zaloguj się teraz, aby je zobaczyć...
      </p>    </div>
  );
};

export default CartPreview;
