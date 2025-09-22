import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="privacy-content" role="document" aria-label="Polityka Prywatności FLOWMART">
        <h1>Polityka Prywatności – FLOWMART</h1>

        <section aria-label="Informacje podstawowe">
          <p className="strong">**Wersja:** 1.0</p>
          <p className="strong">**Data:** 10 sierpnia 2025 r.</p>
          <p className="strong">
            **Dokument zgodny z RODO (GDPR), ustawą o świadczeniu usług drogą elektroniczną, Prawem telekomunikacyjnym oraz ustawą – Prawo konsumenckie. Niniejsza polityka uwzględnia umowę powierzenia przetwarzania danych osobowych zawartą z partnerami dropshippingowymi.**
          </p>
          <hr />
        </section>

        <section aria-label="Administrator danych">
          <p className="privacy-policy-pkt">## 1) Kim jesteśmy (Administrator danych)</p>
          <ul>
            <li className="li-privacy-polcy">1. **Administrator danych (ADO):** Ring4U / Joachim Esangbedo</li>
            <li className="li-privacy-polcy">2. **Adres:** Nowodworska 39/6, 54-433, Wrocław, Polska</li>
            <li className="li-privacy-polcy">3. **E-mail kontaktowy:** <a href="mailto:privacy@flowmart.pl">esangbedojoachim@gmail.com</a></li>
            <li className="li-privacy-polcy">4. **Telefon :** 791881256</li>
            <li className="li-privacy-polcy">5. **Inspektor Ochrony Danych (IOD):** Brak powołanego IOD / dane kontaktowe, jeśli powołany</li>
          </ul>
        </section>

        <section aria-label="Definicje skrócone">
          <p className="privacy-policy-pkt">## 2) Definicje skrócone</p>
          <ul>
            <li className="li-privacy-polcy">1. **Użytkownik** – osoba korzystająca z Serwisu, której dane są przetwarzane.</li>
            <li className="li-privacy-polcy">2. **Dane osobowe** – informacje o zidentyfikowanej lub możliwej do zidentyfikowania osobie, w tym dane kontaktowe, identyfikatory konta, dane zamówień, dane techniczne oraz preferencje użytkownika.</li>
            <li className="li-privacy-polcy">3. **Przetwarzanie** – każda operacja na danych osobowych, w tym zbieranie, przechowywanie, modyfikacja, udostępnianie, anonimizacja i usuwanie danych.</li>
            <li className="li-privacy-polcy">4. **Cookies** – pliki tekstowe zapisywane w urządzeniu użytkownika w celu prawidłowego działania Serwisu, analityki oraz marketingu za zgodą użytkownika.</li>
          </ul>
        </section>

        <section aria-label="Jakie dane przetwarzamy">
          <p className="privacy-policy-pkt">## 3) Jakie dane przetwarzamy</p>
          <ul>
            <li className="li-privacy-polcy">1. Konto i logowanie: e-mail, UID, hasło, status emailVerified.</li>
            <li className="li-privacy-polcy">2. Zamówienia i obsługa klienta: imię, nazwisko, adres, e-mail, telefon, treść zamówienia, historia płatności.</li>
            <li className="li-privacy-polcy">3. Newsletter: e-mail, data i godzina zapisu, status potwierdzenia, preferencje użytkownika.</li>
            <li className="li-privacy-polcy">4. Dane techniczne i analityczne: adres IP, identyfikatory urządzenia, logi serwera, cookies.</li>
            <li className="li-privacy-polcy">5. Reklamacje, zwroty, spory.</li>
            <li className="li-privacy-polcy">6. Dane dobrowolnie przekazane w formularzach kontaktowych i wiadomościach.</li>
          </ul>
        </section>

        <section aria-label="Cele i podstawy prawne">
          <p className="privacy-policy-pkt">## 4) Cele i podstawy prawne przetwarzania</p>
          <ul>
            <li className="li-privacy-polcy">1. Rejestracja i logowanie konta – art. 6 ust. 1 lit. b i f RODO.</li>
            <li className="li-privacy-polcy">2. Realizacja zamówień i płatności – art. 6 ust. 1 lit. b i c RODO.</li>
            <li className="li-privacy-polcy">3. Wysyłka, dostawa, obsługa zwrotów i reklamacji – art. 6 ust. 1 lit. b RODO oraz umowa powierzenia przetwarzania danych z partnerami dropshippingowymi.</li>
            <li className="li-privacy-polcy">4. Kontakt i wsparcie klienta – art. 6 ust. 1 lit. f RODO.</li>
            <li className="li-privacy-polcy">5. Newsletter – art. 6 ust. 1 lit. a RODO (zgoda użytkownika).</li>
            <li className="li-privacy-polcy">6. Analityka, statystyka i bezpieczeństwo – art. 6 ust. 1 lit. f RODO.</li>
            <li className="li-privacy-polcy">7. Profilowanie rekomendacji produktowych – art. 6 ust. 1 lit. f i a RODO.</li>
            <li className="li-privacy-polcy">8. Obrona roszczeń i archiwizacja dokumentacji – art. 6 ust. 1 lit. f i c RODO.</li>
          </ul>
        </section>

        <section aria-label="Obowiązek podania danych">
          <p className="privacy-policy-pkt">## 5) Czy podanie danych jest obowiązkowe?</p>
          <p>Podanie danych jest dobrowolne, jednak konieczne do korzystania z niektórych usług Serwisu, takich jak rejestracja konta, realizacja zamówień oraz zapis do newslettera.</p>
        </section>

        <section aria-label="Odbiorcy danych">
          <p className="privacy-policy-pkt">## 6) Odbiorcy danych</p>
          <ul>
            <li className="li-privacy-polcy">1. Dostawcy IT/Chmury: Firebase, SendGrid, z którymi mamy podpisaną umowę powierzenia przetwarzania danych.</li>
            <li className="li-privacy-polcy">2. Operatorzy płatności: PayU / Przelewy24 / Stripe, na podstawie umów powierzenia przetwarzania danych.</li>
            <li className="li-privacy-polcy">3. Dostawcy / magazyny dropshipping: [nazwa], z którymi obowiązuje umowa powierzenia przetwarzania danych.</li>
            <li className="li-privacy-polcy">4. Firmy kurierskie: InPost, DPD, DHL, w zakresie niezbędnym do realizacji zamówienia.</li>
            <li className="li-privacy-polcy">5. Biuro rachunkowe, na podstawie umowy powierzenia danych.</li>
            <li className="li-privacy-polcy">6. Organy publiczne, jeżeli wymagają tego przepisy prawa.</li>
          </ul>
        </section>

        <section aria-label="Przekazywanie danych poza EOG">
          <p className="privacy-policy-pkt">## 7) Przekazywanie danych poza EOG</p>
          <ul>
            <li className="li-privacy-polcy">
              1. Google Firebase, SendGrid mogą przetwarzać dane w USA zgodnie ze standardowymi klauzulami umownymi (SCC) zatwierdzonymi przez Komisję Europejską. Szczegółowe informacje można znaleźć na stronach usługodawców.
            </li>
          </ul>
        </section>

        <section aria-label="Okresy przechowywania danych">
          <p className="privacy-policy-pkt">## 8) Okresy przechowywania danych</p>
          <ul>
            <li className="li-privacy-polcy">1. Konto: do usunięcia + 36 miesięcy.</li>
            <li className="li-privacy-polcy">2. Zamówienia i dokumentacja księgowa: 5 lat.</li>
            <li className="li-privacy-polcy">3. Newsletter: do wycofania zgody / 24 miesiące.</li>
            <li className="li-privacy-polcy">4. Dane w logach/analityce: 14–26 miesięcy.</li>
            <li className="li-privacy-polcy">5. Reklamacje / korespondencja: 36 miesięcy.</li>
          </ul>
        </section>

        <section aria-label="Prawa użytkownika">
          <p className="privacy-policy-pkt">## 9) Prawa użytkownika</p>
          <ul>
            <li className="li-privacy-polcy">
              1. Prawo dostępu, sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, sprzeciwu, wycofania zgody, złożenia skargi do organu nadzorczego (UODO). 
              Żądania można zgłaszać mailowo na adres <a href="mailto:privacy@flowmart.pl">privacy@flowmart.pl</a>. Odpowiedź zostanie udzielona w ciągu 30 dni.
            </li>
          </ul>
        </section>

        <section aria-label="Profilowanie">
          <p className="privacy-policy-pkt">## 10) Zautomatyzowane podejmowanie decyzji / profilowanie</p>
          <ul>
            <li className="li-privacy-polcy">
              1. Profilowanie rekomendacji produktów, segmentacja newslettera. Użytkownik ma prawo sprzeciwu wobec profilowania w każdej chwili.
            </li>
            <li className="li-privacy-polcy">2. Nie wywołuje skutków prawnych wobec użytkownika.</li>
          </ul>
        </section>

        <section aria-label="Bezpieczeństwo danych">
          <p className="privacy-policy-pkt">## 11) Bezpieczeństwo danych</p>
          <ul>
            <li className="li-privacy-polcy">
              1. HTTPS/TLS, kontrola dostępu i uwierzytelnianie, hasła hash, minimalizacja danych, kopie zapasowe, monitoring, umowy powierzenia z procesorami, SCC dla transferów poza EOG.
            </li>
          </ul>
        </section>

        <section aria-label="Źródło danych">
          <p className="privacy-policy-pkt">## 12) Skąd mamy Twoje dane</p>
          <ul>
            <li className="li-privacy-polcy">1. Bezpośrednio od użytkownika (formularze, zamówienia, konto).</li>
            <li className="li-privacy-polcy">2. Logowanie społecznościowe: Google, Facebook (zakres autoryzowany).</li>
          </ul>
        </section>

        <section aria-label="Marketing i newsletter">
          <p className="privacy-policy-pkt">## 13) Marketing i newsletter (double opt-in)</p>
          <ul>
            <li className="li-privacy-polcy">1. Wysyłka newslettera wyłącznie za zgodą.</li>
            <li className="li-privacy-polcy">2. Każda wiadomość zawiera link do wypisania.</li>
            <li className="li-privacy-polcy">3. Czasem wysyłane informacje o nowościach, promocjach i wydarzeniach, nigdy spam.</li>
          </ul>
        </section>

        <section aria-label="Pliki cookies">
          <p className="privacy-policy-pkt">## 14) Pliki cookies i podobne technologie</p>
          <ul>
            <li className="li-privacy-polcy">1. Niezbędne: sesja, koszyk, bezpieczeństwo.</li>
            <li className="li-privacy-polcy">2. Funkcjonalne: preferencje, „Ulubione”, ostatnio oglądane.</li>
            <li className="li-privacy-polcy">3. Analityczne: ruch, statystyki.</li>
            <li className="li-privacy-polcy">4. Marketingowe: reklamy i retargeting – tylko za zgodą.</li>
            <li className="li-privacy-polcy">5. Zarządzanie zgodami: baner cookie, ustawienia w stopce.</li>
          </ul>
        </section>

        <section aria-label="Płatności">
          <p className="privacy-policy-pkt">## 15) Płatności</p>
          <ul>
            <li className="li-privacy-polcy">1. Operatorzy zewnętrzni.</li>
            <li className="li-privacy-polcy">2. Serwis nie przechowuje pełnych danych kart.</li>
          </ul>
        </section>

        <section aria-label="Dostawa i dropshipping">
          <p className="privacy-policy-pkt">## 16) Dostawa i dropshipping</p>
          <ul>
            <li className="li-privacy-polcy">1. Dane minimalne do realizacji zamówień przekazywane dostawcom i kurierom, zgodnie z umową powierzenia przetwarzania danych.</li>
          </ul>
        </section>

        <section aria-label="Newsletter i komunikacja marketingowa">
          <p className="privacy-policy-pkt">### 17. Newsletter i komunikacja marketingowa</p>
          <ol>
            <li><strong> Dobrowolność</strong> – Zapis na newsletter FLOWMART jest całkowicie dobrowolny.</li>
            <li><strong> Brak spamu</strong> – Nie rozsyłamy spamu. Newsletter służy wyłącznie do przekazywania istotnych informacji związanych ze sklepem.</li>
            <li><strong> Częstotliwość</strong> – Newsletter wysyłany sporadycznie.</li>
            <li><strong> Rezygnacja</strong> – W każdej chwili można zrezygnować klikając link „Wypisz się”.</li>
            <li><strong> Podstawa prawna</strong> – Art. 6 ust. 1 lit. a RODO (zgoda osoby, której dane dotyczą).</li>
          </ol>
          <hr />
        </section>

        <section aria-label="Postanowienia końcowe">
          <p className="privacy-policy-pkt">### 18. Postanowienia końcowe</p>
          <ol>
            <li className="li-privacy-polcy">1. Polityka prywatności wchodzi w życie z dniem 25 sierpnia 2025 r. i obowiązuje do odwołania.</li>
            <li className="li-privacy-polcy">2. Ring4U zastrzega sobie prawo do wprowadzania zmian w niniejszej polityce w przypadku zmiany przepisów prawa, technologii, sposobu działania serwisu lub w celu lepszego zabezpieczenia danych użytkowników.</li>
            <li className="li-privacy-polcy">3. O wszelkich zmianach użytkownicy zostaną poinformowani poprzez odpowiedni komunikat na stronie głównej sklepu lub mailowo (dla subskrybentów newslettera).</li>
            <li className="li-privacy-polcy">4. W sprawach nieuregulowanych niniejszą polityką zastosowanie mają przepisy prawa powszechnie obowiązującego, w szczególności RODO oraz ustawy krajowe.</li>
          </ol>
          <hr />
        </section>

        <section aria-label="Załączniki i dokumenty uzupełniające">
          <p className="privacy-policy-pkt"># Załączniki i dokumenty uzupełniające</p>
          <ul>
            <li className="li-privacy-polcy"><strong>1. Załącznik A:</strong> Wykaz podmiotów przetwarzających dane.</li>
            <li className="li-privacy-polcy"><strong>2. Załącznik B:</strong> Wzór zgody newsletterowej (double opt‑in).</li>
            <li className="li-privacy-polcy"><strong>3. Załącznik C:</strong> Polityka plików cookies i narzędzi śledzących.</li>
          </ul>
          <hr />
          <p>
            **Kontakt w sprawie danych osobowych:** <a href="mailto:privacy@flowmart.pl">esangbedojoachim@gmail.com</a><br />
            **Data ostatniej aktualizacji:** 25 sierpnia 2025 r.
          </p>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
