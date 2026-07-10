import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import ProductAdded from "./ProductsAdded"; // Odkomentowałem, by modal działał
import { Link } from "react-router-dom";
import '../css/earRings.css';
import UpperFooter from "./Footer";

export const earRings = [
   
],

const EarRings = ({ category }) => {
  
  console.log("Kategoria:", category);
  console.log("Dane produktów:", earRings);
  const { addProduct } = useContext(CartContext);
  const [visible, setVisible] = useState(false);
  const [productToAdd, setProductToAdd] = useState(null); 

  // <--- 2. Tutaj dodaj logikę filtrowania
  const filteredProducts = category 
    ? earRings.filter(p => p.category === category) 
    : earRings;

  const handleButtonClick = (product) => {
    addProduct(product); 
    setProductToAdd(product);  
    setVisible(true);  
  };

  return (
    <section id="product-ear-rings" className="ear-v2-main-container container" role="region" aria-label="product-ear-rings">
      {/* MODAL PO DODANIU */}
      <ProductAdded visible={visible} setVisible={setVisible} products={productToAdd ? [productToAdd] : []} />
      
      <h1 className="ear-v2-title">Kolczyki {category ? `- ${category}` : ''}</h1>
      
      <div className="row ear-v2-row-grid">
        {/* <--- 3. Tutaj zmień earRings.map na filteredProducts.map */}
        {filteredProducts.map((product) => (
          <article
            key={product.id}
            className="col-6 col-md-3 mb-4 ear-v2-card"
            role="group"
            aria-label={`${product.name}, cena ${product.price}`}
          >
            <div className="ear-v2-image-wrapper">
              <img
                src={product.image}
                className="img-fluid ear-v2-img"
                alt={product.name}
                onMouseEnter={(e) => {
                  if(product.image2) e.currentTarget.src = product.image2;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.src = product.image;
                }}
              />
              <button
                className="ear-v2-buy-btn"
                onClick={() => handleButtonClick(product)}
                aria-label={`Dodaj ${product.name} do koszyka`}
              >
                <i className="fa-solid fa-bag-shopping fa-fw"></i>
              </button>
            </div>
            
            <div className="ear-v2-product-info">
              <h5 className="h5-ear-rings">
                <Link 
                  to={`/product/${product.id}`} 
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {product.name}
                </Link>
              </h5>
              <p className="ear-v2-product-price">{product.price}</p>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}

export default EarRings;