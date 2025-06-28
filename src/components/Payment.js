import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PaymentWithProduct from "./PaymentWithProduct";
import PaymentEmptyCart from "./PaymentEmptyCart";

const Payment = () => {
 const {selectedProducts} = useContext(CartContext)
  return (
    <div >
<div>
<Navbar />
      <div className="siema">


{selectedProducts.length === 0 ? <PaymentEmptyCart /> :  <PaymentWithProduct />}


      </div>

</div>
      
      <Footer />

    </div>
  );
};

export default Payment;
