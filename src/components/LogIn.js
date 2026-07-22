import React, { useState } from "react";
import { auth, googleProvider, facebookProvider } from "../Firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup 
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "../css/LogIn.css";

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

  const validatePassword = (password) => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password)
    );
  };

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    setIsEmailValid(validateEmail(val));
  };

  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    setIsPasswordValid(validatePassword(val));
  };

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

 const signInWithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, facebookProvider);

    console.log("Zalogowano Facebook:", result.user);

    navigate("/");
  } catch (error) {
    console.error(error);
    console.log("Kod błędu:", error.code);
    console.log("Treść:", error.message);

    alert(error.message);
  }
};
  return (
    <div className="login-page-wrapper">
      <div className="ui container login-card">
        <h2 className="ui header" style={{ textAlign: "center", color: "#00b5ad" }}>
          <div className="content">Zaloguj się do konta</div>
        </h2>

        <form className="ui form" onSubmit={handleSubmit}>
          <div className="field">
            <div className="ui left icon input">
              <i className="user icon"></i>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleEmailChange}
                value={email}
                className={email.length > 0 ? (isEmailValid ? "input-success" : "input-error") : ""}
              />
            </div>
            {email.length > 0 && !isEmailValid ? (
              <p className="e-mail-error">Wpisz poprawny adres e-mail</p>
            ) : (
              email.length > 0 && <div className="email-hint">np: JanKowalski@interia.pl</div>
            )}
          </div>

          <div className="field-group-horizontal">
            <div className="field" style={{ flex: 1, position: "relative", marginBottom: 0 }}>
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Hasło"
                  onChange={handlePasswordChange}
                  value={password}
                  className={password.length > 0 ? (isPasswordValid ? "input-success" : "input-error") : ""}
                />
                <i 
                  className={`${showPassword ? "eye slash" : "eye"} icon link-icon`} 
                  onClick={showPass}
                  style={{ cursor: 'pointer', pointerEvents: 'auto', right: '10px', left: 'auto' }}
                ></i>
              </div>
            </div>

            {password.length > 0 && !isPasswordValid && (
              <ul className="password-check-list">
                <li className={password.length >= 8 ? "valid" : ""}>Min. 8 znaków</li>
                <li className={/[A-Z]/.test(password) ? "valid" : ""}>Wielka litera</li>
                <li className={/[a-z]/.test(password) ? "valid" : ""}>Mała litera</li>
                <li className={/\d/.test(password) ? "valid" : ""}>Cyfra</li>
                <li className={/[!@#$%^&*(),.?":{}|<>]/.test(password) ? "valid" : ""}>Znak specjalny</li>
              </ul>
            )}
          </div>

          <button type="submit" className="ui fluid large teal submit button" style={{ marginTop: '15px' }}>
            Zaloguj
          </button>
          
          <div className="password-reset-p" onClick={() => navigate('/forgot-password')}>
            Zapomniałem hasła
          </div>
        </form>

        <div className="separator">
          <hr /> <span>lub</span> <hr />
        </div>

        <button className="social-btn google" onClick={signInWithGoogle}>
          Zaloguj się przez Google
        </button>

        <button className="social-btn facebook" onClick={signInWithFacebook}>
          Zaloguj się przez Facebook
        </button>

        <div className="ui message register-footer">
          Nie masz konta? <Link to="/registeremail">Zarejestruj się</Link> - w mgnieniu oka
        </div>
      </div>
    </div>
  );
};

export default LogIn;