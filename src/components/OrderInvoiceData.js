import React, { useContext } from "react";
import { OrderContext } from "./OrderContext";

const OrderInvoiceData = () =>{
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

      return(
        <>
        <p style={{fontWeight: "bold"}}>ADRES DOSTAWY</p>

        <p>Imię: {costumerName}</p>
        <p>Nazwisko: {costumerSurname}</p>
        <p>Adres dostawy: {address}</p>
        <p>Firma/lokal: {company}</p>
        <p>Kod pocztowy: {postalCode}</p>
        <p>Miasto: {city}</p>
        <p>Numer telefonu: {phonePrefix} {phoneNumber}</p>

        <p style={{fontWeight: "bold"}}>ADRES DO FAKTURY</p>

        <p>Imię: {billingName}</p>
        <p>Nazwisko: {billingSurname}</p>
        <p>Adres dostawy: {billingAddress}</p>
        <p>Firma/lokal: {billingCompany}</p>
        <p>Kod pocztowy: {billingPostalCode}</p>
        <p>Miasto: {billingCity}</p>
        <p>Numer telefonu: {billingPrefix} {billingNumber}</p>
      </>
      )
    
    }

    export default OrderInvoiceData;