import React from "react";
import HotPayLogo from '../img/hotpay-logo.webp';

const PaymentMethods = ({ onSelect, selected }) => {
  const methods = [
    { id: "HotPay", label: "HotPay", logo: "HotPayLogo" },
    
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
            display: "flex",      
              alignItems: "center",  
              gap: "10px",
            cursor: "pointer",
            padding: "10px",
            border: "1px solid #ccc",
            color: "#333",
            marginBottom: "5px",
            borderRadius: "8px",
          }}
        >
          <img 
            alt={`${method.label} Logo`} 
            src={HotPayLogo} 
            style={{ height: "24px", width: "auto" }} 
          />
          <span
          alt={method.label}
          style={{ fontSize: "16px", fontWeight: "900", color: "white", letterSpacing: "1.5px", textTransform: "uppercase" }}>
            {method.label}</span>
      
        </div>
      ))}    
    </div>
  );
};

export default PaymentMethods;
