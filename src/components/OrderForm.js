import React, { useContext, useEffect, useState } from "react";
import { OrderContext } from "./OrderContext";

const OrderForm = ({ onValidSubmit, showAgeAlert, showInvoiceForm,showRodoAlert }) => {
  const { orderData, updateOrderData, updateNestedOrderData } = useContext(OrderContext);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isSurnameValid, setIsSurnameValid] = useState(false);
  const [isAddressValid, setIsAddressValid] = useState(false);
  const [isPostalCodeValid, setIsPostalCodeValid] = useState(false);
  const [isCompanyValid, setIsCompanyValid] = useState(false);
  const [isCityValid, setIsCityValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const { setIsOrderFormValid } = useContext(OrderContext);

  useEffect(() => {
    const isFormValid =
      isNameValid &&
      isSurnameValid &&
      isAddressValid &&
      isPostalCodeValid &&
      isCompanyValid &&
      isCityValid &&
      isPhoneValid;
    setIsOrderFormValid(isFormValid);
    if (onValidSubmit) {
      onValidSubmit(isFormValid);
    }
  }, [
    isNameValid,
    isSurnameValid,
    isAddressValid,
    isPostalCodeValid,
    isCompanyValid,
    isCityValid,
    isPhoneValid,
    onValidSubmit,
  ]);

  const validateName = (name) => {
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿżźćńółęąśŻŹĆĄŚĘŁÓŃ\s'-]{2,}$/;
    return nameRegex.test(name.trim());
  };
  const validateSurname = (surname) => {
    const surnameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿżźćńółęąśŻŹĆĄŚĘŁÓŃ\s'-]{2,}$/;
    return surnameRegex.test(surname.trim());
  };
  const addressValidate = (address) => {
    const addressRegex = /^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż0-9\s\.\-\/]{5,}$/;
    return addressRegex.test(address.trim());
  };
  const validatePostalCode = (code) => {
    const codeRegex = /^\d{2}-\d{3}$/;
    return codeRegex.test(code.trim());
  };
  const validateCompany = (company) => {
    const pattern = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ0-9\s\-.&]{2,}$/;
    return pattern.test(company.trim());
  };
  const validateCity = (city) => {
    const cityRegex = /^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż\s-]{3,}$/;
    return cityRegex.test(city.trim());
  };
  const validatePhoneNumber = (phone) => {
    const regex = /^[0-9]{9}$/;
    return regex.test(phone);
  };

  return (
    <>
      <p>Adres dostawy</p>
      <div className="order-adress">
        <div className="order-row">
          <div className="order-wrapper">
            <input
              className="order-input order-name"
              type="text"
              placeholder="Imię *"
              value={orderData.shippingAddress.costumerName}
              aria-label="Imię"
              aria-invalid={!isNameValid}
              aria-describedby="nameHelp"
              tabIndex={0}
              style={{
                border:
                  !isNameValid && orderData.shippingAddress.costumerName.length === 0
                    ? "2px solid black"
                    : isNameValid
                    ? "4px solid green"
                    : "4px solid red",
              }}
              onChange={(e) => {
                const name = e.target.value;
                updateNestedOrderData("shippingAddress", "costumerName", name);
                setIsNameValid(validateName(name));
              }}
            />
            {!isNameValid && orderData.shippingAddress.costumerName.length > 0 ? (
              <p className="name-error" id="nameHelp">
                Wpisz poprawne imię
              </p>
            ) : (
              <p className="order-under-input" id="nameHelp">
                Np. Jan
              </p>
            )}
          </div>

          <div className="order-wrapper">
            <input
              className="order-input order-name gap"
              type="text"
              placeholder="Nazwisko *"
              value={orderData.shippingAddress.costumerSurname}
              aria-label="Nazwisko"
              aria-invalid={!isSurnameValid}
              aria-describedby="surnameHelp"
              tabIndex={0}
              style={{
                border:
                  !isSurnameValid && orderData.shippingAddress.costumerSurname.length === 0
                    ? "2px solid black"
                    : isSurnameValid
                    ? "4px solid green"
                    : "4px solid red",
              }}
              onChange={(e) => {
                const surname = e.target.value;
                updateNestedOrderData("shippingAddress", "costumerSurname", surname);
                setIsSurnameValid(validateSurname(surname));
              }}
            />
            {!isSurnameValid && orderData.shippingAddress.costumerSurname.length > 0 ? (
              <p className="name-error" id="surnameHelp">
                Wpisz poprawne Nazwisko
              </p>
            ) : (
              <p className="order-under-input" id="surnameHelp">
                Np. Kowalski
              </p>
            )}
          </div>
        </div>

        <input
          className="order-input order-adress"
          type="text"
          placeholder="Adres *"
          value={orderData.shippingAddress.adress}
          aria-label="Adres"
          aria-invalid={!isAddressValid}
          aria-describedby="addressHelp"
          tabIndex={0}
          onChange={(e) => {
            const address = e.target.value;
            updateNestedOrderData("shippingAddress", "address", address);
            setIsAddressValid(addressValidate(address));
          }}
          style={{
            border:
              !isAddressValid && orderData.shippingAddress.address.length === 0
                ? "2px solid black"
                : isAddressValid
                ? "4px solid green"
                : "4px solid red",
          }}
        />
        {!isAddressValid && orderData.shippingAddress.address.length > 0 ? (
          <p className="name-error" id="addressHelp">
            Wpisz poprawną ulicę
          </p>
        ) : (
          <p id="addressHelp">Np. ul. Zamkowa 5</p>
        )}

        <input
          className="order-input order-information"
          type="text"
          placeholder="Dodatkowe informacje"
          value={orderData.shippingAddress.company}
          aria-label="Dodatkowe informacje"
          aria-invalid={!isCompanyValid}
          aria-describedby="companyHelp"
          tabIndex={0}
          onChange={(e) => {
            const company = e.target.value;
            updateNestedOrderData("shippingAddress", "company", company);
            setIsCompanyValid(validateCompany(company));
          }}
          style={{
            border:
              !isCompanyValid && orderData.shippingAddress.company.length === 0
                ? "2px solid black"
                : isCompanyValid
                ? "4px solid green"
                : "4px solid red",
          }}
        />
        {!isCompanyValid && orderData.shippingAddress.company.length > 0 ? (
          <p className="name-error" id="companyHelp">
            Podaj prawdziwą nazwę firmy
          </p>
        ) : (
          <p id="companyHelp">Np. Firma, Lokal</p>
        )}

        <div className="order-row">
          <div className="order-wrapper">
            <input
              className="order-input order-name"
              type="text"
              placeholder="Kod pocztowy *"
              value={orderData.shippingAddress.postalCode}
              aria-label="Kod pocztowy"
              aria-invalid={!isPostalCodeValid}
              aria-describedby="postalHelp"
              tabIndex={0}
              style={{
                border:
                  !isPostalCodeValid && orderData.shippingAddress.postalCode.length === 0
                    ? "2px solid black"
                    : isPostalCodeValid
                    ? "4px solid green"
                    : "4px solid red",
              }}
              onChange={(e) => {
                const postalCode = e.target.value;
                updateNestedOrderData("shippingAddress", "postalCode", postalCode);
                setIsPostalCodeValid(validatePostalCode(postalCode));
              }}
            />
            {!isPostalCodeValid && orderData.shippingAddress.postalCode.length > 0 ? (
              <p className="name-error" id="postalHelp">
                Wpisz poprawny kod pocztowy
              </p>
            ) : (
              <p className="order-under-input" id="postalHelp">
                Np. 54-444
              </p>
            )}
          </div>

          <div className="order-wrapper">
            <input
              className="order-input order-name gap"
              type="text"
              placeholder="Miasto *"
              value={orderData.shippingAddress.city}
              aria-label="Miasto"
              aria-invalid={!isCityValid}
              aria-describedby="cityHelp"
              tabIndex={0}
              style={{
                border:
                  !isCityValid && orderData.shippingAddress.city.length === 0
                    ? "2px solid black"
                    : isCityValid
                    ? "4px solid green"
                    : "4px solid red",
              }}
              onChange={(e) => {
                const city = e.target.value;
                updateNestedOrderData("shippingAddress", "city", city);
                setIsCityValid(validateCity(city));
              }}
            />
            {!isCityValid && orderData.shippingAddress.city.length > 0 ? (
              <p className="name-error" id="cityHelp">
                Wpisz poprawną nazwę miasta
              </p>
            ) : (
              <p id="cityHelp">Np. Warszawa</p>
            )}
          </div>
        </div>

        <p>PAŃSTWO: Poland</p>

        <div className="order-phone-container">
          <div style={{ display: "flex", gap: "8px" }}>
            <select
              className="order-input"
              value={orderData.shippingAddress.phonePrefix}
              aria-label="Prefix numeru telefonu"
              tabIndex={0}
              onChange={(e) =>
                updateNestedOrderData("shippingAddress", "phonePrefix", e.target.value)
              }
            >
              <option value="+48">🇵🇱 +48</option>
              <option value="+49">🇩🇪 +49</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+1">🇺🇸 +1</option>
            </select>

            <input
              className="order-input"
              type="tel"
              placeholder="Numer telefonu *"
              value={orderData.shippingAddress.phoneNumber}
              aria-label="Numer telefonu"
              aria-invalid={!isPhoneValid}
              aria-describedby="phoneHelp"
              tabIndex={0}
              onChange={(e) => {
                const phone = e.target.value.replace(/\D/g, "");
                updateNestedOrderData("shippingAddress", "phoneNumber", phone);
                setIsPhoneValid(validatePhoneNumber(phone));
              }}
              style={{
                border:
                  orderData.shippingAddress.phoneNumber.length === 0
                    ? "2px solid black"
                    : isPhoneValid
                    ? "4px solid green"
                    : "4px solid red",
              }}
            />
          </div>

          <div style={{ marginTop: "4px" }}>
            {orderData.shippingAddress.phoneNumber.length === 0 ? null : isPhoneValid ? (
              <p style={{ margin: 0 }} id="phoneHelp">
                Np. 667 667 668
              </p>
            ) : (
              <p className="name-error" style={{ margin: 0 }} id="phoneHelp">
                Wpisz poprawny numer telefonu
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderForm;
