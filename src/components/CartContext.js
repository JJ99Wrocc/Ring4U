import React, { createContext, useState } from "react";

export const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [isOrderFormValid, setIsOrderFormValid] = useState(false);
  const [isOrderInvoiceFormValid, setIsOrderInvoiceFormValid] = useState(false)
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
      phonePrefix:"",
      selectedCount: "",
      totalCost:"",
      shipping: "",
      productImage: "",
      productName: "",
      productPrice: "",
      discountApplied: false,
      discountValue: 0 
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
      phonePrefix:"",
      selectedCount: "",
      totalCost:"",
      shipping: "",
      productImage: "",
      productName: "",
      productPrice: "",
      
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
    <OrderContext.Provider value={{ orderData, updateOrderData, updateNestedOrderData, isOrderFormValid, setIsOrderFormValid, isOrderInvoiceFormValid, setIsOrderInvoiceFormValid,setOrderData }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
