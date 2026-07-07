import React from "react";

import '../css/TermsOfServices.css';
import useToggleSections from "./useToggleSections";
const TermsOfService = () => {
    useToggleSections();
  return (
    <>
 
      <main className="terms-container" role="main" aria-label="Regulamin sklepu Ring4U">
        <h1>Regulamin Sklepu Internetowego Ring4U</h1>
<section aria-label="Dane Sprzedawcy">
          <h2>Dane Sprzedawcy</h2>
          <ul>
            <li>Nazwa sklepu: <strong>Ring4U</strong></li>
            <li>Właściciel: <strong>Joachim Esangbedo</strong> prowadzący działalność gospodarczą / działalność nieewidencjonowaną zgodnie z przepisami prawa polskiego.</li>
            {/* <li>PESEL: <strong>99111209437</strong></li> */}
            <li>NIP:  <strong>8943268275</strong></li>
            <li>Adres zameldowania: <strong>ul. Na Szańcach 8/2, 50-240 Wrocław, Polska</strong></li>
            <li>Adres korespondencyjny i prowadzenia działalności: <strong>ul. Na Szańcach 8/2, 50-240 Wrocław, Polska</strong></li>
            <li>E-mail: <a href="mailto:joachimek1@interia.pl">joachimek1@interia.pl</a> (Kontakt HotPay: <a href="mailto:joachimek1@int.pl">joachimek1@interia.pl</a>)</li>
            <li>Telefon: <strong>791881256</strong></li>
            <li>Data wejścia w życie: <strong>21 września 2025 r.</strong></li>
          </ul>
        </section>

        <section aria-label="Postanowienia ogólne">
          <h2>1. Postanowienia ogólne</h2>
          <p>Sklep internetowy <strong>Ring4U</strong> działający pod adresem <strong>ring4u.pl</strong> prowadzi sprzedaż detaliczną biżuterii i akcesoriów w modelu dropshipping.  
          Niniejszy regulamin określa zasady korzystania ze sklepu, warunki składania zamówień, zawierania umów sprzedaży, prawa i obowiązki stron, procedury reklamacyjne i zwroty, a także zasady ochrony danych osobowych zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO) oraz ustawą o świadczeniu usług drogą elektroniczną. Regulamin jest dostępny nieodpłatnie i nieprzerwanie na stronie internetowej sklepu w sposób umożliwiający jego pobranie, odtwarzanie i utrwalanie, i obowiązuje wszystkich klientów sklepu.</p>
        </section>

        <section aria-label="Definicje">
          <h2>2. Definicje</h2>
          <ul>
            <li><strong>Klient</strong> – osoba fizyczna posiadająca pełną zdolność do czynności prawnych (w tym Konsument), osoba prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, korzystająca ze sklepu internetowego.</li>
            <li><strong>Konsument</strong> – osoba fizyczna dokonująca ze sprzedawcą czynności prawnej niezwiązanej bezpośrednio z jej działalnością gospodarczą lub zawodową.</li>
            <li><strong>Sklep</strong> – sklep internetowy Ring4U działający pod adresem ring4u.pl, prowadzony przez Sprzedawcę.</li>
            <li><strong>Produkt</strong> – rzecz ruchoma oferowana do sprzedaży w sklepie internetowym, będąca przedmiotem umowy sprzedaży.</li>
            <li><strong>Umowa sprzedaży</strong> – umowa sprzedaży Produktu w rozumieniu Kodeksu Cywilnego, zawierana na odległość pomiędzy Sprzedawcą a Klientem za pośrednictwem Sklepu.</li>
            <li><strong>Dropshipping</strong> – model sprzedaży, w którym Sprzedawca pośredniczy w procesie sprzedaży towarów i jest stroną umowy handlowej, natomiast wysyłka i logistyka związana z dostarczeniem Produktu realizowana jest bezpośrednio przez zewnętrznego dostawcę/firmę partnerską na rzecz Klienta.</li>
          </ul>
        </section>

        <section aria-label="Oferta i produkty">
          <h2>3. Oferta i produkty</h2>
          <ul>
            <li>Sklep prezentuje produkty z podaniem ich szczegółowych cech, specyfikacji, cen, dostępności oraz zdjęć poglądowych.</li>
            <li>Ceny podawane na stronie Sklepu są wyrażone w złotych polskich (PLN), są cenami brutto i zawierają podatek VAT w obowiązującej stawce. Ceny nie zawierają kosztów dostawy, które są wskazywane w trakcie składania zamówienia.</li>
            <li>Opis produktów i zdjęcia mają charakter informacyjny i służą prezentacji modeli biżuterii. Sprzedawca dokłada wszelkich starań, aby opisy odzwierciedlały stan faktyczny, jednak w przypadku nieznacznych różnic wynikających np. z indywidualnych ustawień monitora Klienta, rzeczywiste cechy (np. odcień koloru) mogą nieznacznie odbiegać od widocznych na ekranie.</li>
            <li>W przypadku chwilowego braku zamówionego produktu w magazynie dostawcy dropshippingowego, Klient zostanie niezwłocznie poinformowany o przewidywanym wydłużeniu czasu realizacji zamówienia lub o możliwości anulowania zamówienia i natychmiastowego zwrotu wpłaconych środków.</li>
          </ul>
        </section>

        <section aria-label="Zamówienia i zawarcie umowy">
          <h2>4. Zamówienia i zawarcie umowy</h2>
          <ul>
            <li>Zamówienia od Klientów przyjmowane są przez 24 godziny na dobę, 7 dni w tygodniu za pośrednictwem formularza zamówienia dostępnego na stronie internetowej Sklepu.</li>
            <li>W celu złożenia zamówienia Klient dokonuje wyboru produktów (dodanie do koszyka), podaje niezbędne dane kontaktowe oraz adresowe do dostawy, wybiera preferowaną formę płatności oraz potwierdza zapoznanie się i akceptację niniejszego regulaminu.</li>
            <li>Po złożeniu zamówienia Klient otrzymuje automatyczną wiadomość e-mail potwierdzającą wpływ zamówienia do Sklepu.</li>
            <li>Umowa sprzedaży zostaje skutecznie zawarta w momencie, gdy Sprzedawca prześle na adres e-mail Klienta wyraźne potwierdzenie przyjęcia zamówienia do realizacji.</li>
          </ul>
        </section>

        <section aria-label="Płatności">
          <h2>5. Płatności</h2>
        <ul>
            <li>Sklep umożliwia bezpieczne płatności online. Podmiotem świadczącym obsługę płatności online jest <strong>HotPay – ePłatności sp. z o.o. sp. k. z siedzibą w Andrychowie</strong> (oraz opcjonalnie PayU, Przelewy24, Stripe).</li>
            <li>Sprzedawca nie zbiera, nie przetwarza ani nie przechowuje pełnych danych kart płatniczych ani danych logowania do bankowości elektronicznej Klientów. Wszystkie transakcje są szyfrowane i procesowane na bezpiecznych stronach operatora płatności.</li>
            <li>Płatność przez Klienta jest realizowana w chwili złożenia zamówienia (z góry), jako warunek konieczny do przystąpienia przez Sklep do realizacji zamówienia, chyba że indywidualna umowa lub oferta stanowi inaczej.</li>
          </ul>
        </section>

        <section aria-label="Dostawa">
          <h2>6. Dostawa</h2>
          <ul>
            <li>Dostawa produktów realizowana jest na adres wskazany przez Klienta w formularzu zamówienia, za pośrednictwem profesjonalnych firm kurierskich (InPost, DPD, DHL lub innych wskazanych przez dostawcę dropshippingowego).</li>
            <li>Termin dostawy Produktu do Klienta wynosi zwykle od 3 do 10 dni roboczych, w zależności od dostępności towaru u dostawcy dropshippingowego oraz wybranego sposobu dostawy. Czas ten liczy się od dnia zaksięgowania wpłaty na rachunku Sprzedawcy.</li>
            <li>W celu prawidłowej realizacji zamówienia i doręczenia przesyłki, Sklep przekazuje dostawcom oraz firmom kurierskim wyłącznie minimalny, niezbędny zakres danych osobowych Klienta (imię, nazwisko, adres dostawy, numer telefonu, e-mail) na podstawie podpisanej umowy powierzenia lub powierzenia danych w łańcuchu dostaw.</li>
          </ul>
        </section>

        <section aria-label="Reklamacje i zwroty">
          <h2>7. Reklamacje i zwroty</h2>
          <ul>
            <li>Sprzedawca ma obowiązek dostarczyć Klientowi produkt bez wad. Sklep odpowiada przed Klientem, w tym z tytułu niezgodności produktu z umową lub za wady fizyczne i prawne (rękojmia) na zasadach określonych w Kodeksie cywilnym oraz ustawie o prawach konsumenta.</li>
            <li>Klient ma prawo do złożenia reklamacji w przypadku stwierdzenia niezgodności produktu z umową, wad technicznych lub uszkodzeń powstałych w trakcie transportu.</li>
            <li>Reklamacje należy zgłaszać e-mailowo na adres: <a href="mailto:joachimek1@interia.pl">joachimek1@interia.pl</a> lub telefonicznie pod numerem: <strong>791881256</strong>. W zgłoszeniu zaleca się podać numer zamówienia, opis wady oraz załączyć zdjęcia uszkodzeń, co przyspieszy proces rozpatrzenia.</li>
            <li>Sprzedawca zobowiązuje się do rozpatrzenia reklamacji zgłoszonej przez Konsumenta w terminie 14 dni od dnia jej otrzymania i poinformowania Klienta o podjętych krokach.</li>
          </ul>
        </section>

        <section aria-label="Odstąpienie od umowy">
          <h2>8. Odstąpienie od umowy</h2>
          <p>Klient będący Konsumentem ma prawo odstąpić od umowy sprzedaży bez podania jakiejkolwiek przyczyny w terminie 14 dni od dnia, w którym Konsument lub wskazana przez niego osoba trzecia (inna niż przewoźnik) weszła w fizyczne posiadanie Produktu. Aby zachować termin, wystarczy wysłać oświadczenie o odstąpieniu przed jego upływem.</p>
          <p>W przypadku odstąpienia od umowy, Sklep zwraca Konsumentowi wszystkie otrzymane płatności, w tym koszty dostarczenia rzeczy (z wyjątkiem dodatkowych kosztów wynikających z wybranego przez Klienta sposobu dostawy innego niż najtańszy zwykły sposób dostawy oferowany przez Sklep), niezwłocznie, a w każdym przypadku nie później niż 14 dni od dnia poinformowania o decyzji. Konsument ponosi bezpośrednie koszty zwrotu (odesłania) towaru.</p>
          <p>Zwroty produktów należy kierować na adres korespondencyjny Sprzedawcy: <strong>ul. Na Szańcach 8/2, 50-240 Wrocław, Polska</strong> (lub inny adres dedykowany do zwrotów wskazany bezpośrednio przez obsługę Sklepu).</p>
          
          <h3>Formularz odstąpienia od umowy:</h3>
          <p>(Formularz ten należy wypełnić i odesłać tylko w przypadku chęci odstąpienia od umowy)</p>
          <form className="withdrawal-form">
            <label htmlFor="orderDate">Data zamówienia / odbioru:</label>
            <input type="date" id="orderDate" name="orderDate" required />

            <label htmlFor="productName">Nazwa produktu i cena:</label>
            <input type="text" id="productName" name="productName" required />

            <label htmlFor="orderNumber">Numer zamówienia / transakcji:</label>
            <input type="text" id="orderNumber" name="orderNumber" required />

            <label htmlFor="fullName">Imię i nazwisko konsumenta:</label>
            <input type="text" id="fullName" name="fullName" required />

            <label htmlFor="address">Adres konsumenta:</label>
            <input type="text" id="address" name="address" required />

            <label htmlFor="signature">Podpis (wymagany tylko w przypadku wersji papierowej):</label>
            <input type="text" id="signature" name="signature" />

            <button type="submit">Wyślij oświadczenie</button>
          </form>
        </section>

        <section aria-label="Ochrona danych osobowych">
          <h2>9. Ochrona danych osobowych i umowa powierzenia danych</h2>
          <p>Administratorem danych osobowych Klientów jest Sprzedawca (Joachim Esangbedo). Sklep przetwarza dane osobowe zgodnie z przepisami RODO, ustawy o ochronie danych osobowych oraz ustawy o świadczeniu usług drogą elektroniczną. Podanie danych jest dobrowolne, ale niezbędne do realizacji zamówienia.</p>
          <p>Dane osobowe Klientów przekazywane są partnerom dropshippingowym oraz operatorom płatności (w tym HotPay) wyłącznie w zakresie i celu niezbędnym do prawidłowej realizacji zamówienia oraz procesowania płatności, na podstawie zawartych umów powierzenia przetwarzania danych osobowych. Klientowi przysługuje prawo dostępu do swoich danych, ich sprostowania, usunięcia ("prawo do bycia zapomnianym"), ograniczenia przetwarzania oraz prawo do wniesienia skargi do organu nadzorczego (UODO).</p>

          <h3>Zakres umowy powierzenia danych</h3>
          <ul>
            <li>Dane Klientów hurtowych oraz indywidualnych (takie jak imię, nazwisko, adres dostawy, telefon, e-mail) przekazywane są dostawcom w modelu dropshipping w celu nadania przesyłki.</li>
            <li>Obowiązki Podmiotu przetwarzającego: wdrożenie odpowiednich środków technicznych i organizacyjnych zapewniających bezpieczeństwo danych, prowadzenie rejestru osób upoważnionych do przetwarzania, regularne szkolenia pracowników oraz natychmiastowe (w ciągu maksymalnie 24h) zgłaszanie wszelkich incydentów i naruszeń ochrony danych do Administratora.</li>
          </ul>
        </section>

        <section aria-label="Odpowiedzialność">
          <h2>10. Odpowiedzialność</h2>
          <ul>
            <li>Sprzedawca ponosi pełną odpowiedzialność wobec Konsumenta za prawidłową realizację zamówienia, zgodność towaru z umową oraz dostarczenie przesyłki zgodnie z obowiązującymi przepisami prawa polskiego.</li>
            <li>Odpowiedzialność Sprzedawcy z tytułu rękojmi wobec Klientów niebędących Konsumentami (np. przedsiębiorców kupujących w celach komercyjnych) zostaje całkowicie wyłączona.</li>
            <li>Każda ze stron umowy odpowiada za szkody wynikłe z niewłaściwego lub niezgodnego z prawem przetwarzania danych osobowych na ogólnych zasadach określonych w RODO oraz Kodeksie cywilnym.</li>
          </ul>
        </section>

        <section aria-label="Postanowienia końcowe">
          <h2>11. Postanowienia końcowe</h2>
          <ul>
            <li>Regulamin wchodzi w życie z dniem jego publikacji na stronie internetowej Sklepu i stanowi integralną część zawieranej z Klientem umowy sprzedaży.</li>
            <li>Sklep zastrzega sobie prawo do wprowadzania zmian w regulaminie w przypadku zmian w przepisach prawa, zmian technologicznych lub organizacyjnych Sklepu. Do umów zawartych przed zmianą regulaminu stosuje się wersję regulaminu obowiązującą w momencie składania zamówienia przez Klienta.</li>
            <li>Konsument ma możliwość skorzystania z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń. Konsument może m.in. zwrócić się do stałego polubownego sądu konsumenckiego, miejskiego lub powiatowego rzecznika konsumentów, lub skorzystać z unijnej platformy internetowej ODR dostępnej pod adresem: <a href="http://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer">http://ec.europa.eu/consumers/odr/</a>.</li>
            <li>W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają odpowiednie przepisy prawa polskiego, w szczególności Kodeksu cywilnego, ustawy o prawach konsumenta, RODO oraz ustawy o świadczeniu usług drogą elektroniczną.</li>
            <li>Wszelkie spory wynikłe na tle realizacji umów pomiędzy Sprzedawcą a Klientem niebędącym Konsumentem będą rozstrzygane przez sąd właściwy dla aktualnego miejsca zamieszkania lub siedziby handlowej Sprzedawcy. Spory z Konsumentami rozstrzygane są przez sądy powszechne według właściwości ogólnej.</li>
          </ul>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default TermsOfService;
