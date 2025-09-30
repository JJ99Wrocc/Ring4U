import React, { useContext, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import ProductAdded from "./ProductsAdded";
import "../css/ProductDetail.css"; // osobny plik CSS

const ProductDetail = ({ products }) => {
  const { productId } = useParams();
  const { addProduct, changeProductAmount } = useContext(CartContext);
  const [visible, setVisible] = useState(false);

  const product = products.find((p) => p.id.toString() === productId);
  const [mainImage, setMainImage] = useState(product?.image || "");
  const [zoom, setZoom] = useState({ x: 0, y: 0, visible: false });

  const imageRef = useRef(null);

  if (!product)
    return (
      <p className="text-center mt-5" role="alert">
        Produkt nie znaleziony
      </p>
    );

  const handleAddToCart = () => {
    addProduct(product);
    setVisible(true);
  };

  const handleAmountChange = (e, id) => {
    changeProductAmount(id, e.target.value);
  };

  const handleImageClick = (key) => {
    if (!product[key]) return;
    const temp = mainImage;
    setMainImage(product[key]);
    product[key] = temp;
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoom({ x, y, visible: true });
  };

  const handleMouseLeave = () => {
    setZoom({ ...zoom, visible: false });
  };

  return (
    <section
      className="product-detail container my-5"
      aria-labelledby="product-title"
      aria-describedby="product-description"
    >
      <div className="row g-4">
        {/* Lewy blok - obrazek */}
        <div className="col-md-6 product-image-wrapper">
          <div
            className="product-image-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              ref={imageRef}
              src={mainImage}
              alt={product.name}
              className="img-fluid product-image-detail rounded shadow-sm"
              role="img"
              aria-label={`Zdjęcie produktu: ${product.name}`}
            />
            {zoom.visible && (
              <div
                className="zoom-lens"
                style={{
                  backgroundImage: `url(${mainImage})`,
                  backgroundPosition: `${zoom.x}% ${zoom.y}%`,
                }}
              />
            )}
          </div>

          {/* Miniatury */}
          {product.image2 && (
            <img
              src={product.image2}
              alt={`${product.name} - dodatkowe zdjęcie 1`}
              className="img-fluid product-image-small rounded shadow-sm"
              onClick={() => handleImageClick("image2")}
            />
          )}
          {product.image3 && (
            <img
              src={product.image3}
              alt={`${product.name} - dodatkowe zdjęcie 2`}
              className="img-fluid product-image-small2 rounded shadow-sm"
              onClick={() => handleImageClick("image3")}
            />
          )}
          {product.image4 && (
            <img
              src={product.image4}
              alt={`${product.name} - dodatkowe zdjęcie 3`}
              className="img-fluid product-image-small3 rounded shadow-sm"
              onClick={() => handleImageClick("image4")}
            />
          )}
        </div>

        {/* Prawy blok - szczegóły */}
        <div className="col-md-6 product-info-detail">
          <h1 id="product-title" className="product-title-detail mb-3">
            {product.name}
          </h1>
          <p
            className="product-price-detail h3 mb-4"
            aria-label={`Cena: ${product.price}`}
          >
            {product.price}
          </p>

          <div className="product-details">
            <h5>Szczegóły:</h5>
            <ul>
              <li>Materiał: {product.material}</li>
              <li>Kolor: {product.color}</li>
              <li>Dostępność: {product.availability}</li>
            </ul>
          </div>

          <div className="amount-box">
            <div className="segment-product-detail-amount ui segment">
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

          <button
            className="btn btn-lg product-add-btn"
            onClick={handleAddToCart}
            aria-label={`Dodaj produkt ${product.name} do koszyka`}
          >
            <i className="fa-solid fa-cart-shopping me-2" aria-hidden="true"></i>
            Dodaj do koszyka
          </button>
        </div>
      </div>

      {visible && (
        <ProductAdded
          visible={visible}
          setVisible={setVisible}
          products={[product]}
          aria-live="polite"
        />
      )}

      <div id="product-description" className="product-description mb-4">
        <h5>Opis produktu:</h5>
        {Array.isArray(product.description) ? (
  product.description.map((line, index) => (
    <p key={index}>{line}</p>
  ))
) : (
  <p>{product.description}</p>
)}

      </div>
      <div id="product-specs" className="product-specs mb-4">
  <h5>Specyfikacje:</h5>
  {product.specs ? (
    <ul>
      {Object.entries(product.specs).map(([key, value], index) => (
        <li key={index}>
          <strong>{key}:</strong> {value}
        </li>
      ))}
    </ul>
  ) : (
    <p>Brak specyfikacji</p>
  )}
</div>
    </section>
  );
};

export default ProductDetail;
