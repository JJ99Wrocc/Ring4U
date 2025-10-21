import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import ProductAdded from "./ProductsAdded";
import { Link } from "react-router-dom";


export const bracelet = [
    
]

const Bracelet =()=>{  
  const { selectedProducts, addProduct } = useContext(CartContext);
  const [visible, setVisible] = useState(false);
  const [productToAdd, setProductToAdd] = useState(null);  

  const handleButtonClick = (product) => {
    addProduct(product); 
    setProductToAdd(product);  
    setVisible(true);  
  };

    return(

        <section id="product-ear-rings" className="container" role="region" aria-label="product-ear-rings">
                <div className="row">
                    {bracelet.map((product)  => (
                        <article
                        key={product.id}
                        className="col-6 col-md-3 mb-4 product-ear-rings"
                        role="group"
                        aria-label={`${product.name}, cena ${product.price}`}
                        >
                            <div className="ear-rings-image-wrapper">
                                <img
                                src={product.name}
                                className="img-fluid"
                                onMouseEnter={(e) => {
                                    if(product.image2) {
                                        e.currentTarget.src =product.image2;
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.src = product.image;
                                }}
                                />
                                <button
                                className="ear-rings-btn"
                                onClick={() => handleButtonClick(product)}
                                aria-label={`Dodaj ${product.name} do koszyka`}>
                                    <i className="fa-solid fa-bag-shopping fa-fw"></i>
                                    </button>    
                                                             

                            </div>
                            <h5>
                                      <Link 
                                        to={product.url} 
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                      >
                                        {product.name}
                                      </Link>
                                    </h5>
                            
                                    <p>{product.price}</p>
                        </article>
                    ) )
                    }
                </div>
        </section>
    )
}



export default Bracelet;