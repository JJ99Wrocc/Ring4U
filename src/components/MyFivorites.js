import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from './FavoriteContext';
import { CartContext } from './CartContext';
import '../css/MyFavorites.css';

const MyFavorites = () => {
  // Pobieranie danych z kontekstów z wartościami domyślnymi (zabezpieczenie przed brakiem providera)
  const contextFav = useContext(FavoritesContext);
  const contextCart = useContext(CartContext);

  const favorites = contextFav?.favorites || [];
  const toggleFavorite = contextFav?.toggleFavorite;
  const addProduct = contextCart?.addProduct;

  // 1. Walidacja: Pusta lista lub brak danych
  if (!Array.isArray(favorites) || favorites.length === 0) {
    return (
    <div className='container'>
        <div className='row'>
              <div className="container my-5 text-center favorites" style={{ minHeight: '60vh' }}>
        <h2>Twoja lista ulubionych jest pusta.</h2>
        <p className="mt-3">
          Przeglądaj naszą ofertę i kliknij ikonę serca, aby zapisać wybrane produkty na później.
        </p>
        <Link to="/" className="btn btn-primary mt-3">
          Wróć do sklepu
        </Link>
      </div>
        </div>
    </div>
    );
  }

  // 2. Rendering listy ulubionych z filtrowaniem uszkodzonych obiektów
  return (
    <div className='container'>
        <div className='row'>
            <section className="ear-v2-main-container container" style={{ minHeight: '60vh' }}>
      <h1 className="ear-v2-title mb-4">Moje Ulubione</h1>

      <div className="row ear-v2-row-grid">
        {favorites
          .filter((product) => product && product.id) // Odrzuca puste obiekty
          .map((product) => (
            <article key={product.id} className="col-6 col-sm-4 col-md-3 mb-4 ear-v2-card">
              <div className="ear-v2-image-wrapper">
                <img
                  src={product.image || '/placeholder.png'} // Zabezpieczenie przed brakiem obrazka
                  className="img-fluid ear-v2-img"
                  alt={product.name || 'Produkt'}
                />
                <button
                  className="ear-v2-fav-btn active"
                  onClick={() => toggleFavorite && toggleFavorite(product)}
                  aria-label="Usuń z ulubionych"
                >
                  <i className="fa-solid fa-heart fa-fw"></i>
                </button>
              </div>

              <div className="ear-v2-product-info text-center mt-2">
                <h5 className="h5-ear-rings">
                  <Link 
                    to={`/product/${product.id}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {product.name || 'Bez nazwy'}
                  </Link>
                </h5>
                <p className="ear-v2-product-price">{product.price}</p>
                
                <button 
                  className="btn btn-primary btn-sm w-100 mt-2"
                  onClick={() => addProduct && addProduct(product)}
                >
                  Dodaj do koszyka
                </button>
              </div>
            </article>
          ))}
      </div>
    </section>
        </div>
    </div>
  );
};

export default MyFavorites;