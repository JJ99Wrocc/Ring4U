import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import ProductAdded from "./ProductsAdded";
import { Link } from "react-router-dom";
import '../css/earRings.css';
import UpperFooter from "./Footer";
import { FavoritesContext } from "./FavoriteContext";

export const earRings = [
  // { id: 1, name: "Kolczyki Złote", price: "150 zł", category: "zlote", image: "path.jpg" }
];

const EarRings = ({ category }) => {
  const { addProduct } = useContext(CartContext);
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const [visible, setVisible] = useState(false);
  const [productToAdd, setProductToAdd] = useState(null); 

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredProducts = category 
    ? earRings.filter(p => p.category === category) 
    : earRings;

  const totalPage = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleButtonClick = (product) => {
    if (addProduct) addProduct(product); 
    setProductToAdd(product);  
    setVisible(true);  
  };

  const getPageNumbers = () => {
    const maxPagesToShow = 4;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPage) {
      endPage = totalPage;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  if (!filteredProducts || filteredProducts.length === 0) {
    return (
      <div className="container my-5 text-center">
        <h2>Brak produktów w tej kategorii.</h2>
      </div>
    );
  }

  return (
    <>
      <section id="product-ear-rings" className="ear-v2-main-container container" role="region" aria-label="product-ear-rings">
        <ProductAdded visible={visible} setVisible={setVisible} products={productToAdd ? [productToAdd] : []} />
        
        <h1 className="ear-v2-title">Kolczyki {category ? `- ${category}` : ''}</h1>
        
        <div className="row ear-v2-row-grid">
          {currentProducts.map((product, index) => {
            if (!product) return null;

            const isFavorite = favorites?.some(fav => String(fav.id) === String(product.id));

            return (
              <article
                key={product.id || index}
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
                      if (product.image2) e.currentTarget.src = product.image2;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.src = product.image;
                    }}
                  />

                  {/* Szybki przycisk koszyka na zdjęciu */}
                  <button
                    className="ear-v2-buy-btn"
                    onClick={() => handleButtonClick(product)}
                    aria-label={`Dodaj ${product.name} do koszyka`}
                  >
                    <i className="fa-solid fa-bag-shopping fa-fw"></i>
                  </button>

                  {/* Przycisk ulubionych na zdjęciu */}
                  <button
                    className={`ear-v2-fav-btn ${isFavorite ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (toggleFavorite) toggleFavorite(product);
                    }}
                    aria-label={`Dodaj ${product.name ?? ''} do ulubionych`}
                  >
                    <i className={`${isFavorite ? 'fa-solid' : 'fa-regular'} fa-heart fa-fw`}></i>
                  </button>
                </div>
                
                <div className="ear-v2-product-info text-center mt-2">
                  <h5 className="h5-ear-rings">
                    <Link 
                      to={`/product/${product.id}`} 
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {product.name}
                    </Link>
                  </h5>
                  <p className="ear-v2-product-price">{product.price}</p>
                  
                  {/* Glówny przycisk dodawania do koszyka */}
                  <button 
                    className="btn btn-primary btn-sm w-100 mt-2"
                    onClick={() => handleButtonClick(product)}
                  >
                    Dodaj do koszyka
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {totalPage > 1 && (
          <div className="pagination justify-content-center my-4">
            {currentPage > 1 && (
              <button onClick={() => {
                setCurrentPage(prev => prev - 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>
                &laquo;
              </button>
            )}

            {getPageNumbers().map((page) => (
              <button
                key={page}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(page);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={currentPage === page ? 'active' : ''}
              >
                {page}
              </button>
            ))}

            {currentPage < totalPage && (
              <button onClick={() => {
                setCurrentPage(prev => prev + 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>
                &raquo;
              </button>
            )}
          </div>
        )}
      </section>

      {/* Stopka na dole strony */}
      <UpperFooter />
    </>
  );
};

export default EarRings;