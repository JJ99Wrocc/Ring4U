import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
// import ProductAdded from "./ProductsAdded";
import { Link } from "react-router-dom";
import '../css/index.css';
import UpperFooter from "./UpperFooter";
export const earRings = [
    {  id: "KST1415", 
        name: "Kolczyki 'Koniczynka' czarna", 
        price: "99.99 zł", 
        image: "/img/Kolczyki platerowane KST1415 .jpg", 
        url: "/product/KST1415",
        description: ["Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft. Eleganckie i stylowe kolczyki.",
    
    "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."],
          specs: {
            "Wymiar kolczyków": "1,3cm x 1,3cm ",
            "Wymiar kartonika": "5,5 cm x 6 cm",
            "Waga": "4g netto / 6g brutto",
            "Kolor": "jasne złoto",
            "Rodzaj" : "zapięcia: sztyft"
          },
        material: "Stal szlachetna", 
        color: "Jasne złoto", 
        availability: "W magazynie",
        image2:       "/img/Kolczyki platerowane KST1415 (2).jpg",
    
    
       
        },
      
        {  id: "KST3376", 
          name: "Kolczyki 'KROPLE' pozłacane", 
          price: "99.99 zł", 
          image: "/img/Kolczyki krople KST3376.jpg", 
          url: "/product/KST3376",
          description: ["Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.  Eleganckie i stylowe kolczyki.",
            " STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
          ],
          specs: {
            "Wymiar kolczyków": "0,9 cm x 1,6 cm",
            "Wymiar kartonika": "6,5 cm x 9,5 cm",
            "Waga": "4 g netto/ 6 g brutto",  
          },
     
          material: "Stal szlachetna", 
          color: "złoty", 
          availability: "W magazynie",
          image2:  "/img/Kolczyki krople KST3376 (1).jpg",
          image3:  "/img/Kolczyki krople KST3376 (2).jpg",
       },
        {  id: "KST3420", 
          name: "Kolczyki 'Sztyft' perła", 
          price: "99.99 zł", 
          image: "/img/Kolczyki perła KST3420.jpg", 
          url: "/product/KST3420",
          description: ["`Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft.  Eleganckie i stylowe kolczyki.",
            "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
          ],
          specs: {
            "Wymiar kolczyków": "0,8 cm x 0,8 cm",
            "Wymiar kartonika": " 5,5 cm x 6 cm",
            "Waga": "1 g netto / 3 g brutto",  
            "Kolor": "jasne złoto",  
            "Rodzaj zapięcia": "sztyft",  
          },
    
          material: "Stal szlachetna", 
          color: "Jasne złoto", 
          availability: "W magazynie",
          image2: "/img/Kolczyki perła KST3420 3zdj.jpg",
            
            },
      { 
        id: "KST3419", 
        name: "Kolczyki 'Koniczynka' czarna", 
        price: "99.99 zł", 
        image: "/img/Koniczynka czarna KST3419.jpg", 
        url: "/product/KST3419",
        description: ["`Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft. Eleganckie i stylowe kolczyki.","STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje"],
        specs: {
          "Wymiar kolczyków": "1,1cm x 1,1cm",
          "Wymiar kartonika": " 5,5 cm x 6 cm",
          "Waga": "2g netto / 6g brutto",  
          "Kolor": "jasne złoto",  
          "Rodzaj zapięcia": "sztyft",  
        },
        material: "Stal szlachetna", 
        color: "Jasne złoto", 
        availability: "W magazynie",
          image2:  "/img/Koniczynka czarna KST3419-3zdj.jpg",
         },
         { 
          id: "KST2951", 
          name: "Kolczyki 'Gwiazdki' złote", 
          price: "99.99 zł", 
          image: "/img/Kolczyki Gwiazdki złote-KST2938.jpg", 
          url: "/product/KST2951",
          description: ["Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem. Eleganckie i stylowe kolczyki. STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedziej"],
          specs: {
            "Wymiar kolczyków": "1 cm x 1cm ",
           //  "Wymiar kartonika": "6 cm x 5,5 cm ",
           //  "Waga": "4g netto / 7g brutto",  
            "Kolor": "jasne złoto",  
            "Rodzaj zapięcia": "sztyft",  
          },
          material: "Stal szlachetna", 
          color: "Jasne złoto", 
          availability: "W magazynie",
            image2:  "/img/Kolczyki Gwiazdki złote-KST2938 (1).jpg",
           //  image3:  "/img/Kolczyki koła geometryczne KST3409 (2).jpg",
           },
      { 
        id: "KST3409", 
        name: "Kolczyki 'Wiszące' złote", 
        price: "99.99 zł", 
        image: "/img/Kolczyki wiszące kst3409.jpg", 
        url: "/product/KST3409",
        description: ["Kolczyki ze stali szlachetnej platerowane 14k złotem, wiszące"],
        specs: {
          "Wymiar kolczyków": "1,5 cm x 3,8 cm",
          "Wymiar kartonika": " 5,5 cm x 6 cm",
          "Waga": "6 g netto / 8 g brutto",  
          "Kolor": "jasne złoto",  
          "Rodzaj zapięcia": "sztyft",  
        },
        material: "Stal szlachetna", 
        color: "Jasne złoto", 
        availability: "W magazynie",
          image2:  "/img/Kolczyki wiszące kst3409 (1).jpg",
         },
         
      { 
        id: "KST3349", 
        name: "Kolczyki 'Łezki' wiszące złote", 
        price: "99.99 zł", 
        image: "/img/Kolczyki Łezki wiszące KST3349.jpg", 
        url: "/product/KST3349",
        description: ["Kolczyki damskie  platerowane złotem. Eleganckie i stylowe kolczyki. STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedziej"],
        specs: {
          "Wymiar kolczyków": "7cm x 1,1cm",
          "Wymiar kartonika": "6 cm x 5,5 cm",
          "Waga": "10g netto / 12g brutto",  
          "Kolor": "jasne złoto",  
          "Rodzaj zapięcia": "sztyft",  
        },
        material: "Stal szlachetna", 
        color: "Jasne złoto", 
        availability: "W magazynie",
          image2:  "/img/Kolczyki Łezki wiszące KST3349 (1).jpg",
         },
         { 
           id: "KST3369", 
        name: "Kolczyki 'Cyrkonie' złote", 
        price: "99.99 zł", 
        image: "/img/Kolczyki Cyrkonie złote-kst3369.jpg", 
        url: "/product/KST3369",
        description: ["Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem . STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedziej"],
        specs: {
          "Wymiar kolczyków": "1,5cm x 1cm x 1,7cm",
          "Wymiar kartonika": "6cm x 5,5 cm",
          "Waga": "4g netto / 7g brutto",  
          "Kolor": "Złoto",  
          "Rodzaj zapięcia": "sztyft ze srebra S925",  
        },
        material: "Stal szlachetna", 
        color: "Złoty", 
        availability: "W magazynie",
          image2:  "/img/Kolczyki Cyrkonie złote-kst3369 (1).jpg",
          image3:  "/img/Kolczyki Cyrkonie złote-kst3369 (2).jpg",
          image4:  "/img/Kolczyki Cyrkonie złote-kst3369 (3)  .jpg",
         },
         { 
           id: "KST2951", 
           name: "Kolczyki 'Koła' gemetryczne", 
           price: "99.99 zł", 
           image: "/img/Kolczyki koła geometryczne KST3409.jpg", 
           url: "/product/KST2951",
           description: ["Kolczyki damskie  platerowane złotem. Eleganckie i stylowe kolczyki. STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedziej"],
           specs: {
             "Wymiar kolczyków": "1 cm x 1cm ",
             "Wymiar kartonika": "6 cm x 5,5 cm ",
             "Waga": "4g netto / 7g brutto",  
             "Kolor": "jasne złoto",  
             "Rodzaj zapięcia": "sztyft",  
           },
           material: "Stal szlachetna", 
           color: "Jasne złoto", 
           availability: "W magazynie",
             image2:  "/img/Kolczyki koła geometryczne KST3409 (1).jpg",
             image3:  "/img/Kolczyki koła geometryczne KST3409 (2).jpg",
            },
         { 
           id: "KST3359", 
           name: "Kolczyki 'Wisienki' gemetryczne", 
           price: "99.99 zł", 
           image: "/img/Kolczyki wisienki jasne złoto KST3359.jpg", 
           url: "/product/KST3359",
           description: ["Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem. Eleganckie i stylowe kolczyki. STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedziej"],
           specs: {
             "Wymiar kolczyków": "1,4cm x 1,3cm",
             "Wymiar kartonika": "6 cm x 5,5 cm ",
             "Waga": "6g netto / 8g brutto",  
             "Kolor": "jasne złoto",  
             "Rodzaj zapięcia": "sztyft",  
           },
           material: "Stal szlachetna", 
           color: "Jasne złoto", 
           availability: "W magazynie",
             image2:  "/img/Kolczyki wisienki jasne złoto KST3359(1).jpg",
            //  image3:  "/img/Kolczyki koła geometryczne KST3409 (2).jpg",
            },
         { 
           id: "KST2844B", 
           name: "Kolczyki 'Piękne' złote", 
           price: "99.99 zł", 
           image: "/img/Kolczyki Pieknezłote-KST2844b.jpg", 
           url: "/product/KST2844B",
           description: ["Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem. Eleganckie i stylowe kolczyki. STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedziej"],
           specs: {
             "Wymiar kolczyków": "Wysokość: 2,9 cm Szerokość: 0,4 cm",
            //  "Wymiar kartonika": "6 cm x 5,5 cm ",
            //  "Waga": "6g netto / 8g brutto",  
             "Kolor": " złoto",  
             "Rodzaj zapięcia": "sztyft",  
           },
           material: "Stal szlachetna", 
           color: " złoto", 
           availability: "W magazynie",
            //  image2:  "/img/Kolczyki wisienki jasne złoto KST3359(1).jpg",
            //  image3:  "/img/Kolczyki koła geometryczne KST3409 (2).jpg",
            },
         { 
           id: "KST3325", 
           name: "Kolczyki 'Muszelki' złote", 
           price: "99.99 zł", 
           image: "/img/Kolczyki eperełki złote-KST3325.jpg", 
           url: "/product/KST3325",
           description: ["Kolczyki damskie  platerowane złotem. Eleganckie i stylowe kolczyki. STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedziej"],
           specs: {
             "Wymiar kolczyków": "1,7cm x 1,7cm x 0,8cm",
             "Wymiar kartonika": "6 cm x 5,5 cm ",
             "Waga": "10g netto / 13g brutto",  
             "Kolor": " złoto",  
             "Rodzaj zapięcia": "sztyft",  
           },
           material: "Stal szlachetna", 
           color: "jasne złoto", 
           availability: "W magazynie",
             image2:  "/img/Kolczyki eperełki złote-KST3325 (1).jpg",
             image3:  "/img/Kolczyki eperełki złote-KST3325 (2).jpg",
            },
         { 
           id: "KST3325", 
           name: "Kolczyki 'Muszelki' złote", 
           price: "99.99 zł", 
           image: "/img/Kolczyki eperełki złote-KST3325.jpg", 
           url: "/product/KST3325",
           description: ["Kolczyki damskie  platerowane złotem. Eleganckie i stylowe kolczyki. STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedziej"],
           specs: {
             "Wymiar kolczyków": "1,7cm x 1,7cm x 0,8cm",
             "Wymiar kartonika": "6 cm x 5,5 cm ",
             "Waga": "10g netto / 13g brutto",  
             "Kolor": " złoto",  
             "Rodzaj zapięcia": "sztyft",  
           },
           material: "Stal szlachetna", 
           color: "jasne złoto", 
           availability: "W magazynie",
             image2:  "/img/Kolczyki eperełki złote-KST3325 (1).jpg",
             image3:  "/img/Kolczyki eperełki złote-KST3325 (2).jpg",
            },
      
        ]

const EarRings =()=>{  
  const { selectedProducts, addProduct } = useContext(CartContext);
  const [visible, setVisible] = useState(false);
  const [productToAdd, setProductToAdd] = useState(null);   

  const handleButtonClick = (product) => {
    addProduct(product); 
    setProductToAdd(product);  
    setVisible(true);  
  };

    return(

          <section id="product-ear-rings" className="container" role="region" aria-label="product-ear-rings" >
                <div className="row">
                    {earRings.map((product)  => (
                        <article
                        key={product.id}
                        className="col-6 col-md-3 mb-4 product-ear-rings"
                        role="group"
                        aria-label={`${product.name}, cena ${product.price}`}
                        >
                            <div className="ear-rings-image-wrapper">
                                <img
                                src={product.image}
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
                <UpperFooter />
        </section>
        
    )
}



export default EarRings;