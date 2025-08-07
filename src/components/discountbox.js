import React, { useState } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { getApp } from "firebase/app";


const sendEmail = async (to, subject, htmlBody) => {
  const url = "https://script.google.com/macros/s/AKfycbwv3WPaNBn3FVbJ-M-sWTRwWgPXNIj4N7wD_vFjtpEnaqnbVsReiwQ1ASlf7KXwuwkwww/exec"; 

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ to, subject, htmlBody }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();
  if (data.status !== "success") {
    throw new Error(data.message || "Błąd wysyłki maila");
  }
};

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

      const docRef = await addDoc(collection(db, "newsletterSubscribers"), {
        email,
        createdAt: serverTimestamp(),
        confirmed: false,
      });

      const confirmLink = `https://jj99wrocc.github.io/FLOWMART/confirm?email=${encodeURIComponent(
        email
      )}&id=${docRef.id}`;

      // Wywołanie funkcji wysyłającej maila
      await sendEmail(
        email,
        "Potwierdź subskrypcję",
        `<p>Dziękujemy za zapis do newslettera!</p>
         <p>Kliknij w link, aby potwierdzić swój adres e-mail:</p>
         <a href="${confirmLink}">${confirmLink}</a>`
      );

      setSubmitted(true);
    } catch (err) {
      console.error("Błąd zapisu do Firestore lub wysyłki maila:", err);
      setError("Wystąpił błąd. Spróbuj ponownie później.");
    }
  };

  return (
    <div className="discount-box">
      <div className="discount-content">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2 className="discount-h2">
          <i className="fa-solid fa-clover"></i> Odbierz 10% zniżki
        </h2>
        <p className="center-p">
          My nie spamujemy – przeczytaj naszą politykę prywatności.
        </p>

        {submitted ? (
          <p className="success-message">
            Dziękujemy! Sprawdź swoją skrzynkę e-mail i kliknij link potwierdzający.
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
              Zapisz się
            </button>
          </form>
        )}

        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default DiscountBox;
