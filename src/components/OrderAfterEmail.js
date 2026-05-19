import React, { useContext, useState } from "react";
import OrderInvoiceForm from "./OrderInvoiceForm";
import OrderReadMore from "./OrderReadMore";
import OrderForm from "./OrderForm";
import OrderData from "./OrderData";
import OrderInvoiceData from "./OrderInvoiceData";
import { OrderContext } from "./OrderContext";
import { Link } from "react-router-dom";

const OrderAfterEmail = ({ setIsNextValid }) => {
  const [sameAddress, setSameAddress] = useState(true);
  const [showAgeAlert, setShowAgeAlert] = useState(false);
  const [showRodoAlert, setShowRodoAlert] = useState(false);
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
    updateOrderData, // 🔽 będziemy aktualizować zgody w orderData
  } = useContext(OrderContext);

  const handleClick = () => {
    if (!showAgeAlert) {
      alert("Musisz mieć ukończone 16 lat.");
      return;
    }
    if (!showRodoAlert) {
      alert("Musisz potwierdzić politykę RODO.");
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
    console.log("Ustawiono isNextValid na true (different address)");
    setShowOrderData(true);
    setIsNextValid(true);
  };

  return (
    <div role="form" aria-label="Formularz zamówienia">
      {showOrderData ? (
        sameAddress ? <OrderData /> : <OrderInvoiceData />
      ) : (
        <>
          {/* FORMULARZ DOSTAWY */}
          <OrderForm
            onValidSubmit={setIsOrderFormValid}
            showAgeAlert={showAgeAlert}
          />

          {/* CHECKBOX: ten sam adres */}
          <div
            className="order-checks"
            role="checkbox"
            aria-checked={sameAddress}
            tabIndex="0"
            onKeyDown={(e) =>
              e.key === "Enter" && setSameAddress(!sameAddress)
            }
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

          {/* CHECKBOX: wiek 16 lat */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div
              className="order-checks"
              role="checkbox"
              aria-checked={showAgeAlert}
              tabIndex="0"
              onKeyDown={(e) =>
                e.key === "Enter" && setShowAgeAlert(!showAgeAlert)
              }
              aria-label="Potwierdzenie wieku powyżej 16 lat"
            >
              <div
                onClick={() => {
                  setShowAgeAlert(!showAgeAlert);
                  updateOrderData("acceptedAge", !showAgeAlert); // 🔽 zapis do kontekstu
                }}
                className="checkbox-box"
                aria-hidden="true"
              >
                {showAgeAlert && <i className="fa-solid fa-check"></i>}
              </div>
              <span>Mam ukończone 16 lat.</span>
            </div>
            {!showAgeAlert && (
              <p className="name-error order-check-p">
                Jesteś zbyt młoda/y, by się zarejestrować/złożyć zamówienie.
              </p>
            )}
          </div>

          {/* CHECKBOX: RODO */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div
              className="order-checks"
              role="checkbox"
              aria-checked={showRodoAlert}
              tabIndex="0"
              onKeyDown={(e) =>
                e.key === "Enter" && setShowRodoAlert(!showRodoAlert)
              }
              aria-label="Potwierdzenie-rodo"
            >
              <div
                onClick={() => {
                  setShowRodoAlert(!showRodoAlert);
                  updateOrderData("acceptedRodo", !showRodoAlert); 
                }}
                className="checkbox-box"
                aria-hidden="true"
              >
                {showRodoAlert && <i className="fa-solid fa-check"></i>}
              </div>
              <span style={{ paddingBottom: "10px" }}>
                Wyrażam zgodę na przetwarzanie moich danych osobowych przez
                ring4u.pl w celu realizacji zamówienia zgodnie z{" "}
                <Link
                  to="/privacypolicy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Informacją o polityce prywatności
                </Link>
                .
              </span>
            </div>
            {!showRodoAlert && (
              <p className="name-error order-check-p">
                Musisz potwierdzić politykę RODO!!
              </p>
            )}
          </div>

          {/* CHECKBOX: brak marketingu */}
          <p style={{ fontWeight: "bold" }}>
            Nie chcesz otrzymywać spersonalizowanych wiadomości marketingowych?
          </p>
          <div
            className="order-checks"
            role="checkbox"
            aria-checked={showUnCheck}
            tabIndex="0"
            onKeyDown={(e) =>
              e.key === "Enter" && setShowUnCheck(!showUnCheck)
            }
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
            className="order-checks "
            role="checkbox"
            aria-checked={showUnCheckk}
            tabIndex="0"
            onKeyDown={(e) =>
              e.key === "Enter" && setShowUnCheckk(!showUnCheckk)
            }
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
                className="order-read-more-btn"
                onClick={() => {
                  setShowOrderReadMore(!showOrderReadMore);
                  setChangeText(!changeText);
                }}
                aria-expanded={showOrderReadMore}
                aria-controls="order-read-more"
              >
                {changeText ? "Czytaj mniej" : "Czytaj więcej"}
              </button >
              {showOrderReadMore && <OrderReadMore id="order-read-more" />}
            </span>
          </div>


          <button
            className="order-discount-btn"
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
