import React from "react";
import "../css/DeliveryAndReturns.css"; 
import Footer from "./Footer";
import '../css/DeliveryAndReturns.css';

const DeliveryAndReturns = () => {
  return (
    <div className="delivery-page-container">
      
      {/* NAGŁÓWEK GŁÓWNY */}
      <header className="delivery-header">
        <h1>Czas i Koszty Dostawy oraz Zwroty</h1>
        <p>
          Transparentność to nasza podstawa. Poznaj szczegółowe procedury realizacji zamówień, logistyki dropshippingowej oraz polityki zwrotów w sklepie Ring4U.
        </p>
      </header>

      {/* SEKCJA 1: CZAS REALIZACJI */}
      <section className="delivery-section">
        <h2>1. Czas realizacji zamówienia i dostawy</h2>
        <p>
          Nasza biżuteria dostarczana jest w bezpiecznym i zoptymalizowanym modelu logistycznym (w tym bezpośrednio od wyspecjalizowanych partnerów magazynowych). Całkowity czas oczekiwania na przesyłkę składa się z dwóch głównych etapów:
        </p>
        <ul>
          <li>
            <strong>Etap I - Przetwarzanie i kompletacja (1-3 dni robocze):</strong> Obejmuje weryfikację płatności przez system <strong>HotPay</strong>, autoryzację zamówienia, bezpieczne pakowanie biżuterii oraz przygotowanie paczki do przekazania firmie kurierskiej.
          </li>
          <li>
            <strong>Etap II - Transport międzynarodowy i krajowy (3-14 dni roboczych):</strong> Ze względu na bezpośrednią współpracę z centralnymi magazynami producentów i dostawców w celu zaoferowania najniższych cen, średni czas dostawy do Polski wynosi zazwyczaj <strong>od 5 do 10 dni roboczych</strong>. W skrajnych przypadkach logistycznych (np. okresy przedświąteczne, kontrole celne) czas ten może wydłużyć się maksymalnie do 21 dni.
          </li>
        </ul>
        <p className="delivery-note">
          * Wszystkie przesyłki są rejestrowane – po nadaniu paczki otrzymasz na podany adres e-mail unikalny link do śledzenia przesyłki (Tracking Link).
        </p>
      </section>

      {/* SEKCJA 2: CENNIK I METODY */}
      <section className="delivery-section">
        <h2>2. Dostępne formy dostawy i koszty</h2>
        <p>
          Oferujemy najpopularniejsze i najbezpieczniejsze formy dostawy na terenie całej Polski:
        </p>
        
        {/* TABELA KOSZTÓW DOSTAWY */}
        <div className="table-wrapper">
          <table className="delivery-table">
            <thead>
              <tr>
                <th>Operator Logistyczny</th>
                <th>Czas transportu</th>
                <th>Koszt (Przy przedpłacie HotPay)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>InPost Paczkomaty 24/7</strong></td>
                <td>1-2 dni (od dotarcia do PL)</td>
                <td>14,99 PLN</td>
              </tr>
              <tr>
                <td><strong>Kurier DPD / DHL / InPost</strong> (Dostawa pod drzwi)</td>
                <td>1-2 dni (od dotarcia do PL)</td>
                <td>17,99 PLN</td>
              </tr>
              <tr>
                <td><strong>Darmowa Dostawa</strong> (Wszystkie metody)</td>
                <td>Zgodnie z planem</td>
                <td className="price-free">0,00 PLN (Dla zamówień od 150 PLN)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SEKCJA 3: ZWROTY */}
      <section className="delivery-section">
        <h2>3. Prawo do odstąpienia od umowy (Zwroty)</h2>
        <p>
          Kupując w Ring4U masz pełne prawo do namysłu. Zgodnie z polskim Prawem konsumenckim, możesz odstąpić od umowy kupna <strong>w ciągu 14 dni kalendarzowych</strong> od momentu fizycznego odebrania paczki, bez podawania jakiejkolwiek przyczyny.
        </p>
        <h3>Jak dokonać zwrotu krok po kroku:</h3>
        <ol>
          <li>Poinformuj nas o swojej decyzji wysyłając jednoznaczne oświadczenie na adres e-mail: <a href="mailto:joachimek1@interia.pl" className="delivery-link">joachimek1@interia.pl</a>.</li>
          <li>Zabezpiecz produkt (biżuteria nie może nosić śladów użytkowania, musi posiadać oryginalne metki/opakowanie ochronne ze względów higienicznych) i odeślij go na nasz krajowy adres korespondencyjny: <strong>ul. Na Szańcach 8/2, 50-320 Wrocław</strong>.</li>
          <li>Koszt odesłania zwracanego towaru pokrywa Kupujący. Nie przyjmujemy paczek za pobraniem ani nadanych do automatów paczkowych bez wcześniejszego uzgodnienia.</li>
          <li>Zwrot środków (obejmujący cenę produktu oraz koszt najtańszego oferowanego w sklepie sposobu dostawy podstawowej) zostanie zrealizowany niezwłocznie, nie później niż w ciągu 14 dni od otrzymania przez nas zwracanego towaru przez operatora <strong>HotPay</strong>.</li>
        </ol>
      </section>

      {/* SEKCJA 4: USZKODZENIA I REKLAMACJE */}
      <section className="delivery-section">
        <h2>4. Procedura reklamacji i uszkodzeń w transporcie</h2>
        <p>
          Każda przesyłka opuszczająca magazyn jest rygorystycznie sprawdzana. Jeśli jednak towar dotrze do Ciebie uszkodzony, wadliwy lub niezgodny z zamówieniem, przysługują Ci pełne prawa z tytułu rękojmi/niezgodności towaru z umową.
        </p>
        <ul>
          <li><strong>Szkoda w transporcie:</strong> Zalecamy sprawdzenie stanu przesyłki przy kurierze lub przy paczkomacie. W przypadku stwierdzenia zniszczenia opakowania zewnętrznego lub produktu, prosimy o sporządzenie protokołu szkody i kontakt z nami.</li>
          <li><strong>Zgłoszenie reklamacyjne:</strong> Opis wady wraz ze zdjęciami poglądowymi prześlij na e-mail: <a href="mailto:joachimek1@interia.pl" className="delivery-link">joachimek1@interia.pl</a>. Każda reklamacja rozpatrywana jest w ustawowym terminie <strong>do 14 dni</strong>.</li>
        </ul>
      </section>

      {/* FOOTER PODSTRONY */}
    <Footer />

    </div>
  );
};

export default DeliveryAndReturns;