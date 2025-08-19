import React, { createContext, useState, useEffect } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState(() => {
    const saved = sessionStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

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
          p.id === newProduct.id
            ? { ...p, amount: p.amount + 1 }
            : p
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
  }; 

  
  return (
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
  );
};

export default CartProvider;
