import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import ProductAdded from "./ProductsAdded"; // Pamiętaj o imporcie modala
import { Link } from "react-router-dom";
import "../css/rings.css";

// Zakładam, że rings jest importowane lub zdefiniowane wyżej
export const rings = [
  /* Twoje dane produktów */
];

const Rings = () => {
  const { addProduct } = useContext(CartContext);
  const [visible, setVisible] = useState(false);
  const [productToAdd, setProductToAdd] = useState(null);

  const handleButtonClick = (product) => {
    addProduct(product);
    setProductToAdd(product);
    setVisible(true);
  };

  return (
    <div className="rings-main-wrapper">
      {/* Przekazujemy produkt do modala */}
      <ProductAdded visible={visible} setVisible={setVisible} products={productToAdd ? [productToAdd] : []} />

      <section id="product-rings" className="container rings-v2-container" role="region" aria-label="product-rings">
        <h1 className="rings-v2-title">Pierścionki</h1>
        
        <div className="row rings-v2-grid-row">
          {rings.map((product) => (
            <article
              key={product.id}
              className="col-6 col-md-3 mb-4 rings-v2-card"
              role="group"
              aria-label={`${product.name}, cena ${product.price}`}
            >
              <div className="rings-v2-image-wrapper">
                <img
                  src={product.image} // POPRAWIONE: było product.name
                  className="img-fluid rings-v2-img"
                  alt={product.name}
                  onMouseEnter={(e) => {
                    if (product.image2) e.currentTarget.src = product.image2;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.src = product.image;
                  }}
                />
                <button
                  className="rings-v2-action-btn"
                  onClick={() => handleButtonClick(product)}
                  aria-label={`Dodaj ${product.name} do koszyka`}
                >
                  <i className="fa-solid fa-bag-shopping fa-fw"></i>
                </button>
              </div>

              <div className="rings-v2-info">
                <h5 className="rings-v2-product-title">
                  <Link
                    to={product.url}
                    className="rings-v2-link"
                  >
                    {product.name}
                  </Link>
                </h5>
                <p className="rings-v2-price">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Rings;