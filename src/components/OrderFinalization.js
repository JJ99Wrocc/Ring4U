import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import Footer from "./Footer";
import OrderInvoiceForm from "./OrderInvoiceForm";
import OrderReadMore from "./OrderReadMore";
import OrderForm from "./OrderForm";
import { OrderContext } from "./OrderContext";




  

const OrderFinalization = () => {
    const { orderData, updateOrderData } = useContext(OrderContext);
  
    const handleEmailChange = (e) => {
      updateOrderData("email", e.target.value);
    };


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
                
                        <input
                type="email"
                className="order-input email"
                placeholder="E-mail *"
                required
                value={orderData.email}
                onChange={handleEmailChange}
              />
              <p className="e-mail-error">Wpisz poprawny adres e-mail</p>

                <OrderForm />

                <div>
                  <i className="fa-solid fa-check"></i>
                Adres dostawy i adres do wystawienia faktury są takie same
              </div>

              <OrderInvoiceForm />

              
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
                  Tak, chcę otrzymywać najnowsze oferty i wiadomości o produktach adidas, za pośrednictwem reklam wyświetlanych w 
                  mediach cyfrowych, na podstawie moich interakcji z adidas oraz zachowań na platformach takich jak Google i Facebook.
                   Wiem, że w każdej chwili mogę zdecydować o zaprzestaniu udostępniania moich danych osobowych. <button>Czytaj więcej</button>
                   {/* <OrderReadMore /> */}
                  
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