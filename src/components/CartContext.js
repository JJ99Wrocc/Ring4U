import React, { createContext, useState, useEffect } from "react";

// Tworzymy konteksty
export const OrderContext = createContext();
export const CartContext = createContext();

const OrderProvider = ({ children }) => {
  // Stany walidacji formularzy
  const [isOrderFormValid, setIsOrderFormValid] = useState(false);
  const [isOrderInvoiceFormValid, setIsOrderInvoiceFormValid] = useState(false);

  // Stan koszyka
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Stan danych zamówienia
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

  // Funkcja do aktualizacji głównych danych zamówienia
  const updateOrderData = (key, value) => {
    setOrderData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Funkcja do aktualizacji zagnieżdżonych danych (np. shippingAddress, billingAddress)
  const updateNestedOrderData = (section, key, value) => {
    setOrderData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  // Zapis koszyka do sessionStorage
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(selectedProducts));
  }, [selectedProducts]);

  // Usuwanie produktu z koszyka
  const removeProduct = (id) => {
    setSelectedProducts((prev) => prev.filter((p) => p.id !== id));
  };

  // Dodawanie produktu do koszyka
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

  // Przełączanie wyboru produktu
  const toggleProductSelection = (id) => {
    setSelectedProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, selected: !p.selected } : p
      )
    );
  };

  // Zaznacz wszystkie produkty
  const selectAllProducts = () => {
    setSelectedProducts((prev) =>
      prev.map((p) => ({ ...p, selected: true }))
    );
  };

  // Odznacz wszystkie produkty
  const deselectAllProducts = () => {
    setSelectedProducts((prev) =>
      prev.map((p) => ({ ...p, selected: false }))
    );
  };

  // Zmiana ilości produktu w koszyku
  const changeProductAmount = (id, newAmount) => {
    setSelectedProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, amount: Number(newAmount) } : p
      )
    );
  };

  return (
    <OrderContext.Provider
      value={{
        orderData,
        updateOrderData,
        updateNestedOrderData,
        isOrderFormValid,
        setIsOrderFormValid,
        isOrderInvoiceFormValid,
        setIsOrderInvoiceFormValid,
        setOrderData,
      }}
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
