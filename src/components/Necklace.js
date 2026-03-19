import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import UpperFooter from "./Footer";
import ProductAdded from "./ProductsAdded";

const Necklace = () => {
  const { addProduct } = useContext(CartContext);
  const [necklaces, setNecklaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [popupProduct, setPopupProduct] = useState(null);

  useEffect(() => {
    fetch("/data/necklaces.xml")
      .then(res => res.text())
      .then(str => {
   
        str = str.replace(/price="(\d+),(\d+)"/g, 'price="$1.$2"');
  
        const parser = new DOMParser();
        const xml = parser.parseFromString(str, "text/xml");
  
        // ✅ Pobieramy wszystkie produkty z XML
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
  
        // ✅ Sprawdzenie, co dokładnie wczytano
        console.log("Wczytane produkty z XML (offers):", offers);
  
        // ✅ Filtrujemy tylko naszyjniki
        const keywords = ["naszyjnik", "kette"];
        const filtered = offers.filter(p => {
          const cat = p.category?.toLowerCase() || "";
          const name = p.name?.toLowerCase() || "";
          return keywords.some(k => cat.includes(k) || name.includes(k));
        });
  
        console.log("Przefiltrowane produkty (necklaces):", filtered);
  
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
    <section id="product-necklaces" className="container">
      <div className="row">
        {loading && <p>Ładowanie produktów...</p>}
        {!loading && necklaces.length === 0 && <p>Brak produktów w kategorii naszyjniki.</p>}

        {necklaces.map(product => (
          <article key={product.id} className="col-6 col-md-3 mb-4 product-necklace">
            <div className="necklace-image-wrapper position-relative">
              <img
                src={product.images[0]}
                className="img-fluid"
                alt={product.name}
                onMouseEnter={e => { if (product.images[1]) e.currentTarget.src = product.images[1]; }}
                onMouseLeave={e => { e.currentTarget.src = product.images[0]; }}
              />
              <button
                className="necklace-btn position-absolute"
                onClick={() => handleAddToCart(product)}
                aria-label={`Dodaj ${product.name} do koszyka`}
              >
                <i className="fa-solid fa-bag-shopping fa-fw"></i>
              </button>
            </div>
            <h5 className="mt-2">
              <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                {product.name}
              </Link>
            </h5>
            <p>{product.price}</p>
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
