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
      const shippingPrice = () => {
        return totalCost === 0 ? 0 : totalCost >= 400 ? "Za darmo" : "20.00zł" 
      } 
      const shipping = shippingPrice();
    return(
        <div className="right-order-finalization-box">
                <div>TWOJE ZAMÓWIENIE <Link to="/payment">EDYTUJ</Link></div>
                <div className="order-summary">
                    <div>{selectedCount} produkt{selectedCount !== 1 ? 'y' : ''}</div>
                    <div className="order-total-cost">{totalCost} zł</div>
                </div>
                <div className="shipping-summary">
                <div>dostawa </div>
                <div>{shipping}</div>
                </div>
                <div className="total-summary">
                <div>Razem </div>
                <div className="order-total">{totalCost === 0 ? "0.00zł" : totalCost >= 400 ? totalCost : totalCost + 20} zł</div>
                </div>
                <div>( Łącznie z podatkiem {totalCost !== 0 ? (totalCost * 0.23).toFixed(2) : null} zł )</div>
                <hr style={{margin: "30px 0"}}></hr>
                {selectedProducts.map((product, index) => (
              <div key={index} className="ui segment order-segment">
                <img 
                  src={product.image}
                  className="order-img"
                  alt={product.name}
                />
                <div className="order-segment-name">{product.name}</div>
                <div className="order-product-count">{product.selected ? ` ilość  ${product.amount}`: null}</div>
                <div className="order-product-price">{product.price}</div>
              </div>
            ))}
            </div>
    )
}
export default OrderFinalizationRightBox;