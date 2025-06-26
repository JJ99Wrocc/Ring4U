import React from "react";
import { Link } from "react-router-dom";



const OrderReadMore = () => {
    return(
        <div>
            Wiem, że w każdej chwili mogę zdecydować o zaprzestaniu udostępniania moich danych osobowych, w związku z czym na 
        platformach internetowych mogą być wyświetlane losowe reklamy adidas. Rozumiem, że adidas Poland Sp. z o.o., adidas AG,
         oraz runtastic GmbH („adidas”) będą wykorzystywać podany przez mnie adres e-mail oraz wszystkie dane osobowe powiązane
        z tym adresem e-mail (dane kontaktowe oraz informacje dotyczące tożsamości, lokalizacji, rozmiaru, zachowania i profilu,
        społeczności, mediów społecznościowych, aktywności, urządzenia, preferencji, klubu adiClub) do analizy moich 
        preferencji. Udostępniam swoje dane, aby firma adidas mogła korzystać z niezależnych rozwiązań analitycznych, 
        takich jak Google Analytics i Facebook Business Manager, by porównywać moje zachowanie z profilami odwiedzających 
        zapisanymi w jej bazie danych, oraz by wybrać najlepszy czas i miejsce (na podstronie, którą przeglądam) do
        wyświetlania cyfrowych wiadomości marketingowych adidas na platformach takich jak Google, Facebook, YouTube itp.,
        oraz na innych odwiedzanych przeze mnie stronach internetowych. Wiem, że analiza mojego zachowania w Internecie
        (a w niektórych przypadkach również poza Internetem) pomaga firmie adidas zrozumieć, co lubię, a czego nie, aby
         wyświetlać mi treści lepiej dostosowane do moich potrzeb. Rozumiem również, że moja zgoda umożliwia firmie adidas
        doskonalenie strategii w zakresie przesyłania wiadomości w oparciu o moje interakcje i zaangażowanie.
         Pozwalam firmie adidas na bezpieczne udostępnianie moich danych osobowych starannie dobranym dostawcom,
         którzy mogą prowadzić działalność poza moim krajem zamieszkania. Więcej informacji na temat tych działań
         znajduje się w    
         <span style={{marginLeft: "10px"}}>
         <Link to="/privacypolicy" target="_blank" rel="noopener noreferrer">
  Informacji o polityce prywatności
</Link>
         </span>
        </div>


    )
}

export default OrderReadMore;