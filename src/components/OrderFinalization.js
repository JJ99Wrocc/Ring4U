import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import OrderFinalizationRightBox from "./OrderFinalizationRightBox";
import { OrderContext } from "./OrderContext";
import OrderAfterEmail from "./OrderAfterEmail";
import DeliveryMethod from "./DeliveryMethod.js";
import PaymentMethods from "./PaymentMethods.js";
import { auth, db } from "../Firebase";
import { collection, addDoc, Timestamp, setDoc, getFirestore, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { sendOrderEmail } from "./emailjs.js";

const OrderFinalization = () => {
  const { orderData, updateOrderData, setOrderData, updateNestedOrderData,showRodoAlert,showAgeAlert } = useContext(OrderContext);
  const { selectedProducts, setSelectedProducts } = useContext(CartContext);
  const [discountCode, setDiscountCode] = useState("");
  const [error, setError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isNextValid, setIsNextValid] = useState(false);  
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(null);       
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const baseTotalCost = selectedProducts.reduce((sum, product) => {
    if (!product.selected) return sum;
    const numericPrice = parseFloat(product.price.toString().replace(/[^\d.]/g, ""));
    return sum + numericPrice * (product.amount || 1);
  }, 0);

  const totalCost = orderData.shippingAddress.discountApplied
    ? (baseTotalCost * (1 - orderData.shippingAddress.discountValue)).toFixed(2)
    : baseTotalCost.toFixed(2);

  const selectedCount = selectedProducts
    .filter((p) => p.selected)
    .reduce((sum, p) => sum + (p.amount || 1), 0);

  const shippingPrice = () => {
    return baseTotalCost === 0 ? 0 : baseTotalCost >= 400 ? "Za darmo" : "20.00zł";
  };
  const shipping = shippingPrice();

  // Funkcja zastosowania kodu rabatowego
  const applyDiscount = () => {
    if (discountCode.toUpperCase() === "FLOW10") {
      if (!orderData.shippingAddress.discountApplied) {
        updateNestedOrderData("shippingAddress", "discountApplied", true);
        updateNestedOrderData("shippingAddress", "discountValue", 0.1); // 10% rabatu
        setError("");
      } else {
        setError("Kod rabatowy już został zastosowany.");
      }
    } else {
      setError("Nieprawidłowy kod rabatowy.");
    }
  };

  // Funkcja do zapisania zamówienia w Firestore
  const saveOrder = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      alert("Musisz być zalogowany, aby złożyć zamówienie");
      return;
    }

    const db = getFirestore();
    const orderRef = doc(collection(db, "users", user.uid, "orders")); // nowy dokument z automatycznym ID

    const orderToSave = {
      orderDate: Timestamp.now(),
      status: "Oczekujące",
      discountApplied: orderData.shippingAddress.discountApplied,
      discountValue: orderData.shippingAddress.discountValue,
      totalCost: parseFloat(totalCost) + (baseTotalCost < 400 ? 20 : 0),
      shipping: shipping,
      products: selectedProducts
        .filter((p) => p.selected)
        .map((p) => ({
          id: p.id,
          name: p.name,
          price: parseFloat(p.price.toString().replace(/[^\d.]/g, "")),
          amount: p.amount || 1,
          image: p.image,
        })),
      customerData: {
        shippingAddress: orderData.shippingAddress,
        billingAddress: orderData.billingAddress,
        useDifferentBilling: orderData.useDifferentBilling,
        email: orderData.email,
      },
    };

    try {
      await setDoc(orderRef, orderToSave);
      alert("Zamówienie zostało zapisane!");
    } catch (error) {
      console.error("Błąd zapisu zamówienia:", error);
      alert("Wystąpił błąd przy zapisie zamówienia.");
    }
  };

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
      try {
        await sendOrderEmail(orderData, selectedProducts, totalCost);
        console.log("Potwierdzenie zamówienia wysłane na email!");
      } catch (err) {
        console.error("Błąd wysyłania maila:", err);
      }
      
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
  //       acceptedAge: showAgeAlert,
  // acceptedRodo: showRodoAlert,
      });
      if(selectedPaymentMethod === "Revolut"){
        const revolutLink = `https://revolut.me/jj99flex/${parseFloat(totalCost).toFixed(2)}pln`
        window.open(revolutLink, "_blank");
        return;
      }
    } catch (error) {
      console.error("Błąd przy składaniu zamówienia:", error);
      alert("Wystąpił problem, spróbuj ponownie.");
    }
    
    setLoading(false);
  };
  
  return (
    <div className="order-finalization-box" role="form" aria-label="Finalizacja zamówienia">
      <div className="container order-box-1">
        <div className="left-order-brand" aria-label="Marka sklepu FLOWMART">
          Ring<span className="order-brand-2 pink">4</span>U
        </div>
        <div className="right-order">
          <Link to="/payment" className="look" aria-label="Przejdź do koszyka">
            <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
            <div className="order-circle" aria-live="polite">{selectedCount}</div>
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
            aria-label="Adres e-mail"
            aria-required="true"
            aria-invalid={!isEmailValid && orderData.email.length > 0}
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
            <p className="e-mail-error" role="alert">
              Wpisz poprawny adres e-mail
            </p>
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
              <div className="mobile-only" aria-label="Podsumowanie zamówienia">
                <div>
                  TWOJE ZAMÓWIENIE <Link to="/payment">EDYTUJ</Link>
                </div>
                <div className="order-summary">
                  <div>
                    {selectedCount} produkt{selectedCount !== 1 ? "y" : ""}
                  </div>
                  <div className="order-total-cost">{totalCost} zł</div>
                </div>
                <div className="shipping-summary">
                  <div>dostawa </div>
                  <div>{shipping}</div>
                </div>
                <div>
                  <p className="order-discount-enter">KOD RABATOWY:</p>
                  <input
                    type="text"
                    value={discountCode}
                    aria-label="Kod rabatowy"
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeholder="Wpisz kod"
                    disabled={orderData.shippingAddress.discountApplied}
                  />
                  <button 
                    onClick={applyDiscount} 
                    disabled={orderData.shippingAddress.discountApplied}
                    aria-label="Zastosuj kod rabatowy"
                  >
                    Zastosuj
                  </button>
                  {error && <p style={{ color: "red" }} role="alert">{error}</p>} 
                </div>
                <div className="total-summary">
                  <div>Razem </div>
                  <div className="order-total">
                    {baseTotalCost === 0
                      ? "0.00zł"
                      : baseTotalCost >= 400
                      ? totalCost
                      : (parseFloat(totalCost) + 20).toFixed(2)}{" "}
                    zł
                  </div>
                </div>
              </div>
              <button 
                className="place-order-btn" 
                onClick={handleOrderSubmit} 
                disabled={loading}
                aria-label="Złóż zamówienie"
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
