import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PaymentWithProduct from "./PaymentWithProduct";
import PaymentEmptyCart from "./PaymentEmptyCart";

const Payment = () => {
 const {selectedProducts} = useContext(CartContext)
  return (
    <div >
      <Navbar />
      <main className="main-content">
             {selectedProducts.length === 0 ? <PaymentEmptyCart /> : <PaymentWithProduct />}
      </main>


      

      <Footer />
    </div>
  );
};

export default Payment;
