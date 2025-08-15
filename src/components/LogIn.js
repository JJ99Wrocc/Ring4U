import React, { useState } from "react";
import { auth, googleProvider, facebookProvider } from "../Firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const showPass = () => setShowPassword((prev) => !prev);

 
  const validateEmail = (email) => {
    if (!email || email.length > 254 || email.length < 6) return false;
    const parts = email.split("@");
    if (parts.length !== 2) return false;
    const [localPart, domain] = parts;
    if (!localPart || localPart.length > 64) return false;
    if (!domain || domain.length > 253) return false;
    const localValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/;
    if (!localValid.test(localPart)) return false;
    const domainValid = /^[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;
    if (!domainValid.test(domain)) return false;
    const tld = domain.substring(domain.lastIndexOf(".") + 1);
    if (tld.length > 24) return false;
    if (email.includes("..")) return false;
    return true;
  };

  // Walidacja hasła (Twoja oryginalna)
  const validatePassword = (password) => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password)
    );
  };

  // Obsługa zmiany input email
  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    setIsEmailValid(validateEmail(val));
  };

  // Obsługa zmiany input hasła
  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    setIsPasswordValid(validatePassword(val));
  };

  // Obsługa submitu formularza logowania email+hasło
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEmailValid || !isPasswordValid) {
      alert("Wpisz poprawne dane");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await user.reload();

        if (user.emailVerified) {
          console.log("Zalogowano:", user);
          navigate("/");
        } else {
          alert("Proszę potwierdzić adres e-mail, aby kontynuować.");
        }
      })
      .catch((error) => {
        console.error("Błąd logowania:", error.message);
        alert("Nieprawidłowy email lub hasło.");
      });
  };

  // Logowanie przez Google (popup)
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log("Zalogowano Google:", result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error("Błąd logowania Google:", error.message);
        alert("Błąd logowania Google.");
      });
  };

  // Logowanie przez Facebook (popup)
  const signInWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        console.log("Zalogowano Facebook:", result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error("Błąd logowania Facebook:", error.message);
        alert("Błąd logowania Facebook.");
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 120px)",
        width: "100%",
        padding: "20px",
      }}
    >
      <div
        className="ui container"
        style={{
          width: "30%",
          maxWidth: "450px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#fff",
        }}
      >
        <h2 className="ui teal image header" style={{ textAlign: "center" }}>
          <div className="content">Zaloguj się do konta</div>
        </h2>

        {/* Formularz email + hasło */}
        <form className="ui large form" onSubmit={handleSubmit}>
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={handleEmailChange}
                  value={email}
                  style={{
                    border:
                      !isEmailValid && email.length === 0
                        ? "2px solid grey"
                        : isEmailValid
                        ? "4px solid green"
                        : "4px solid red",
                  }}
                />
              </div>
              {!isEmailValid ? (
                <div>
                  <p className="e-mail-error" style={{ color: "red", margin: 0 }}>
                    Wpisz poprawny adres e-mail
                  </p>
                </div>
              ) : (
                <div style={{ color: "grey" }}>np: JanKowalski@interia.pl</div>
              )}
            </div>

            <div className="field" style={{ position: "relative" }}>
              <div className="ui icon input">
                <i className="lock icon"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Hasło"
                  onChange={handlePasswordChange}
                  value={password}
                  style={{
                    border:
                      !isPasswordValid && password.length === 0
                        ? "2px solid grey"
                        : isPasswordValid
                        ? "4px solid green"
                        : "4px solid red",
                  }}
                />
                <button
                  type="button"
                  className="ui icon button"
                  onClick={showPass}
                  style={{
                    position: "absolute",
                    right: "0.5em",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <i
                    className={showPassword ? "eye slash icon" : "eye icon"}
                    aria-hidden="true"
                  ></i>
                </button>
              </div>

              {!isPasswordValid && (
                <ul
                  style={{
                    marginTop: "0.5rem",
                    fontSize: "0.9rem",
                    color: "red",
                    paddingLeft: "1.2em",
                  }}
                >
                  <li style={{ color: password.length >= 8 ? "green" : "red" }}>
                    ✔ Min. 8 znaków
                  </li>
                  <li style={{ color: /[A-Z]/.test(password) ? "green" : "red" }}>
                    ✔ Co najmniej jedna wielka litera (A-Z)
                  </li>
                  <li style={{ color: /[a-z]/.test(password) ? "green" : "red" }}>
                    ✔ Co najmniej jedna mała litera (a-z)
                  </li>
                  <li style={{ color: /\d/.test(password) ? "green" : "red" }}>
                    ✔ Co najmniej jedna cyfra (0-9)
                  </li>
                  <li
                    style={{
                      color: /[!@#$%^&*(),.?":{}|<>]/.test(password)
                        ? "green"
                        : "red",
                    }}
                  >
                    ✔ Co najmniej jeden znak specjalny (!@#... itd.)
                  </li>
                </ul>
              )}
            </div>

            <button type="submit" className="ui fluid large teal submit button">
              Zaloguj
            </button>
          </div>
        </form>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <hr style={{ flex: 1, marginRight: 10, alignSelf: "center" }} />
          <span style={{ whiteSpace: "nowrap", color: "grey" }}>lub</span>
          <hr style={{ flex: 1, marginLeft: 10, alignSelf: "center" }} />
        </div>

        {/* Przycisk logowania Google */}
        <button
          onClick={signInWithGoogle}
          style={{
            width: "100%",
            backgroundColor: "#4285F4",
            color: "white",
            fontWeight: "bold",
            padding: "0.7em",
            marginBottom: "10px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Zaloguj się przez Google
        </button>

        {/* Przycisk logowania Facebook */}
        <button
          onClick={signInWithFacebook}
          style={{
            width: "100%",
            backgroundColor: "#1877F2",
            color: "white",
            fontWeight: "bold",
            padding: "0.7em",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Zaloguj się przez Facebook
        </button>

        <div className="ui message" style={{ textAlign: "center", marginTop: "1em" }}>
          Nie masz konta? <Link to="/registeremail">Zarejestruj się</Link> - w mgnieniu oka
        </div>
      </div>
    </div>
  );
};

export default LogIn;
