import React from "react";
import { useNavigate } from "react-router-dom";



const PaymentEmptyCart = () => {

    const navigate = useNavigate();

    return(
        <div className="Payment-empty-cart" >
            <h2 className="Payment-empty-title" >TWÓJ KOSZYK JEST PUSTY</h2>
            <p className="Payment-empty-p">Jeśli dodasz coś do swojego koszyka, pojawi się to tutaj.</p>
            <strong className="payment-empty-strong"><p className="Payment-empty-p p2"> Chcesz teraz zacząć?</p></strong>
            <button className="Payment-empty-button" onClick={() => navigate("/")} ><p className="Payment-empty-text">ZACZYNAMY</p> </button>
        </div>
    )



}

export default PaymentEmptyCart;