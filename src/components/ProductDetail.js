



import React, { useContext, useState, useRef, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import ProductAdded from "./ProductsAdded";
import "../css/ProductDetail.css"; 
import  necklacesFake from "../data/NecklacesFake"; 
import  productData  from "../data/productData";
import  necklaceStal  from "../data/NecklacesStal";
import  KolczykiSrebrne  from "../data/productDataSrebroKolcz";
import  KolczykiSztuczne  from "../data/productDataSztuczneKolcz";
import  PierścionekStal  from "../data/RingSteel";
import branzoletkaStopaSztuczna from "../data/BransoletFootFake";
import branzoletkiStopyStal from "../data/BransoletFootStal";
import bransoletkaRekaSztuczna from "../data/BransoletHandFake";
import BranzoletkiStal from "../data/BransoletHandStal";
import { products } from "./Products";

const ProductDetail = ({ products: propsProducts }) => {
  const { productId } = useParams();
  const { addProduct, changeProductAmount } = useContext(CartContext);
  const [visible, setVisible] = useState(false);
  
  // NOWY STAN: Przechowuje aktualnie wybrany wariant (rozmiar) przez użytkownika
  const [selectedVariant, setSelectedVariant] = useState(null);
  
  // Stan dla głównego zdjęcia
  const [mainImage, setMainImage] = useState("");
  const [zoom, setZoom] = useState({ x: 0, y: 0, visible: false });

  const imageRef = useRef(null);

  // 1. Łączenie wszystkich tablic produktowych (Twoja oryginalna logika z useMemo)
  const allProducts = useMemo(() => {
    return [
    ...(Array.isArray(products) ? products : []),
    ...(Array.isArray(necklacesFake) ? necklacesFake : []),
    ...(Array.isArray(productData) ? productData : []),
    ...(Array.isArray(necklaceStal) ? necklaceStal : []),
    ...(Array.isArray(KolczykiSrebrne) ? KolczykiSrebrne : []),
    ...(Array.isArray(KolczykiSztuczne) ? KolczykiSztuczne : []),
    ...(Array.isArray(BranzoletkiStal) ? BranzoletkiStal : [] ),
    ...(Array.isArray(bransoletkaRekaSztuczna) ? bransoletkaRekaSztuczna : []),
    ...(Array.isArray(branzoletkiStopyStal) ? branzoletkiStopyStal : [] ),
    ...(Array.isArray(branzoletkaStopaSztuczna) ? branzoletkaStopaSztuczna : [] ),
        ...(Array.isArray(PierścionekStal) ? PierścionekStal : [])
  
  ]}, [propsProducts]);

  // 2. Szukanie wszystkich wariantów, których bazowe ID (przed myślnikiem) zgadza się z URL
  const matchingVariants = useMemo(() => {
    return allProducts.filter(p => {
      if (!p || !p.id) return false;
      const baseId = p.id.toString().split('-')[0];
      return baseId === productId.toString();
    });
  }, [allProducts, productId]);

  // 3. Pobieramy pierwszy wariant jako produkt bazowy do wyświetlania stałych danych (zdjęcia, opis, specyfikacja)
  const baseProduct = matchingVariants[0];

  // 4. Wyczyszczenie nazwy głównej z powtarzających się informacji o rozmiarach (żeby tytuł wyglądał czysto)
  const cleanName = useMemo(() => {
    if (!baseProduct) return "";
    return baseProduct.name
      .replace(/(?:Rozmiar\s*:\s*|:\s*)?US\d+\s+EU\d+\s*/gi, '')
      .trim();
  }, [baseProduct]);

  // 5. Budowanie czytelnej listy wariantów rozmiarowych na podstawie nazw lub specyfikacji
  const sizesList = useMemo(() => {
    return matchingVariants.map(item => {
      let sizeText = "One Size";
      const sizeMatch = item.name.match(/US\d+\s+EU\d+/i);
      
      if (sizeMatch) {
        sizeText = sizeMatch[0];
      } else if (item.specs && item.specs["Ring size"]) {
        sizeText = item.specs["Ring size"];
      } else if (item.name.toLowerCase().includes("gumce")) {
        sizeText = "One Size";
      }

      return {
        size: sizeText,
        rawItem: item, // referencja do pełnego, oryginalnego obiektu z pliku danych
        availability: item.availability,
        stock: item.stock
      };
    });
  }, [matchingVariants]);

  // Sprawdzenie, czy produkt ma tylko jeden uniwersalny rozmiar (np. naszyjniki)
  const isOneSize = sizesList.length === 1 && sizesList[0].size === "One Size";

  // AKTUALIZACJA ZDJĘCIA PRZY ZMIANIE PRODUKTU (Zmieniono referencję z product na baseProduct)
  useEffect(() => {
    if (baseProduct) {
      setMainImage(baseProduct.image || "");
      setSelectedVariant(null); // Resetujemy wybrany rozmiar przy zmianie podstrony pierścionka
    }
  }, [baseProduct]);

  if (!baseProduct)
    return (
      <p className="text-center mt-5" role="alert">
        Produkt nie znaleziony
      </p>
    );

  // Twoje oryginalne logi w konsoli
  console.log("Czy products to tablica?", Array.isArray(propsProducts));
  console.log("Co jest w necklacesFake?", necklacesFake);

  // Zaktualizowana funkcja dodawania do koszyka uwzględniająca precyzyjny wariant
  const handleAddToCart = () => {
    if (!isOneSize && !selectedVariant) {
      alert("Proszę najpierw wybrać rozmiar pierścionka!");
      return;
    }

    // Wybieramy właściwy obiekt produktu (z odpowiednim ID i nazwą z rozmiarem)
    const exactProductToCart = isOneSize ? sizesList[0].rawItem : selectedVariant.rawItem;

    addProduct(exactProductToCart);
    setVisible(true);
  };

  // Zaktualizowana funkcja zmiany ilości (obsługuje dynamicznie id wybranego rozmiaru)
  const handleAmountChange = (e) => {
    if (!isOneSize && !selectedVariant) return;
    const currentActiveId = isOneSize ? sizesList[0].rawItem.id : selectedVariant.rawItem.id;
    changeProductAmount(currentActiveId, e.target.value);
  };

  // Twoja oryginalna funkcja kliknięcia w miniaturę, przepisana bezpiecznie bez mutowania stanu bazy
  const handleImageClick = (key) => {
    if (!baseProduct[key]) return;
    const temp = mainImage;
    setMainImage(baseProduct[key]);
    // Bezpieczna podmiana lokalna ścieżki w obiekcie komponentu
    baseProduct[key] = temp;
  };

  // Twoja oryginalna funkcja obsługi zoomu (efekt lupy)
  const handleMouseMove = (e) => {
   if (window.innerWidth > 768) {
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoom({ x, y, visible: true });
  }
  };

  // Twoja oryginalna funkcja opuszczenia obszaru lupy
  const handleMouseLeave = () => {
    setZoom({ ...zoom, visible: false });
  };

  // Wyliczanie aktualnie przypisanej ilości dla selecta
  const currentActiveItem = isOneSize ? sizesList[0].rawItem : selectedVariant?.rawItem;
  const currentAmountValue = currentActiveItem ? (currentActiveItem.amount || 1) : 1;
  const currentActiveId = currentActiveItem ? currentActiveItem.id : baseProduct.id;

  return (
    <section
      className="product-detail container my-5"
      aria-labelledby="product-title"
      aria-describedby="product-description"
    >
      <div className="row g-4 product-detail-container">
        {/* Lewy blok - obrazek */}
        <div className="col-md-6 product-image-wrapper">
          <div
            className="product-image-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              ref={imageRef}
              src={mainImage}
              alt={cleanName}
              className="img-fluid product-image-detail rounded shadow-sm"
              role="img"
              aria-label={`Zdjęcie produktu: ${cleanName}`}
            />
            {zoom.visible && (
              <div
                className="zoom-lens"
                style={{
                  backgroundImage: `url(${mainImage})`,
                  backgroundPosition: `${zoom.x}% ${zoom.y}%`,
                }}
              />
            )}
          </div>

          {/* Miniatury */}
          {baseProduct.image2 && (
            <img
              src={baseProduct.image2}
              alt={`${cleanName} - dodatkowe zdjęcie 1`}
              className="img-fluid product-image-small rounded shadow-sm"
              onClick={() => handleImageClick("image2")}
            />
          )}
          {baseProduct.image3 && (
            <img
              src={baseProduct.image3}
              alt={`${cleanName} - dodatkowe zdjęcie 2`}
              className="img-fluid product-image-small2 rounded shadow-sm"
              onClick={() => handleImageClick("image3")}
            />
          )}
          {baseProduct.image4 && (
            <img
              src={baseProduct.image4}
              alt={`${cleanName} - dodatkowe zdjęcie 3`}
              className="img-fluid product-image-small3 rounded shadow-sm"
              onClick={() => handleImageClick("image4")}
            />
          )}
        </div>

        {/* Prawy blok - szczegóły */}
        <div className="col-md-6 product-info-detail">
          <h1 id="product-title" className="product-title-detail mb-3">
            {cleanName}
          </h1>
          <p
            className="product-price-detail h3 mb-4"
            aria-label={`Cena: ${baseProduct.price}`}
          >
            {baseProduct.price}
          </p>

          {/* DODANA: Sekcja kafelków wyboru rozmiaru na karcie produktu */}
          {!isOneSize && (
            <div className="product-sizes-selection mb-4">
              <h6 style={{ fontWeight: 'bold', marginBottom: '10px' }}>WYBIERZ ROZMIAR:</h6>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {sizesList.map((variant) => {
                  const isSelected = selectedVariant?.size === variant.size;
                  const isOutOfStock = variant.availability === "Brak w magazynie" || variant.stock === 0;
                  const friendlySizeName = variant.size.replace("US", "").replace("EU", "EU ");
                  
                  return (
                    <button
                      key={variant.size}
                      disabled={isOutOfStock}
                      onClick={() => setSelectedVariant(variant)}
                      style={{
                        padding: '8px 14px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        borderRadius: '6px',
                        border: isSelected ? '2px solid #000' : '1px solid #ccc',
                        backgroundColor: isSelected ? '#000' : '#fff',
                        color: isSelected ? '#fff' : isOutOfStock ? '#ddd' : '#333',
                        cursor: isOutOfStock ? 'not-allowed' : 'pointer',
                        textDecoration: isOutOfStock ? 'line-through' : 'none',
                        transition: 'all 0.2s'
                      }}
                    >
                      {friendlySizeName}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div className="product-details">
            <h5>Szczegóły:</h5>
            <ul>
              <li>Materiał: {baseProduct.material}</li>
              <li>Kolor: {baseProduct.color}</li>
              <li>
                Dostępność: {isOneSize ? baseProduct.availability : (selectedVariant ? selectedVariant.availability : "Wybierz rozmiar")}
              </li>
            </ul>
          </div>

          <div className="amount-box">
            <div className="segment-product-detail-amount ui segment">
              <label htmlFor={`amount-${currentActiveId}`} className="sr-only">
                Ilość produktu {cleanName}
              </label>
              <select
                id={`amount-${currentActiveId}`}
                disabled={!isOneSize && !selectedVariant}
                value={currentAmountValue}
                onChange={handleAmountChange}
              >
                {[...Array(10).keys()].map((n) => (
                  <option key={n + 1} value={n + 1}>
                    {n + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            className="btn btn-lg product-add-btn"
            disabled={!isOneSize && !selectedVariant}
            onClick={handleAddToCart}
            aria-label={`Dodaj produkt ${cleanName} do koszyka`}
            style={{
              width: '100%',
              backgroundColor: (isOneSize || selectedVariant) ? '#000' : '#ccc',
              color: '#fff',
              border: 'none',
              padding: '14px',
              fontWeight: 'bold',
              marginTop: '15px'
            }}
          >
            <i className="fa-solid fa-cart-shopping me-2" aria-hidden="true"></i>
            {isOneSize ? 'Dodaj do koszyka' : (selectedVariant ? `Dodaj rozmiar ${selectedVariant.size.replace("US","").replace("EU","EU ")}` : 'Wybierz rozmiar')}
          </button>
        </div>
      </div>

      {visible && (
        <ProductAdded
          visible={visible}
          setVisible={setVisible}
          products={[isOneSize ? sizesList[0].rawItem : selectedVariant.rawItem]}
          aria-live="polite"
        />
      )}

      {/* Opis produktu */}
      <div id="product-description" className="product-description mb-4">
        <h5>Opis produktu:</h5>
        {Array.isArray(baseProduct.description) ? (
          baseProduct.description.map((line, index) => (
            <p key={index}>{line}</p>
          ))
        ) : (
          <p>{baseProduct.description}</p>
        )}
      </div>

      {/* KROK 2: POPRAWIONA SPECYFIKACJA (Z ZASTOSOWANIEM ROZWIĄZANIA .specs) */}
      <div id="product-specs" className="product-specs mb-4">
        <h5>Specyfikacje:</h5>
        {baseProduct.specs ? (
          <ul>
            {Object.entries(baseProduct.specs).map(([key, value], index) => (
              <li key={index}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        ) : (
          <p>Brak specyfikacji</p>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;