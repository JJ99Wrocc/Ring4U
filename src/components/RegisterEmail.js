
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";


const RegisterEmail = () =>{
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit  = async (e) => {
        e.preventDefault();
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
      
          try {
            await sendEmailVerification(user);
            alert("Rejestracja zakończona. Sprawdź skrzynkę mailową i potwierdź adres.");
          } catch (verificationError) {
            console.error("Błąd wysyłania maila weryfikacyjnego:", verificationError);
            alert("Rejestracja zakończona, ale nie udało się wysłać maila weryfikacyjnego.");
          }
      
          navigate("/login");
        } catch (error) {
          console.error("błąd rejestracji:", error.message);
          alert("Błąd: " + error.message);
        }
      };
      

    const handleEmailChange = (e) =>{
        const email = e.target.value;
         setEmail(email);
         setIsEmailValid(validateEmail(email));
    } 
    const handlePasswordChange = (e) =>{
        const password = e.target.value
        setPassword(password)
        setIsPasswordValid(validatePassword(password))
    }
    const validatePassword = (password) =>{
        const lengthOK = password.length >= 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        return lengthOK && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
    }
    const validateEmail = (email) =>{
            if(!email || email.length > 254 || email.length < 6) return false;

            const parts = email.split("@");
            if(parts.length !== 2) return false;

            const [localPart, domain] = parts;
            if(!localPart || localPart.length > 64) return false;
            if(!domain || domain.length >254) return false;

            const localValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/;
             if (!localValid.test(localPart)) return false;

             const domainValid = /^[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;
             if (!domainValid.test(domain)) return false;

             const tld = domain.substring(domain.lastIndexOf(".") + 1);
             if (tld.length > 24) return false;

             if (email.includes("..")) return false;

             return true;
        
        }
      
    return(
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
          <div className="content">Zarejestruj się</div>
        </h2>

        <form className="ui large form" onSubmit={handleSubmit} >
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
            
              </div>
              <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={handleEmailChange}
                  value={email}
                  required            
                />
            </div>
                {!isEmailValid && (<div>
                    <p className="name-error">Wpisz poprawny adres email</p>
                </div>)}

            <div className="field" style={{ position: "relative" }}>
              <div className="ui icon input">
                <i className="lock icon"></i>
                <input
                //   type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Hasło"
                  onChange={handlePasswordChange}
                  value={password}
                  required
                />
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

            <button type="submit" className="ui fluid large teal submit button" 
            disabled={!isEmailValid || !isPasswordValid} >
              Zarejestruj się
            </button>
          </div>
        </form>

        <div className="ui message" style={{ textAlign: "center" }}>
          Masz już konto? <Link to="/login">zaloguj się</Link>  
        </div>
      </div>
    </div>
    )
}

export default RegisterEmail;   