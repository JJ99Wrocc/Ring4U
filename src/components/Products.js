import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import ProductAdded from "./ProductsAdded";
import { Link } from "react-router-dom"; // <-- dodane dla linków do lokalnych podstron
import "../css/index.css";
import "../css/product.css"
export const products = [
  

  
  {  id: "NST2079", 
    name: "Naszyjnik 'Kropla' pozłacany", 
    price: "99.99 zł", 
    image: "/img/Naszyjnik kropla NST2079.jpg", 
    url: "/product/NST2079",
    description: ["Modny naszyjnik ze stali szlachetnej platerowanej 14 - karatowym złotem, świetnie pasuje do eleganckich, jak również do codziennych stylizacji. Elegancki dodatek na każdą okazję, do sukienek, swetrów i bluzek",

"Biżuteria ze stali chirurgicznej nie ulega korozji, nie rdzewieje, nie ciemnieje!."],
     specs: {
        "Długość kropli": "3,1 cm ",
      
        "Kolor": "jasne złoto",
        
      },


    material: "srebro 925", 
    color: "srebro rodowane", 
    availability: "W magazynie",
    image2: "/img/Naszyjnik kropla NST2079 (2).jpg",
    image3:  "/img/Naszyjnik kropla NST2079 (1).jpg",
    image4:  "/img/Naszyjnik kropla NST2079 (3).jpg"
     
      
     
    },

  
  {  id: "NST954", 
    name: "Naszyjnik 'Śnieżka' rodowane", 
    price: "99.99 zł", 
    image: "/img/Naszyjnik  'srebro 925' rodowane.jpg", 
    url: "/product/NST954",
    description: ["Modny naszyjnik ze srebra pokrytego rodem. Świetnie pasuje do eleganckich, jak również do codziennych stylizacji. Elegancki dodatek na każdą okazję, do sukienek, swetrów i bluzek.",
"Zabieg rodowania pozwala zabezpieczyć srebro przed matowieniem i ciemnieniem, dodatkowo zapobiega powstawaniu uszkodzeń mechanicznych czy zarysowań na biżuteri. Rodowanie sprawia, ze biżuteria zachowuje też swój blask i kolor. Biżuteria antyalergiczna."],
specs: {
  "długość naszyjnika": "41 + 5 cm ",
  "szerokość ozdoby": "1,2 cm ",

  "Kolor": "jasne złoto",
  
},

    material: "srebro 925", 
    color: "srebro rodowane", 
    availability: "W magazynie",
    image2: "/img/Naszyjnik  'srebro 925' rodowane (1).jpg",
      
     },
  {  id: "NST2146", 
    name: "Naszyjnik 'KWIAT' cyrkonie", 
    price: "99.99 zł", 
    image: "/img/Naszyjnik kwiat NST2146.jpg", 
    url: "/product/NST2146",
    description: ["`Modny naszyjnik ze stali chirurgicznej. Nowa kolekcja biżuterii ze stali nierdzewnej platerowanej 14 karatowym złotem. Świetnie pasuje do eleganckich, jak również do codziennych stylizacji. Elegancki dodatek na każdą okazję, do sukienek, swetrów i bluzek.",
      "Biżuteria ze stali chirurgicznej nie ulega korozji, nie rdzewieje, nie ciemnieje!"
    ],
    specs: {
      "długość łańcuszka": "42cm",
      "długość regulacji": "5cm ",
      "Wymiary zawieszki": "2cm x 3cm ",
      "Wymiar kartonika": "12cm x 10cm",
      "Waga": "2g / 5g brutto",    
      "Kolor": "jasne złoto",
      
    },


    material: "Stal szlachetna", 
    color: "Jasne złoto", 
    availability: "W magazynie",
    image2: "/img/Naszyjnik kwiat NST2146 (2).jpg",
    image3: "/img/Naszyjnik kwiat NST2146  (1).jpg",
      
      
   },
   {
    id: "NST2205", 
    name: "Naszyjnik 'Koniczynka' czarna", 
    price: "99.99 zł", 
    image: "/img/Naszyjnik koniczyna NST2205 .jpg", 
    url: "/product/NST2205",
    description: [
      "Modny naszyjnik ze stali chirurgicznej. Nowa kolekcja biżuterii ze stali nierdzewnej platerowanej 14 karatowym złotem.",
      "Świetnie pasuje do eleganckich, jak również do codziennych stylizacji.",
      "Elegancki dodatek na każdą okazję, do sukienek, swetrów i bluzek.",
      "Biżuteria ze stali chirurgicznej nie ulega korozji, nie rdzewieje, nie ciemnieje!"
    ],
    specs: {
      "Długość łańcuszka": "41 cm",
      "Długość regulacji": "5 cm",
      "Wymiar kartonika": "12 cm x 10 cm",
      "Waga": "3 g / 7 g brutto",
      "Kolor": "jasny odcień złota"
    },
    material: "Stal szlachetna", 
    color: "Jasne złoto", 
    availability: "W magazynie"
  }
,   
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
    id: "PST947", 
    name: "Pierścionek 'Gałązka' złoty", 
    price: "99.99 zł", 
    image: "/img/Pierścionek PST947.jpg", 
    url: "/product/PST947",
    description: ["`Nowa kolekcja biżuterii ze stali szlachetnej. Pierścionek platerowany 14-karatowym złotem","STAL NIERDZEWNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."],
    specs: {
      "Rozmiar": "uniwersalny, regulowany",
      "Szerokość": "2cm",
      "Szerokość od góry": "2,3cm",
      "Waga": "6g netto / 9g brutto",  
      "Kolor": "jasne złoto",  
    },
    material: "STAL CHIRURGICZNA", 
    color: " jasny odcień złota", 
    availability: "W magazynie",
    image2: "/img/Pierścionek PST947 (1).jpg",
  },
  { 
    id: "PST635R6", 
    name: "Pierścionek 'black-devil' złoty ", 
    price: "99.99 zł", 
    image: "/img/Pierścionek 'black devil' złotyl PST635R6.jpg", 
    url: "/product/PST635R6",
    description: ["Nowa kolekcja biżuterii ze stali nierdzewnej, PLATEROWANY  złotem. Elegancki i stylow pierścionek.","STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."],
    specs: {
      "Rozmiar pierścionków": "US6 EU11US6 EU11, US7 EU14US7 EU14, US8 EU17US8 EU17, US9 EU20US9 EU20",
          "Kolor": "złoty",  
    },
    material: "Stal chirurgiczna", 
    color: "Złoty", 
    availability: "W magazynie",
    image2:  "/img/Pierścionek 'black devil' złotyl PST635R6(2).jpg",
    image3:  "/img/Pierścionek 'black devil' złotyl PST635R6(1).jpg",
   
  },
  { 
    id: "PST756R6", 
    name: "Kolczyki 'Koniczynka' czarna", 
    price: "99.99 zł", 
    image: "/img/Pierścionek jeleń białe złoto PST756R6.jpg", 
    url: "/product/PST756R6",
    description: ["Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft. Eleganckie i stylowe kolczyki.","STAL NIERDZEWNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje. ."],
    specs: {
      "Rozmiar pierścionków": "US6 EU11US6 EU11, US7 EU14US7 EU14, US8 EU17US8 EU17, US9 EU20US9 EU20",
          "Waga": "2g netto / 6g brutto",  
          "Kolor": "Białe złoto",  
          "Rodzaj zapięcia": "sztyft",  
    },
    material: "Stal szlachetna", 
    color: "Białe złoto", 
    availability: "W magazynie",
    images2: [

    ]
  },
  { 
    id: "PST760R8", 
    name: "Pierścionek platerowany białym złotem", 
    price: "99.99 zł", 
    image: "/img/Pierścionek 'białe złoto' platerowane PST760.jpg", 
    url: "/product/PST760R8",
    description: ["Nowa kolekcja biżuterii ze stali nierdzewnej. Pierścionek platerowany białym złotem. Eleganckie i stylowe kolczyki.","STAL NIERDZEWNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."],
    specs: {
      "Rozmiar pierścionków": " US8 EU17US8 EU17",
          "Waga": "2g netto / 6g brutto",  
          "Kolor": "Białe złoto",  
        },


    material: "Stal szlachetna", 
    color: "Białe złoto", 
    availability: "W magazynie",
    images: [

    ]
  },
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
        <div className="product-image-wrapper">
          <img
            src={product.image}
            className="img-fluid"
            alt={product.name}
            onMouseEnter={(e) => {
              if (product.image2) {
                e.currentTarget.src = product.image2;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.src = product.image; 
            }}
          />
          <button 
            className="product-btn"
            onClick={() => handleButtonClick(product)} 
            aria-label={`Dodaj ${product.name} do koszyka`}
          >
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
