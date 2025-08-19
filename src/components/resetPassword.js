import React, { useState } from "react";
import{ sendPasswordResetEmail  } from "firebase/auth";
import { auth } from "../Firebase";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Sprawdź swoją skrzynkę e-mail, aby zresetować hasło.");
    } catch (error) {
      setMessage(`Błąd: ${error.message}`);
    }
  };

  return (
    <div className="password-wrapper">
      <h2 className="resset-password-h2">Zapomniałeś hasła?</h2>
      <input
        className="reset-password-input"
        type="email"
        placeholder="Wpisz swój e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="resset-password-btn" onClick={handleResetPassword}>Wyślij link resetujący</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
