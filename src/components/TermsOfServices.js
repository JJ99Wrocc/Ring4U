import React from "react";
import Navbar from "./Navbar";

import '../css/index.css';
import useToggleSections from "./useToggleSections";
const TermsOfService = () => {
    useToggleSections();
  return (
    <>
      <Navbar />
      <main className="terms-container" role="main" aria-label="Regulamin sklepu Ring4U">
        <h1>Regulamin Sklepu Internetowego Ring4U</h1>

        <section aria-label="Dane Sprzedawcy">
          <h2>Dane Sprzedawcy</h2>
          <ul>
            <li>Nazwa sklepu: <strong>Ring4U</strong></li>
            <li>Imię i nazwisko właściciela: <strong>Joachim Esangbedo</strong></li>
            <li>Adres: <strong>Nowodworska 39/6, 54-433 Wrocław, Polska</strong></li>
            <li>E-mail: <a href="mailto:esangbedojoachim@gmail.com">esangbedojoachim@gmail.com</a></li>
            <li>Telefon: <strong>791881256</strong></li>
            <li>Data wejścia w życie: <strong>21 września 2025 r.</strong></li>
          </ul>
        </section>

        <section aria-label="Postanowienia ogólne">
          <h2>1. Postanowienia ogólne</h2>
          <p>Sklep internetowy <strong>Ring4U</strong> działający pod adresem <strong>ring4u.pl</strong> prowadzi sprzedaż biżuterii i akcesoriów w modelu dropshipping.  
          Niniejszy regulamin określa zasady korzystania ze sklepu, zawierania umów sprzedaży, prawa i obowiązki stron oraz zasady ochrony danych osobowych zgodnie z RODO i ustawą o świadczeniu usług drogą elektroniczną. Regulamin jest dostępny nieodpłatnie na stronie sklepu i obowiązuje wszystkich klientów sklepu.</p>
        </section>

        <section aria-label="Definicje">
          <h2>2. Definicje</h2>
          <ul>
            <li><strong>Klient</strong> – osoba fizyczna, prawna lub jednostka organizacyjna korzystająca ze sklepu.</li>
            <li><strong>Sklep</strong> – Ring4U prowadzący sprzedaż online.</li>
            <li><strong>Produkt</strong> – przedmiot oferowany do sprzedaży w sklepie.</li>
            <li><strong>Umowa sprzedaży</strong> – umowa zawarta między klientem a sklepem w drodze zamówienia złożonego online.</li>
            <li><strong>Dropshipping</strong> – model sprzedaży, w którym sklep pośredniczy w sprzedaży produktów, a realizację zamówienia wykonuje zewnętrzny dostawca/firma partnerska.</li>
          </ul>
        </section>

        <section aria-label="Oferta i produkty">
          <h2>3. Oferta i produkty</h2>
          <ul>
            <li>Sklep prezentuje produkty z podaniem cen, dostępności i zdjęć.</li>
            <li>Ceny podawane są w złotych polskich (PLN) i zawierają podatek VAT.</li>
            <li>Opis produktów i zdjęcia mają charakter informacyjny – w przypadku nieznacznych różnic rzeczywiste produkty mogą się różnić.</li>
            <li>W przypadku braku produktu w magazynie dostawcy, klient zostanie poinformowany o opóźnieniu lub możliwości anulowania zamówienia.</li>
          </ul>
        </section>

        <section aria-label="Zamówienia i zawarcie umowy">
          <h2>4. Zamówienia i zawarcie umowy</h2>
          <ul>
            <li>Zamówienia składane są poprzez formularz dostępny na stronie sklepu.</li>
            <li>Klient dokonuje wyboru produktów, podaje dane kontaktowe i adres dostawy, wybiera formę płatności i potwierdza akceptację regulaminu.</li>
            <li>Umowa sprzedaży zostaje zawarta w momencie potwierdzenia przyjęcia zamówienia przez sklep e-mailowo.</li>
          </ul>
        </section>

        <section aria-label="Płatności">
          <h2>5. Płatności</h2>
          <ul>
            <li>Sklep umożliwia płatności online poprzez operatorów zewnętrznych (PayU, Przelewy24, Stripe).</li>
            <li>Sklep nie przechowuje pełnych danych kart płatniczych.</li>
            <li>Płatność jest realizowana w chwili złożenia zamówienia, chyba że umowa stanowi inaczej.</li>
          </ul>
        </section>

        <section aria-label="Dostawa">
          <h2>6. Dostawa</h2>
          <ul>
            <li>Dostawa produktów realizowana jest przez firmy kurierskie wskazane przez dostawcę (InPost, DPD, DHL).</li>
            <li>Termin dostawy wynosi zwykle 3–10 dni roboczych, w zależności od dostępności u dostawcy dropshippingowego.</li>
            <li>Sklep przekazuje minimalne dane niezbędne do realizacji zamówienia dostawcom i kurierom zgodnie z umową powierzenia danych.</li>
          </ul>
        </section>

        <section aria-label="Reklamacje i zwroty">
          <h2>7. Reklamacje i zwroty</h2>
          <ul>
            <li>Klient ma prawo do reklamacji w przypadku niezgodności produktu z umową lub uszkodzenia w transporcie.</li>
            <li>Reklamacje należy zgłaszać e-mailowo na adres <a href="mailto:esangbedojoachim@gmail.com">esangbedojoachim@gmail.com</a> lub telefonicznie pod numer <strong>791881256</strong>.</li>
            <li>Zwroty towarów realizowane są zgodnie z ustawą o prawach konsumenta i polityką sklepu.</li>
          </ul>
        </section>

        <section aria-label="Odstąpienie od umowy">
          <h2>8. Odstąpienie od umowy</h2>
          <p>Klient będący konsumentem może odstąpić od umowy w ciągu 14 dni od otrzymania produktu.</p>
          <h3>Formularz odstąpienia od umowy:</h3>
          <form className="withdrawal-form">
            <label htmlFor="orderDate">Data zamówienia:</label>
            <input type="date" id="orderDate" name="orderDate" required />

            <label htmlFor="productName">Nazwa produktu:</label>
            <input type="text" id="productName" name="productName" required />

            <label htmlFor="orderNumber">Numer zamówienia:</label>
            <input type="text" id="orderNumber" name="orderNumber" required />

            <label htmlFor="fullName">Imię i nazwisko:</label>
            <input type="text" id="fullName" name="fullName" required />

            <label htmlFor="address">Adres:</label>
            <input type="text" id="address" name="address" required />

            <label htmlFor="signature">Podpis (opcjonalnie):</label>
            <input type="text" id="signature" name="signature" />

            <button type="submit">Wyślij formularz</button>
          </form>
        </section>

        <section aria-label="Ochrona danych osobowych">
          <h2>9. Ochrona danych osobowych i umowa powierzenia danych</h2>
          <p>Sklep przetwarza dane osobowe klientów zgodnie z RODO, ustawą o ochronie danych osobowych oraz ustawą o świadczeniu usług drogą elektroniczną.  
          Dane przekazywane są partnerom dropshippingowym wyłącznie w zakresie niezbędnym do realizacji zamówienia, na podstawie podpisanej <strong>Umowy powierzenia danych osobowych</strong>.  
          Klient ma prawo do wglądu, poprawienia oraz usunięcia swoich danych.</p>

          <h3>Zakres umowy powierzenia danych</h3>
          <ul>
            <li>Dane klientów hurtowych i indywidualnych przekazywanych dostawcom w modelu dropshipping.</li>
            <li>Obowiązki Podmiotu przetwarzającego: zabezpieczenie danych, prowadzenie rejestru upoważnionych osób, szkolenia pracowników, zgłaszanie naruszeń do Administratora w ciągu 24h.</li>
          </ul>
        </section>

        <section aria-label="Odpowiedzialność">
          <h2>10. Odpowiedzialność</h2>
          <ul>
            <li>Sklep odpowiada za realizację zamówienia zgodnie z umową i przepisami prawa.</li>
            <li>Dostawcy dropshippingowi odpowiadają za prawidłową realizację dostaw i stan produktów.</li>
            <li>Każda ze stron odpowiada za szkody wynikłe z niewłaściwego przetwarzania danych zgodnie z RODO i Kodeksem cywilnym.</li>
          </ul>
        </section>

        <section aria-label="Postanowienia końcowe">
          <h2>11. Postanowienia końcowe</h2>
          <ul>
            <li>Regulamin obowiązuje od dnia jego publikacji na stronie sklepu.</li>
            <li>Sklep zastrzega sobie prawo do zmian regulaminu w przypadku zmian przepisów, procedur lub dla bezpieczeństwa klientów.</li>
            <li>W sprawach nieuregulowanych regulaminem zastosowanie mają przepisy prawa polskiego, w szczególności RODO, ustawy o świadczeniu usług drogą elektroniczną oraz Kodeks cywilny.</li>
            <li>Spory rozstrzygane są przed sądem właściwym dla siedziby sklepu.</li>
          </ul>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default TermsOfService;
