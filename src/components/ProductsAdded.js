import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

const ProductAdded = ({ visible, setVisible, products }) => {
  const navigate = useNavigate();
  const { selectedProducts } = useContext(CartContext);

  const totalCost = selectedProducts.reduce((sum, product) => {
    if (!product.selected) return sum;
    const numericPrice = parseFloat(
      product.price.toString().replace(/[^\d.]/g, "")
    );
    return sum + numericPrice * (product.amount || 1);
  }, 0);

  if (!visible || products.length === 0) return null;

  const handleClose = () => {
    setVisible(false);
  };

  const handleClick = () => {
    navigate("/payment");
  };

  const selectedCount = selectedProducts
    .filter((p) => p.selected)
    .reduce((sum, p) => sum + (p.amount || 1), 0);

  return (
    <section 
      className="container product-add" 
      style={{ display: "flex" }} 
      role="dialog" 
      aria-labelledby="product-added-title" 
      aria-modal="true"
    >
      <div id="product-added-title" className="product-title">
        DODANO DO KOSZYKA!
      </div>

      <button 
        onClick={handleClose} 
        style={{ cursor: "pointer" }} 
        aria-label="Zamknij podsumowanie koszyka"
      >
        <i className="fa-solid fa-x"></i>
      </button>

      <div className="container product-2">
        <div className="row">
          <div className="col-6" role="region" aria-label="Dodane produkty">
            {products.map((product, index) => (
              <article key={index} role="group" aria-label={`${product.name}, cena ${product.price}`}>
                <img
                  src={product.image}
                  className="img-fluid product-img"
                  alt={product.name}
                />
                <div className="product-name product-added-p">{product.name}</div>
                {/* <div className="product-price product-added-p">{product.price}</div> */}
              </article>
            ))}
          </div>

          <div className="col-6 border-start border-black border-1 custom-border" role="region" aria-label="Podsumowanie koszyka">
            <div className="right">
              <p className="product-added-right-title">Twój koszyk</p>
              <p className="product-added-p"> {selectedCount} Produkty </p>
              <p className="product-added-p">
                Cena produktów: <span className="product-added-cost">{totalCost}</span> zł
              </p>
              <p className="product-added-p">
                Dostawa:{" "}
                <span className="product-added-cost">
                  {totalCost === 0 ? "Za darmo" : totalCost < 400 ? "20.00 zł" : "Za darmo"}
                </span>
              </p>
              <hr style={{ border: "1px solid", backgroundColor: "black" }} />
              <p className="product-added-p">
                Razem:{" "}
                <span className="product-added-cost">
                  <span className="product-added-cost-fwb">
                    {totalCost === 0 ? "Za darmo" : totalCost < 400 ? totalCost + 20 : totalCost}
                  </span>{" "}
                  zł
                </span>
              </p>
              <p className="product-added-p">
                (wraz z podatkiem {totalCost !== 0 ? (totalCost * 0.23).toFixed(2) : null} zł)
              </p>
              <button 
                onClick={handleClick} 
                className="product-right-button"
                aria-label="Przejdź do koszyka"
              >
                ZOBACZ KOSZYK
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductAdded;
