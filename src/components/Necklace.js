import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import UpperFooter from "./Footer";
import ProductAdded from "./ProductsAdded";
import "../css/necklaces.css";


const necklace = [
    {
    "id": "33206",
    "name": "Naszyjnik stal szlachetna pozłacana 14k złotem, miś z czarną cyrkonią ",
    "price": "109.00 zł",
    "category": "naszyjnik",
    "url": "/product/33206",
    "image": "https://hurt.ecarla.pl/196557-large_default/naszyjnik-stal-szlachetna-pozłacana-14k-zlotem-mis-z-czarna-cyrkonia-nst2231.jpg",
    "description": [
      "Naszyjnik damski ze stali szlachetnej.",
      "Elegancki i stylowy naszyjnik.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": { "WYMIARY": "3,7 x 2,8 cm", "Materiał wykonania": "Stal chirurgiczna platerowana złotem", "Model": "NST2231" },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
   {
    "id": "34098",
    "name": "Naszyjnik stal szlachetna pozłacana 14k złotem, cyrkonie, koniczynka",
    "price": "89.99 zł",
    "category": "naszyjnik",
    "url": "/product/34098",
    "image": "https://hurt.ecarla.pl/201763-large_default/naszyjnik-stal-szlachetna-pozłacana-14k-zlotem-cyrkonie-koniczynka-nst2196.jpg",
    "description": [
      "Modny naszyjnik z koniczynką i cyrkoniami, wykonany ze stali nierdzewnej platerowanej 14-karatowym złotem.",
      "Biżuteria ze stali chirurgicznej nie ulega korozji, nie rdzewieje, nie ciemnieje!"
    ],
    "specs": {
      "Wymiary": "Długość 42 cm + 5 cm regulacji",
      "Waga": "3g netto / 12g brutto",
      "Model": "NST2196"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/201722-large_default/naszyjnik-stal-szlachetna-pozłacana-14k-zlotem-cyrkonie-koniczynka-nst2196.jpg",
    "image3": "https://hurt.ecarla.pl/201721-large_default/naszyjnik-stal-szlachetna-pozłacana-14k-zlotem-cyrkonie-koniczynka-nst2196.jpg"
  },
  { 
        id: "16217", 
        name: "Naszyjnik stal chirurgiczna literka B platerowana złotem ",
        price: "89.15 zł", 
        category: "stal",
        url: "/product/16217",
        image: "https://hurt.ecarla.pl/112600-large_default/naszyjnik-stal-chirurgiczna-literka-b-platerowana-zlotem-nst995b.jpg",
        description: [
            "Modny naszyjnik ze stali chirurgicznej. Nowa kolekcja biżuterii ze stali nierdzewnej platerowanej 14 karatowym złotem.",
            "Świetnie pasuje do eleganckich, jak również do codziennych stylizacji. Elegancki dodatek na każdą okazję, do sukienek, swetrów i bluzek.",
            "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie ciemnieje!"
        ],
        specs: {
            "Długość naszyjnika": "45 + 4,0 cm",
            "Rozmiar zawieszki": "Podana na zdjęciu",
            "Model": "NST995B"
        },
        material: "Biżuteria ze stali chirurgicznej / Biżuteria z literkami", 
        color: "Złoty", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/112598-large_default/naszyjnik-stal-chirurgiczna-literka-b-platerowana-zlotem-nst995b.jpg",
        image3: "https://hurt.ecarla.pl/112599-large_default/naszyjnik-stal-chirurgiczna-literka-b-platerowana-zlotem-nst995b.jpg"
    },
]


const Necklace = () => {
  const { addProduct } = useContext(CartContext);
  const [necklaces, setNecklaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [popupProduct, setPopupProduct] = useState(null);

  useEffect(() => {
    fetch("/data/necklaces.xml")
      .then(res => res.text())
      .then(str => {
        // Zamiana przecinków na kropki w cenach
        str = str.replace(/price="(\d+),(\d+)"/g, 'price="$1.$2"');
  
        const parser = new DOMParser();
        const xml = parser.parseFromString(str, "text/xml");
  
        // Pobieramy wszystkie produkty z XML
        const offers = Array.from(xml.querySelectorAll("o")).map((o, index) => {
          const images = [
            o.querySelector("main")?.getAttribute("url"),
            ...Array.from(o.querySelectorAll("i")).map(img => img.getAttribute("url"))
          ].filter(Boolean);
  
          return {
            id: o.getAttribute("id") || `necklace-${index}`,
            name: o.querySelector("name")?.textContent.trim(),
            desc: o.querySelector("desc")?.textContent.trim(),
            price: `${o.getAttribute("price")} zł`,
            images,
            url: o.getAttribute("url") || "#",
            stock: o.getAttribute("stock"),
            category: o.querySelector("cat")?.textContent.trim(),
          };
        });
  
        // Filtrujemy tylko naszyjniki
        const keywords = ["naszyjnik", "kette"];
        const filtered = offers.filter(p => {
          const cat = p.category?.toLowerCase() || "";
          const name = p.name?.toLowerCase() || "";
          return keywords.some(k => cat.includes(k) || name.includes(k));
        });
  
        setNecklaces(filtered);
        setLoading(false);
      })
      .catch(err => {
        console.error("Błąd XML:", err);
        setLoading(false);
      });
  }, []);
  
  const handleAddToCart = (product) => {
    addProduct(product);
    setPopupProduct(product);
  };

  return (
    <section id="product-necklaces" className="neck-v2-main-container container">
      <h1 className="neck-v2-title">Naszyjniki</h1>
      
      <div className="row neck-v2-row-grid">
        {loading && <p className="text-white text-center">Ładowanie produktów...</p>}
        {!loading && necklaces.length === 0 && (
          <p className="text-white text-center">Brak produktów w kategorii naszyjniki.</p>
        )}

        {necklaces.map(product => (
          <article key={product.id} className="col-6 col-md-3 mb-4 neck-v2-card">
            <div className="neck-v2-image-wrapper">
              <img
                src={product.images[0]}
                className="img-fluid neck-v2-img"
                alt={product.name}
                onMouseEnter={e => { 
                  if (product.images[1]) e.currentTarget.src = product.images[1]; 
                }}
                onMouseLeave={e => { 
                  e.currentTarget.src = product.images[0]; 
                }}
              />
              <button
                className="neck-v2-buy-btn"
                onClick={() => handleAddToCart(product)}
                aria-label={`Dodaj ${product.name} do koszyka`}
              >
                <i className="fa-solid fa-bag-shopping fa-fw"></i>
              </button>
            </div>
            
            <div className="neck-v2-product-info">
              <h5>
                <Link 
                  to={`/product/${product.id}`} 
                  className="neck-v2-product-link"
                >
                  {product.name}
                </Link>
              </h5>
              <p className="neck-v2-product-price">{product.price}</p>
            </div>
          </article>
        ))}
      </div>

      {popupProduct && (
        <ProductAdded
          visible={true}
          setVisible={() => setPopupProduct(null)}
          products={[popupProduct]}
        />
      )}

      <UpperFooter />
    </section>
  );
};

export default Necklace;