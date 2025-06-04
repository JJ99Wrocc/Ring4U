import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const OrderFinalizationRightBox = () => {

      const {selectedProducts} = useContext(CartContext);
      const totalCost = selectedProducts.reduce((sum, product) => {
        if (!product.selected) return sum;
        const numericPrice = parseFloat(
          product.price.toString().replace(/[^\d.]/g, "")
        );
        return sum + numericPrice * (product.amount || 1);
      }, 0);
      const selectedCount = selectedProducts
      .filter((p) => p.selected)
      .reduce((sum, p) => sum + (p.amount || 1), 0);
  
    return(
        <div className="right-order-finalization-box">
                <div>TWOJE ZAMÓWIENIE <Link to="/payment">EDYTUJ</Link></div>
                <div>{selectedCount }produkt <div>{totalCost} zł</div></div>
                <div>dostawa <div>{totalCost === 0 ? "0.00zł" : totalCost < 400 ? "Za darmo" : "20.00zł" }</div></div>
                <div>Razem <div>{totalCost === 0 ? "0.00zł" : totalCost < 400 ? totalCost : totalCost + 20} zł</div></div>
                <div>Łącznie z podatkiem {totalCost !== 0 ? (totalCost * 0.23).toFixed(2) : null} zł</div>
                {selectedProducts.map((product, index) => (
              <div key={index}>
                <img
                  src={product.image}
                  className=""
                  alt={product.name}
                />
                <div className="">{product.name}</div>
                <div className="">{product.price}</div>
              </div>
            ))}
            </div>
    )
}

export default OrderFinalizationRightBox;