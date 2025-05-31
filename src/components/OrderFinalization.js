import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import Footer from "./Footer";


const OrderFinalization = () => {
  const {selectedProducts} = useContext(CartContext);
  const totalCost = selectedProducts.reduce((sum, product) => {
    if (!product.selected) return sum;
    const numericPrice = parseFloat(
      product.price.toString().replace(/[^\d.]/g, "")
    );
    return sum + numericPrice * (product.amount || 1);
  }, 0);
  const selectedCount = selectedProducts
        .filter((p) => p.selected)
        .reduce((sum, p) => sum + (p.amount || 1), 0);
    return (
        <div className="order-finalization-box">
           <div className="container ordef-box-1">
           <div className="left-order-brand">FLOW<span className="order-brand-2">MART</span></div>
           <div className="right-order">  
               <Link to="/payment" className="look">
                  <i className="fa-solid fa-cart-shopping"></i>
               </Link>
            </div>
           </div>
           <div className="order-finalization-title">FINALIZACJA ZAMÓWIENIA</div>
           <div className="order-finalization-under-title-line"> ({selectedCount} PRODUKTY)  {totalCost} ZŁ</div>
           <div className="container order-box2">
            <div className="left-order-finalization-box">
                <p className="big-letter-order">KONTAKT</p>
                <input className="order-input" placeholder="email"/>
                <p className="big-letter-order">ADRES</p>
                <p>Adres dostawy</p>
                <div className="order-adress">
               
                <input className="order-input" type="text" placeholder="Imię*" />
                <input className="order-input" type="text" placeholder="Nazwisko*" />
                <input className="order-input" type="text" placeholder="Adres*" />
                <p>Np. ul. Zamkowa5</p>
                <input className="order-input" type="text" placeholder="Dodatkowe informacje*" />
                <p>Np. Firma, Lokal</p>
                <input className="order-input" type="text" placeholder="Kod pocztowy*" />
                <p>Np. 54-444</p>
                <input className="order-input" type="text" placeholder="Miasto*" />
                <p>Np. Warszawa</p>
                <p>PAŃSTWO: Poland</p>
                <input className="order-input" type="number" placeholder="Numer telefonu komurkowego*" />
                <p>Np. 667 667 668</p>
                </div>

                <div>
                  <i className="fa-solid fa-check"></i>
                Adres dostawy i adres do wystawienia faktury są takie same
              </div>

              <div className="order-adres-different-for-invoice">
              
                <input className="order-input" type="text" placeholder="Imię*" />
                <input className="order-input" type="text" placeholder="Nazwisko*" />
                <input className="order-input" type="text" placeholder="Adres*" />
                <p>Np. ul. Zamkowa5</p>
                <input className="order-input" type="text" placeholder="Dodatkowe informacje*" />
                <p>Np. Firma, Lokal</p>
                <input className="order-input" type="text" placeholder="Kod pocztowy*" />
                <p>Np. 54-444</p>
                <input className="order-input" type="text" placeholder="Miasto*" />
                <p>Np. Warszawa</p>
                <p>PAŃSTWO: Poland</p>
                <input className="order-input" type="number" placeholder="Numer telefonu komurkowego*" />
                <p>Np. 667 667 668</p>
              </div>
              <input className="order-input" type="number" placeholder="NIP" />
            <div>
                  <i className="fa-solid fa-check"></i>
                  Mam ukończone 16 lat Dlaczego to jest ważne?*
              </div>
              <p>Nie chcesz otrzymywać spersonalizowanych wiadomości marketingowych od adidas? Odznacz pole, aby zrezygnować.</p>
              <div>
                  <i className="fa-solid fa-check"></i>
                  Odznacz pole, jeśli nie chcesz otrzymywać od adidas wiadomości marketingowych: Jeśli jesteś klientem, który zakupił produkty adidas, adidas Poland sp. z o.o. i adidas AG będą wykorzystywać Twoje dane osobowe do wysyłania spersonalizowanych wiadomości marketingowych pocztą e-mail. Opiera się to na uzasadnionym interesie adidas, aby angażować Cię jako naszego klienta. Jeśli nie chcesz otrzymywać newsletterów od adidas, odznacz pole wyboru, aby zrezygnować. Możesz zrezygnować z subskrypcji, klikając łącze "anuluj subskrypcję" w każdym kolejnym e-mailu marketingowym. KLIKNIJ TUTAJ, ABY PRZECZYTAĆ NASZĄ POLITYKĘ PRYWATNOŚCI DOTYCZĄCĄ SPERSONALIZOWANYCH WIADOMOŚCI MARKETINGOWYCH ZA POŚREDNICTWEM POCZTY E-MAIL (ZGODNIE Z ISTNIEJĄCĄ UMOWĄ).
              </div> 
              <p>Bądź w gronie tych, którzy jako pierwsi będą otrzymywać najnowsze promocje, produkty i wiadomości od adidas, razem ze spersonalizowanymi reklamami</p>
              <div>
                  <i className="fa-solid fa-check"></i>
                  Tak, chcę otrzymywać najnowsze oferty i wiadomości o produktach adidas, za pośrednictwem reklam wyświetlanych w mediach cyfrowych, na podstawie moich interakcji z adidas oraz zachowań na platformach takich jak Google i Facebook. Wiem, że w każdej chwili mogę zdecydować o zaprzestaniu udostępniania moich danych osobowych. <button>Czytaj więcej</button>
                  <p>Wiem, że w każdej chwili mogę zdecydować o zaprzestaniu udostępniania moich danych osobowych, w związku z czym na platformach internetowych mogą być wyświetlane losowe reklamy adidas. Rozumiem, że adidas Poland Sp. z o.o., adidas AG, oraz runtastic GmbH („adidas”) będą wykorzystywać podany przez mnie adres e-mail oraz wszystkie dane osobowe powiązane z tym adresem e-mail (dane kontaktowe oraz informacje dotyczące tożsamości, lokalizacji, rozmiaru, zachowania i profilu, społeczności, mediów społecznościowych, aktywności, urządzenia, preferencji, klubu adiClub) do analizy moich preferencji. Udostępniam swoje dane, aby firma adidas mogła korzystać z niezależnych rozwiązań analitycznych, takich jak Google Analytics i Facebook Business Manager, by porównywać moje zachowanie z profilami odwiedzających zapisanymi w jej bazie danych, oraz by wybrać najlepszy czas i miejsce (na podstronie, którą przeglądam) do wyświetlania cyfrowych wiadomości marketingowych adidas na platformach takich jak Google, Facebook, YouTube itp., oraz na innych odwiedzanych przeze mnie stronach internetowych. Wiem, że analiza mojego zachowania w Internecie (a w niektórych przypadkach również poza Internetem) pomaga firmie adidas zrozumieć, co lubię, a czego nie, aby wyświetlać mi treści lepiej dostosowane do moich potrzeb. Rozumiem również, że moja zgoda umożliwia firmie adidas doskonalenie strategii w zakresie przesyłania wiadomości w oparciu o moje interakcje i zaangażowanie. Pozwalam firmie adidas na bezpieczne udostępnianie moich danych osobowych starannie dobranym dostawcom, którzy mogą prowadzić działalność poza moim krajem zamieszkania. Więcej informacji na temat tych działań znajduje się w „Informacji o polityce prywatności”.</p>
              </div> 
              <button>DALEJ <i className="fa-solid fa-arrow-right-long"></i></button>
              <div className="delivery-method big-letter-order">SPOSÓB DOSTAWY</div>
              <div className="Payment-method big-letter-order">PŁATNOŚĆ</div>
            </div>
            <div className="right-order-finalization-box">
                <div>TWOJE ZAMÓWIENIE <span>EDYTUJ</span></div>
                <div>produkt <div>cena</div></div>
                <div>dostawa <div>cena</div></div>
                <div>Razem <div>cena</div></div>
                <div>Łącznie z podatkiem</div>
                {selectedProducts.map((product, index) => (
              <div key={index}>
                <img
                  src={product.image}
                  className=""
                  alt={product.name}
                />
                <div className="">{product.name}</div>
                <div className="">{product.price}</div>
              </div>
            ))}
            </div>
           </div>
           <Footer />
        </div>
        
    )
}


export default OrderFinalization;