import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Home";
import NavMain from "./components/NavMain";
import LogIn from "./components/LogIn"; 
import Discount from "./components/discount";
import Product from "./components/Products";
import Payment from "./components/Payment";
import CartProvider from "./components/CartContext";
import CartAddedProduct from "./components/CartPreview2";
import OrderFinalization from "./components/OrderFinalization";





function LayoutWithNavAndFooter({ children }) {
  
  return (
    <>
     <CartAddedProduct />
      <Navbar />
      <Discount />
      {children}
      <Footer />
    </>
  );
}


function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LayoutWithNavAndFooter>
            <Header />
            <NavMain />
            <Product />
          </LayoutWithNavAndFooter>
        }
      />
      <Route
        path="/login"
        element={
            <LayoutWithNavAndFooter>
              {<LogIn />}
            </LayoutWithNavAndFooter>
        }
      />
      <Route path="/payment" element={<Payment />} />
      <Route
  path="/order-finalization"
  element={
    
      <OrderFinalization />
   
  }
/>

    </Routes>
  );
}

function App() {
  return (
    <CartProvider>
          <BrowserRouter>
              <AppRoutes />
         </BrowserRouter>
    </CartProvider>
      );
}

export default App;
