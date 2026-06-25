import React, { useContext, useEffect, useState, useMemo } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import ProductAdded from './ProductsAdded'; // DODANO
// import UpperFooter from './Footer';
// import "../css/EarRings.css";
import { earRings } from "./Products";
import PierścionekStal from "../data/RingSteel";
import { useParams } from 'react-router-dom';
import '../css/earRings.css';

// FUNKCJA GRUPUJĄCA WARIANTY (Działa poza komponentem, aby nie obciążać renderowania)
function groupProductsByModel(productsList) {
    const grouped = {};
    
    productsList.forEach((item) => {
        if (!item || !item.id) return;
        
        // Wyciągamy bazowe ID, np. z "24029-2371" uzyskujemy "24029"
        const baseId = item.id.toString().split('-')[0];
        
        // Czyszczenie nazwy produktu z dopisków o rozmiarach (np. Usuwa "US7 EU14")
        const cleanName = item.name.replace(/(?:Rozmiar\s*:\s*|:\s*)?US\d+\s+EU\d+\s*/gi, '').trim();
        
        // Detekcja tekstu rozmiaru
        let sizeText = "Rozmiar";
        const sizeMatch = item.name.match(/US\d+\s+EU\d+/i);
        if (sizeMatch) { 
            sizeText = sizeMatch[0]; 
        } else if (item.specs && item.specs["Ring size"]) { 
            sizeText = item.specs["Ring size"]; 
        } else if (item.name.toLowerCase().includes("gumce")) { 
            sizeText = "One Size"; 
        }

        if (!grouped[baseId]) {
            grouped[baseId] = { 
                ...item, 
                id: baseId, 
                name: cleanName, 
                variants: [] 
            };
        }
        
        // Dodajemy wariant tylko jeśli jeszcze nie istnieje w tablicy wariantów tego modelu
        const exists = grouped[baseId].variants.some(v => v.size === sizeText);
        if (!exists) {
            grouped[baseId].variants.push({
                size: sizeText,
                fullProductObject: item, // Przechowujemy oryginalny obiekt dla koszyka
                availability: item.availability,
                stock: item.stock
            });
        }
    });
    
    return Object.values(grouped);
}

const RingStal = ({ category }) => {
    const { subcategory } = useParams();
    
    console.log("Kategoria:", category);
    console.log("Dane produktów:", PierścionekStal);
    
    const { addProduct } = useContext(CartContext);
    const [visible, setVisible] = useState(false);
    const [productToAdd, setProductToAdd] = useState(null); 
    const [selectedImage, setSelectedImage] = useState(null);

    const [currentPaga, setCurrentPage] = useState(1);
    const [productPerPage, setProductPerPage] = useState(window.innerWidth < 768 ? 20 : 32);
    
    // 1. Filtrowanie surowych danych z pliku bazy danych (zoptymalizowane za pomocą useMemo)
    const filteredProducts = useMemo(() => {
        return PierścionekStal.filter(p => 
            p.category === "stal" && 
            (!subcategory || p.subCategory === subcategory)
        );
    }, [subcategory]);

    // 2. Grupowanie przefiltrowanych produktów w unikalne modele
    const groupedProducts = useMemo(() => {
        return groupProductsByModel(filteredProducts);
    }, [filteredProducts]);

    // Przeliczenia stronicowania bazujące na pogrupowanych unikalnych modelach kafelków
    const indexOfLastProduct = currentPaga * productPerPage;
    const indexFirstProduct = indexOfLastProduct - productPerPage; 
    const currentProduct = groupedProducts.slice(indexFirstProduct, indexOfLastProduct);
    const totalPage = Math.ceil(groupedProducts.length / productPerPage);
    
    console.log("Liczba stron:", totalPage);

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

    // Funkcja szybkiego zakupu (kliknięcie ikony koszyka na zdjęciu - bierze domyślnie pierwszy rozmiar)
    const handleButtonClick = (product) => {
        const productToBasket = product.variants && product.variants.length > 0 
            ? product.variants[0].fullProductObject 
            : product;
            
        addProduct(productToBasket); 
        setProductToAdd(productToBasket);  
        setVisible(true);  
    };

    // Funkcja zakupu po kliknięciu w konkretny rozmiar pod ceną
    const handleSizeClick = (variantObject) => {
        const exactProductSize = variantObject.fullProductObject;
        addProduct(exactProductSize); 
        setProductToAdd(exactProductSize);  
        setVisible(true);  
    };

    if (!filteredProducts || filteredProducts.length === 0) {
        return <div className="container">Brak produktów w tej kategorii.</div>;
    }

    return (
        <section id="product-ear-rings" className="ear-v2-main-container container" role="region" aria-label="product-ear-rings">
            
            <ProductAdded visible={visible} setVisible={setVisible} products={productToAdd ? [productToAdd] : []} />
            
            <h1 className="ear-v2-title">Pierścionki {subcategory ? `- ${subcategory}` : '- Stal'}</h1>
            
            <div className="row ear-v2-row-grid">
                {currentProduct.map((product) => (
                    <article
                        key={product.id}
                        className="col-6 col-sm-4 col-md-3 mb-4 ear-v2-card"
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
                                onClick={() => setSelectedImage(product.image)}
                                style={{ cursor: 'pointer' }}
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
                            <h5 className='h5-ear-rings'>
                                <Link 
                                    to={`/product/${product.id}`} 
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    {product.name}
                                </Link>
                            </h5>
                            <p className="ear-v2-product-price">{product.price}</p>
                            
                            {/* Sekcja wyboru i podglądu rozmiarów pod ceną na liście produktów */}
                            <div className="product-card-sizes" style={{ marginTop: '8px', display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                                {product.variants.length === 1 && product.variants[0].size === "One Size" ? (
                                    <button 
                                        className="size-badge-btn single-size"
                                        onClick={() => handleSizeClick(product.variants[0])}
                                        style={{ fontSize: '10px', padding: '3px 6px', background: '#f0f0f0', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', width: '100%' }}
                                    >
                                        Uniwersalny <i className="fa-solid fa-bag-shopping" style={{ marginLeft: '4px', fontSize: '9px' }}></i>
                                    </button>
                                ) : (
                                    product.variants.map((v) => {
                                        const isOutOfStock = v.availability === "Brak w magazynie" || v.stock === 0;
                                        const shortSize = v.size.replace("US", "").replace("EU", "EU ");
                                        return (
                                            <button
                                                key={v.size}
                                                disabled={isOutOfStock}
                                                onClick={() => handleSizeClick(v)}
                                                className={`size-badge-btn ${isOutOfStock ? 'disabled' : ''}`}
                                                style={{
                                                    fontSize: '9px',
                                                    padding: '2px 5px',
                                                    backgroundColor: isOutOfStock ? '#f5f5f5' : '#fff',
                                                    color: isOutOfStock ? '#ccc' : '#333',
                                                    border: isOutOfStock ? '1px solid #e5e5e5' : '1px solid #333',
                                                    borderRadius: '4px',
                                                    cursor: isOutOfStock ? 'not-allowed' : 'pointer',
                                                    textDecoration: isOutOfStock ? 'line-through' : 'none'
                                                }}
                                            >
                                                {shortSize}
                                            </button>
                                        );
                                    })
                                )}
                            </div>
                        </div>
                    </article>
                ))}
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
            {/* <UpperFooter /> */}
        </section>
    );
};

export default RingStal;