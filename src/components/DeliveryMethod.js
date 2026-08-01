import React, { useContext, useState } from "react";
import '../css/index.css';
import { CartContext } from "./CartContext";
import { OrderContext } from "./OrderContext";
import InPostMap from "./InPostMap";
import DhlMap from "./DhlMap";



const DeliveryMethod = ({ onSelect }) => {

  const { selectedProducts } = useContext(CartContext);
  const { updateOrderData, orderData } = useContext(OrderContext);


  const [selectedDelivery, setSelectedDelivery] = useState(null);




  const totalCost = selectedProducts.reduce((sum, product) => {

    if (!product.selected) return sum;

    const numericPrice = parseFloat(
      product.price.toString().replace(/[^\d.]/g, "")
    );

    return sum + numericPrice * (product.amount || 1);

  }, 0);



  const handleSelect = (method) => {

    setSelectedDelivery(method);


    updateOrderData("deliveryMethod", {

      method: method,

      // NIE KASUJEMY WYBRANEGO PACZKOMATU
      pickupPoint:
        orderData.deliveryMethod?.pickupPoint || null

    });




  };



  const getPriceText = () => {

    if (totalCost === 0) return "0.00zł";

    if (totalCost < 198) return "20.00 zł";

    return "Za darmo";

  };



  return (

    <div className="delivery-box" aria-live="polite">



      <div

        className={`ui segment first-delivery-box delivery-boxes ${
          selectedDelivery === "inpost" ? "selected" : ""
        }`}

        onClick={() => handleSelect("inpost")}

        role="button"

        tabIndex={0}

        aria-pressed={selectedDelivery === "inpost"}

        aria-label={`Wybierz dostawę do paczkomatu Inpost, cena: ${getPriceText()}`}

        onKeyDown={(e) => e.key === "Enter" && handleSelect("inpost")}

      >


        <p>Data dostawy do paczkomatu Inpost (time)</p>



        {selectedDelivery === "inpost" && (

          <InPostMap

            onSelectPoint={(point)=>{


              const delivery = {

                method:"inpost",

                pickupPoint:{

                  id: point.id,

                  name: point.name,

                  address: point.address,

                  lat: point.lat,

                  lng: point.lng,

                  carrier:"inpost"

                }

              };



              console.log(
                "WYBRANY PACZKOMAT:",
                point
              );


              console.log(
                "DELIVERY SAVE:",
                delivery
              );





              updateOrderData(
                "deliveryMethod",
                delivery
              );



              if(onSelect){

                onSelect(delivery);

              }


            }}

          />

        )}



        <p>{getPriceText()}</p>


        <span className="delivery-flag">

          <i className="fa-solid fa-truck"></i>

        </span>


      </div>






      <div

        className={`ui segment second-delivery-box delivery-boxes ${
          selectedDelivery === "dhl" ? "selected" : ""
        }`}

        onClick={() => handleSelect("dhl")}

      >


        <p>Data dostawy do paczkomatu DHL (time)</p>



        {selectedDelivery === "dhl" && (

          <DhlMap

            onSelectPoint={(point)=>{


              const delivery = {

                method:"dhl",

                pickupPoint:{

                  id: point.id,

                  name: point.name,

                  address: point.address,

                  lat: point.lat,

                  lng: point.lng,

                  carrier:"dhl"

                }

              };



              console.log(
                "WYBRANY DHL:",
                point
              );


              console.log(
                "DELIVERY SAVE:",
                delivery
              );



             



              updateOrderData(
                "deliveryMethod",
                delivery
              );



              if(onSelect){

                onSelect(delivery);

              }


            }}

          />

        )}



        <p>{getPriceText()}</p>


        <span className="delivery-flag">

          <i className="fa-solid fa-house-flag"></i>

        </span>


      </div>






      <div

        className={`ui segment third-delivery-box delivery-boxes ${
          selectedDelivery === "kurier-inpost" ? "selected" : ""
        }`}

        onClick={() => handleSelect("kurier-inpost")}

      >

        <p>Dostawa kurierska Inpost</p>

        <p>{getPriceText()}</p>


        <span className="delivery-flag">

          <i className="fa-solid fa-store"></i>

        </span>


      </div>






      <div

        className={`ui segment third-delivery-box delivery-boxes ${
          selectedDelivery === "kurier-dhl" ? "selected" : ""
        }`}

        onClick={() => handleSelect("kurier-dhl")}

      >

        <p>Dostawa kurierska DHL</p>

        <p>{getPriceText()}</p>


        <span className="delivery-flag">

          <i className="fa-solid fa-store"></i>

        </span>


      </div>



    </div>

  );

};



export default DeliveryMethod;