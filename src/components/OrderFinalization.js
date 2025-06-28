import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import Footer from "./Footer";
import OrderFinalizationRightBox from "./OrderFinalizationRightBox";
import { OrderContext } from "./OrderContext";
import OrderAfterEmail from "./OrderAfterEmail";
import DeliveryMethod from "./DeliveryMethod.js";



const OrderFinalization = () => {
  const { orderData, updateOrderData } = useContext(OrderContext);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isNextValid, setIsNextValid] = useState(false);

  const handleEmailChange = (e) => {
    const email = e.target.value;
    updateOrderData("email", email);
    setIsEmailValid(validateEmail(email));
  };

  const validateEmail = (email) => {
    if (!email || email.length > 254 || email.length < 6) return false;

    const parts = email.split("@");
    if (parts.length !== 2) return false;

    const [localPart, domain] = parts;
    if (!localPart || localPart.length > 64) return false;
    if (!domain || domain.length > 253) return false;

    const localValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/;
    if (!localValid.test(localPart)) return false;

    const domainValid = /^[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;
    if (!domainValid.test(domain)) return false;

    
    const tld = domain.substring(domain.lastIndexOf('.') + 1);
    if (tld.length > 24) return false;


    if (email.includes("..")) return false;

    return true;
  };

  const { selectedProducts } = useContext(CartContext);
  const totalCost = selectedProducts.reduce((sum, product) => {
    if (!product.selected) return sum;
    const numericPrice = parseFloat(
      product.price.toString().replace(/[^\d.]/g, "")
    );
    return sum + numericPrice * (product.amount || 1);
  }, 0);

  const selectedCount = selectedProducts
    .filter((p) => p.selected)
    .reduce((sum, p) => sum + (p.amount || 1), 0);

  return (
    <div className="order-finalization-box">
      <div className="container order-box-1">
        <div className="left-order-brand">
          FLOW<span className="order-brand-2">MART</span>
        </div>
        <div className="right-order">
          <Link to="/payment" className="look">
            <i className="fa-solid fa-cart-shopping "></i>
            <div className="order-circle">{selectedCount}</div>
          </Link>
        </div>
      </div>

      <div className="order-finalization-title">FINALIZACJA ZAMÓWIENIA</div>
      <div className="order-finalization-under-title-line">
        ({selectedCount} PRODUKTY) {totalCost} ZŁ
      </div>

      <div className="container order-box2">
        <div className="left-order-finalization-box beyond768">
          <p className="big-letter-order">KONTAKT</p>

          <input
            type="email"
            className="order-input email"
            placeholder="E-mail *"
            required
            value={orderData.email}
            onChange={handleEmailChange}
            style={{
              border:
                orderData.email.length === 0
                  ? "2px solid black"
                  : isEmailValid
                  ? "4px solid green"
                  : "4px solid red"
            }}
          />
          {!isEmailValid && orderData.email.length > 0 && (
            <p className="e-mail-error">Wpisz poprawny adres e-mail</p>
          )}

          <hr className="order-line" />
          <p className="big-letter-order">ADRES</p>

          {isEmailValid && <OrderAfterEmail setIsNextValid={setIsNextValid}/>}
          <hr className="order-line" />
          {isNextValid ? ( <span>
            <p className="delivery-title">SPOSÓB DOSTAWY</p>
            <DeliveryMethod />
          </span>
             
            ) : ( <div className="delivery-method big-letter-order">SPOSÓB DOSTAWY</div>
              
            )}
          
          <hr className="order-line" />
          <div className="Payment-method big-letter-order">PŁATNOŚĆ</div>
        </div>

        <OrderFinalizationRightBox />
      </div>


      <Footer className="order-footer-max-768"/>
    </div>
  );
};

export default OrderFinalization;
