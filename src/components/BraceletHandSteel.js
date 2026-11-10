import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import ProductAdded from './ProductsAdded';
import { earRings } from "./Products";
import BranzoletkiStal from "../data/BransoletHandStal";
import { useParams } from 'react-router-dom';
import { FavoritesContext } from './FavoriteContext';
import '../css/earRings.css';

const BranceletHandSteel = ({ category }) => {

    const { subcategory } = useParams();
    console.log("Kategoria:", category);
    console.log("Dane produktów:", BranzoletkiStal);
    const { addProduct } = useContext(CartContext);
    const [visible, setVisible] = useState(false);
    const [productToAdd, setProductToAdd] = useState(null); 
    const [selectedImage, setSelectedImage] = useState(null);
    const { favorites, toggleFavorite } = useContext(FavoritesContext);
    const [currentPaga, setCurrentPage] = useState(1);
    const [productPerPage, setProductPerPage] = useState(window.innerWidth < 768 ? 20 : 32);
    
    const filteredProducts = BranzoletkiStal.filter(p => 
        p.category === "stal" && 
        (!subcategory || p.subCategory === subcategory) 
    );

    const indexOfLastProduct = currentPaga * productPerPage;
    const indexFirstProduct = indexOfLastProduct - productPerPage; 
    const currentProduct = filteredProducts.slice(indexFirstProduct, indexOfLastProduct);
    const totalPage = Math.ceil(filteredProducts.length / productPerPage);
    console.log("Liczba stron:", totalPage);

    useEffect(() => {
        let lastWidth = window.innerHeight;
        const handleResize = () => {
            const currentWidth = window.innerWidth;
            if(currentWidth === lastWidth) return;
            lastWidth = currentWidth;
            const newPerPage = currentWidth < 768 ? 20 : 32;
            
            setProductPerPage(newPerPage);
            setCurrentPage(1);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [subcategory]);

    const handleButtonClick = (product) => {
        addProduct(product); 
        setProductToAdd(product);  
        setVisible(true);  
    };

    if (!filteredProducts || filteredProducts.length === 0) {
        return <div className="container">Brak produktów w tej kategorii.</div>;
    }

    return (
        <section id="product-ear-rings" className="ear-v2-main-container container" role="region" aria-label="product-ear-rings">
            {/* MODAL PO DODANIU */}
            <ProductAdded visible={visible} setVisible={setVisible} products={productToAdd ? [productToAdd] : []} />
            
            <h1 className="ear-v2-title">Branzoletki Na Dłonie {subcategory ? `- ${subcategory}` : '- Stal'}</h1>
            
            <div className="row ear-v2-row-grid">
                {currentProduct.map((product) => {
                    const isFav = favorites?.some(fav => fav.id === product.id);

                    return (
                        <article
                            key={product.id}
                            className="col-6 col-sm-4 col-md-3 mb-4 ear-v2-card"
                            role="group"
                            aria-label={`${product.name}, cena ${product.price}`}
                        >
                            <div className="ear-v2-image-wrapper">
                                {product.oldPrice && (
                                    <span className="sale-badge">SALE</span>
                                )}

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
                                    onClick={() => setSelectedImage(product.image)}
                                    style={{ cursor: 'pointer' }}
                                />
                                <button
                                    className={`ear-v2-fav-btn ${isFav ? 'active' : ''}`}
                                    onClick={() => toggleFavorite(product)}
                                    aria-label={isFav ? `Usuń ${product.name} z ulubionych` : `Dodaj ${product.name} do ulubionych`}
                                >
                                    <i className={isFav ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                                </button>
                                <button
                                    className="ear-v2-buy-btn"
                                    onClick={() => handleButtonClick(product)}
                                    aria-label={`Dodaj ${product.name} do koszyka`}
                                >
                                    <i className="fa-solid fa-bag-shopping fa-fw"></i>
                                </button>
                            </div>
                                
                            <div className="ear-v2-product-info">
                                <h5 className='h5-ear-rings'>
                                    <Link 
                                        to={`/product/${product.id}`} 
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        {product.name}
                                    </Link>
                                </h5>
                                <div className="ear-v2-price-container">
                                    {product.oldPrice ? (
                                        <>
                                            <span className="ear-v2-old-price">{product.oldPrice}</span>
                                            <span className="ear-v2-sale-price">{product.price}</span>
                                        </>
                                    ) : (
                                        <span className="ear-v2-regular-price">{product.price}</span>
                                    )}
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>

            {totalPage > 1 && (
                <div className='pagination'>
                    {Array.from({ length: totalPage }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage(i + 1);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className={currentPaga === i + 1 ? 'active' : ''}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}

            {selectedImage && (
                <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="lightbox-content">
                        <button className="close-btn" onClick={() => setSelectedImage(null)}>×</button>
                        <img src={selectedImage} alt="Powiększenie" />
                    </div>
                </div>
            )}
        </section>
    );
}

export default BranceletHandSteel;