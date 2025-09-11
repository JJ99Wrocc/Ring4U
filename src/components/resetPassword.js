import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
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
            <h2 className="resset-password-h2" aria-label="Zapomniałeś hasła?">
                Zapomniałeś hasła?
            </h2>
            <input
                type="email"
                placeholder="Wpisz swój e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email użytkownika"
            />
            <button 
                onClick={handleResetPassword} 
                aria-label="Wyślij link resetujący hasło"
            >
                Wyślij link resetujący
            </button>
            {message && <p aria-live="polite">{message}</p>}
        </div>
    );
};

export default ForgotPassword;
