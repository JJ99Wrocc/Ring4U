  import React, { useContext, useState } from "react";
  import OrderInvoiceForm from "./OrderInvoiceForm";
  import OrderReadMore from "./OrderReadMore";
  import OrderForm from "./OrderForm";
  import OrderData from "./OrderData";
  import OrderInvoiceData from "./OrderInvoiceData";
  import { OrderContext } from "./OrderContext";

  const OrderAfterEmail = ({setIsNextValid}) => {
    const [sameAddress, setSameAddress] = useState(true); 
    const [showAgeAlert, setShowAgeAlert] = useState(false);
    const [showUnCheck, setShowUnCheck] = useState(false);
    const [showUnCheckk, setShowUnCheckk] = useState(false);
    const [showOrderReadMore, setShowOrderReadMore] = useState(false);
    const [showOrderData, setShowOrderData] = useState(false);

  

    const { isOrderFormValid, setIsOrderFormValid,isOrderInvoiceFormValid, setIsOrderInvoiceFormValid } = useContext(OrderContext);
    const handleClick = () => {
      if (!showAgeAlert) {
        alert("Musisz mieć ukończone 16 lat.");
        return;
      }
      if (sameAddress) {
        if (!isOrderFormValid ) {
          alert("Uzupełnij dane do dostawy.");
          return;
        }
        
        console.log("Ustawiono isNextValid na true (sameAddress)");
        setShowOrderData(true);
        setIsNextValid(true)
        return;
      }
        if (!isOrderInvoiceFormValid && !sameAddress) {
          alert("Uzupełnij dane do faktury.");
          return;
        }
        console.log("Ustawiono isNextValid na true (sameAddress)");
        setShowOrderData(true);
        setIsNextValid(true);
    
    };
    
    return (
      <div>
        {showOrderData ? (
          sameAddress ? <OrderData /> : <OrderInvoiceData />
        ) : (
          <>

            <OrderForm
              onValidSubmit={setIsOrderFormValid}
              showAgeAlert={showAgeAlert}
            />

      
            <div className="order-checks">
              <div
                onClick={() => setSameAddress(!sameAddress)}
                className="checkbox-box"
              >
                {sameAddress && <i className="fa-solid fa-check"></i>}
              </div>
              <span>
                Adres dostawy i adres do wystawienia faktury są takie same
              </span>
            </div>

            {!sameAddress && (
              <OrderInvoiceForm onValidSubmit={setIsOrderInvoiceFormValid} />
            )}


            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <div className="order-checks">
                <div
                  onClick={() => setShowAgeAlert(!showAgeAlert)}
                  className="checkbox-box"
                >
                  {showAgeAlert && <i className="fa-solid fa-check"></i>}
                </div>
                <span>Mam ukończone 16 lat. Dlaczego to jest ważne?*</span>
              </div>
              {!showAgeAlert && (
                <p className="name-error order-check-p">
                  Jesteś zbyt młoda/y, by się zarejestrować/złożyć zamówienie.
                </p>
              )}
            </div>


            <p style={{ fontWeight: "bold" }}>
              Nie chcesz otrzymywać spersonalizowanych wiadomości marketingowych?
            </p>
            <div className="order-checks">
              <div
                onClick={() => setShowUnCheck(!showUnCheck)}
                className="checkbox-box"
              >
                {showUnCheck && <i className="fa-solid fa-check"></i>}
              </div>
              <span>
                Odznacz pole, jeśli nie chcesz otrzymywać wiadomości marketingowych...
              </span>
            </div>

            <p style={{ fontWeight: "bold" }}>
              Bądź w gronie pierwszych, którzy otrzymują promocje...
            </p>
            <div className="order-checks">
              <div
                onClick={() => setShowUnCheckk(!showUnCheckk)}
                className="checkbox-box"
              >
                {showUnCheckk && <i className="fa-solid fa-check"></i>}
              </div>
              <span>
                Tak, chcę otrzymywać oferty i wiadomości...{" "}
                <button
                  onClick={() => setShowOrderReadMore(!showOrderReadMore)}
                >
                  Czytaj więcej
                </button>
                {showOrderReadMore && <OrderReadMore />}
              </span>
            </div>

            <button style={{ marginTop: "10px" }} onClick={handleClick}>
              DALEJ <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </>
        )}
      </div>

      
    );
  };

  export default OrderAfterEmail;
