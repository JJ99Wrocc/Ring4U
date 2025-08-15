import React from "react";
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
import PrivacyPolicy from "./components/PrivacyPolicy";
import OrderProvider from "./components/OrderContext";
import RegisterEmail from "./components/RegisterEmail";
import { useContext } from "react";
import { CartContext } from "./components/CartContext";
import PaymentWithProduct from "./components/PaymentWithProduct"
import PaymentEmptyCart from "./components/PaymentEmptyCart"
import MyOrders from "./components/MyOrders";



function LayoutWithNavAndFooter({ children }) {
  return (
    <>
      <CartAddedProduct />
      <Navbar />
      <Discount />
      {children}
    </>
  );
}


function AppRoutes() {
   const {selectedProducts} = useContext(CartContext)
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
            <LogIn />
          </LayoutWithNavAndFooter>
        }
      />
      <Route
        path="/my-orders"
        element={
          <LayoutWithNavAndFooter>
            <MyOrders />
          </LayoutWithNavAndFooter>
        }
      />
      
      <Route path="/payment" element={
        <LayoutWithNavAndFooter>
          {selectedProducts.length === 0 ? <PaymentEmptyCart /> :  <PaymentWithProduct />}
        </LayoutWithNavAndFooter>
      } />
      
      <Route
        path="/order-finalization"
        element={<OrderFinalization />}
      />
      
      <Route
       path="/registeremail"
       element={<RegisterEmail />}
       />
s
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
    </Routes>
  );
}


function App() {
  return (
    <OrderProvider>
      <CartProvider>
        <BrowserRouter basename="/FLOWMART">
          <div className="page-wrapper">
            <main className="main-content">
              <AppRoutes />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </OrderProvider>
  );
}

export default App;
