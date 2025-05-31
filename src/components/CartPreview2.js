import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const CartAddedProduct = ({ show }) => {
  const {
    removeProduct,
    selectedProducts,
    setSelectedProducts,
    changeProductAmount,
    toggleProductSelection,
    selectAllProducts,
    deselectAllProducts,
  } = useContext(CartContext);

  // 🛡️ Zabezpieczenie przed błędem:
  if (!selectedProducts || !Array.isArray(selectedProducts)) {
    return null;
  }

  if (!show) return null;

  const handleRemove = (id) => {
    removeProduct(id);
  };

  const handleAmountChange = (e, id) => {
    changeProductAmount(id, e.target.value);
  };

  const handleToggleAll = () => {
    const allSelected = selectedProducts.every((product) => product.selected);
    if (allSelected) {
      deselectAllProducts();
    } else {
      selectAllProducts();
    }
  };

  const totalCost = selectedProducts.reduce((sum, product) => {
    if (!product.selected) return sum;
    const numericPrice = parseFloat(
      product.price.toString().replace(/[^\d.]/g, "")
    );
    return sum + numericPrice * (product.amount || 1);
  }, 0);

  return (
    <div className="Navbar-squeres Nav-added-product-box">
      {selectedProducts.map((product) => (
        <div
          className="added-product-box ui segment"
          key={`${product.id}-${Math.random()}`}
        >
          <div
            className={`accept-product-box ${product.selected ? "selected" : ""}`}
            onClick={() => toggleProductSelection(product.id)}
          >
            <i className="fa-solid fa-check"></i>
          </div>

          <div className="product-box-img">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-box-name">{product.name}</div>

          <div className="product-box-amount ui segment">
            <select
              value={product.amount}
              onChange={(e) => handleAmountChange(e, product.id)}
            >
              {[...Array(10).keys()].map((n) => (
                <option key={n + 1} value={n + 1}>
                  {n + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="product-box-price">{product.price}</div>

          <div
            onClick={() => handleRemove(product.id)}
            className="product-box-bin"
          >
            <i className="fa-solid fa-trash"></i>
          </div>
        </div>
      ))}

      <button className="accept-all" onClick={handleToggleAll}></button>

      <div className="product-box-total-cost">
        Razem: <span className="costt">{totalCost.toFixed(2)}</span> zł
      </div>
    </div>
  );
};

export default CartAddedProduct;
