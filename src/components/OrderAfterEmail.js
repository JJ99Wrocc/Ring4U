import React, { useContext, useState } from "react";
import OrderInvoiceForm from "./OrderInvoiceForm";
import OrderReadMore from "./OrderReadMore";
import OrderForm from "./OrderForm";
import OrderData from "./OrderData";
import OrderInvoiceData from "./OrderInvoiceData";
import { OrderContext } from "./OrderContext";

const OrderAfterEmail = ({ setIsNextValid }) => {
  const [sameAddress, setSameAddress] = useState(true);
  const [showAgeAlert, setShowAgeAlert] = useState(false);
  const [showUnCheck, setShowUnCheck] = useState(false);
  const [showUnCheckk, setShowUnCheckk] = useState(false);
  const [showOrderReadMore, setShowOrderReadMore] = useState(false);
  const [showOrderData, setShowOrderData] = useState(false);
  const [changeText, setChangeText] = useState(false);

  const {
    isOrderFormValid,
    setIsOrderFormValid,
    isOrderInvoiceFormValid,
    setIsOrderInvoiceFormValid,
  } = useContext(OrderContext);

  const handleClick = () => {
    if (!showAgeAlert) {
      alert("Musisz mieć ukończone 16 lat.");
      return;
    }
    if (sameAddress) {
      if (!isOrderFormValid) {
        alert("Uzupełnij dane do dostawy.");
        return;
      }

      console.log("Ustawiono isNextValid na true (sameAddress)");
      setShowOrderData(true);
      setIsNextValid(true);
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
    <div role="form" aria-label="Formularz zamówienia">
      {showOrderData ? (
        sameAddress ? <OrderData /> : <OrderInvoiceData />
      ) : (
        <>
          <OrderForm
            onValidSubmit={setIsOrderFormValid}
            showAgeAlert={showAgeAlert}
          />

          <div
            className="order-checks"
            role="checkbox"
            aria-checked={sameAddress}
            tabIndex="0"
            onKeyDown={(e) => e.key === "Enter" && setSameAddress(!sameAddress)}
            aria-label="Adres dostawy i faktury są takie same"
          >
            <div
              onClick={() => setSameAddress(!sameAddress)}
              className="checkbox-box"
              aria-hidden="true"
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
            <div
              className="order-checks"
              role="checkbox"
              aria-checked={showAgeAlert}
              tabIndex="0"
              onKeyDown={(e) => e.key === "Enter" && setShowAgeAlert(!showAgeAlert)}
              aria-label="Potwierdzenie wieku powyżej 16 lat"
            >
              <div
                onClick={() => setShowAgeAlert(!showAgeAlert)}
                className="checkbox-box"
                aria-hidden="true"
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
          <div
            className="order-checks"
            role="checkbox"
            aria-checked={showUnCheck}
            tabIndex="0"
            onKeyDown={(e) => e.key === "Enter" && setShowUnCheck(!showUnCheck)}
            aria-label="Zgoda na wiadomości marketingowe"
          >
            <div
              onClick={() => setShowUnCheck(!showUnCheck)}
              className="checkbox-box"
              aria-hidden="true"
            >
              {showUnCheck && <i className="fa-solid fa-check"></i>}
            </div>
            <span>
              Odznacz pole, jeśli nie chcesz otrzymywać wiadomości
              marketingowych...
            </span>
          </div>

          <p style={{ fontWeight: "bold" }}>
            Bądź w gronie pierwszych, którzy otrzymują promocje...
          </p>
          <div
            className="order-checks"
            role="checkbox"
            aria-checked={showUnCheckk}
            tabIndex="0"
            onKeyDown={(e) => e.key === "Enter" && setShowUnCheckk(!showUnCheckk)}
            aria-label="Zgoda na oferty i wiadomości"
          >
            <div
              onClick={() => setShowUnCheckk(!showUnCheckk)}
              className="checkbox-box"
              aria-hidden="true"
            >
              {showUnCheckk && <i className="fa-solid fa-check"></i>}
            </div>
            <span>
              Tak, chcę otrzymywać oferty i wiadomości...{" "}
              <button
                onClick={() => {
                  setShowOrderReadMore(!showOrderReadMore);
                  setChangeText(!changeText);
                }}
                aria-expanded={showOrderReadMore}
                aria-controls="order-read-more"
              >
                {changeText ? "Czytaj mniej" : "Czytaj więcej"}
              </button>
              {showOrderReadMore && (
                <OrderReadMore id="order-read-more" />
              )}
            </span>
          </div>

          <button
            style={{ marginTop: "10px" }}
            onClick={handleClick}
            aria-label="Przejdź do następnego kroku"
          >
            DALEJ
          </button>
        </>
      )}
    </div>
  );
};

export default OrderAfterEmail;
