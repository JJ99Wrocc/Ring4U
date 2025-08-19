import React, { useState } from "react";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getApp } from "firebase/app";

const DiscountBox = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Wprowadź poprawny adres e-mail.");
      return;
    }

    setError("");

    try {
      const db = getFirestore(getApp());

      await addDoc(collection(db, "newsletterSubscribers"), {
        email,
        createdAt: serverTimestamp(),
        confirmed: false,
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Błąd zapisu do Firestore:", err);
      setError("Wystąpił błąd podczas zapisywania. Spróbuj ponownie później.");
    }
  };

  return (
    <div className="discount-box">
      <div className="discount-content">
        <button className="close-btn" onClick={onClose}>×</button>
      
             {!submitted && (
        <>
          <h2 className="discount-h2">
            <i className="fa-solid fa-clover"></i> Odbierz 10% zniżki
          </h2>
          <p className="center-p">My nie spamujemy – przeczytaj naszą politykę prywatności.</p>
        </>
      )}
        {submitted ? (
          <p className="success-message">
            TWÓJ KOD -10%: <span className="bold">FLOW10</span>
          </p>
        ) : (
          <form className="discount-form" onSubmit={handleSubmit}>
            <input
              className="discount-input"
              type="email"
              placeholder="Wpisz swój email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="discount-btn">
              <p className="discount-btn-p">Zapisz się</p>
            </button>
          </form>
        )}

        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default DiscountBox;
