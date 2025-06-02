import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { OrderContext } from "./OrderContext";

const OrderInvoiceForm = () => {

  const {orderData, updateOrderData, updateNestedOrderData} = useContext(OrderContext);
  return (
    <div className="order-adres-different-for-invoice">
      <div className="order-row">
        <div className="order-wrapper">
          <input className="order-input order-name" type="text" placeholder="Imię *" 
          value={orderData.billingAddress.costumerName}
          onChange={(e)=>updateNestedOrderData("billingAddress","costumerName", e.target.value)}/>
          <p className="order-under-input">Np. Jan</p>
        </div>
        <div className="order-wrapper">
          <input className="order-input order-name gap" type="text" placeholder="Nazwisko *"
          value={orderData.billingAddress.costumerSurname}
          onChange={(e) => updateNestedOrderData("billingAddress", "costumerSurname", e.target.value)} />
          <p className="order-under-input">Np. Kowalski</p>
        </div>
      </div>

      <input className="order-input order-adress" type="text" placeholder="Adres *" 
      value={orderData.billingAddress.address}
      onChange={(e)=>updateNestedOrderData("billingAddress","address", e.target.value)}/>
      <p>Np. ul. Zamkowa 5</p>

      <input className="order-input order-information" type="text" placeholder="Dodatkowe informacje"
      value={orderData.billingAddress.company}
      onChange={(e)=>updateNestedOrderData("billingAddress", "company", e.target.value)} />
      <p>Np. Firma, Lokal</p>

      <div className="order-row">
        <div className="order-wrapper">
          <input className="order-input order-name" type="text" placeholder="Kod pocztowy *" 
          value={orderData.billingAddress.postalCode}
          onChange={(e)=>updateNestedOrderData("billingAddress","postalCode", e.target.value)}/>
          <p>Np. 54-444</p>
        </div>
        <div className="order-wrapper">
          <input className="order-input order-name gap" type="text" placeholder="Miasto *" 
          value={orderData.billingAddress.city}
          onChange={(e)=>updateNestedOrderData("billingAddress","city", e.target.value)}/>
          <p>Np. Warszawa</p>
        </div>
      </div>

      <p>PAŃSTWO: Poland</p>

      <input className="order-input" type="number" placeholder="Numer telefonu komórkowego *" 
      value={orderData.billingAddress.phoneNumber}
      onChange={(e)=>updateNestedOrderData("billingAddress","phoneNumber", e.target.value)}/>
      <p>Np. 667 667 668</p>

      <input className="order-input nip" type="number" placeholder="NIP" 
      value={orderData.billingAddress.nip}
      onChange={(e)=> updateNestedOrderData("billingAddress","nip",e.target.value)}/>
    </div>
  );
};

export default OrderInvoiceForm;
