import React, { useContext, useState } from "react";
import '../css/index.css';
import { CartContext } from "./CartContext";

const DeliveryMethod = ({ onSelect }) => {
  const { selectedProducts } = useContext(CartContext);
  const [selectedDelivery, setSelectedDelivery] = useState(null);

  const totalCost = selectedProducts.reduce((sum, product) => {
    if (!product.selected) return sum;
    const numericPrice = parseFloat(
      product.price.toString().replace(/[^\d.]/g, "")
    );
    return sum + numericPrice * (product.amount || 1);
  }, 0);

  const handleSelect = (method) => {
    setSelectedDelivery(method);
    if (onSelect) onSelect(method);
  };

  const getPriceText = () => {
    if (totalCost === 0) return "0.00zł";
    if (totalCost < 400) return "20.00 zł";
    return "Za darmo";
  };

  return (
    <div className="delivery-box" aria-live="polite">
      <div
        className={`ui segment first-delivery-box delivery-boxes ${
          selectedDelivery === "inpost" ? "selected" : ""
        }`}
        onClick={() => handleSelect("inpost")}
        role="button"
        tabIndex={0}
        aria-pressed={selectedDelivery === "inpost"}
        aria-label={`Wybierz dostawę do paczkomatu Inpost, cena: ${getPriceText()}`}
        onKeyDown={(e) => e.key === "Enter" && handleSelect("inpost")}
      >
        <p>Data dostawy do paczkomatu Inpost (time)</p>
        <p>{getPriceText()}</p>
        <span className="delivery-flag">
          <i className="fa-solid fa-truck"></i>
        </span>
      </div>

      <div
        className={`ui segment second-delivery-box delivery-boxes ${
          selectedDelivery === "orlen" ? "selected" : ""
        }`}
        onClick={() => handleSelect("orlen")}
        role="button"
        tabIndex={0}
        aria-pressed={selectedDelivery === "orlen"}
        aria-label={`Wybierz dostawę do paczkomatu Orlen, cena: ${getPriceText()}`}
        onKeyDown={(e) => e.key === "Enter" && handleSelect("orlen")}
      >
        <p>Data dostawy do paczkomatu Orlen (time)</p>
        <p>{getPriceText()}</p>
        <span className="delivery-flag">
          <i className="fa-solid fa-house-flag"></i>
        </span>
      </div>
    </div>
  );
};

export default DeliveryMethod;
