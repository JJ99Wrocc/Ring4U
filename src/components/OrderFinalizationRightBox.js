import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { OrderContext } from "./OrderContext";
import { getFirestore, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const OrderFinalizationRightBox = () => {
  const { selectedProducts } = useContext(CartContext);
  const { orderData, updateNestedOrderData } = useContext(OrderContext);
  const [discountCode, setDiscountCode] = useState("");
  const [error, setError] = useState("");

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

  const applyDiscount = () => {
    if (discountCode.toUpperCase() === "FLOW10") {
      if (!orderData.shippingAddress.discountApplied) {
        updateNestedOrderData("shippingAddress", "discountApplied", true);
        updateNestedOrderData("shippingAddress", "discountValue", 0.1);
        setError("");
      } else {
        setError("Kod rabatowy już został zastosowany.");
      }
    } else {
      setError("Nieprawidłowy kod rabatowy.");
    }
  };

  const saveOrder = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      alert("Musisz być zalogowany, aby złożyć zamówienie");
      return;
    }

    const db = getFirestore();
    const orderRef = doc(collection(db, "users", user.uid, "orders"));
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

  return (
    <div className="right-order-finalization-box hide-above768">
      <div>
        TWOJE ZAMÓWIENIE{" "}
        <Link to="/payment" tabIndex={0} aria-label="Edytuj zamówienie">
          EDYTUJ
        </Link>
      </div>

      <div className="order-summary">
        <div aria-live="polite">
          {selectedCount} produkt{selectedCount !== 1 ? "y" : ""}
        </div>
        <div className="order-total-cost" aria-label={`Koszt produktów: ${totalCost} zł`}>
          {totalCost} zł
        </div>
      </div>

      <div className="shipping-summary">
        <div>dostawa </div>
        <div aria-label={`Koszt dostawy: ${shipping}`}>{shipping}</div>
      </div>

      <div>
        <p className="order-discount-enter">KOD RABATOWY:</p>
        <input
          type="text"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          placeholder="Wpisz kod"
          disabled={orderData.shippingAddress.discountApplied}
          aria-label="Wpisz kod rabatowy"
          tabIndex={0}
        />
        <button
          onClick={applyDiscount}
          disabled={orderData.shippingAddress.discountApplied}
          aria-label="Zastosuj kod rabatowy"
          tabIndex={0}
        >
          Zastosuj
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

      <div className="total-summary">
        <div>Razem </div>
        <div className="order-total" aria-label={`Łączny koszt: ${totalCost} zł`}>
          {baseTotalCost === 0
            ? "0.00zł"
            : baseTotalCost >= 400
            ? totalCost
            : (parseFloat(totalCost) + 20).toFixed(2)}{" "}
          zł
        </div>
      </div>

      <div>
        ( Łącznie z podatkiem{" "}
        {baseTotalCost !== 0 ? (parseFloat(totalCost) * 0.23).toFixed(2) : null} zł )
      </div>

      <hr style={{ margin: "30px 0" }} />

      {selectedProducts.map((product, index) => (
        <div
          key={index}
          className="ui segment order-segment"
          role="group"
          aria-label={`Produkt: ${product.name}`}
          tabIndex={0}
        >
          <img
            src={product.image}
            className="order-img"
            alt={product.name}
            tabIndex={0}
          />
          <div className="order-segment-name">{product.name}</div>
          <div className="order-product-count">
            {product.selected ? `ilość ${product.amount}` : null}
          </div>
          <div className="order-product-price">{product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default OrderFinalizationRightBox;
