import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";



const PaymentWithProduct = () =>{
    const {
        selectedProducts,
        changeProductAmount,
        removeProduct,
        toggleProductSelection,
        selectAllProducts,
        deselectAllProducts,
      } = useContext(CartContext);
    
      const navigate = useNavigate();
    
      const handleToggleAll = () => {
        const allSelected = selectedProducts.every((product) => product.selected);
        if (allSelected) {
          deselectAllProducts();
        } else {
          selectAllProducts();
        }
      };
    
      const handleAmountChange = (e, id) => {
        changeProductAmount(id, e.target.value);
      };
    
      const totalCost = selectedProducts.reduce((sum, product) => {
        if (!product.selected) return sum;
        const numericPrice = parseFloat(
          product.price.toString().replace(/[^\d.]/g, "")
        );
        return sum + numericPrice * (product.amount || 1);
      }, 0);
    
      const handleRemove = (id) => {
        removeProduct(id);
      };
    
      const selectedCount = selectedProducts
        .filter((p) => p.selected)
        .reduce((sum, p) => sum + (p.amount || 1), 0);
      return (
        <div className="payment-box">
        <div className="payment-left">
          <div className="payment-left-title">TWÓJ KOSZYK</div>
          <p>Łącznie {selectedCount} sztuk</p>

          <p className="payment-text2">
            Produkty w Twoim koszyku nie są zarezerwowane - sfinalizuj
            zamówienie, aby zamówić
          </p>
          <div className="payment-text3">
            <button
              className="payment-accept-all"
              onClick={handleToggleAll}
            ></button>
            zaznacz wszystkie produkty
          </div>

          <div className="container">
            {selectedProducts.map((product) => (
              <div
                className="product-add-segment"
                key={product.id + Math.random()}
              >
                <span
                  className="close"
                  onClick={() => handleRemove(product.id)}
                >
                  &times;
                </span>
                <img
                  src={product.image}
                  className="segment-img"
                  alt={product.name}
                />
                <p className="segment-product-name">{product.name}</p>
                <p className="segment-product-price price">{product.price}</p>
                <div className="amount-box">
                  <div className="segment-product-amount ui segment">
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
                </div>

                <span
                  className={`payment-accept-box ${
                    product.selected ? "selected" : ""
                  }`}
                  onClick={() => toggleProductSelection(product.id)}
                >
                  <i className="fa-solid fa-check"></i>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="payment-right">
          <p className="payment-right-title">PODSUMOWANIE ZAMÓWIENIA</p>
          <p>
            {" "}
            {selectedCount} Produkty:{" "}
            <span className="total-cost">{totalCost.toFixed(2)} zł</span>{" "}
          </p>
          <p>
            Dostawa:{" "}
            <span className="total-cost">
              {totalCost === 0
                ? "Za darmo"
                : totalCost < 400
                ? "20.00 zł"
                : "Za darmo"}
            </span>
          </p>
          <hr style={{ border: "1px solid", backgroundColor: "black" }} />
          <p className="payment-total-cost">
            Razem:{" "}
            <span className="total-cost">
              {totalCost === 0
                ? "0.00zł"
                : totalCost < 400
                ? totalCost + 20
                : totalCost}{" "}
              zł{" "}
            </span>
          </p>
          <p className="including-taxes">(Łącznie z podatkiem)</p>
          <p>
            <i className="fa-solid fa-tags"></i> Wpisz kod promocyjny
          </p>
          <button
            onClick={() => navigate("/order-finalization")}
            className="product-right-button2"
          >
            ZAKOŃCZ TRANZAKCJE <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
    

      )

}

export default PaymentWithProduct;