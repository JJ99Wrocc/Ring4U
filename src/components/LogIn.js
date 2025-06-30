import React, { useState } from "react";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();


  const showPass = () => {
    setShowPassword((prev) => !prev);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail (email)
    setIsEmailValid(validateEmail(email));
  };

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

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
    setIsPasswordValid(validatePassword(password));
  };

  const validatePassword = (password) => {
    const lengthOK = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return lengthOK && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
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
  

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 120px)",
        width: "100%",
      }}
    >
      <div
        className="ui container"
        style={{
          width: "30%",
          maxWidth: "450px",
        }}
      >
        <h2 className="ui teal image header" style={{ textAlign: "center" }}>
          <div className="content">Zaloguj się do konta</div>
        </h2>

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
                    border: !isEmailValid &&  email.length === 0 ? "2px solid grey" :
                     isEmailValid ? "4px solid green" : "4px solid red",
                  }}
                />
              </div>
              {!isEmailValid ? (
  <div>
    <p className="e-mail-error">Wpisz poprawny adres e-mail</p>
  </div>  
) : (
  <div>np: JanKowalski@interia.pl</div>
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
                  style={{
                    border: !isPasswordValid && password.length === 0 ? "2px solid grey"
                     : isPasswordValid ? "4px solid green" : "4px solid red"
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
                  <i className={showPassword ? "eye slash icon" : "eye icon"}></i>
                </button>
              </div>

              {!isPasswordValid && (
                <ul
                  style={{
                    marginTop: "0.5rem",
                    fontSize: "0.9rem",
                    color: "red",
                  }}
                >
                  <li style={{ color: password.length >= 8 ? "green" : "red" }}>
                    ✔ Min. 8 znaków
                  </li>
                  <li
                    style={{
                      color: /[A-Z]/.test(password) ? "green" : "red",
                    }}
                  >
                    ✔ Co najmniej jedna wielka litera (A-Z)
                  </li>
                  <li
                    style={{
                      color: /[a-z]/.test(password) ? "green" : "red",
                    }}
                  >
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

        <div className="ui message" style={{ textAlign: "center" }}>
          Nie masz konta? <Link to="/registeremail">Zarejestruj się</Link>  - w mgnieniu oka
        </div>
      </div>
    </div>
  );
};

export default LogIn;
