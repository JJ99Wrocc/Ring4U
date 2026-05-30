//     import react, { useContext, useState } from 'react';
//     import { CartContext } from './CartContext';
//     import { Link } from 'react-router-dom';
//     import ProductAdded from './ProductsAdded'; // DODANO
//     import UpperFooter from './Footer';
//     // import "../css/EarRings.css";
//     import { earRings } from "./Products";
//     export const kolczykiChrzastne = [
//     { 
//     id: "8802", 
//     name: "KOLCZYKI CHWOSTY KRYSZTAŁ GOTHIC CZERWIEŃ ",
//     category: "chwosty",
//     price: "99.99 zł", 
//     url: "/product/8802",
//     image: "https://hurt.ecarla.pl/76635-large_default/kolczyki-chwosty-krysztal-gothic-czerwien-k637cze.jpg",
//     description: [
//         "Kolczyki chwosty to najnowszy trend. Pięknie wyglądają i nadają charakteru każdej stylizacji.",
//         "Pasują zarówno do eleganckich sukienek jak i żakietów czy marynarek. Połączenie kryształu z frędzlem tworzy niesamowity efekt.",
//         "Wykonane ze stopów metali nieszlachetnych. Nie zawierają niklu ani chromu.",
//         "Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
//     ],
//     specs: {
//         "Długość kolczyka": "5,5 cm",
//         "Szerokość": "2,2 cm",
//         "Model": "K637CZE"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Czerwony", 
//     availability: "W magazynie", 
//     image2: "https://hurt.ecarla.pl/76636-large_default/kolczyki-chwosty-krysztal-gothic-czerwien-k637cze.jpg"
// },
// { 
//     id: "10843", 
//     name: "KOLCZYKI FRĘDZLE ",
//     category: "chwosty",
//     price: "99.99 zł",
//     url: "/product/10843",
//     image: "https://hurt.ecarla.pl/84173-large_default/kolczyki-fredzle-k883cze.jpg",
//     description: [
//         "Ekstremalnie długie, spektakularne kolczyki chwosty w ognistym czerwonym kolorze.",
//         "Wykonane ze stopów metali nieszlachetnych. Produkt w pełni antyalergiczny – nie zawiera niklu ani chromu.",
//         "Ze względu na delikatną strukturę frędzli: Nie moczyć! Unikać bezpośredniego kontaktu z wodą!"
//     ],
//     specs: {
//         "Długość kolczyka": "16 cm",
//         "Szerokość": "4,5 cm",
//         "Model": "K883CZE"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Czerwony", 
//     availability: "W magazynie", 
//     image2: "https://hurt.ecarla.pl/84174-large_default/kolczyki-fredzle-k883cze.jpg",
//     image3: "https://hurt.ecarla.pl/84175-large_default/kolczyki-fredzle-k883cze.jpg"
// },

// { 
//     id: "9664", 
//     name: "KOLCZYKI CHWOSTY HIMALAI CZARNE ",
//     category: "chwosty",
//     price: "99.99 zł",
//     url: "/product/9664",
//     image: "https://hurt.ecarla.pl/79711-large_default/kolczyki-chwosty-himalai-czarne-k749cz.jpg",
//     description: [
//         "Kolczyki chwosty Himalai to absolutny hit modowy. Wyglądają niezwykle elegancko i stylowo.",
//         "Pasują zarówno do wieczorowych kreacji, jak i nowoczesnych zestawień z marynarkami.",
//         "Wykonane są ze stopów metali nieszlachetnych. Produkt antyalergiczny – bez niklu i chromu. Chronić przed kontaktem z wodą."
//     ],
//     specs: {
//         "Długość kolczyka": "5 cm",
//         "Szerokość": "4,5 cm",
//         "Model": "K749CZ"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Czarny", 
//     availability: "W magazynie", 
//     image2: "https://hurt.ecarla.pl/79712-large_default/kolczyki-chwosty-himalai-czarne-k749cz.jpg"
// },
// { 
//     id: "9846", 
//     name: "Kolczyki chwosty",
//     category: "chwosty",
//     price: "99.99 zł",
//     url: "/product/9846",
//     image: "https://hurt.ecarla.pl/80402-large_default/kolczyki-chwosty-k642fio.jpg",
//     description: [
//         "Długie, niezwykle efektowne kolczyki chwosty w pięknym fioletowym odcieniu.",
//         "Stanowią idealny, wyrazisty akcent do wieczorowych oraz eleganckich stylizacji.",
//         "Wykonane z metalu nieszlachetnego, całkowicie wolnego od niklu i chromu."
//     ],
//     specs: {
//         "Długość": "10 cm",
//         "Szerokość": "4 cm",
//         "Model": "K642FIO"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Fioletowy", 
//     availability: "W magazynie", 
//     image2: "https://hurt.ecarla.pl/80403-large_default/kolczyki-chwosty-k642fio.jpg"
// },
// { 
//     id: "10060", 
//     name: "KOLCZYKI CHWOSTY Z KRYSZTAŁKAMI",
//     category: "chwosty",
//     price: "99.99 zł",
//     url: "/product/10060",
//     image: "https://hurt.ecarla.pl/81234-large_default/kolczyki-chwosty-z-krysztalkami-k809.jpg",
//     description: [
//         "Stylowe kolczyki chwosty ozdobione eleganckimi, mieniącymi się kryształkami.",
//         "Idealnie pasują do wieczorowych sukienek, a także biznesowych żakietów i marynarek.",
//         "Projekt inspirowany najświeższymi trendami z wybiegów mody. Materiał antyalergiczny bez niklu i chromu."
//     ],
//     specs: {
//         "Długość": "6 cm",
//         "Szerokość": "1 cm",
//         "Model": "K809"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Czarny / Kryształowy", 
//     availability: "W magazynie", 
//     image2: "https://hurt.ecarla.pl/81235-large_default/kolczyki-chwosty-z-krysztalkami-k809.jpg"
// }, 

// { 
//     id: "10243", 
//     name: "KOLCZYKI CHWOSTY GRANATOWE",
//     category: "chwosty",
//     price: "99.99 zł",
//     url: "/product/10243",
//     image: "https://hurt.ecarla.pl/82082-large_default/kolczyki-chwosty-granatowe-k837.jpg",
//     description: [
//         "Klasyczne i eleganckie długie kolczyki chwosty w głębokim, granatowym odcieniu.",
//         "Wykonane są ze stopów metali nieszlachetnych. Całkowicie bezpieczne – nie zawierają niklu ani chromu.",
//         "Produkt delikatny. Nie moczyć! Unikać bezpośredniego kontaktu z wodą!"
//     ],
//     specs: {
//         "Długość kolczyka": "10 cm",
//         "Model": "K837"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Granatowy", 
//     availability: "W magazynie", 
//     image2: "https://hurt.ecarla.pl/82083-large_default/kolczyki-chwosty-granatowe-k837.jpg",
//     image3: "https://hurt.ecarla.pl/82084-large_default/kolczyki-chwosty-granatowe-k837.jpg",
//     image4: "https://hurt.ecarla.pl/82085-large_default/kolczyki-chwosty-granatowe-k837.jpg"
// },


// { 
//     id: "10245", 
//     name: "KOLCZYKI CHWOSTY szare frędzle, kryształ opalizujący",
//     category: "chwosty",
//     price: "99.99 zł",
//     url: "/product/10245",
//     image: "https://hurt.ecarla.pl/190922-large_default/kolczyki-chwosty-lawenda-k839.jpg",
//     description: [
//         "Wyjątkowe kolczyki chwosty z szarymi frędzlami, zwieńczone efektownym, opalizującym kryształem.",
//         "Wykonane ze stopów metali nieszlachetnych bez zawartości szkodliwego niklu i chromu.",
//         "Aby zachować ich piękny wygląd na długo, należy chronić je przed wilgocią i wodą."
//     ],
//     specs: {
//         "Długość kolczyka": "8,5 cm",
//         "Szerokość": "1,2 cm",
//         "Cechy dodatkowe": "Opalizujący kryształ",
//         "Model": "K839"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Szary / Lawendowy", 
//     availability: "W magazynie", 
//     image2: null
// },
// { 
//     id: "10262", 
//     name: "KOLCZYKI CHWOSTY SREBRNE",
//     category: "chwosty",
//     price: "99.99 zł",
//     url: "/product/10262",
//     image: "https://hurt.ecarla.pl/82133-large_default/kolczyki-chwosty-srebrne-k851s.jpg",
//     description: [
//         "Przyciągające spojrzenia, szerokie kolczyki chwosty w kolorze klasycznego srebra.",
//         "Wykonane ze stopów metali nieszlachetnych. Produkt antyalergiczny – nie zawiera niklu ani chromu.",
//         "Nie moczyć w wodzie, unikać kontaktu z perfumami i wilgocią."
//     ],
//     specs: {
//         "Długość kolczyka": "11 cm",
//         "Szerokość": "3,5 cm",
//         "Model": "K851S"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Srebrny", 
//     availability: "W magazynie", 
//     image2: "https://hurt.ecarla.pl/82134-large_default/kolczyki-chwosty-srebrne-k851s.jpg",
//     image3: "https://hurt.ecarla.pl/82135-large_default/kolczyki-chwosty-srebrne-k851s.jpg"
// },

// { 
//     id: "10263", 
//     name: "KOLCZYKI CHWOSTY ZŁOTE",
//     category: "chwosty",
//     price: "99.99 zł",
//     url: "/product/10263",
//     image: "https://hurt.ecarla.pl/82136-large_default/kolczyki-chwosty-zlote-k851z.jpg",
//     description: [
//         "Zjawiskowe i pełne blasku długie kolczyki chwosty w kolorze ponadczasowego złota.",
//         "Wykonane ze stopów metali nieszlachetnych. Biżuteria jest wolna od niklu i chromu.",
//         "Produkt delikatny – nie moczyć i unikać bezpośredniego kontaktu z wodą."
//     ],
//     specs: {
//         "Długość kolczyka": "11 cm",
//         "Szerokość": "3,5 cm",
//         "Model": "K851Z"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Złoty", 
//     availability: "W magazynie", 
//     image2: "https://hurt.ecarla.pl/82137-large_default/kolczyki-chwosty-zlote-k851z.jpg"
// },

// { 
//     id: "10610", 
//     name: "KOLCZYKI CHWOSTY CZERWONE",
//     category: "chwosty",
//     price: "99.99 zł",
//     url: "/product/10610",
//     image: "https://hurt.ecarla.pl/83304-large_default/kolczyki-chwosty-czerwone-k866cze.jpg",
//     description: [
//         "Kolczyki chwosty w intensywnym czerwonym odcieniu to absolutny must-have tego sezonu.",
//         "Są niezwykle uniwersalne – idealnie pasują do eleganckich sukienek wieczorowych, jak i casualowych żakietów.",
//         "Wykonane ze stopów metali nieszlachetnych, nie uczulają (brak niklu i chromu). Chronić przed wodą."
//     ],
//     specs: {
//         "Długość kolczyka": "9 cm",
//         "Szerokość": "1,5 cm",
//         "Model": "K866CZE"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Czerwony", 
//     availability: "W magazynie", 
//     image2: null
// },
// { 
//     id: "10615", 
//     name: "KOLCZYKI CHWOSTY RÓŻOWY",
//     category: "chwosty",
//     price: "99.99 zł",
//     url: "/product/10615",
//     image: "https://hurt.ecarla.pl/83315-large_default/kolczyki-chwosty-rozowy-k867r.jpg",
//     description: [
//         "Urocze i bardzo kobiece, szerokie kolczyki chwosty w kolorze pastelowego różu.",
//         "Wspaniale ożywią każdą stylizację, pasując zarówno do eleganckich sukienek, jak i marynarek.",
//         "Wykonane z metalu nieszlachetnego bez zawartości niklu i chromu. Unikać kontaktu z wodą!"
//     ],
//     specs: {
//         "Długość kolczyka": "5 cm",
//         "Szerokość": "4,5 cm",
//         "Model": "K867R"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Różowy", 
//     availability: "W magazynie", 
//     image2: "https://hurt.ecarla.pl/83316-large_default/kolczyki-chwosty-rozowy-k867r.jpg"
// },
// { 
//     id: "10733", 
//     name: "KOLCZYKI CHWOSTY Fuksja",
//     category: "chwosty",
//     price: "99.99 zł",
//     url: "/product/10733",
//     image: "https://hurt.ecarla.pl/83760-large_default/kolczyki-chwosty-fuksja-k867f.jpg",
//     description: [
//         "Energetyczne, szerokie kolczyki chwosty w wyrazistym, modnym odcieniu fuksji.",
//         "Idealny akcent kolorystyczny, który ożywi klasyczny żakiet, marynarkę czy prostą sukienkę.",
//         "Biżuteria w pełni antyalergiczna – nie zawiera niklu ani chromu. Unikać bezpośredniego moczenia."
//     ],
//     specs: {
//         "Długość kolczyka": "5 cm",
//         "Szerokość": "4,5 cm",
//         "Model": "K867F"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Fuksja / Różowy", 
//     availability: "W magazynie", 
//     image2: "https://hurt.ecarla.pl/83761-large_default/kolczyki-chwosty-fuksja-k867f.jpg"
// },
// { 
//     id: "11424", 
//     name: "KOLCZYKI CHWOSTY KREM",
//     category: "chwosty",
//     price: "99.99 zł",
//     url: "/product/11424",
//     image: "https://hurt.ecarla.pl/86517-large_default/kolczyki-chwosty-krem-k947k.jpg",
//     description: [
//         "Niezwykle długie, spektakularne kolczyki chwosty w subtelnym, kremowym wydaniu.",
//         "Wspaniale prezentują się w ruchu, pasując idealnie do sukienek koktajlowych, marynarek czy stylizacji boho.",
//         "Wykonane ze stopów metali nieszlachetnych (bez niklu/chromu). Chronić przed wodą i perfumami."
//     ],
//     specs: {
//         "Długość kolczyka": "16,5 cm",
//         "Szerokość": "1,8 cm",
//         "Model": "K947K"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Kremowy / Ecru", 
//     availability: "W magazynie", 
//     image2: "https://hurt.ecarla.pl/86518-large_default/kolczyki-chwosty-krem-k947k.jpg",
//     image3: "https://hurt.ecarla.pl/86519-large_default/kolczyki-chwosty-krem-k947k.jpg"
// },
// { 
//     id: "11425", 
//     name: "KOLCZYKI CHWOSTY BORDO",
//     category: "chwosty",
//     price: "99.99 zł",
//     url: "/product/11425",
//     image: "https://hurt.ecarla.pl/86520-large_default/kolczyki-chwosty-bordo-k947bor.jpg",
//     description: [
//         "Imponujące, bardzo długie kolczyki chwosty w szlachetnym odcieniu głębokiego bordowego wina.",
//         "Niezwykle modny akcent, który doda elegancji i zmysłowości wieczorowym kreacjom.",
//         "Wykonane z bezpiecznych stopów metali nieszlachetnych – nie zawierają niklu ani chromu. Nie moczyć!"
//     ],
//     specs: {
//         "Długość kolczyka": "16,5 cm",
//         "Szerokość": "1,8 cm",
//         "Model": "K947BOR"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Bordowy", 
//     availability: "W magazynie", 
//     image2: "https://hurt.ecarla.pl/86521-large_default/kolczyki-chwosty-bordo-k947bor.jpg"
// },
// { 
//     id: "11438", 
//     name: "KOLCZYKI CHWOSTY CZARNE",
//     category: "chwosty",
//     price: "99.99 zł",
//     url: "/product/11438",
//     image: "https://hurt.ecarla.pl/86547-large_default/kolczyki-chwosty-czarne-k942cz.jpg",
//     description: [
//         "Gęste, masywne i bardzo długie kolczyki chwosty w kolorze klasycznej, głębokiej czerni.",
//         "Wyrazisty design sprawia, że są idealnym wyborem do sukienek z odkrytymi ramionami oraz nowoczesnych żakietów.",
//         "Produkt hipoalergiczny (brak niklu i chromu). Dla zachowania trwałości należy unikać kontaktu z wilgocią."
//     ],
//     specs: {
//         "Długość kolczyka": "12,5 cm",
//         "Szerokość": "5,5 cm",
//         "Model": "K942CZ"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Czarny", 
//     availability: "W magazynie", 
//     image2: "https://hurt.ecarla.pl/86548-large_default/kolczyki-chwosty-czarne-k942cz.jpg"
// },
// { 
//     id: "11440", 
//     name: "KOLCZYKI CHWOSTY KREMOWE",
//     category: "chwosty",
//     price: "99.99 zł", 
//     url: "/product/11440",
//     image: "https://hurt.ecarla.pl/86551-large_default/kolczyki-chwosty-kremowe-k942k.jpg",
//     description: [
//         "Niezwykle modne, bogate kolczyki chwosty o znacznej długości w eleganckim, kremowym odcieniu.",
//         "Pięknie prezentują się na uszach, nadając unikalnego charakteru zarówno stylizacjom wieczorowym, jak i casualowym.",
//         "Wykonane ze stopów metali nieszlachetnych bez dodatku niklu i chromu. Chronić przed zamoczeniem."
//     ],
//     specs: {
//         "Długość kolczyka": "12,5 cm",
//         "Szerokość": "5,5 cm",
//         "Model": "K942K"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Kremowy", 
//     availability: "W magazynie", 
//     image2: "https://hurt.ecarla.pl/86552-large_default/kolczyki-chwosty-kremowe-k942k.jpg",
//     image3: "https://hurt.ecarla.pl/86553-large_default/kolczyki-chwosty-kremowe-k942k.jpg"
// },
// { 
//     id: "11962", 
//     name: "KOLCZYKI Chwosty",
//     category: "chwosty",
//     price: "99.99 zł", 
//     url: "/product/11962",
//     image: "https://hurt.ecarla.pl/89589-large_default/kolczyki-chwosty-k971cz.jpg",
//     description: [
//         "Oryginalne i wyraziste kolczyki chwosty łączące bogate złote elementy z klasyczną czernią.",
//         "Stanowią spektakularne wykończenie eleganckich sukienek oraz wyjściowych garniturów czy marynarek.",
//         "Biżuteria antyalergiczna, w 100% bezpieczna dla ucha – nie zawiera niklu i chromu."
//     ],
//     specs: {
//         "Długość": "8,7 cm",
//         "Średnica chwosta": "8,7 cm",
//         "Model": "K971CZ"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Złoty / Czarny", 
//     availability: "W magazynie", 
//     image2: null
// },
// { 
//     id: "11964", 
//     name: "KOLCZYKI Chwosty",
//     category: "chwosty",
//     price: "99.99 zł", 
//     url: "/product/11964",
//     image: "https://hurt.ecarla.pl/89591-large_default/kolczyki-chwosty-k971zie.jpg",
//     description: [
//         "Zachwycające kolczyki chwosty w unikalnym połączeniu złota i głębokiej, butelkowej zieleni.",
//         "Pięknie eksponują szyję i nadają wyjątkowo luksusowego charakteru każdej wyjściowej stylizacji.",
//         "Produkt całkowicie wolny od niklu oraz chromu (antyalergiczny)."
//     ],
//     specs: {
//         "Długość": "8,7 cm",
//         "Średnica chwosta": "8,7 cm",
//         "Model": "K971ZIE"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Złoty / Butelkowa zieleń", 
//     availability: "W magazynie", 
//     image2: null
// },
// { 
//     id: "11968", 
//     name: "KOLCZYKI Chwosty xxl",
//     category: "chwosty",
//     price: "99.99 zł", 
//     url: "/product/11968",
//     image: "https://hurt.ecarla.pl/89595-large_default/kolczyki-chwosty-xxl-k972pom.jpg",
//     description: [
//         "Zjawiskowe, masywne kolczyki chwosty w formacie XXL, łączące złote detale z energetycznym pomarańczem.",
//         "To idealny wybór dla kobiet kochających odważne, modowe akcenty, które przyciągają spojrzenia.",
//         "Stworzone z bezpiecznych stopów metali nieszlachetnych (brak niklu i chromu)."
//     ],
//     specs: {
//         "Długość": "9,5 cm",
//         "Średnica chwosta": "8 cm",
//         "Rozmiar": "XXL",
//         "Model": "K972POM"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Złoty / Pomarańczowy", 
//     availability: "W magazynie", 
//     image2: null
// },
// { 
//     id: "11970", 
//     name: "KOLCZYKI Chwosty xxl",
//     category: "chwosty",
//     price: "99.99 zł", 
//     url: "/product/11970",
//     image: "https://hurt.ecarla.pl/89597-large_default/kolczyki-chwosty-xxl-k972sz.jpg",
//     description: [
//         "Luksusowe i okazałe kolczyki chwosty XXL, będące kompozycją złota oraz czystej, śnieżnej bieli.",
//         "Wspaniale odświeżają look, nadając niesamowitej elegancji kreacjom weselnym czy bankietowym.",
//         "Biżuteria w pełni bezpieczna dla alergików (nie posiada niklu ani chromu)."
//     ],
//     specs: {
//         "Długość": "9,5 cm",
//         "Średnica chwosta": "8 cm",
//         "Rozmiar": "XXL",
//         "Model": "K972SZ"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Złoty / Biały", 
//     availability: "W magazynie", 
//     image2: null
// },
// { 
//     id: "12230", 
//     name: "Kolczyki chwosty bordowe",
//     category: "chwosty",
//     price: "99.99 zł",
//     url: "/product/12230",
//     image: "https://hurt.ecarla.pl/90282-large_default/kolczyki-chwosty-bordowe-k902bor.jpg",
//     description: [
//         "Szykowna i niezwykle modna odsłona klasycznych kolczyków chwostów w kolorze głębokiego bordo.",
//         "Doskonale pasują zarówno do wieczorowych kreacji, jak i biznesowych żakietów czy codziennych stylizacji.",
//         "Wykonane ze stopów metali nieszlachetnych. Produkt antyalergiczny – wolny od niklu i chromu. Nie moczyć w wodzie."
//     ],
//     specs: {
//         "Długość kolczyka": "7 cm",
//         "Szerokość": "2,5 cm",
//         "Model": "K902BOR"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Bordowy", 
//     availability: "W magazynie", 
//     image2: null
// },
// { 
//     id: "13368", 
//     name: "KOLCZYKI bursztyn wysoka jakość",
//     category: "chwosty",
//     price: "99.99 zł", 
//     url: "/product/13368",
//     image: "https://hurt.ecarla.pl/97412-large_default/kolczyki-bursztyn-wysoka-jakosc-k1147.jpg",
//     description: [
//         "Eleganckie kolczyki wiszące o klasycznym designie inspirowanym naturalnym, ciepłym pięknem bursztynu.",
//         "Doskonała propozycja na urozmaicenie zarówno wyjściowych kreacji wieczorowych, jak i codziennego, biurowego looku.",
//         "Stworzone z bezpiecznych dla skóry metali nieszlachetnych wolnych od chromu i niklu. Unikać kontaktu z wilgocią."
//     ],
//     specs: {
//         "Długość kolczyka": "5,8 cm",
//         "Szerokość": "3 cm",
//         "Model": "K1147"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Bursztynowy / Złoty", 
//     availability: "W magazynie", 
//     image2: "https://hurt.ecarla.pl/97413-large_default/kolczyki-bursztyn-wysoka-jakosc-k1147.jpg",
//     image3: "https://hurt.ecarla.pl/97414-large_default/kolczyki-bursztyn-wysoka-jakosc-k1147.jpg"
// },

// { 
//     id: "13354", 
//     name: "KOLCZYKI CHWOSTY trójkąt ŁOSIOWY",
//     category: "chwosty",
//     price: "99.99 zł", 
//     url: "/product/13354",
//     image: "https://hurt.ecarla.pl/97333-large_default/kolczyki-chwosty-trojkat-losiowy-k1154los-1.jpg",
//     description: [
//         "Niezwykle modne i efektowne kolczyki chwosty ułożone w geometryczny kształt trójkąta w unikalnym, łosiowym odcieniu beżu.",
//         "Genialnie współgrają z eleganckimi sukienkami bankietowymi, jak i z casualowymi marynarkami czy żakietami.",
//         "Wykonane ze stopów metali nieszlachetnych. Produkt w pełni hipoalergiczny – nie zawiera niklu ani chromu. Chronić przed wodą."
//     ],
//     specs: {
//         "Długość kolczyka": "8,5 cm",
//         "Szerokość": "6,5 cm",
//         "Model": "K1154los"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Łosiowy / Beżowy", 
//     availability: "W magazynie", 
//     image2: null
// },
// { 
//     id: "13884", 
//     name: "Kolczyki wiszące chwosty koła",
//     category: "chwosty",
//     price: "99.99 zł", 
//     url: "/product/13884",
//     image: "https://hurt.ecarla.pl/100253-large_default/kolczyki-wiszace-chwosty-kola-k1225r.jpg",
//     description: [
//         "Oryginalne, duże kolczyki wiszące łączące w sobie geometryczną formę kół z lekkimi, modnymi chwostami.",
//         "Wyrazisty, a zarazem niezwykle kobiecy dodatek, który pięknie ożywi wieczorową sukienkę lub casualowy outfit.",
//         "Produkt w pełni bezpieczny dla alergików – hipoalergiczna formuła nie zawiera szkodliwego niklu ani chromu."
//     ],
//     specs: {
//         "Wymiary": "8 cm x 7 cm",
//         "Fason": "Koła z chwostami",
//         "Model": "K1225R"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Różowy / Złoty", 
//     availability: "W magazynie", 
//     image2: null
// },
// { 
//     id: "14431", 
//     name: "Kolczyki wiszące chwosty",
//     category: "chwosty",
//     price: "99.99 zł", 
//     url: "/product/14431",
//     image: "https://hurt.ecarla.pl/102872-large_default/kolczyki-wiszace-chwosty-k1167zo.jpg",
//     description: [
//         "Smukłe, podłużne kolczyki wiszące wykończone gęstymi chwostami, które nadają stylizacji dynamiki i lekkości.",
//         "Fantastyczny dodatek do letnich sukienek, koktajlowych kreacji, a także jako przełamanie prostego, codziennego stroju.",
//         "Wykonane ze stopów metali nieszlachetnych o właściwościach antyalergicznych (brak niklu i chromu)."
//     ],
//     specs: {
//         "Długość": "9,5 cm",
//         "Szerokość": "2 cm",
//         "Model": "K1167ZO"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Złoty / Żółty", 
//     availability: "W magazynie", 
//     image2: "https://hurt.ecarla.pl/102873-large_default/kolczyki-wiszace-chwosty-k1167zo.jpg"
// },
//  { 
//     id: "27254",    
//     name: "KOLCZYKI Chwosty xxl",
//     category: "chwosty",
//     price: "99.99 zł", 
//     url: "/product/27254",
//     image: "https://hurt.ecarla.pl/160144-large_default/kolczyki-chwosty-xxl-k972cz.jpg",
//     description: [
//       "Kolczyki w kolorze złotym i czernią.",
//       "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
//       "Biżuteria antyalergiczna, nie zawiera niklu ani chromu."
//     ],
//     specs: {
//       "Wymiary": "Długość: 9,5 cm, Średnica: 8 cm",
//       "Materiał wykonania": "Stopy metali nieszlachetnych, tkanina (chwosty)",
//       "Model": "K972CZ" 
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Złoto-czarny", 
//     availability: "W magazynie", 
//     image2: "",
//     image3: ""
//   },
//   {
//     "id": "32142",
//     "name": "KOLCZYKI KOŁA FRĘDZLE CHWOST CZERWONE",
//     "category": "chwosty",
//     "price": "99.99 zł",
//     "url": "/product/32142",
//     "image": "https://hurt.ecarla.pl/190849-large_default/kolczyki-kola-fredzle-chwost-czerwone-k647cze.jpg",
//     "description": [
//       "Kolczyki wiszące.",
//       "Bardzo modne i efektowne.",
//       "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
//       "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
//       "Unikać kontaktu z wodą, perfumami."
//     ],
//     "specs": {
//       "WYMIARY": "Długość kolczyka: 7cm, Szerokość koła 7 cm",
//       "Materiał wykonania": "Stopy metali nieszlachetnych",
//       "Model": "K647CZE"
//     },
//     "material": "Metal nieszlachetny",
//     "color": "Czerwony",
//     "availability": "W magazynie",
//     "image2": "https://hurt.ecarla.pl/190850-large_default/kolczyki-kola-fredzle-chwost-czerwone-k647cze.jpg",
//     "image3": null
//   },
//   {
//     "id": "32143",
//     "name": "KOLCZYKI KOŁA FRĘDZLE CHWOST BORDOWE",
//     "category": "chwosty",
//     "price": "99.99 zł",
//     "url": "/product/32143",
//     "image": "https://hurt.ecarla.pl/190851-large_default/kolczyki-kola-fredzle-chwost-bordowe-k646bor.jpg",
//     "description": [
//       "Kolczyki wiszące.",
//       "Bardzo modne i efektowne.",
//       "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
//       "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
//       "Unikać kontaktu z wodą, perfumami."
//     ],
//     "specs": {
//       "WYMIARY": "Długość kolczyka: 7cm, Szerokość koła 7 cm",
//       "Materiał wykonania": "Stopy metali nieszlachetnych",
//       "Model": "K646BOR"
//     },
//     "material": "Metal nieszlachetny",
//     "color": "Bordowy",
//     "availability": "W magazynie",
//     "image2": "https://hurt.ecarla.pl/190852-large_default/kolczyki-kola-fredzle-chwost-bordowe-k646bor.jpg",
//     "image3": null
//   },
//  {
//     "id": "32160",
//     "name": "KOLCZYKI KOŁA FRĘDZLE CHWOST CZERWONE",
//     "category": "chwosty",
//     "price": "99.99 zł",
//     "url": "/product/32160",
//     "image": "https://hurt.ecarla.pl/190921-large_default/kolczyki-kola-fredzle-chwost-czerwone-k646pr.jpg",
//     "description": [
//       "Kolczyki wiszące.",
//       "Bardzo modne i efektowne.",
//       "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
//       "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
//       "Unikać kontaktu z wodą, perfumami."
//     ],
//     "specs": {
//       "WYMIARY": "Długość kolczyka: 7cm, Szerokość koła 7 cm",
//       "Materiał wykonania": "Stopy metali nieszlachetnych",
//       "Model": "K646PR"
//     },
//     "material": "Metal nieszlachetny",
//     "color": "Czerwony",
//     "availability": "W magazynie"
//   },
// { 
//     id: "9654", 
//     name: "KOLCZYKI CHWOSTY KRYSZTAŁOWA ŁZA CZERWONE",
//     category: "chwosty",
//     url: "/product/9654",
//     price: "29.99 zł", 
//     image: "https://hurt.ecarla.pl/79688-large_default/kolczyki-chwosty-krysztalowa-lza-czerwone-k746cze.jpg",
//     description: [
//         "Kolczyki chwosty to najnowszy trend. Pięknie wyglądają i świetnie komponują się z eleganckimi sukienkami, żakietami czy marynarkami.",
//         "Połączenie błyszczącego kryształu w kształcie łzy z frędzlem tworzy niezwykle efektowną całość.",
//         "Wykonane są ze stopów metali nieszlachetnych. Nie zawierają niklu ani chromu. Nie moczyć w wodzie!"
//     ],
//     specs: {
//         "Długość kolczyka": "5 cm",
//         "Szerokość": "3 cm",
//         "Model": "K746CZE"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Czerwony", 
//     availability: "W magazynie", 
//     image2: "https://hurt.ecarla.pl/79689-large_default/kolczyki-chwosty-krysztalowa-lza-czerwone-k746cze.jpg"
// },
// { 
//     id: "8804", 
//     name: "KOLCZYKI CHWOSTY KRYSZTAŁ GOTHIC CZERŃ",
//     category: "chwosty",
//     price: "99.99 zł", 
//     url: "/product/8804",
//     image: "https://hurt.ecarla.pl/76639-large_default/kolczyki-chwosty-krysztal-gothic-czern-k637cz.jpg",
//     description: [
//         "Kolczyki chwosty to najnowszy trend. Pięknie wyglądają i nadają charakteru każdej stylizacji.",
//         "Pasują zarówno do eleganckich sukienek jak i żakietów czy marynarek. Połączenie kryształu z frędzlem tworzy niesamowity efekt.",
//         "Wykonane ze stopów metali nieszlachetnych. Nie zawierają niklu ani chromu.",
//         "Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
//     ],
//     specs: {
//         "Długość kolczyka": "5,5 cm",
//         "Szerokość": "2,2 cm",
//         "Model": "K637CZ"
//     },
//     material: "Biżuteria sztuczna", 
//     color: "Czarny", 
//     availability: "W magazynie", 
//     image2: "https://hurt.ecarla.pl/76640-large_default/kolczyki-chwosty-krysztal-gothic-czern-k637cz.jpg",
//     image3: "https://hurt.ecarla.pl/79680-large_default/kolczyki-chwosty-krysztal-gothic-czern-k637cz.jpg",
//     image4: "https://hurt.ecarla.pl/79681-large_default/kolczyki-chwosty-krysztal-gothic-czern-k637cz.jpg"
// },
//     ]


//     const EarRingsChrzastnySztuczna = ({ category }) => {
    
//     console.log("Kategoria:", category);
//     console.log("Dane produktów:", kolczykiChrzastne);
//     const { addProduct } = useContext(CartContext);
//     const [visible, setVisible] = useState(false);
//     const [productToAdd, setProductToAdd] = useState(null); 

//         const filteredProducts = category 
//         ? kolczykiChrzastne.filter(p => p.category === category) 
//         : kolczykiChrzastne;

//     const handleButtonClick = (product) => {
//         addProduct(product); 
//         setProductToAdd(product);  
//         setVisible(true);  
//     };
//     if (!filteredProducts || filteredProducts.length === 0) {
//         return <div className="container">Brak produktów w tej kategorii.</div>;
//     }

//     return (
//         <section id="product-ear-rings" className="ear-v2-main-container container" role="region" aria-label="product-ear-rings">
//         {/* MODAL PO DODANIU */}
//         <ProductAdded visible={visible} setVisible={setVisible} products={productToAdd ? [productToAdd] : []} />
        
//         <h1 className="ear-v2-title">Kolczyki {category ? `- ${category}` : ''}</h1>
        
//         <div className="row ear-v2-row-grid">
//             {/* <--- 3. Tutaj zmień earRings.map na filteredProducts.map */}
//             {filteredProducts.map((product) => (
//             <article
//                 key={product.id}
//                 className="col-6 col-md-3 mb-4 ear-v2-card"
//                 role="group"
//                 aria-label={`${product.name}, cena ${product.price}`}
//             >
//                 <div className="ear-v2-image-wrapper">
//                 <img
//                     src={product.image}
//                     className="img-fluid ear-v2-img"
//                     alt={product.name}
//                     onMouseEnter={(e) => {
//                     if(product.image2) e.currentTarget.src = product.image2;
//                     }}
//                     onMouseLeave={(e) => {
//                     e.currentTarget.src = product.image;
//                     }}
//                 />
//                 <button
//                     className="ear-v2-buy-btn"
//                     onClick={() => handleButtonClick(product)}
//                     aria-label={`Dodaj ${product.name} do koszyka`}
//                 >
//                     <i className="fa-solid fa-bag-shopping fa-fw"></i>
//                 </button>
//                 </div>
                
//                 <div className="ear-v2-product-info">
//                 <h5>
//                     <Link 
//                     to={`/product/${product.id}`} 
//                     style={{ textDecoration: 'none', color: 'inherit' }}
//                     >
//                     {product.name}
//                     </Link>
//                 </h5>
//                 <p className="ear-v2-product-price">{product.price}</p>
//                 </div>
//             </article>
//             ))}
//         </div>
//         <UpperFooter />
//         </section>
//     );
//     }

//     export default EarRingsChrzastnySztuczna;