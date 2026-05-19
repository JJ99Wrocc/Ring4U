import React, {useEffect}from "react";
import "../css/PrivacyPolicy.css"
import useToggleSections from "./useToggleSections";
const PrivacyPolicy = () => {
  useEffect(() => {
    // Skrypt szuka nagłówków w obu typach dokumentów
    const selectors = ".terms-container h2, .privacy-policy-pkt";
    const headers = document.querySelectorAll(selectors);

    const toggle = (e) => {
      e.currentTarget.classList.toggle("active");
    };

    headers.forEach((h) => h.addEventListener("click", toggle));
    
    // Sprzątanie po wyjściu z komponentu
    return () => {
      headers.forEach((h) => h.removeEventListener("click", toggle));
    };
  }, []);

  useToggleSections();
  return (
    <>

      <main className="privacy-content" role="document" aria-label="Polityka Prywatności Ring4U">
        <h1>Polityka Prywatności – Ring4U</h1>

        <section aria-label="Informacje podstawowe">
          <p className="strong">**Wersja:** 1.0</p>
          <p className="strong">**Data:** 25 sierpnia 2025 r.</p>
          <p className="strong">
            **Dokument zgodny z RODO (GDPR), ustawą o świadczeniu usług drogą elektroniczną, Prawem telekomunikacyjnym oraz ustawą – Prawo konsumenckie. Niniejsza polityka uwzględnia umowę powierzenia przetwarzania danych osobowych zawartą z partnerami dropshippingowymi oraz standardy bezpieczeństwa wymagane przez krajowe instytucje płatnicze.**
          </p>
          <hr />
        </section>

        <section aria-label="Administrator danych">
          <p className="privacy-policy-pkt">## 1) Kim jesteśmy (Administrator danych)</p>
          <ul>
            <li className="li-privacy-polcy">1. **Administrator danych (ADO):** Ring4U – Joachim Esangbedo, prowadzący działalność gospodarczą / działalność nieewidencjonowaną zgodnie z przepisami prawa polskiego.</li>
            {/* <li className="li-privacy-polcy">2. **Numer PESEL:** 99111209437</li> */}
            <li className="li-privacy-polcy">3. **Adres zameldowania:** ul. Na Szańcach 8/2, 50-320 Wrocław, Polska</li>
            <li className="li-privacy-polcy">4. **Adres korespondencyjny i wykonywania działalności:** ul. Na Szańcach 8/2, 50-240 Wrocław, Polska</li>
            <li className="li-privacy-polcy">5. **E-mail kontaktowy:** <a href="mailto:esangbedojoachim@gmail.com">esangbedojoachim@gmail.com</a> (Kontakt dla operatora płatności: <a href="mailto:joachimek1@int.pl">joachimek1@int.pl</a>)</li>
            <li className="li-privacy-polcy">6. **Telefon:** 791881256</li>
            <li className="li-privacy-polcy">7. **Inspektor Ochrony Danych (IOD):** Administrator nie powołał Inspektora Ochrony Danych. Wszelkie obowiązki wynikające z przepisów o ochronie danych osobowych oraz obsługę żądań użytkowników Administrator realizuje samodzielnie pod wskazanym adresem e-mail.</li>
          </ul>
        </section>

        <section aria-label="Definicje skrócone">
          <p className="privacy-policy-pkt">## 2) Definicje skrócone</p>
          <ul>
            <li className="li-privacy-polcy">1. **Użytkownik** – każda osoba fizyczna odwiedzająca Serwis lub korzystająca z jednej lub kilku usług bądź funkcjonalności opisanych w niniejszej Polityce, której dane są przetwarzane.</li>
            <li className="li-privacy-polcy">2. **Dane osobowe** – wszelkie informacje o zidentyfikowanej lub możliwej do zidentyfikowania osobie fizycznej, w tym dane kontaktowe, identyfikatory konta, dane zamówień, dane płatnicze, dane techniczne oraz preferencje użytkownika zakupowe.</li>
            <li className="li-privacy-polcy">3. **Przetwarzanie** – każda operacja lub zestaw operacji wykonywanych na danych osobowych lub zestawach danych osobowych w sposób zautomatyzowany lub niezautomatyzowany, takich jak zbieranie, utrwalanie, organizowanie, porządkowanie, przechowywanie, adaptowanie lub modyfikowanie, pobieranie, przeglądanie, udostępnianie, anonimizacja i usuwanie danych.</li>
            <li className="li-privacy-polcy">4. **Cookies** – małe pliki tekstowe zapisywane i przechowywane w urządzeniu końcowym użytkownika (np. komputerze, tablecie, smartfonie) w celu prawidłowego działania Serwisu, personalizacji usług, analityki oraz marketingu za uprzednią zgodą użytkownika.</li>
          </ul>
        </section>

        <section aria-label="Jakie dane przetwarzamy">
          <p className="privacy-policy-pkt">## 3) Jakie dane przetwarzamy</p>
          <ul>
            <li className="li-privacy-polcy">1. Konto i logowanie: adres e-mail, unikalny identyfikator użytkownika (UID), zaszyfrowane hasło (hash), status weryfikacji konta (emailVerified).</li>
            <li className="li-privacy-polcy">2. Zamówienia i obsługa klienta: imię, nazwisko, adres dostawy (ulica, numer domu/mieszkania, kod pocztowy, miejscowość, kraj), adres e-mail, numer telefonu, treść zamówienia, historia płatności oraz unikalny numer transakcji finansowej.</li>
            <li className="li-privacy-polcy">3. Newsletter: adres e-mail, dokładna data i godzina zapisu, status potwierdzenia subskrypcji (double opt-in), preferencje użytkownika.</li>
            <li className="li-privacy-polcy">4. Dane techniczne i analityczne: adres IP, typ i wersja przeglądarki internetowej, identyfikatory urządzenia, system operacyjny, logi serwera, pliki cookies oraz dane o zachowaniu użytkownika w Serwisie.</li>
            <li className="li-privacy-polcy">5. Reklamacje, zwroty, spory: dane zawarte w formularzach reklamacyjnych i oświadczeniach o odstąpieniu od umowy, numery rachunków bankowych do zwrotów środków.</li>
            <li className="li-privacy-polcy">6. Dane dobrowolnie przekazane w formularzach kontaktowych, wiadomościach e-mail oraz podczas kontaktu telefonicznego.</li>
          </ul>
        </section>

        <section aria-label="Cele i podstawy prawne">
          <p className="privacy-policy-pkt">## 4) Cele i podstawy prawne przetwarzania</p>
          <ul>
            <li className="li-privacy-polcy">1. Rejestracja, uwierzytelnianie oraz prowadzenie konta użytkownika w Serwisie – art. 6 ust. 1 lit. b RODO (wykonanie umowy o świadczenie usługi drogą elektroniczną) oraz art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes – zapewnienie bezpieczeństwa konta).</li>
            <li className="li-privacy-polcy">2. Realizacja i obsługa zamówień zakupowych oraz procesowanie płatności online – art. 6 ust. 1 lit. b RODO (niezbędność do wykonania umowy sprzedaży) oraz art. 6 ust. 1 lit. c RODO (wypełnienie obowiązku prawnego ciążącego na Administratorze, np. wystawianie dokumentów księgowych).</li>
            <li className="li-privacy-polcy">3. Wysyłka, dostawa towarów, obsługa zwrotów (odstąpień od umowy) i reklamacji – art. 6 ust. 1 lit. b RODO (realizacja umowy) oraz umowa powierzenia przetwarzania danych osobowych z partnerami logistycznymi i dropshippingowymi.</li>
            <li className="li-privacy-polcy">4. Bieżący kontakt, wsparcie techniczne i obsługa klienta – art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes Administratora polegający na budowaniu relacji z klientami i udzielaniu odpowiedzi na pytania).</li>
            <li className="li-privacy-polcy">5. Newsletter i komunikacja marketingowa – art. 6 ust. 1 lit. a RODO w związku z ustawą o świadczeniu usług drogą elektroniczną (wyraźna, dobrowolna zgoda użytkownika).</li>
            <li className="li-privacy-polcy">6. Analityka, statystyka ruchu na stronie oraz zapewnienie bezpieczeństwa teleinformatycznego Serwisu – art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes polegający na optymalizacji działania Sklepu oraz zapobieganiu oszustwom).</li>
            <li className="li-privacy-polcy">7. Profilowanie rekomendacji produktowych i dopasowanie oferty – art. 6 ust. 1 lit. f RODO (marketing bezpośredni) oraz art. 6 ust. 1 lit. a RODO (w przypadku zaawansowanych plików cookies marketingowych).</li>
            <li className="li-privacy-polcy">8. Dochodzenie roszczeń, obrona przed roszczeniami oraz archiwizacja dokumentacji na cele dowodowe – art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes Administratora) oraz art. 6 ust. 1 lit. c RODO (przepisy podatkowo-księgowe).</li>
          </ul>
        </section>

        <section aria-label="Obowiązek podania danych">
          <p className="privacy-policy-pkt">## 5) Czy podanie danych jest obowiązkowe?</p>
          <p>Podanie danych osobowych przez Użytkownika jest całkowicie dobrowolne, jednak stanowi warunek umowny niezbędny do korzystania z wybranych usług oferowanych przez Serwis. Brak podania wskazanych danych uniemożliwi m.in. rejestrację konta użytkownika, realizację zamówienia sprzedażowego (brak adresu dostawy), sprawne rozpatrzenie reklamacji lub otrzymywanie darmowego newslettera.</p>
        </section>

        <section aria-label="Odbiorcy danych">
          <p className="privacy-policy-pkt">## 6) Odbiorcy danych</p>
          <ul>
            <li className="li-privacy-polcy">1. Dostawcy usług IT/Chmurowych: Firebase (baza danych i uwierzytelnianie), SendGrid (obsługa powiadomień systemowych), z którymi zawarto oficjalne umowy powierzenia przetwarzania danych (DPA).</li>
            <li className="li-privacy-polcy">2. Krajowi i międzynarodowi operatorzy płatności: <strong>HotPay</strong> (eMerchant Sp. z o.o.) jako główny procesor transakcji (oraz opcjonalnie PayU / Przelewy24 / Stripe), w zakresie niezbędnym do autoryzacji i poprawnego rozliczenia płatności internetowej.</li>
            <li className="li-privacy-polcy">3. Dostawcy oraz zautomatyzowane magazyny dropshippingowe realizujące kompletację zamówień, z którymi obowiązuje rygorystyczna umowa powierzenia przetwarzania danych osobowych.</li>
            <li className="li-privacy-polcy">4. Licencjonowane firmy kurierskie i operatorzy pocztowi: InPost, DPD, DHL, w zakresie niezbędnym do wygenerowania etykiety logistycznej i fizycznego dostarczenia paczki do Użytkownika.</li>
            <li className="li-privacy-polcy">5. Zewnętrzne biuro rachunkowo-księgowe obsługujące finanse Administratora, na podstawie umowy powierzenia przetwarzania danych.</li>
            <li className="li-privacy-polcy">6. Uprawnione organy publiczne, urzędy skarbowe, sądy lub instytucje państwowe, jeżeli obowiązek udostępnienia danych wynika wprost z bezwzględnie obowiązujących przepisów prawa.</li>
          </ul>
        </section>

        <section aria-label="Przekazywanie danych poza EOG">
          <p className="privacy-policy-pkt">## 7) Przekazywanie danych poza EOG</p>
          <ul>
            <li className="li-privacy-polcy">
              1. Wybrani dostawcy narzędzi technicznych, tacy jak Google Firebase oraz SendGrid, mogą przechowywać lub przetwarzać niektóre dane na serwerach zlokalizowanych poza Europejskim Obszarem Gospodarczym (głównie w USA). Transfer ten odbywa się w oparciu o Standardowe Klauzule Umowne (SCC) zatwierdzone przez Komisję Europejską, zapewniające stopień ochrony danych tożsamy z regulacjami europejskimi, oraz w oparciu o program Data Privacy Framework.
            </li>
          </ul>
        </section>

        <section aria-label="Okresy przechowywania danych">
          <p className="privacy-policy-pkt">## 8) Okresy przechowywania danych</p>
          <ul>
            <li className="li-privacy-polcy">1. Konto Użytkownika: przez cały okres aktywnego korzystania z konta, aż do momentu zgłoszenia żądania jego usunięcia przez Użytkownika, a po tym czasie przez okres do 36 miesięcy w celu zabezpieczenia i obrony przed ewentualnymi roszczeniami prawnymi.</li>
            <li className="li-privacy-polcy">2. Zamówienia i powiązana dokumentacja księgowo-podatkowa: przez okres 5 lat, licząc od końca roku kalendarzowego, w którym upłynął termin płatności podatku związanego z zamówieniem (zgodnie z polskim prawem podatkowym).</li>
            <li className="li-privacy-polcy">3. Newsletter i komunikacja marketingowa: do momentu wycofania zgody przez Użytkownika (wypisania się z subskrypcji) lub maksymalnie przez okres 24 miesięcy w przypadku braku jakiejkolwiek aktywności ze strony subskrybenta.</li>
            <li className="li-privacy-polcy">4. Dane techniczne zapisane w logach serwera i narzędziach analitycznych: przez okres od 14 do 26 miesięcy, zgodnie z konfiguracją narzędzi retencyjnych.</li>
            <li className="li-privacy-polcy">5. Reklamacje, zwroty oraz bieżąca korespondencja: przez okres 36 miesięcy od ostatecznego zamknięcia sprawy w celach dowodowych i statystycznych.</li>
          </ul>
        </section>

        <section aria-label="Prawa użytkownika">
          <p className="privacy-policy-pkt">## 9) Prawa użytkownika</p>
          <ul>
            <li className="li-privacy-polcy">
              1. Każdemu Użytkownikowi przysługują pełne prawa wynikające z przepisów RODO: prawo dostępu do treści swoich danych, prawo do uzyskania ich kopii, prawo do sprostowania (poprawiania) danych, prawo do usunięcia danych ("prawo do bycia zapomnianym"), prawo do ograniczenia ich przetwarzania, prawo do przenoszenia danych do innego administratora, prawo wniesienia sprzeciwu wobec przetwarzania danych na podstawie prawnie uzasadnionego interesu, a także prawo do cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego dokonano przed jej cofnięciem. Użytkownik ma również prawo złożenia skargi do organu nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa.
              Wszelkie żądania i zapytania można zgłaszać mailowo na dedykowany adres: <a href="mailto:esangbedojoachim@gmail.com">esangbedojoachim@gmail.com</a>. Odpowiedź wraz z realizacją prawa zostanie udzielona bez zbędnej zwłoki, najpóźniej w ciągu 30 dni.
            </li>
          </ul>
        </section>

        <section aria-label="Profilowanie">
          <p className="privacy-policy-pkt">## 10) Zautomatyzowane podejmowanie decyzji / profilowanie</p>
          <ul>
            <li className="li-privacy-polcy">
              1. W celu optymalizacji oferty Serwis może stosować profilowanie polegające na zautomatyzowanej ocenie preferencji zakupowych Użytkownika, co służy wyświetlaniu spersonalizowanych rekomendacji produktów lub segmentacji bazy newsletterowej. Użytkownik posiada prawo wniesienia sprzeciwu wobec takiego profilowania w dowolnym momencie.
            </li>
            <li className="li-privacy-polcy">2. Stosowane mechanizmy profilowania nie prowadzą do zautomatyzowanego podejmowania decyzji, które wywoływałyby wobec Użytkownika jakiekolwiek skutki prawne lub w podobny sposób istotnie na niego wpływały.</li>
          </ul>
        </section>

        <section aria-label="Bezpieczeństwo danych">
          <p className="privacy-policy-pkt">## 11) Bezpieczeństwo danych</p>
          <ul>
            <li className="li-privacy-polcy">
              1. Administrator stosuje zaawansowane środki techniczne i organizacyjne gwarantujące poufność, integralność i rozliczalność przetwarzanych danych osobowych. Połączenia z Serwisem są w pełni szyfrowane za pomocą protokołu HTTPS/TLS (certyfikat SSL). Dostęp do systemów informatycznych posiadają wyłącznie osoby upoważnione. Hasła użytkowników podlegają bezpiecznemu hashowaniu, wdrożono procedury regularnych kopii zapasowych, monitoring bezpieczeństwa oraz minimalizację zbieranych danych. Wszyscy zewnętrzni procesorzy (podmioty przetwarzające) zostali zobowiązani umownie do przestrzegania tożsamych standardów ochrony danych.
            </li>
          </ul>
        </section>

        <section aria-label="Źródło danych">
          <p className="privacy-policy-pkt">## 12) Skąd mamy Twoje dane</p>
          <ul>
            <li className="li-privacy-polcy">1. Bezpośrednio od Użytkownika, który wprowadza je dobrowolnie w formularzach rejestracyjnych, formularzach zamówień oraz polach kontaktowych w Serwisie.</li>
            <li className="li-privacy-polcy">2. Za pośrednictwem zewnętrznych dostawców usług uwierzytelniających (logowanie społecznościowe, np. Google, Facebook), jeżeli Użytkownik świadomie wybierze tę formę rejestracji, wyłącznie w zakresie autoryzowanym i przekazanym przez dany system.</li>
          </ul>
        </section>

        <section aria-label="Marketing i newsletter">
          <p className="privacy-policy-pkt">## 13) Marketing i newsletter (double opt-in)</p>
          <ul>
            <li className="li-privacy-polcy">1. Wysyłka informacji handlowych i newslettera odbywa się wyłącznie po wyrażeniu przez Użytkownika jednoznacznej zgody. Wdrożono procedurę double opt-in, oznaczającą konieczność potwierdzenia zapisu poprzez kliknięcie w link weryfikacyjny wysłany na e-mail.</li>
            <li className="li-privacy-polcy">2. Każda wiadomość marketingowa zawiera unikalny, bezpośredni odnośnik umożliwiający natychmiastowe wypisanie się z subskrypcji i cofnięcie zgody.</li>
            <li className="li-privacy-polcy">3. Korespondencja obejmuje wyłącznie informacje o nowościach asortymentowych, unikalnych promocjach, kodach rabatowych i wydarzeniach organizowanych przez Sklep. Administrator kategorycznie sprzeciwia się rozsyłaniu spamu.</li>
          </ul>
        </section>

        <section aria-label="Pliki cookies">
          <p className="privacy-policy-pkt">## 14) Pliki cookies i podobne technologie</p>
          <ul>
            <li className="li-privacy-polcy">1. Niezbędne: techniczne pliki cookies umożliwiające poprawne poruszanie się po stronie, utrzymanie aktywnej sesji logowania, przechowywanie zawartości koszyka zakupowego oraz zapewnienie bezpieczeństwa.</li>
            <li className="li-privacy-polcy">2. Funkcjonalne: zapamiętujące wybrane przez Użytkownika preferencje (np. język strony, sekcję „Ulubione”, ostatnio oglądane modele biżuterii).</li>
            <li className="li-privacy-polcy">3. Analityczne: agregujące anonimowe dane o ruchu, unikalnych odwiedzinach, czasie spędzonym na podstronach, wykorzystywane do optymalizacji struktury i działania Sklepu.</li>
            <li className="li-privacy-polcy">4. Marketingowe: umożliwiające wyświetlanie dopasowanych reklam behawioralnych oraz prowadzenie kampanii retargetingowych – uruchamiane wyłącznie za uprzednią, wyraźną zgodą Użytkownika.</li>
            <li className="li-privacy-polcy">5. Zarządzanie zgodami: Użytkownik może w każdej chwili zmodyfikować lub wycofać swoje zgody na pliki cookies za pośrednictwem dedykowanego baneru cookie lub zmieniając ustawienia bezpośrednio w swojej przeglądarce internetowej.</li>
          </ul>
        </section>

        <section aria-label="Płatności">
          <p className="privacy-policy-pkt">## 15) Płatności</p>
          <ul>
            <li className="li-privacy-polcy">1. Wszystkie płatności elektroniczne realizowane są poza strukturą techniczną Serwisu za pośrednictwem certyfikowanych i w pełni licencjonowanych operatorów płatności zewnętrznych, ze szczególnym uwzględnieniem systemu <strong>HotPay</strong>.</li>
            <li className="li-privacy-polcy">2. Serwis nie zbiera, nie przetwarza ani nie przechowuje pełnych numerów kart płatniczych, kodów CVV/CVC ani haseł dostępowych do bankowości elektronicznej. Dane te są przesyłane bezpośrednio kanałem szyfrowanym na bezpieczne serwery transakcyjne operatora płatności.</li>
          </ul>
        </section>

        <section aria-label="Dostawa i dropshipping">
          <p className="privacy-policy-pkt">## 16) Dostawa i dropshipping</p>
          <ul>
            <li className="li-privacy-polcy">1. W celu sprawnej realizacji zamówienia w modelu dropshipping, minimalny zestaw danych osobowych (imię, nazwisko, pełny adres dostawy, telefon kontaktowy, e-mail) przekazywany jest do zaufanych dostawców i hurtowni partnerskich oraz powiązanych firm kurierskich wyłącznie na podstawie zawartych umów powierzenia przetwarzania danych osobowych. Podmioty te są prawnie zobowiązane do wykorzystania danych wyłącznie w celu spakowania i doręczenia paczki.</li>
          </ul>
        </section>

        <section aria-label="Newsletter i komunikacja marketingowa">
          <p className="privacy-policy-pkt">### 17. Newsletter i komunikacja marketingowa</p>
          <ol>
            <li><strong> Dobrowolność</strong> – Zapis na newsletter sklepu <strong>Ring4U</strong> jest całkowicie dobrowolny i niezależny od procesu składania standardowych zamówień.</li>
            <li><strong> Brak spamu</strong> – Nie rozsyłamy niezamówionych informacji handlowych. Newsletter służy wyłącznie do przekazywania istotnych informacji związanych bezpośrednio z działalnością i ofertą sklepu.</li>
            <li><strong> Częstotliwość</strong> – Newsletter jest wysyłany sporadycznie, z poszanowaniem prywatności Użytkownika i skrzynki odbiorczej.</li>
            <li><strong> Rezygnacja</strong> – W każdej chwili Użytkownik może zrezygnować z subskrypcji bez ponoszenia jakichkolwiek kosztów, klikając w link „Wypisz się” załączony na dole każdej wiadomości.</li>
            <li><strong> Podstawa prawna</strong> – Art. 6 ust. 1 lit. a RODO (dobrowolna zgoda osoby, której dane dotyczą).</li>
          </ol>
          <hr />
        </section>

        <section aria-label="Postanowienia końcowe">
          <p className="privacy-policy-pkt">### 18. Postanowienia końcowe</p>
          <ol>
            <li className="li-privacy-polcy">1. Niniejsza Polityka prywatności wchodzi w życie z dniem 25 sierpnia 2025 r. i obowiązuje na czas nieokreślony.</li>
            <li className="li-privacy-polcy">2. Sklep Ring4U zastrzega sobie prawo do wprowadzania zmian w niniejszej polityce w przypadku zmian w prawie powszechnym, rozwoju technologii internetowych, modyfikacji funkcjonalnych Serwisu lub w celu podnoszenia standardów ochrony danych osobowych.</li>
            <li className="li-privacy-polcy">3. O wszelkich zmianach w treści Polityki Prywatności użytkownicy zostaną poinformowani za pomocą widocznego komunikatu na stronie głównej Sklepu lub drogą mailową (w odniesieniu do zarejestrowanych subskrybentów newslettera).</li>
            <li className="li-privacy-polcy">4. W sprawach nieuregulowanych niniejszą polityką zastosowanie mają odpowiednie przepisy prawa powszechnie obowiązującego, w szczególności przepisy RODO, Kodeksu cywilnego oraz właściwych ustaw krajowych.</li>
          </ol>
          <hr />
        </section>

        <section aria-label="Załączniki i dokumenty uzupełniające">
          <p className="privacy-policy-pkt"># Załączniki i dokumenty uzupełniające</p>
          <ul>
            <li className="li-privacy-polcy"><strong>1. Załącznik A:</strong> Aktualny wykaz podmiotów przetwarzających dane (procesorów technicznych i logistycznych).</li>
            <li className="li-privacy-polcy"><strong>2. Załącznik B:</strong> Wzór oraz klauzula zgody newsletterowej (procedura double opt‑in).</li>
            <li className="li-privacy-polcy"><strong>3. Załącznik C:</strong> Szczegółowa polityka plików cookies, technologii pikselowych i narzędzi śledzących.</li>
          </ul>
          <hr />
          <p>
            **Kontakt w sprawie danych osobowych:** <a href="mailto:esangbedojoachim@gmail.com">esangbedojoachim@gmail.com</a><br />
            **Data ostatniej aktualizacji:** 25 sierpnia 2025 r.
          </p>
        </section>
              </main>
   
    </>
  );
};

export default PrivacyPolicy;
