import React, { useState, useEffect } from "react";
import "../css/contactForm.css"; // Pamiętaj o utworzeniu pliku CSS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderNumber: "",
    subject: "Pytanie o product",
    message: "",
    rodoAccepted: false,
  });

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // Efekt sterujący płynnym pojawianiem się i znikaniem toastów
  useEffect(() => {
    if (message) {
      setIsVisible(true);

      const fadeTimer = setTimeout(() => {
        setIsVisible(false);
      }, 4000);

      const clearTimer = setTimeout(() => {
        setMessage("");
      }, 4500);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(clearTimer);
      };
    }
  }, [message]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prosta walidacja adresu e-mail przed wysyłką
    if (!formData.email.includes("@")) {
      setIsSuccess(false);
      setMessage("Wprowadź poprawny adres e-mail.");
      return;
    }

    if (!formData.rodoAccepted) {
      setIsSuccess(false);
      setMessage("Musisz zaakceptować politykę prywatności.");
      return;
    }

    setLoading(true);

    try {
      // Tutaj w przyszłości dodasz integrację np. z EmailJS, Firebase czy własnym backendem
      // np. await sendEmail(formData);
      
      // Symulacja wysyłania (1 sekunda)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSuccess(true);
      setMessage("Wiadomość została wysłana! Odpowiemy najszybciej jak to możliwe.");
      
      // Czyszczenie formularza po sukcesie
      setFormData({
        name: "",
        email: "",
        orderNumber: "",
        subject: "Pytanie o produkt",
        message: "",
        rodoAccepted: false,
      });
    } catch (error) {
      setIsSuccess(false);
      setMessage("Wystąpił błąd podczas wysyłania. Spróbuj ponownie.");
    }

    setLoading(false);
  };

  return (
    <div id="contactForm" className="contact-container">
      <div className="contact-box">
        
        {/* NAGŁÓWEK */}
        <div className="contact-header">
          <h2>Napisz do nas</h2>
          <p>Masz pytania? Chętnie na nie odpowiemy. Biuro obsługi pracuje Pn-Pt w godz. 8:00 - 16:00.</p>
        </div>

        {/* FORMULARZ */}
        <form onSubmit={handleSubmit} className="contact-form">
          
          <div className="form-group">
            <label htmlFor="name">Imię *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Twoje imię"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Adres e-mail *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="np. jan.kowalski@gmail.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="orderNumber">Numer zamówienia (opcjonalnie)</label>
            <input
              type="text"
              id="orderNumber"
              name="orderNumber"
              value={formData.orderNumber}
              onChange={handleChange}
              placeholder="np. #10234"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Temat wiadomości</label>
            {/* Poprawiony tag otwierający select - usunięty ukośnik samomykający */}
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            >
              <option value="Pytanie o produkt">Pytanie o produkt</option>
              <option value="Status zamówienia">Status zamówienia</option>
              <option value="Zwroty i reklamacje">Zwroty i reklamacje</option>
              <option value="Inny temat">Inny temat</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Treść wiadomości *</label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Wpisz treść swojej wiadomości..."
            />
          </div>

          {/* CHECKBOX RODO */}
          <div className="form-checkbox">
            <input
              type="checkbox"
              id="rodoAccepted"
              name="rodoAccepted"
              required
              checked={formData.rodoAccepted}
              onChange={handleChange}
            />
            <label htmlFor="rodoAccepted">
              Zapoznałem/am się i akceptuję <a href="/polityka-prywatnosci" target="_blank" rel="noreferrer">Politykę Prywatności</a>. Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi zgłoszenia. *
            </label>
          </div>

          {/* PRZYCISK WYSYŁANIA */}
          <button type="submit" className="contact-submit-btn" disabled={loading}>
            {loading ? "Wysyłanie..." : "Wyślij wiadomość"}
          </button>

        </form>

        {/* PŁYNNY TOAST / KOMUNIKAT */}
        <p 
          className={`contact-toast ${isSuccess ? "success" : "error"} ${isVisible ? "show" : "hide"}`}
          aria-live="polite"
        >
          {message}
        </p>

      </div>
    </div>
  );
};

export default ContactForm;