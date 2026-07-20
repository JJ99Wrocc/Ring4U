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
            <p>Imię: {costumerName}</p>
            <p>Nazwisko: {costumerSurname}</p>
            <p>Adres dostawy: {address}</p>
            <p>Firma/lokal: {company}</p>
            <p>Kod pocztowy: {postalCode}</p>
            <p>Miasto: {city}</p>
            <p>Numer telefonu: {phonePrefix} {phoneNumber}</p>

            {pickupPoint && (
                <>
                    <p style={{ fontWeight: "bold", marginTop: "15px" }}>
                        WYBRANY PACZKOMAT:
                    </p>

                    <p>Nazwa: {pickupPoint.name}</p>
                    <p>Adres: {pickupPoint.address}</p>
                </>
            )}

            <p style={{ fontWeight: "bold", marginTop: "15px" }}>
                ADRES DOSTAWY JEST TAKI SAM JAK ADRES DO FAKTURY
            </p>
        </>
    );
};

export default OrderData;