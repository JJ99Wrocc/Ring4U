import React from "react";
import { useNavigate } from "react-router-dom";



const PaymentEmptyCart = () => {

    const navigate = useNavigate();

    return(
        <div className="Payment-empty-cart" >
            <h2 className="Payment-empty-title" >TWÓJ KOSZYK JEST PUSTY</h2>
            <p className="Payment-empty-p">Jeśli dodasz coś do swojego koszyka, pojawi się to tutaj. Chcesz teraz zacząć?</p>
            <button className="Payment-empty-button" onClick={() => navigate("/")} >ZACZYNAMY <i class="fa-solid fa-arrow-right-long"></i></button>
        </div>
    )



}

export default PaymentEmptyCart;