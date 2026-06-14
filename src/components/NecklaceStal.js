import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import UpperFooter from "./Footer";
import ProductAdded from "./ProductsAdded";
import '../css/earRings.css';
import necklaceStal from '../data/NecklacesStal'
import { useParams } from "react-router-dom";





const NecklaceStal = () => {
     const { addProduct } = useContext(CartContext);
     const [visible, setVisible] = useState(false);
     const [productToAdd, setProductToAdd] = useState(null);
     const { subcategory } = useParams(); 
  const [selectedImage, setSelectedImage] = useState(null);
      
          const [currentPaga, setCurrentPage] = useState(1);
          const [productPerPage, setProductPerPage] = useState(window.innerWidth < 768 ? 20 : 32);
          
  

       const filteredProducts = necklaceStal.filter(p => 
               p.category === "stal" && 
               (!subcategory || p.subCategory === subcategory) 
           );
 
  
            
                const indexOfLastProduct = currentPaga * productPerPage;
                const indexFirstProduct = indexOfLastProduct - productPerPage; 
                const currentProduct = filteredProducts.slice(indexFirstProduct, indexOfLastProduct);
                const totalPage = Math.ceil(filteredProducts.length / productPerPage);
            console.log("Liczba stron:", totalPage);
            
            useEffect(() => {
                const handleResize = () => {
                    // Poprawiona nazwa funkcji na setProductPerPage
                    setProductPerPage(window.innerWidth < 768 ? 20 : 32);
                    setCurrentPage(1);
                };
            
                window.addEventListener('resize', handleResize);
                return () => window.removeEventListener('resize', handleResize);
            }, []);
            
                useEffect (() => {
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
        
      <h1 className="ear-v2-title">Naszyjniki {subcategory ? `- ${subcategory}` : '- Stal'}</h1>
        
        <div className="row ear-v2-row-grid">
            {/* <--- 3. Tutaj zmień earRings.map na filteredProducts.map */}
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
                    if(product.image2) e.currentTarget.src = product.image2;
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
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Przewinięcie do góry
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

export default NecklaceStal;