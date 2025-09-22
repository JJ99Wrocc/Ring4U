import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getAuth, verifyPasswordResetCode, confirmPasswordReset } from "firebase/auth";

export default function PasswordReset() {
  const auth = getAuth();
  const [searchParams] = useSearchParams();
  const oobCode = searchParams.get("oobCode");

  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (oobCode) {
      verifyPasswordResetCode(auth, oobCode)
        .then(() => setMessage("Podaj nowe hasło:"))
        .catch(() => setMessage("Link jest nieprawidłowy lub wygasł."));
    }
  }, [oobCode, auth]);

  const handleReset = async () => {
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      setMessage("Hasło zostało zresetowane! Możesz się teraz zalogować.");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div>
      <h2>Resetowanie hasła</h2>
      <p>{message}</p>
      {message === "Podaj nowe hasło:" && (
        <>
          <input
            type="password"
            placeholder="Nowe hasło"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button onClick={handleReset}>Zmień hasło</button>
        </>
      )}
    </div>
  );
}
