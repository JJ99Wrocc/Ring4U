import React from "react";

const PaymentMethods = ({ onSelect, selected }) => {
  const methods = [
    { id: "Revolut", label: "Revolut" }, // Revolut pierwszy
    { id: "PayPal", label: "PayPal" },
  ];

  return (
    <div 
      className="payment-method-options"
      role="radiogroup"
      aria-label="Metody płatności"
    >
      {methods.map((method) => (
        <div
          key={method.id}
          role="radio"
          aria-checked={selected === method.id}
          tabIndex={0}
          className={`payment-option ${selected === method.id ? "selected" : ""}`}
          onClick={() => onSelect(method.id)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onSelect(method.id);
            }
          }}
          style={{
            cursor: "pointer",
            padding: "10px",
            border: "1px solid #ccc",
            marginBottom: "5px",
            borderRadius: "8px",
          }}
        >
          {method.label}
        </div>
      ))}    
    </div>
  );
};

export default PaymentMethods;
