  import React from "react";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import 'aos/dist/aos.css';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Navbar from "./components/Navbar";
  import Footer from "./components/Footer";
  import Header from "./components/Home";
  import PasswordReset from "./components/PasswordReset";
  import TermsOfService from "./components/TermsOfServices";
  import LogIn from "./components/LogIn"; 
  import Discount from "./components/discount";
  // import Product from "./components/Products";
  // import Payment from "./components/Payment";
  import CartProvider from "./components/CartContext";
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
  import { CartContext } from "./components/CartContext";
  import UpperFooter from "./components/UpperFooter";
  import CookieConsent from "./components/CookieConsent";
  import Product, { products } from "./components/Products";
  import ProductDetail from "./components/ProductDetail";
  import EarRings from "./components/EarRings";
  import Bracelet from "./components/Bracelet";
  import Necklace from "./components/Necklace";
  import Rings from "./components/Rings"
  
  import { earRings } from "./components/EarRings";
  function LayoutWithNavAndFooter({ children }) {
    return (
      <>
        <CartAddedProduct />
        <Navbar />
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
              <Discount />
              <UpperFooter />
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
  path="/product/:productId"
  element={
    <LayoutWithNavAndFooter>
      <ProductDetail products={[...products, ...earRings]} />
      <UpperFooter />
    </LayoutWithNavAndFooter>
  }
/>
        <Route
          path="/ear-rings"
          element={
            <PublicRoute>
              <LayoutWithNavAndFooter>
                <EarRings />
              </LayoutWithNavAndFooter>
            </PublicRoute>
          }
        />
        <Route
          path="/bracelet"
          element={
            <PublicRoute>
              <LayoutWithNavAndFooter>
                <Bracelet />
              </LayoutWithNavAndFooter>
            </PublicRoute>
          }
        />
        <Route
          path="/necklace"
          element={
            <PublicRoute>
              <LayoutWithNavAndFooter>
                <Necklace />
              </LayoutWithNavAndFooter>
            </PublicRoute>
          }
        />
        <Route
          path="/rings"
          element={
            <PublicRoute>
              <LayoutWithNavAndFooter>
                <Rings />
              </LayoutWithNavAndFooter>
            </PublicRoute>
          }
        />
        <Route
    path="/reset-password"
    element={
      <PublicRoute>
        <LayoutWithNavAndFooter>
          <PasswordReset />
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
              <UpperFooter />
            </PrivateRoute>
          }
        />
        <Route
          path="/terms-of-services"
          element={
            <PrivateRoute>
              <LayoutWithNavAndFooter>
                <TermsOfService />
              </LayoutWithNavAndFooter>
              <UpperFooter />
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
              <UpperFooter />
            </PrivateRoute>
          }
        />


      
        {/* <Route
          path="/payment"
          element={
            <LayoutWithNavAndFooter>
            <Payment/>
          </LayoutWithNavAndFooter>
          }
  /> */}
        <Route
          path="/forgot-password"
          element={
            <LayoutWithNavAndFooter>
              <ForgotPassword />
            </LayoutWithNavAndFooter>
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
        <Route path="/privacypolicy" element={<LayoutWithNavAndFooter>
              <PrivacyPolicy />
              <UpperFooter />
            </LayoutWithNavAndFooter> } />


        <Route path="/order-finalization" element={<OrderFinalization />} />
        <Route path="/registeremail" element={<RegisterEmail />} />
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
          <BrowserRouter >
            <div className="page-wrapper">
              <main className="main-content">
                <AppRoutes />
              </main>
              
              <Footer />
            </div>
            <CookieConsent />
          </BrowserRouter>
        </CartProvider>
      </OrderProvider>
    );
  }

  export default App;
