import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Home";

import LogIn from "./components/LogIn"; 
import Discount from "./components/discount";
import Product from "./components/Products";
import Payment from "./components/Payment";
import CartProvider, { CartContext } from "./components/CartContext";
import CartAddedProduct from "./components/CartPreview2";
import OrderFinalization from "./components/OrderFinalization";
import PrivacyPolicy from "./components/PrivacyPolicy";
import OrderProvider from "./components/OrderContext";
import RegisterEmail from "./components/RegisterEmail";
import PaymentWithProduct from "./components/PaymentWithProduct";
import PaymentEmptyCart from "./components/PaymentEmptyCart";
import MyOrders from "./components/MyOrders";
import MyDm from "./components/MyDm";
import ForgotPassword from "./components/resetPassword";

import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";

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
  return (
    <Routes>
      
      <Route
        path="/"
        element={
          <LayoutWithNavAndFooter>
            <Header />
            <Product />
          </LayoutWithNavAndFooter>
        }
      />

    
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LayoutWithNavAndFooter>
              <LogIn />
            </LayoutWithNavAndFooter>
          </PublicRoute>
        }
      />


      <Route
        path="/forgot-password"
        element={
          <PublicRoute>
            <LayoutWithNavAndFooter>
              <ForgotPassword />
            </LayoutWithNavAndFooter>
          </PublicRoute>
        }
      />

     
      <Route
        path="/my-orders"
        element={
          <PrivateRoute>
            <LayoutWithNavAndFooter>
              <MyOrders />
            </LayoutWithNavAndFooter>
          </PrivateRoute>
        }
      />


      <Route
        path="/my-dm"
        element={
          <PrivateRoute>
            <LayoutWithNavAndFooter>
              <MyDm />
            </LayoutWithNavAndFooter>
          </PrivateRoute>
        }
      />

     
      <Route
        path="/payment"
        element={
          <LayoutWithNavAndFooter>
            <PaymentWrapper />
          </LayoutWithNavAndFooter>
        }
      />


      <Route path="/order-finalization" element={<OrderFinalization />} />
      <Route path="/registeremail" element={<RegisterEmail />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

function PaymentWrapper() {
  const { selectedProducts } = React.useContext(CartContext);
  return selectedProducts.length === 0 ? <PaymentEmptyCart /> : <PaymentWithProduct />;
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
