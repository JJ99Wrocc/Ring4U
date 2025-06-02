import React, { createContext, useState } from "react";

export const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [orderData, setOrderData] = useState({
    email: "",
  

    shippingAddress: {
      costumerName: "",
      costumerSurname: "",
      address: "",
      company: "",
      postalCode: "",
      city: "",
      phoneNumber: "",
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
    },

    useDifferentBilling: false,
    
  });

  const updateOrderData = (key, value) => {
    setOrderData(prev => ({
      ...prev,
      [key]: value,
    }));
  };
  
  const updateNestedOrderData = (section, key, value) => {
    setOrderData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      }
    }))
  }

  return (
    <OrderContext.Provider value={{ orderData, updateOrderData, updateNestedOrderData }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
