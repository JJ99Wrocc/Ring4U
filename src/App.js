  import React from "react";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import 'aos/dist/aos.css';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Navbar from "./components/Navbar";

  import Header from "./components/Home";
  import PasswordReset from "./components/PasswordReset";
  import TermsOfService from "./components/TermsOfServices";
  import LogIn from "./components/LogIn"; 
  import Discount from "./components/discount";

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
  import Footer from "./components/Footer";
  import CookieConsent from "./components/CookieConsent";
  import Product from "./components/Products";
  import ProductDetail from "./components/ProductDetail";
  import OurMision from "./components/OurMision";

  import BraceletHandSteel from "./components/BraceletHandSteel";
  import BraceletHandFake from "./components/BranceletHandFake";
  import BraceletFootFake from "./components/BranceletFootFake";
  import BraceletFootStal from "./components/BraceletFootStal";
  import Necklace from "./components/NecklaceStal";
 
  import DeliveryAndReturns from "./components/DeliveryAndReturns";
  import EarRingsStalGold from "./components/KolczykiStalGold";
  import EarRingsSztuczneGold from "./components/KolczykiSztuczneGold"
  import EarRingsSrebro from "./components/KolczykiSrebro"

import NecklaceStal from "./components/NecklaceStal";
import NecklaceFake from "./components/NecklacesFake";
import RingStal from "./components/RingStal";
import ContactForm from "./components/ContactForm"
  function LayoutWithNavAndFooter({ children }) {
    return (
      <div className="app-container"> 
      <CartAddedProduct />
      <Navbar />
      
      <main className="content-grow"> 
        {children}
      </main>
      
      <Footer />
    </div>
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
              <Discount />
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
  path="/contactForm"
  element={
    <LayoutWithNavAndFooter>
      <ContactForm />
    </LayoutWithNavAndFooter>
  }
/>

<Route
  path="/product/:productId"
  element={
    <LayoutWithNavAndFooter>
      <ProductDetail  />
  
    </LayoutWithNavAndFooter>
  }
/>

<Route
  path="/our-mission"
  element={
    <LayoutWithNavAndFooter>
      <OurMision />
    </LayoutWithNavAndFooter>
  }
/>



<Route
  path="/ear-rings/stal/:subcategory"
  element={
    <LayoutWithNavAndFooter>
      
      <EarRingsStalGold />
    </LayoutWithNavAndFooter>
  }
/>
<Route
path="/ear-rings/sztuczna/:subcategory"
element={
  <LayoutWithNavAndFooter>
      <EarRingsSztuczneGold />
  </LayoutWithNavAndFooter>
}
/>
<Route
  path="/ear-rings/stal"
  element={
    <LayoutWithNavAndFooter>
      <EarRingsStalGold />
    </LayoutWithNavAndFooter>
  }
/>

<Route
  path="/ear-rings/sztuczna"
  element={
    <LayoutWithNavAndFooter>
      <EarRingsSztuczneGold />
    </LayoutWithNavAndFooter>
  }
/>
<Route
  path="/ear-rings/srebro"
  element={
    <LayoutWithNavAndFooter>
      <EarRingsSrebro />
    </LayoutWithNavAndFooter>
  }
/>
<Route
  path="/necklace/stal/:subcategory"
  element={
    <LayoutWithNavAndFooter>
      <NecklaceStal />
    </LayoutWithNavAndFooter>
  }
/>
<Route
path="/necklace/stal"
element={
  <LayoutWithNavAndFooter>
      <NecklaceStal />
  </LayoutWithNavAndFooter>
}
/>
<Route
path="/necklace/sztuczna"
element={
  <LayoutWithNavAndFooter>
      <NecklaceFake />
  </LayoutWithNavAndFooter>
}
/>
<Route
  path="/necklace/sztuczna/:subcategory"
  element={
    <LayoutWithNavAndFooter>
      <NecklaceFake />
    </LayoutWithNavAndFooter>
  }
/>
        <Route
          path="/branzoletkiHand/stal/:subcategory"
          element={
            
              <LayoutWithNavAndFooter>
                <BraceletHandSteel />
              </LayoutWithNavAndFooter>
            
          }
        />
        <Route
          path="/branzoletkiFoot/stal/:subcategory"
          element={
            
              <LayoutWithNavAndFooter>
                <BraceletFootStal />
              </LayoutWithNavAndFooter>
            
          }
        />
        <Route
          path="/branzoletkiFoot/sztuczna/:subcategory"
          element={
            
              <LayoutWithNavAndFooter>
                <BraceletFootFake />
              </LayoutWithNavAndFooter>
            
          }
        />
        <Route
          path="/branzoletkiHand/sztuczna/:subcategory"
          element={
            
              <LayoutWithNavAndFooter>
                <BraceletHandFake />
              </LayoutWithNavAndFooter>
            
          }
        />
        <Route
          path="/pierscionekStal/stal/:subcategory"
          element={
            
              <LayoutWithNavAndFooter>
                <RingStal />
              </LayoutWithNavAndFooter>
            
          }
        />
        <Route
          path="/branzoletkiHand"
          element={
            
              <LayoutWithNavAndFooter>
                <BraceletHandSteel />
              </LayoutWithNavAndFooter>
            
          }
        />
        <Route
          path="/pierscionekStal"
          element={
            
              <LayoutWithNavAndFooter>
                <RingStal />
              </LayoutWithNavAndFooter>
            
          }
        />
        <Route
          path="/branzoletkiHand"
          element={
            
              <LayoutWithNavAndFooter>
                <BraceletFootFake />
              </LayoutWithNavAndFooter>
            
          }
        />
{/*      
        <Route
          path="/rings"
          element={
            
              <LayoutWithNavAndFooter>
                <Rings />
              </LayoutWithNavAndFooter>
            
          }
        /> */}
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
       
            </PrivateRoute>
          }
        />
      <Route
  path="/terms-of-services"
  element={
    <LayoutWithNavAndFooter>
      <TermsOfService />
    </LayoutWithNavAndFooter>
  }
/>
        <Route 
          path="/deliveryandreturns"
          element={
            <PrivateRoute>
              <LayoutWithNavAndFooter>
                <DeliveryAndReturns />
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
     
        
            </div>
            <CookieConsent />
          </BrowserRouter>
        </CartProvider>
      </OrderProvider>
    );
  }

  export default App;
