import React, { useState } from "react";

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const allowedDomains = ['.pl', '.com', '.net', '.org', '.o2'];

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const domainValid = allowedDomains.some((domain) =>
      email.endsWith(domain)
    );
    return regex.test(email) && domainValid;
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    const emailIsValid = validateEmail(email);

    let valid = true;

    if (!emailIsValid) {
      setEmailError("Nieprawidłowy adres e-mail (musi zawierać np. .pl, .com itd.)");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Hasło nie może być puste");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      console.log("Email:", email);
      console.log("Hasło:", password);
    }
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
   
    if (value && passwordError) setPasswordError('');
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    if (emailError && validateEmail(value)) {
      setEmailError('');
    }
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
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                />
              </div>
              {emailError && (
                <div style={{ color: "red", marginTop: "0.5em" }}>
                  {emailError}
                </div>
              )}
            </div>

            <div className="field">
              <div className="ui icon input">
                <i className="lock icon"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Hasło"
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                />
                <button
                  type="button"
                  className="ui icon button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "0.5em",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <i
                    className={
                      showPassword ? "eye slash icon" : "eye icon"
                    }
                  ></i>
                </button>
              </div>
              
              {passwordError && (
                <div style={{ color: "red", marginTop: "0.5em" }}>
                  {passwordError}
                </div>
              )}
            </div>

            <button type="submit" className="ui fluid large teal submit button">
              Zaloguj
            </button>
          </div>
        </form>

        <div className="ui message" style={{ textAlign: "center" }}>
          Nie masz konta? <a href="/register">Zarejestruj się</a>
        </div>
      </div>
    </div>
  );
};


export default LogIn;
