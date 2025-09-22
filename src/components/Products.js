import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import ProductAdded from "./ProductsAdded";
import { Link } from "react-router-dom"; // <-- dodane dla linków do lokalnych podstron
import "../css/index.css";
export const products = [
  { id: 1, name: "Produkt 1", price: "5 zł", image: "/img/color_bar_for_header.png" },
  { id: 2, name: "Produkt 2", price: "200 zł", image: "/img/obrazek2.jpg" },
  { id: 3, name: "Produkt 3", price: "300 zł", image: "/img/obrazek3.jpg" },
  { id: 4, name: "Produkt 4", price: "400 zł", image: "/img/obrazek4.jpg" },
 
  
    {  id: "KST3388", 
      name: "Kolczyki 'Koniczynka' masa perłowa", 
      price: "99.99 zł", 
      image: "/img/Kolczyki koniczyna KST3388 .jpg", 
      url: "/product/KST3420",
      description: `Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft.
  Eleganckie i stylowe kolczyki.

  Wymiar kolczyków: 1,3cm x 1,3cm 
  Wymiar kartonika: 5,5 cm x 6 cm
  Waga: 4g netto / 6g brutto
  Kolor: jasne złoto
  Rodzaj zapięcia: sztyft

  STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje.`,
      material: "Stal szlachetna", 
      color: "Jasne złoto", 
      availability: "W magazynie",
      images: [
        "/img/Kolczyki perła KST3420 3zdj.jpg",
        "/img/Kolczyki wkrętki KST2982.jpg",
        "/img/Koniczynka czarna KST3419_2.jpg"
      ]},
    {  id: "KST2982", 
      name: "Kolczyki 'Wkrętki' pozłacane", 
      price: "99.99 zł", 
      image: "/img/Kolczyki wkrętki KST2982.jpg", 
      url: "/product/KST3420",
      description: `Kolczyki damskie  platerowane złotem.
  Eleganckie i stylowe kolczyki.

  Wymiar kolczyków: 0,7 cm cm x 0,7 cm 
  Wymiar kartonika: 6 cm x 5,5 cm 
  Głębokość: 0,1cm
  Waga: 2 g netto / 3 g brutto
  Kolor: jasne złoto
  Rodzaj zapięcia: sztyft

  STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje.`,
      material: "Stal szlachetna", 
      color: "Jasne złoto", 
      availability: "W magazynie",
      images: [
        "/img/Kolczyki perła KST3420 3zdj.jpg",
        "/img/Kolczyki wkrętki KST2982.jpg",
        "/img/Koniczynka czarna KST3419_2.jpg"
      ]},
    {  id: "KST3420", 
      name: "Kolczyki 'Sztyft' perła", 
      price: "99.99 zł", 
      image: "/img/Kolczyki perła KST3420.jpg", 
      url: "/product/KST3420",
      description: `Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft.
  Eleganckie i stylowe kolczyki.

  Wymiar kolczyków: 0,8 cm x 0,8 cm
  Wymiar kartonika: 5,5 cm x 6 cm
  Waga: 1 g netto / 3 g brutto
  Kolor: jasne złoto
  Rodzaj zapięcia: sztyft

  STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje.`,
      material: "Stal szlachetna", 
      color: "Jasne złoto", 
      availability: "W magazynie",
      images: [
        "/img/Kolczyki perła KST3420 3zdj.jpg",
        "/img/Koniczynka czarna KST3419-3zdj.jpg",
        "/img/Koniczynka czarna KST3419_2.jpg"
      ]},
  { 
    id: "KST3419", 
    name: "Kolczyki 'Koniczynka' czarna", 
    price: "99.99 zł", 
    image: "/img/Koniczynka czarna KST3419.jpg", 
    url: "/product/KST3419",
    description: `Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft.
Eleganckie i stylowe kolczyki.

Wymiar kolczyków: 1,1cm x 1,1cm
Wymiar kartonika: 5,5 cm x 6 cm
Waga: 2g netto / 6g brutto
Kolor: jasne złoto
Rodzaj zapięcia: sztyft

STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje.`,
    material: "Stal szlachetna", 
    color: "Jasne złoto", 
    availability: "W magazynie",
    images: [
      "/img/Koniczynka czarna KST3419.jpg",
      "/img/Koniczynka czarna KST3419-3zdj.jpg",
      "/img/Koniczynka czarna KST3419_2.jpg"
    ]
  }
];

const Product = () => {
  const { selectedProducts, addProduct } = useContext(CartContext);
  const [visible, setVisible] = useState(false);
  const [productToAdd, setProductToAdd] = useState(null);  

  const handleButtonClick = (product) => {
    addProduct(product); 
    setProductToAdd(product);  
    setVisible(true);  
  };


  return (
    <section id="product" className="container" role="region" aria-label="Lista produktów">
      <div className="row">
        {products.map((product) => (
          <article 
            key={product.id} 
            className="col-6 col-md-3 mb-4 product" 
            role="group" 
            aria-label={`${product.name}, cena ${product.price}`}
          >
            <img src={product.image} className="img-fluid" alt={product.name} />
            
          
            <h5>
              <Link 
                to={product.url} 
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {product.name}
              </Link>
            </h5>

            <p>{product.price}</p>
            <button 
              onClick={() => handleButtonClick(product)} 
              aria-label={`Dodaj ${product.name} do koszyka`}
            >
              <i className="fa-solid fa-cart-shopping"></i> DODAJ DO KOSZYKA
            </button>
          </article>
        ))}
      </div>

      {visible && productToAdd && (
        <ProductAdded
          visible={visible}
          setVisible={setVisible}
          products={[productToAdd]}  
        />
      )}
    </section>
  );
};

export default Product;
