import React, { useContext } from "react";
import { OrderContext } from "./OrderContext";

const OrderInvoiceData = () => {
  const { orderData } = useContext(OrderContext);

  const {
    costumerName,
    costumerSurname,
    address,
    company,
    postalCode,
    city,
    phonePrefix,
    phoneNumber,
  } = orderData.shippingAddress;

  const {
    costumerName: billingName,
    costumerSurname: billingSurname,
    address: billingAddress,
    company: billingCompany,
    postalCode: billingPostalCode,
    city: billingCity,
    phonePrefix: billingPrefix,
    phoneNumber: billingNumber,
  } = orderData.billingAddress;

  return (
    <>
      <p style={{ fontWeight: "bold" }} tabIndex="0" aria-label="Adres dostawy">
        ADRES DOSTAWY
      </p>

      <p tabIndex="0" aria-label={`Imię: ${costumerName}`}>Imię: {costumerName}</p>
      <p tabIndex="0" aria-label={`Nazwisko: ${costumerSurname}`}>Nazwisko: {costumerSurname}</p>
      <p tabIndex="0" aria-label={`Adres dostawy: ${address}`}>Adres dostawy: {address}</p>
      <p tabIndex="0" aria-label={`Firma lub lokal: ${company}`}>Firma/lokal: {company}</p>
      <p tabIndex="0" aria-label={`Kod pocztowy: ${postalCode}`}>Kod pocztowy: {postalCode}</p>
      <p tabIndex="0" aria-label={`Miasto: ${city}`}>Miasto: {city}</p>
      <p tabIndex="0" aria-label={`Numer telefonu: ${phonePrefix} ${phoneNumber}`}>
        Numer telefonu: {phonePrefix} {phoneNumber}
      </p>

      <p style={{ fontWeight: "bold" }} tabIndex="0" aria-label="Adres do faktury">
        ADRES DO FAKTURY
      </p>

      <p tabIndex="0" aria-label={`Imię: ${billingName}`}>Imię: {billingName}</p>
      <p tabIndex="0" aria-label={`Nazwisko: ${billingSurname}`}>Nazwisko: {billingSurname}</p>
      <p tabIndex="0" aria-label={`Adres dostawy: ${billingAddress}`}>Adres dostawy: {billingAddress}</p>
      <p tabIndex="0" aria-label={`Firma lub lokal: ${billingCompany}`}>Firma/lokal: {billingCompany}</p>
      <p tabIndex="0" aria-label={`Kod pocztowy: ${billingPostalCode}`}>Kod pocztowy: {billingPostalCode}</p>
      <p tabIndex="0" aria-label={`Miasto: ${billingCity}`}>Miasto: {billingCity}</p>
      <p tabIndex="0" aria-label={`Numer telefonu: ${billingPrefix} ${billingNumber}`}>
        Numer telefonu: {billingPrefix} {billingNumber}
      </p>
    </>
  );
};

export default OrderInvoiceData;
