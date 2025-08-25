import React, { createContext, useState, useEffect } from "react";

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

  const updateOrderData = (key, value) => {
    setOrderData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const updateNestedOrderData = (section, key, value) => {
    setOrderData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(selectedProducts));
  }, [selectedProducts]);

  const removeProduct = (id) => {
    setSelectedProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const addProduct = (newProduct) => {
    setSelectedProducts((prev) => {
      const existing = prev.find((p) => p.id === newProduct.id);
      if (existing) {
        return prev.map((p) =>
          p.id === newProduct.id ? { ...p, amount: p.amount + 1 } : p
        );
      }
      return [...prev, { ...newProduct, amount: 1, selected: true }];
    });
  };

  const toggleProductSelection = (id) => {
    setSelectedProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, selected: !p.selected } : p
      )
    );
  };

  const selectAllProducts = () => {
    setSelectedProducts((prev) =>
      prev.map((p) => ({ ...p, selected: true }))
    );
  };

  const deselectAllProducts = () => {
    setSelectedProducts((prev) =>
      prev.map((p) => ({ ...p, selected: false }))
    );
  };

  const changeProductAmount = (id, newAmount) => {
    setSelectedProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, amount: Number(newAmount) } : p
      )
    );
<<<<<<< HEAD
  };

=======
  }; 

  
>>>>>>> 662a2b9b45e88319faec15b6359554bb3ef4a929
  return (
    <OrderContext.Provider
      value={{
<<<<<<< HEAD
        orderData,
        updateOrderData,
        updateNestedOrderData,
        isOrderFormValid,
        setIsOrderFormValid,
        isOrderInvoiceFormValid,
        setIsOrderInvoiceFormValid,
        setOrderData,
      }}
=======
        changeProductAmount,
        selectedProducts,
        setSelectedProducts,
        removeProduct,
        addProduct,
        toggleProductSelection,
        selectAllProducts,
        deselectAllProducts,
         }}
>>>>>>> 662a2b9b45e88319faec15b6359554bb3ef4a929
    >
      <CartContext.Provider
        value={{
          changeProductAmount,
          selectedProducts,
          setSelectedProducts,
          removeProduct,
          addProduct,
          toggleProductSelection,
          selectAllProducts,
          deselectAllProducts,
        }}
      >
        {children}
      </CartContext.Provider>
    </OrderContext.Provider>
  );
};

export default OrderProvider;
