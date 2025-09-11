import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentEmptyCart = () => {

    const navigate = useNavigate();

    return(
        <div 
          className="Payment-empty-cart" 
          role="region" 
          aria-label="Pusty koszyk"
        >
            <h2 
              className="Payment-empty-title" 
              role="heading" 
              aria-level="2"
            >
              TWÓJ KOSZYK JEST PUSTY
            </h2>

            <p 
              className="Payment-empty-p" 
              aria-live="polite"
            >
              Jeśli dodasz coś do swojego koszyka, pojawi się to tutaj.
            </p>

            <strong 
              className="payment-empty-strong" 
              aria-label="Zachęta do rozpoczęcia zakupów"
            >
              <p className="Payment-empty-p p2"> Chcesz teraz zacząć?</p>
            </strong>

            <button 
              className="Payment-empty-button" 
              onClick={() => navigate("/")} 
              aria-label="Rozpocznij zakupy"
            >
              <p className="Payment-empty-text">ZACZYNAMY</p> 
            </button>
        </div>
    )
}

export default PaymentEmptyCart;
