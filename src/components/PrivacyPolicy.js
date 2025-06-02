import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="privacy-content">
        <h1>Privacy Policy</h1>
        <p>This is our privacy policy content...</p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
