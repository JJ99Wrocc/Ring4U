
import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import ProductAdded from "./ProductsAdded";
import { Link } from "react-router-dom";
import "../css/rings.css"


export const rings = [
     {
    "id": "24029-2371",
    "name": "Pierścionek cyrkonie stal chirurgiczna platerowana złotem PST866, Rozmiar pierścionków",
    "price": "17.22 zł",
    "image": "https://hurt.ecarla.pl/145170-large_default/pierscionek-cyrkonie-stal-chirurgiczna-platerowana-zlotem-pst866.jpg",
    "description": [
      "Nowa kolekcja biżuterii pozłacanej",
      "PLATEROWANY 14 karatowym złotem pierścionek z dużymi cyrkoniami.  Kolor: złoty",
      "STAL NIERDZEWNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Rozmiar pierścionków": "US7 EU14",
      "Model": "PST866R7"
    },
    "material": "Biżuteria ze stali chirurgicznej / Pierścionki",
    "color": "Pozłacany",
    "availability": "Brak w magazynie",
    "image2": "https://hurt.ecarla.pl/145171-large_default/pierscionek-cyrkonie-stal-chirurgiczna-platerowana-zlotem-pst866.jpg",
    "image3": null
  },
]

const Rings =()=>{  
  const { selectedProducts, addProduct } = useContext(CartContext);
  const [visible, setVisible] = useState(false);
  const [productToAdd, setProductToAdd] = useState(null);  

  const handleButtonClick = (product) => {
    addProduct(product); 
    setProductToAdd(product);  
    setVisible(true);  
  };

    return(
        <div> 
        <section id="product-rings" className="container rings-section" role="region" aria-label="product-rings">
          <h1 className="ring-title">Pierścionki</h1>
                <div className="row">
                    {rings.map((product)  => (
                        <article
                        key={product.id}
                        className="col-6 col-md-3 mb-4 product-rings"
                        role="group"
                        aria-label={`${product.name}, cena ${product.price}`}
                        >
                            <div className="rings-image-wrapper">
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
                                className="rings-btn"
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
        </div>
    )
}



export default Rings;