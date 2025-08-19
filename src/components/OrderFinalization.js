import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import OrderFinalizationRightBox from "./OrderFinalizationRightBox";
import { OrderContext } from "./OrderContext";
import OrderAfterEmail from "./OrderAfterEmail";
import DeliveryMethod from "./DeliveryMethod.js";
import PaymentMethods from "./PaymentMethods.js";
import { auth, db } from "../Firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const OrderFinalization = () => {
  const { orderData, updateOrderData,setOrderData } = useContext(OrderContext);
  const { selectedProducts, setSelectedProducts } = useContext(CartContext);
  
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isNextValid, setIsNextValid] = useState(false);  
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(null);       
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDeliverySelect = (method) => {
    setSelectedDeliveryMethod(method);
    updateOrderData("deliveryMethod", method);
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
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

  const totalCost = selectedProducts.reduce((sum, product) => {
    if (!product.selected) return sum;
    const numericPrice = parseFloat(
      product.price.toString().replace(/[^\d.]/g, "")
    );
    return sum + numericPrice * (product.amount || 1);
  }, 0);

  const selectedCount = selectedProducts
    .filter((product) => product.selected)
    .reduce((sum, product) => sum + (product.amount || 1), 0);

  const handleOrderSubmit = async () => {
    if (!auth.currentUser) {
      alert("Musisz być zalogowany, aby złożyć zamówienie!");
      return;
    }
    if (!isEmailValid || !isNextValid || !selectedDeliveryMethod || !selectedPaymentMethod) {
      alert("Uzupełnij wszystkie dane, aby złożyć zamówienie.");
      return;
    }
  
    setLoading(true);
    try {
      const userId = auth.currentUser.uid;

      const orderReference = await addDoc(collection(db, "users", userId, "orders"), {
        orderDate: Timestamp.now(),
        status: "processing",
        products: selectedProducts.filter((product) => product.selected),
        customer: orderData,
        deliveryMethod: selectedDeliveryMethod,
        paymentMethod: selectedPaymentMethod,
        totalCost: totalCost
      });

      await addDoc(collection(db, "userMessages", userId, "messages"), {
        title: "Zamówienie złożone",
        content: "Twoje zamówienie zostało przyjęte i jest w realizacji.",
        status: "unread",
        orderId: orderReference.id,
        createdAt: Timestamp.now()
      });

      setSelectedProducts([]);
      alert("Zamówienie zostało złożone!");
      navigate("/");
      setOrderData({
        email: "",
        shippingAddress: {
          costumerName: "",
          costumerSurname: "",
          address: "",
          company: "",
          postalCode: "",
          city: "",
          phoneNumber: "",
          phonePrefix: "",
          selectedCount: "",
          totalCost: "",
          shipping: "",
          productImage: "",
          productName: "",
          productPrice: "",
          discountApplied: false,
          discountValue: 0,
        },
        billingAddress: {
          costumerName: "",
          costumerSurname: "",
          address: "",
          company: "",
          postalCode: "",
          city: "",
          phoneNumber: "",
          nip: "",
          phonePrefix: "",
          selectedCount: "",
          totalCost: "",
          shipping: "",
          productImage: "",
          productName: "",
          productPrice: "",
        },
        useDifferentBilling: false,
      });
      
    
    } catch (error) {
      console.error("Błąd przy składaniu zamówienia:", error);
      alert("Wystąpił problem, spróbuj ponownie.");
    }

    setLoading(false);
  };

  return (
    <div className="order-finalization-box">
      <div className="container order-box-1">   
        <div className="left-order-brand">
          FLOW<span className="order-brand-2">MART</span>
        </div>
        <div className="right-order">
          <Link to="/payment" className="look">
            <i className="fa-solid fa-cart-shopping"></i>
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

          {isEmailValid && <OrderAfterEmail setIsNextValid={setIsNextValid} />}
          <hr className="order-line" />
          {isNextValid ? (
            <span>
              <p className="delivery-title">SPOSÓB DOSTAWY</p>
              <DeliveryMethod onSelect={handleDeliverySelect} />

              {selectedDeliveryMethod && (
                <>
                  <hr className="order-line" />
                  <p className="Payment-method big-letter-order">PŁATNOŚĆ</p>
                  <PaymentMethods
                    selected={selectedPaymentMethod}
                    onSelect={setSelectedPaymentMethod}
                  />
                </>
              )}
            </span>
          ) : (
            <div className="delivery-method big-letter-order">
              SPOSÓB DOSTAWY
            </div>
          )}

          {selectedPaymentMethod && (
            <>
              <hr className="order-line" />
              <button 
                className="place-order-btn" 
                onClick={handleOrderSubmit} 
                disabled={loading}
              >
                {loading ? "Przetwarzanie..." : "Kup teraz"}
              </button>
              <hr className="order-line" />
            </>
          )}

          <hr className="order-line" />
        </div>

        <OrderFinalizationRightBox />
      </div>
    </div>
  );
};

export default OrderFinalization;
