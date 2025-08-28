import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import ProductAdded from "./ProductsAdded";
import "../css/index.css";

const Product = () => {
  const { selectedProducts, addProduct } = useContext(CartContext);
  const [visible, setVisible] = useState(false);
  const [productToAdd, setProductToAdd] = useState(null);  

  const handleButtonClick = (product) => {
    addProduct(product); 
    setProductToAdd(product);  
    setVisible(true);  
  };

  const products = [
    { id: 1, name: "Produkt 1", price: "100 zł", image: "/img/color_bar_for_header.png" },
    { id: 2, name: "Produkt 2", price: "200 zł", image: "obrazek1.jpg" },
    { id: 3, name: "Produkt 3", price: "300 zł", image: "obrazek1.jpg" },
    { id: 4, name: "Produkt 4", price: "400 zł", image: "obrazek1.jpg" },
    { id: 5, name: "Produkt 5", price: "500 zł", image: "obrazek1.jpg" },
    { id: 6, name: "Produkt 6", price: "600 zł", image: "obrazek1.jpg" },
    { id: 7, name: "Produkt 7", price: "700 zł", image: "obrazek1.jpg" },
    { id: 8, name: "Produkt 8", price: "800 zł", image: "obrazek1.jpg" },
  ];

  return (
    <div id="product" className="container">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-6 col-md-3 mb-4 product">
            <img src={product.image} className="img-fluid" alt={product.name} />
            <h5>{product.name}</h5>
            <p>{product.price}</p>
            <button onClick={() => handleButtonClick(product)}>
              <i className="fa-solid fa-cart-shopping"></i> DODAJ DO KOSZYKA
            </button>
          </div>
        ))}
      </div>

      {visible && productToAdd && (
        <ProductAdded
          visible={visible}
          setVisible={setVisible}
          products={[productToAdd]}  
        />
      )}
    </div>
  );
};

export default Product;
