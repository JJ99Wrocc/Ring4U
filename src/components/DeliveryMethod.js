import React, { useContext } from "react";
import '../css/index.css';
import { CartContext } from "./CartContext";

const DeliveryMethod = () => {
    const {selectedProducts} = useContext(CartContext);

    const totalCost = selectedProducts.reduce((sum, product) => {
        if(!product.selected) return sum;
        const numericPrice = parseFloat(
            product.price.toString().replace(/[^\d.]/g, "") 
          );
          return sum + numericPrice * (product.amount || 1);
    }, 0)
    return(
        <div  className="delivery-box"> 
            <div className="ui segment first-delivery-box delivery-boxes">
                <p> Data dostawy do paczkomatu (time)</p>
                <p>{totalCost === 0 
                    ? "0.00zł" 
                : totalCost < 400 
                ? "20.00 zł"
                : "Za darmo"
                }</p>
                <span className="delivery-flag"><i class="fa-solid fa-truck"></i></span>
                </div>

            <div className="ui segment secount-selivery-box delivery-boxes">
                <p>Data dostawy do domu (time)</p>
            <p>{totalCost === 0 
                    ? "0.00zł" 
                : totalCost < 400 
                ? "20.00 zł"
                : "Za darmo"
                }</p>
                <span className="delivery-flag"><i class="fa-solid fa-house-flag"></i></span>
            </div>
       
         </div>
    )
}

export default DeliveryMethod;