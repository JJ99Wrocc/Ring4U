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
    <div className="discount-box" role="dialog" aria-modal="true" aria-labelledby="discount-title">
      <div className="discount-content">
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Zamknij okno zniżki"
        >
          ×
        </button>

        {!submitted && (
          <>
            <h2 id="discount-title" className="discount-h2">
              <i className="fa-solid fa-clover"></i> Odbierz 10% zniżki
            </h2>
            <p className="center-p">My nie spamujemy – przeczytaj naszą politykę prywatności.</p>
          </>
        )}

        {submitted ? (
          <p className="success-message" aria-live="polite">
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
              aria-label="Adres email do subskrypcji newslettera"
            />
            <button type="submit" className="discount-btn">
              <p className="discount-btn-p">Zapisz się</p>
            </button>
          </form>
        )}

        {error && <p className="error-message" role="alert">{error}</p>}
      </div>
    </div>
  );
};

export default DiscountBox;
