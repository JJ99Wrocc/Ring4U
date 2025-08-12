import React from "react";
const PaymentMethods = ({ onSelect, selected }) => {
    const methods = [
      { id: "przelewy24", label: "przelewy24" },
      { id: "payU", label: "payU" },
    ,
    ];
  
    return (
      <div className="payment-method-options">
        {methods.map((method) => (
          <div
            key={method.id}
            className={`payment-option ${selected === method.id ? "selected" : ""}`}
            onClick={() => onSelect(method.id)}
            style={{ cursor: "pointer", padding: "10px", border: "1px solid #ccc", marginBottom: "5px" }}
          >
            {method.label}
          </div>
        ))}
      </div>
    );
  };
  export default PaymentMethods;