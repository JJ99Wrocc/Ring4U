import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

const PaymentWithProduct = () => {
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
    <div className="payment-box" role="region" aria-label="Koszyk użytkownika">
      <div className="payment-left beyond768a">
        <div className="payment-left-title">TWÓJ KOSZYK</div>
        <p>
          Łącznie {selectedCount} sztuk{" "}
          <span style={{ fontWeight: "bold" }}>
            {totalCost === 0
              ? "0.00zł"
              : totalCost < 400
              ? totalCost + 20
              : totalCost}{" "}
            zł
          </span>
        </p>

        <p className="payment-text2">
          Produkty w Twoim koszyku nie są zarezerwowane - sfinalizuj
          zamówienie, aby zamówić
        </p>

        <div className="payment-text3">
          <button
            className="payment-accept-all"
            onClick={handleToggleAll}
            aria-pressed={selectedProducts.every(p => p.selected)}
            aria-label="Zaznacz wszystkie produkty"
          ></button>
          zaznacz wszystkie produkty
        </div>

        <div className="container">
          {selectedProducts.map((product) => (
            <div
              className="product-add-segment ui segment"
              key={product.id + Math.random()}
              role="group"
              aria-label={`Produkt ${product.name}`}
            >
              <span
                className="close"
                onClick={() => handleRemove(product.id)}
                role="button"
                tabIndex={0}
                aria-label={`Usuń ${product.name} z koszyka`}
                onKeyDown={(e) => e.key === "Enter" && handleRemove(product.id)}
              >
                &times;
              </span>

              <img
                src={product.image}
                className="segment-img"
                alt={product.name}
              />
              <p className="segment-product-name">{product.name}</p>
              <p className="segment-product-price-payment price">{product.price}</p>

              <div className="amount-box">
                <div className="segment-product-amount-payment ui segment">
                  <label htmlFor={`amount-${product.id}`} className="sr-only">
                    Ilość produktu {product.name}
                  </label>
                  <select
                    id={`amount-${product.id}`}
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
                role="checkbox"
                aria-checked={product.selected}
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && toggleProductSelection(product.id)
                }
                aria-label={`Zaznacz ${product.name}`}
              >
                <i className="fa-solid fa-check"></i>
              </span>
            </div>
          ))}

          <button
            onClick={() => navigate("/order-finalization")}
            className="product-right-button3"
            style={{ marginBottom: "30px", marginTop: "20px" }}
            aria-label="Zakończ transakcję"
          >
            ZAKOŃCZ TRANZAKCJE
          </button>
        </div>
      </div>

      <div className="payment-right hide-above768">
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
        <p className="including-taxes">
          (Łącznie z podatkiem{" "}
          {totalCost !== 0 ? (totalCost * 0.23).toFixed(2) : null} zł )
        </p>
        <p>
          <i className="fa-solid fa-tags"></i> Wpisz kod promocyjny
        </p>
        <button
          onClick={() => navigate("/order-finalization")}
          className="product-right-button2"
          aria-label="Zakończ transakcję"
        >
          ZAKOŃCZ TRANZAKCJE
        </button>
      </div>
    </div>
  );
};

export default PaymentWithProduct;
