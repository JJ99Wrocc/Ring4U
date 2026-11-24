import React, { useContext } from "react";
import { OrderContext } from "./OrderContext";

const OrderData = () => {
    const { orderData } = useContext(OrderContext);

    const { pickupPoint } = orderData;

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

    return (
        <>
            <p className="order-in-input">Imię: {costumerName}</p>
            <p className="order-in-input">Nazwisko: {costumerSurname}</p>
            <p className="order-in-input">Adres dostawy: {address}</p>
            <p className="order-in-input">Firma/lokal: {company}</p>
            <p className="order-in-input">Kod pocztowy: {postalCode}</p>
            <p className="order-in-input">Miasto: {city}</p>
            <p className="order-in-input">Numer telefonu: {phonePrefix} {phoneNumber}</p>

            {pickupPoint && (
                <>
                    <p style={{ fontWeight: "bold", marginTop: "15px" }} className="order-p">
                        WYBRANY PACZKOMAT:
                    </p>

                    <p className="order-in-input">Nazwa: {pickupPoint.name}</p>
                    <p className="order-in-input">Adres: {pickupPoint.address}</p>
                </>
            )}

            <p style={{ fontWeight: "bold", marginTop: "15px" }}  className="delivery-title">
                ADRES DOSTAWY JEST TAKI SAM JAK ADRES DO FAKT 
            </p>
        </>
    );
};

export default OrderData;