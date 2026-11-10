import React, { useContext, useEffect, useState, useMemo } from 'react';
import { CartContext } from './CartContext';
import { Link, useParams } from 'react-router-dom';
import ProductAdded from './ProductsAdded';
import { kolczykiStal } from "../data/productData";
import { KolczykiSztuczne } from '../data/productDataSztuczneKolcz';
import '../css/earRings.css';
import { FavoritesContext } from './FavoriteContext';

// FUNKCJA GRUPUJĄCA WARIANTY (BEZ WYŚWIETLANIA PRZYCISKÓW ROZMIARÓW)
function groupProductsByModel(productsList) {
    const grouped = {};
    
    productsList.forEach((item) => {
        if (!item || !item.id) return;
        
        // Bazowe ID, np. "24029" z "24029-2371"
        const baseId = item.id.toString().split('-')[0];
        
        // Czyszczenie nazwy ze zbędnych oznaczeń rozmiarów
        const cleanName = item.name.replace(/(?:Rozmiar\s*:\s*|:\s*)?US\d+\s+EU\d+\s*/gi, '').trim();

        if (!grouped[baseId]) {
            grouped[baseId] = { 
                ...item, 
                id: baseId, 
                name: cleanName, 
                variants: [] 
            };
        }
        
        grouped[baseId].variants.push(item);
    });
    
    return Object.values(grouped);
}

const EarRingsAll = ({ category }) => {
    const { subcategory } = useParams();
    const { addProduct } = useContext(CartContext);
    const { favorites, toggleFavorite } = useContext(FavoritesContext); // Obsługa ulubionych
    
    const [visible, setVisible] = useState(false);
    const [productToAdd, setProductToAdd] = useState(null); 
    const [selectedImage, setSelectedImage] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage, setProductPerPage] = useState(window.innerWidth < 768 ? 20 : 32);

    // 1. Łączenie i filtrowanie tablic po kategoria/podkategoria
    const filteredProducts = useMemo(() => {
        const wszystkieKolczyki = [
            ...(Array.isArray(kolczykiStal) ? kolczykiStal : []), 
            ...(Array.isArray(KolczykiSztuczne) ? KolczykiSztuczne : []),
        ].filter(Boolean);

        return wszystkieKolczyki.filter(p => 
            p && p.name && 
            (!category || p.category === category) && 
            (!subcategory || p.subCategory === subcategory) 
        );
    }, [category, subcategory]);

    // 2. Grupowanie w unikalne modele kafelków
    const groupedProducts = useMemo(() => {
        return groupProductsByModel(filteredProducts);
    }, [filteredProducts]);

    const indexOfLastProduct = currentPage * productPerPage;
    const indexFirstProduct = indexOfLastProduct - productPerPage; 
    const currentProduct = groupedProducts.slice(indexFirstProduct, indexOfLastProduct);
    const totalPage = Math.ceil(groupedProducts.length / productPerPage);

    useEffect(() => {
        let lastWidth = window.innerWidth;
        const handleResize = () => {
            const currentWidth = window.innerWidth;
            if (currentWidth === lastWidth) return;
            
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
        if (!product) return;
        const productToBasket = product.variants && product.variants.length > 0 
            ? product.variants[0] 
            : product;

        addProduct(productToBasket); 
        setProductToAdd(productToBasket);  
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
        <section id="product-ear-rings" className="ear-v2-main-container container" role="region" aria-label="product-ear-rings">
            <ProductAdded visible={visible} setVisible={setVisible} products={productToAdd ? [productToAdd] : []} />
            
            <h1 className="ear-v2-title">
                Kolczyki {subcategory ? `- ${subcategory}` : ''}
            </h1>
            
            <div className="row ear-v2-row-grid">
                {currentProduct.map((product, index) => {
                    if (!product) return null;

                    const isFavorite = favorites?.some(fav => String(fav.id) === String(product.id));

                    return (
                        <article
                            key={product.id || index}
                            className="col-6 col-sm-4 col-md-3 mb-4 ear-v2-card"
                            role="group"
                            aria-label={`${product.name ?? 'Produkt'}, cena ${product.price ?? ''}`}
                        >
                            <div className="ear-v2-image-wrapper">
                                {product.oldPrice && (
                                    <span className="sale-badge">SALE</span>
                                )}

                                <img
                                    src={product.image}
                                    className="img-fluid ear-v2-img"
                                    alt={product.name ?? 'Produkt'}
                                    onMouseEnter={(e) => {
                                        if (product.image2) e.currentTarget.src = product.image2;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.src = product.image;
                                    }}
                                    onClick={() => setSelectedImage(product.image)}
                                    style={{ cursor: 'pointer' }}
                                />

                                <button
                                    className={`ear-v2-fav-btn ${isFavorite ? 'active' : ''}`}
                                    onClick={() => toggleFavorite && toggleFavorite(product)}
                                    aria-label={`Dodaj ${product.name ?? ''} do ulubionych`}
                                >
                                    <i className={`${isFavorite ? 'fa-solid' : 'fa-regular'} fa-heart fa-fw`}></i>
                                </button>

                                <button
                                    className="ear-v2-buy-btn"
                                    onClick={() => handleButtonClick(product)}
                                    aria-label={`Dodaj ${product.name ?? ''} do koszyka`}
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
                    {/* Przycisk Pierwsza strona */}
                    {currentPage > 1 && (
                        <button onClick={() => {
                            setCurrentPage(1);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}>
                            &laquo;&laquo;
                        </button>
                    )}

                    {/* Przycisk Poprzednia */}
                    {currentPage > 1 && (
                        <button onClick={() => {
                            setCurrentPage(prev => prev - 1);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}>
                            &laquo;
                        </button>
                    )}

                    {/* Numery stron */}
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

                    {/* Przycisk Następna */}
                    {currentPage < totalPage && (
                        <button onClick={() => {
                            setCurrentPage(prev => prev + 1);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}>
                            &raquo;
                        </button>
                    )}

                    {/* Przycisk Ostatnia strona */}
                    {currentPage < totalPage && (
                        <button onClick={() => {
                            setCurrentPage(totalPage);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}>
                            &raquo;&raquo;
                        </button>
                    )}
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
};

export default EarRingsAll;