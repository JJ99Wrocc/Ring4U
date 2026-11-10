import React, { useContext, useEffect, useState, useMemo } from 'react';
import { CartContext } from './CartContext';
import { FavoritesContext } from './FavoriteContext';
import { Link, useParams } from 'react-router-dom';
import ProductAdded from './ProductsAdded';

// 1. IMPORTY WSZYSTKICH BAZ DANYCH
import necklaceStal from '../data/NecklacesStal';
import necklacesFake from '../data/NecklacesFake';
// import earRingsStal from '../data/EarRingsStal';
import earRingsFake from '../data/productData';
import BranzoletkiStal from '../data/BransoletHandStal';
import BranzoletkiFake from '../data/BransoletHandFake';
import PierścionkiStal from '../data/RingSteel';
import PierścionkiFake from '../data/BransoletFootFake';
import ProducDetail from './ProductDetail';

// import products from './Products';
import '../css/index.css';
import '../css/product.css';
import '../css/earRings.css';

// FUNKCJA GRUPUJĄCA WARIANTY (np. po bazowym ID "24029" z "24029-2371")
function groupProductsByModel(productsList) {
    const groupedMap = new Map();
    
    (productsList || []).forEach((item) => {
        if (!item || !item.id) return;
        
        const baseId = item.id.toString().split('-')[0];
        const cleanName = item.name
            ? item.name.replace(/(?:Rozmiar\s*:\s*|:\s*)?US\d+\s+EU\d+\s*/gi, '').trim()
            : 'Produkt';

        if (!groupedMap.has(baseId)) {
            groupedMap.set(baseId, { 
                ...item, 
                id: baseId, 
                name: cleanName, 
                variants: [] 
            });
        }
        
        groupedMap.get(baseId).variants.push(item);
    });
    
    return Array.from(groupedMap.values());
}

// POMOCNICZA FUNKCJA POBIERAJĄCA DOKŁADNIE PIERWSZE N UNIKALNYCH MODELI W KOLEJNOŚCI PLIKU
const groupAndSlice = (arr, limit) => {
    if (!Array.isArray(arr)) return [];
    
    const uniqueModels = [];
    const seenBaseIds = new Set();

    for (const item of arr) {
        if (!item || !item.id) continue;
        
        const baseId = item.id.toString().split('-')[0];
        if (!seenBaseIds.has(baseId)) {
            seenBaseIds.add(baseId);
            
            const cleanName = item.name
                ? item.name.replace(/(?:Rozmiar\s*:\s*|:\s*)?US\d+\s+EU\d+\s*/gi, '').trim()
                : 'Produkt';

            uniqueModels.push({
                ...item,
                id: baseId,
                name: cleanName,
                variants: [item]
            });

            if (uniqueModels.length === limit) break;
        }
    }

    return uniqueModels;
};

const getFirst = (arr, limit = 7) => groupAndSlice(arr, limit);
const getFirst4Valid = (arr) => groupAndSlice(arr, 4);
const getFirst4 = (arr) => groupAndSlice(arr, 4);

// Eksportujemy wyróżnione produkty
export const featuredProducts = [
    ...getFirst4Valid(necklaceStal),
    // ...getFirst4(necklacesFake),
    // ...getFirst4(earRingsFake),
    ...getFirst4Valid(BranzoletkiStal),
    // ...getFirst4(BranzoletkiFake),
    ...getFirst4Valid(PierścionkiStal),
    // ...getFirst4(PierścionkiFake),
].filter(Boolean);

const AllProducts = ({ category }) => {
    const { subcategory } = useParams();
    const { addProduct } = useContext(CartContext);
    const { favorites, toggleFavorite } = useContext(FavoritesContext);

    const [visible, setVisible] = useState(false);
    const [productToAdd, setProductToAdd] = useState(null); 
    const [selectedImage, setSelectedImage] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage, setProductPerPage] = useState(window.innerWidth < 768 ? 20 : 32);

    // 2. POŁĄCZENIE TYLKO PIERWSZYCH PRODUKTÓW Z KAŻDEGO DATA I FILTROWANIE
    const filteredProducts = useMemo(() => {
        const fullCatalog = [
        //   ...getFirst4(necklacesFake),
            ...getFirst(necklaceStal, 7),
            // ...getFirst4(PierścionkiFake),
            // ...getFirst4(earRingsFake),
            ...getFirst4(BranzoletkiStal),
            // ...getFirst4(BranzoletkiFake),
            ...getFirst4(PierścionkiStal),
        ];

        return fullCatalog.filter(p => 
            p && p.name && 
            (!category || p.category === category) && 
            (!subcategory || p.subCategory === subcategory) 
        );
    }, [category, subcategory]);

    // 3. GRUPOWANIE W WARIANTY
    const groupedProducts = useMemo(() => {
        return filteredProducts;
    }, [filteredProducts]);

    // 4. STRONICOWANIE (PAGINACJA)
    const indexOfLastProduct = currentPage * productPerPage;
    const indexFirstProduct = indexOfLastProduct - productPerPage; 
    const currentProduct = groupedProducts.slice(indexFirstProduct, indexOfLastProduct);
    const totalPage = Math.ceil(groupedProducts.length / productPerPage);

    // Obsługa zmiany rozmiaru okna
    useEffect(() => {
        let lastWidth = window.innerWidth;
        const handleResize = () => {
            const currentWidth = window.innerWidth;
            if (currentWidth === lastWidth) return;
            
            lastWidth = currentWidth;
            setProductPerPage(currentWidth < 768 ? 20 : 32);
            setCurrentPage(1);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Reset strony przy zmianie podkategorii
    useEffect(() => {
        setCurrentPage(1);
    }, [subcategory]);

    const handleButtonClick = (product) => {
        if (!product) return;
        
        // Jeśli produkt ma warianty, dodajemy pierwszy wariant domyślnie
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
      
       
            <section id="product-ear-rings" className="ear-v2-main-container container" role="region" aria-label="Lista wszystkich produktów">
            <ProductAdded visible={visible} setVisible={setVisible} products={productToAdd ? [productToAdd] : []} />
            
            <h1 className="ear-v2-title">
                {subcategory ? `Kolekcja: ${subcategory}` : 'BESTSELLERS'}
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

                                {/* Przycisk Ulubione */}
                                <button
                                    className={`ear-v2-fav-btn ${isFavorite ? 'active' : ''}`}
                                    onClick={() => toggleFavorite && toggleFavorite(product)}
                                    aria-label={`Dodaj ${product.name ?? ''} do ulubionych`}
                                >
                                    <i className={`${isFavorite ? 'fa-solid' : 'fa-regular'} fa-heart fa-fw`}></i>
                                </button>

                                {/* Przycisk Dodaj do koszyka */}
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

            {/* STRONICOWANIE */}
            {totalPage > 1 && (
                <div className='pagination'>
                    {currentPage > 1 && (
                        <button onClick={() => {
                            setCurrentPage(1);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}>
                            &laquo;&laquo;
                        </button>
                    )}

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

            {/* LIGHTBOX / POWIĘKSZENIE ZDJĘCIA */}
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

export default AllProducts;