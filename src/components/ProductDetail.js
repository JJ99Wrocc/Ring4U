import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import ProductAdded from "./ProductsAdded";
import "../css/ProductDetail.css"; // dodajemy osobny plik CSS

const ProductDetail = ({ products }) => {
  const { productId } = useParams();
  const { addProduct } = useContext(CartContext);
  const [visible, setVisible] = useState(false);

  const product = products.find(p => p.id.toString() === productId);

  if (!product) return <p className="text-center mt-5">Produkt nie znaleziony</p>;

  const handleAddToCart = () => {
    addProduct(product);
    setVisible(true);
  };

  return (
    <section className="product-detail container my-5">
      <div className="row g-4">
        {/* Lewy blok - obrazek */}
        <div className="col-md-6 product-image-wrapper">
          <img src={product.image} alt={product.name} className="img-fluid product-image rounded shadow-sm" />
        </div>

        {/* Prawy blok - szczegóły */}
        <div className="col-md-6 product-info">
          <h1 className="product-title mb-3">{product.name}</h1>
          <p className="product-price h3 mb-4">{product.price}</p>


          <div className="product-description mb-4">
            <h5>Opis produktu:</h5>
            <p>{product.description}</p>
          </div>

          <div className="product-details">
            <h5>Szczegóły:</h5>
            <ul>
              <li>Materiał: {product.material}</li>
              <li>Kolor: {product.color}</li>
              {/* <li>Indeks: {product.id}</li> */}
              <li>Dostępność: {product.availability}</li>
            </ul>
          </div>
          <button 
            className="btn btn-primary btn-lg mb-4 product-add-btn"
            onClick={handleAddToCart}
          >
            <i className="fa-solid fa-cart-shopping me-2"></i> Dodaj do koszyka
          </button>
        </div>
      </div>

      {visible && (
        <ProductAdded visible={visible} setVisible={setVisible} products={[product]} />
      )}

    </section>
  );
};

export default ProductDetail;
