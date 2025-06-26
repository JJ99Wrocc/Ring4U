import React, { useContext, useEffect, useState } from "react";

import { OrderContext } from "./OrderContext";

const OrderInvoiceForm = () => {

  const { orderData, updateNestedOrderData,  setIsOrderInvoiceFormValid } = useContext(OrderContext);
  const [isNameValid, setIsNameValid] = useState(false)
  const [isSurnameValid, setIsSurnameValid] = useState(false);
  const [isAddressValid, setIsAddressValid] = useState(false);
  const [isPostalCodeValid, setIsPostalCodeValid] = useState(false);
  const [isCompanyValid, setIsCompanyValid] = useState(false);
  const [isCityValid, setIsCityValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);



  useEffect(() => {
    const data = orderData.billingAddress;
  
    const isInvoiceValid =
      validateName(data.costumerName) &&
      validateSurname(data.costumerSurname) &&
      addressValidate(data.address) &&
      validateCompany(data.company) &&
      validatePostalCode(data.postalCode) &&
      validateCity(data.city) &&
      validatePhoneNumber(data.phoneNumber);
  
    setIsOrderInvoiceFormValid(isInvoiceValid);
  }, [orderData.billingAddress]);
  
  
  
  const validateName = (name) =>{
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿżźćńółęąśŻŹĆĄŚĘŁÓŃ\s'-]{2,}$/;
    return nameRegex.test(name.trim());
  }
  const validateSurname = (surname) => {
    const surnameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿżźćńółęąśŻŹĆĄŚĘŁÓŃ\s'-]{2,}$/;
    return surnameRegex.test(surname.trim());
  }
  const addressValidate = (address) =>{
    const addressRegex = /^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż0-9\s\.\-\/]{5,}$/;
    return addressRegex.test(address.trim());
  }
  const validatePostalCode = (code) =>{
    const codeRegex = /^\d{2}-\d{3}$/;
    return codeRegex.test(code.trim())
  }
  const validateCompany = (company) => {
    const pattern = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ0-9\s\-.&]{2,}$/;
    return pattern.test(company.trim())
  }
  const validateCity = (city) => {
    const cityRegex = /^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż\s-]{3,}$/;
    return cityRegex.test(city.trim());
  };
  const validatePhoneNumber = (phone) => {
    const regex = /^[0-9]{9}$/;
    return regex.test(phone);
  }

  return (
    <>
    
      
      <p>Adres dostawy</p>
      <div className="order-adress">
        <div className="order-row">


          <div className="order-wrapper">
            <input className="order-input order-name" type="text" placeholder="Imię *"  
            value={orderData.billingAddress.costumerName} 
            style={{ 
              border: !isNameValid && orderData.billingAddress.costumerName.length === 0 
              ? "2px solid black"
              : isNameValid
              ?   "4px solid green"
              :  "4px solid red"
            }}
            onChange={(e) => {
              const name = e.target.value;
              updateNestedOrderData("billingAddress", "costumerName", name);
              setIsNameValid(validateName(name));
            }}/>
            {!isNameValid && orderData.billingAddress.costumerName.length > 0 ?
  <p className="name-error">Wpisz poprawne imię</p> : <p className="order-under-input">Np. Jan</p>
}

            
          </div>


          <div className="order-wrapper">
            <input className="order-input order-name gap" type="text" placeholder="Nazwisko *"
            value={orderData.billingAddress.costumerSurname}
            style={{
              border: !isSurnameValid && orderData.billingAddress.costumerSurname.length === 0
              ? "2px solid black"
              : isSurnameValid
              ?   "4px solid green" 
              :   "4px solid red"
            }}
            onChange={(e) => {
              const surname = e.target.value;
              updateNestedOrderData("billingAddress","costumerSurname", surname);
            setIsSurnameValid(validateSurname(surname))} }/>
            {!isSurnameValid && orderData.billingAddress.costumerSurname.length > 0 ? <p className="name-error">Wpisz poprawne Nazwisko</p>  :
            <p className="order-under-input">Np. Kowalski</p>
            
            }
          </div>
        </div>


        <input className="order-input order-adress" type="text" placeholder="Adres *" 
        value={orderData.billingAddress.adress}
        onChange={(e) => {
          const address = e.target.value;
          updateNestedOrderData("billingAddress", "address", address);
          setIsAddressValid(addressValidate(address));
        }}
                style={{
          border: !isAddressValid && orderData.billingAddress.address.length === 0
          ? "2px solid black"
          : isAddressValid 
          ? "4px solid green" 
          : "4px solid red"
        }} />
        {!isAddressValid && orderData.billingAddress.address.length > 0 
        ? <p className="name-error">Wpisz poprawną ulice</p>
         : <p>Np. ul. Zamkowa 5</p>
         }

 <input className="order-input order-information" type="text" placeholder="Dodatkowe informacje"
        value={orderData.billingAddress.company}
        onChange={(e)=>{ 
          const company = e.target.value;
          updateNestedOrderData("billingAddress","company", company)
          setIsCompanyValid(validateCompany(company));
          }} 
          style={{
            border: !isCompanyValid && orderData.billingAddress.company.length === 0 
            ? "2px solid black"
            : isCompanyValid 
            ? "4px solid green" 
            : "4px solid red"
          }}  />
          {!isCompanyValid && orderData.billingAddress.company.length > 0
          ? <p className="name-error">Podaj prawdziwą nazwę firmy</p>
        : <p>Np. Firma, Lokal</p>}
        


        <div className="order-row">

          <div className="order-wrapper">
            <input className="order-input order-name" type="text" placeholder="Kod pocztowy *"
            value={orderData.billingAddress.postalCode}
            style={{
              border: !isPostalCodeValid && orderData.billingAddress.postalCode.length === 0
              ? "2px solid black"
              : isPostalCodeValid
              ? "4px solid green"
              :  "4px solid red"
            }}
    
            onChange={(e) => {
              const postalCode = e.target.value;
              updateNestedOrderData("billingAddress", "postalCode", postalCode);
              setIsPostalCodeValid(validatePostalCode(postalCode));
            }}
            
             />
           {!isPostalCodeValid && orderData.billingAddress.postalCode.length > 0 ? (
  <p className="name-error">Wpisz poprawny kod pocztowy</p>
) : (
  <p className="order-under-input">Np. 54-444</p>
)}
           </div>

          <div className="order-wrapper">
            <input className="order-input order-name gap" type="text" placeholder="Miasto *" 
            value={orderData.billingAddress.city}
            style={{
              border: !isCityValid && orderData.billingAddress.city.length === 0 
              ? "2px solid black"
              : isCityValid 
              ? "4px solid green"
              : "4px solid red"
            }}
            onChange={(e)=>{
              const city = e.target.value;
            updateNestedOrderData("billingAddress","city", city)
            setIsCityValid(validateCity(city))}}/>
            {!isCityValid && orderData.billingAddress.city.length > 0 
            ? <p className="name-error"> Wpisz poprawną nazwę miasta</p>
            : <p>Np. Warszawa</p>}
          </div>
        </div>

        <p>PAŃSTWO: Poland</p>

        <div className="order-phone-container">
  <div style={{ display: 'flex', gap: '8px' }}>
    <select
      className="order-input"
      value={orderData.billingAddress.phonePrefix}
      onChange={(e) =>
        updateNestedOrderData("billingAddress", "phonePrefix", e.target.value)
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
      value={orderData.billingAddress.phoneNumber}
      onChange={(e) => {
        const phone = e.target.value.replace(/\D/g, "");
        updateNestedOrderData("billingAddress", "phoneNumber", phone);
        setIsPhoneValid(validatePhoneNumber(phone));
      }}
      style={{
        border:
          orderData.billingAddress.phoneNumber.length === 0
            ? "2px solid black"
            : isPhoneValid
            ? "4px solid green"
            : "4px solid red"
      }}
    />
  </div>


  <div style={{ marginTop: '4px' }}>
    {orderData.billingAddress.phoneNumber.length === 0 ? null : (
      isPhoneValid ? (
        <p style={{ margin: 0 }}>Np. 667 667 668</p>
      ) : (
        <p className="name-error" style={{ margin: 0 }}>
          Wpisz poprawny numer telefonu
        </p>
      )
    )}
  </div>
</div>

      </div>
    </>
  );
};

export default OrderInvoiceForm;
