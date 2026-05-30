import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import ProductAdded from "./ProductsAdded"; // Odkomentowałem, by modal działał
import { Link } from "react-router-dom";
import '../css/earRings.css';
import UpperFooter from "./Footer";

export const earRings = [
      { 
    id: "3809",    
    name: "KOLCZYKI GAŁĄZKI ZA UCHO K179 ZŁOTO",
    price: "29.99 zł", 
    image: "https://hurt.ecarla.pl/63904-large_default/kolczyki-galazki-za-ucho-k179-zloto.jpg",
    description: [
        "Kolczyki o kształcie gałązek wysadzanych lśniącymi kryształkami. Bardzo modne i efektowne!",
        "Kolczyki można nosić na dwa sposoby. Będą stanowić piękne uzupełnienie eleganckiej kreacji, jak i codziennego stroju.",
        "Biżuteria antyalergiczna – nie zawiera niklu ani chromu."
    ],
    specs: {
        "Wymiary": "2,5 cm x 2,8 cm",
        "Materiał wykonania": "Stopy metali nieszlachetnych",
        "Model": "K179Z" 
    },
    
    material: "Biżuteria sztuczna", 
    color: "Złoty", 
    availability: "W magazynie", 

    image2: "https://hurt.ecarla.pl/63905-large_default/kolczyki-galazki-za-ucho-k179-zloto.jpg",
   
    image3: "https://hurt.ecarla.pl/63906-large_default/kolczyki-galazki-za-ucho-k179-zloto.jpg"
},
{ 
    id: "H_34487", // Oryginalne ID z hurtowni (zostaje do zamówień!)
    name: "Kolczyki ze stali szlachetnej pozłacane 14k złotem, okrągłe kwadrat KST3653",
    price: "39.99 zł",
    image: "https://hurt.ecarla.pl/203436-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-okragle-kwadrat-kst3653.jpg",
    url: "/product/H_34487", // URL przekazuje ID do komponentu ProductDetail
    description: [
        "Kolczyki damskie ze stali szlachetnej. Eleganckie i stylowe kolczyki.",
        "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    // Zmienione ze 'specs' na 'desc', aby pasowało do Twojej tablicy produktów!
    specs: {
        "Wymiar kolczyków": "1,1cm x 1,1 cm (Kwadracik: 0,4cm x 0,4cm)",
        "Wymiar kartonika": "5,5cm x 6cm",
        "Waga": "2g netto / 4g brutto",
        "Kolor": "jasne złoto",
        "Rodzaj zapięcia": "sztyft zatrzaskowy",
        "Model": "KST3653"
    },
    material: "Stal chirurgiczna",
    color: "Jasne złoto", 
    availability: "W magazynie",
    image2: null
},
    { 
    // Główne ID z hurtowni - pod nim produkt będzie szukany w URL (/product/2278)
    id: "2278", 
    
    name: "Kolczyki wiszące złote eleganckie K1667",
    
    // TUTAJ WPISUJESZ SWOJĄ CENĘ (w XML jest cena hurtowa 4.90 zł, dajesz np. 29.99 zł)
    price: "29.99 zł", 
    
    image: "https://hurt.ecarla.pl/187773-large_default/kolczyki-wiszace-zlote-eleganckie-k1667.jpg",
     url: "/product/2278",
    // Opis podzielony na tablicę stringów, żeby ładnie renderował się w akapitach
    description: [
        "Kolczyki złote wiszące. Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
        "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
        "UWAGA: Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    
    // Dane techniczne wyciągnięte z tagu <desc> oraz <attrs> z XML
    specs: {
        "Rodzaj zapięcia": "sztyft",
        "Wymiary": "5cm x 2,5cm",
        "Wymiary kartonika": "10 cm x 8cm",
        "Waga": "6g netto / 11g brutto",
        "Model": "K1667", // Z tagu <a name="Model">
        "EAN": "5903678569273" // Z tagu <a name="EAN">
    },
    
    // Wyciągnięte z kategorii <cat>
    material: "Biżuteria sztuczna", 
    color: "Złoty", 
    
    // Ponieważ w XML jest avail="1" oraz stock="5"
    availability: "W magazynie", 
    
    image2: null // Hurtownia dała tylko jedno zdjęcie w tagu <imgs>
},
   { 
    // Główne ID z hurtowni do zamówień i routingu (/product/2419)
    id: "2419", 
    
    name: "Kolczyki Nausznica Korona Srebro K26",
    
    // TUTAJ WPISUJESZ SWOJĄ CENĘ SPRZEDAŻY (w XML hurt to 3.50 zł, dajesz np. 24.99 zł)
    price: "24.99 zł", 
    
    // Główne zdjęcie (z tagu <main>)
    image: "https://hurt.ecarla.pl/63225-large_default/kolczyki-nausznica-korona-srebro-k26.jpg",
    
    // Opis ładnie podzielony na akapity (wyczyszczony ze zleconych tekstów)
    description: [
        "Klasyczne, piękne wzornictwo kolczyków idealnie podkreśli naturalne piękno i klasę kobiety.",
        "Kolczyki zdobione szklanymi kryształkami. Bardzo efektowne!",
        "Będą stanować piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
        "Biżuteria antyalergiczna, nie zawiera niklu ani chromu."
    ],
    
    // Specyfikacja techniczna pasująca do Twojego 'ProductDetail'
    specs: {
        "Wymiary": "2,5 cm x 1 cm",
        "Model": "K26S" // Z tagu <a name="Model">
    },
    
    material: "Biżuteria sztuczna", 
    color: "Srebrny", 
    availability: "W magazynie", 
    
    // DODATKOWE ZDJĘCIE (z tagu <i>) - aktywuje efekt hover na liście produktów!
    image2: "https://hurt.ecarla.pl/63226-large_default/kolczyki-nausznica-korona-srebro-k26.jpg"
},
{ 
    id: "3810", 
    name: "KOLCZYKI GAŁĄZKI ZA UCHO K179 SREBRO",
    price: "29.99 zł", 
    image: "https://hurt.ecarla.pl/63907-large_default/kolczyki-galazki-za-ucho-k179-srebro.jpg",
    description: [
        "KOLCZYKI GAŁĄZKI ZA UCHO"
    ],
    specs: {
        "Model": "K179SR",
        "EAN": "5903678557454"
    },
    material: "Biżuteria sztuczna", 
    color: "Srebrny", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/63908-large_default/kolczyki-galazki-za-ucho-k179-srebro.jpg"
},
{ 
    id: "3999", 
    name: "KOLCZYKI STAL CHIRURGICZNA KST501",
    price: "39.99 zł", 
    image: "https://hurt.ecarla.pl/64002-large_default/kolczyki-stal-chirurgiczna-kst501.jpg",
    description: [
        "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje!",
        "Kolczyki ze stali chirurgicznej w kolorze złotym, wysadzane lśniącymi kryształkami. Bardzo efektowne!",
        "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju."
    ],
    specs: {
        "Długość sztyftu": "1,2 cm",
        "Szerokość ozdoby": "0,8 cm",
        "Model": "KST501"
    },
    material: "Stal chirurgiczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: null
},
{ 
    id: "4224", 
    name: "KOLCZYKI ZAWIJASY Z PEREŁKĄ ZŁOTO Z CZERNIĄ K517",
    price: "29.99 zł", 
    image: "https://hurt.ecarla.pl/64076-large_default/kolczyki-zawijasy-z-perelka-zloto-z-czernia-k517.jpg",
    description: [
        "Eleganckie Kolczyki zawijasy z perełką. Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
        "Biżuteria wykonana ze stopu metali nieszlachetnych. Nie są odporne na wodę."
    ],
    specs: {
        "Rodzaj zapięcia": "sztyft",
        "Średnica kolczyka": "1.6 cm",
        "Średnica perełki": "0.8 cm",
        "Model": "K517CZ"
    },
    material: "Biżuteria sztuczna", 
    color: "Złoto z czernią", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/64077-large_default/kolczyki-zawijasy-z-perelka-zloto-z-czernia-k517.jpg",
    image3: "https://hurt.ecarla.pl/64078-large_default/kolczyki-zawijasy-z-perelka-zloto-z-czernia-k517.jpg"
},
{ 
    id: "4502", 
    name: "Kolczyki z cyrkoniami wiszące K1503S",
    price: "49.99 zł", 
    image: "https://hurt.ecarla.pl/187816-large_default/kolczyki-z-cyrkoniami-wiszace-k1503s.jpg",
    description: [
        "Kolczyki będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
        "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
        "Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
        "Rodzaj zapięcia": "sztyft",
        "Wymiary": "8cm x 3cm",
        "Wymiary kartonika": "10 cm x 8cm",
        "Waga": "8g netto / 14g brutto",
        "Model": "K1503S"
    },
    material: "Biżuteria sztuczna", 
    color: "Srebrny", 
    availability: "W magazynie", 
    image2: null
},
{ 
    id: "4618", 
    name: "KOLCZYKI BLUE OPAL STONE WYSADZANE KRYSZTAŁKAMI",
    price: "49.99 zł", 
    image: "https://hurt.ecarla.pl/64690-large_default/kolczyki-blue-opal-stone-wysadzane-krysztalkami.jpg",
    description: [
        "Eleganckie kolczyki wysadzane małymi kryształkami.",
        "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
        "W naszych kolczykach każda kobieta poczuje się wyjątkowo i pięknie.",
        "Biżuteria wykonana ze stopu metali nieszlachetnych. Nie zawiera niklu ani chromu."
    ],
    specs: {
        "Długość": "5 cm",
        "Szerokość": "2,7 cm",
        "Model": "K197"
    },
    material: "Biżuteria sztuczna", 
    color: "Niebieski / Opal", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/64691-large_default/kolczyki-blue-opal-stone-wysadzane-krysztalkami.jpg",
    image3: "https://hurt.ecarla.pl/64692-large_default/kolczyki-blue-opal-stone-wysadzane-krysztalkami.jpg",
    image4: "https://hurt.ecarla.pl/64693-large_default/kolczyki-blue-opal-stone-wysadzane-krysztalkami.jpg"
},
{ 
    id: "4620", 
    name: "KOLCZYKI ŚLUBNE PERLAGE",
    price: "49.99 zł", 
    image: "https://hurt.ecarla.pl/64697-large_default/kolczyki-slubne-perlage.jpg",
    description: [
        "Kolczyki wiszące w kolorze srebrnym, wysadzane białymi kryształami.",
        "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
        "Biżuteria antyalergiczna, nie zawiera niklu ani chromu."
    ],
    specs: {
        "Długość": "4,5 cm",
        "Szerokość": "2,3 cm",
        "Model": "K198"
    },
    material: "Stal chirurgiczna", 
    color: "Srebrny", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/64698-large_default/kolczyki-slubne-perlage.jpg",
    image3: "https://hurt.ecarla.pl/64699-large_default/kolczyki-slubne-perlage.jpg"
},
{ 
    id: "4657", 
    name: "KOLCZYKI RÓŻA WIATRÓW SREBRNE",
    price: "24.99 zł", 
    image: "https://hurt.ecarla.pl/64793-large_default/kolczyki-roza-wiatrow-srebrne.jpg",
    description: [
        "Piękne, delikatne kolczyki. Bardzo modne i efektowne.",
        "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
        "Wykonane ze stopów metali nieszlachetnych. Nie są odporne na wodę.",
        "Biżuteria antyalergiczna, nie zawiera niklu ani chromu."
    ],
    specs: {
        "Średnica": "1,3 cm",
        "Model": "K204S",
        "EAN": "5903678557478"
    },
    material: "Biżuteria sztuczna", 
    color: "Srebrny", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/64794-large_default/kolczyki-roza-wiatrow-srebrne.jpg",
    image3: "https://hurt.ecarla.pl/64795-large_default/kolczyki-roza-wiatrow-srebrne.jpg",
    image4: "https://hurt.ecarla.pl/64796-large_default/kolczyki-roza-wiatrow-srebrne.jpg"
},
{ 
    id: "4658", 
    name: "KOLCZYKI RÓŻA WIATRÓW ZŁOTE",
    price: "24.99 zł", 
    image: "https://hurt.ecarla.pl/126270-large_default/kolczyki-roza-wiatrow-zlote.jpg",
    description: [
        "Piękne, delikatne kolczyki. Bardzo modne i efektowne.",
        "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
        "Wykonane ze stopów metali nieszlachetnych. Nie są odporne na wodę.",
        "Biżuteria antyalergiczna, nie zawiera niklu ani chromu."
    ],
    specs: {
        "Średnica": "1,3 cm",
        "Model": "K204",
        "EAN": "5903678557461"
    },
    material: "Biżuteria sztuczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/126271-large_default/kolczyki-roza-wiatrow-zlote.jpg"
},
{ 
    id: "4659", 
    name: "KOLCZYKI ZAWIJASKI SREBRNE DUŻE",
    price: "24.99 zł", 
    image: "https://hurt.ecarla.pl/64797-large_default/kolczyki-zawijaski-srebrne-duze.jpg",
    description: [
        "Piękne, delikatne kolczyki. Bardzo modne i efektowne.",
        "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
        "Wykonane ze stopów metali nieszlachetnych. Nie są odporne na wodę.",
        "Biżuteria antyalergiczna, nie zawiera niklu ani chromu."
    ],
    specs: {
        "Średnica": "1,7 cm",
        "Model": "K205S"
    },
    material: "Biżuteria sztuczna", 
    color: "Srebrny", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/64798-large_default/kolczyki-zawijaski-srebrne-duze.jpg",
    image3: "https://hurt.ecarla.pl/64799-large_default/kolczyki-zawijaski-srebrne-duze.jpg"
},
{ 
    id: "4715", 
    name: "KOLCZYKI SKRZYDEŁKA ZA UCHO SREBRO",
    price: "24.99 zł", 
    image: "https://hurt.ecarla.pl/64866-large_default/kolczyki-skrzydelka-za-ucho-srebro.jpg",
    description: [
        "Kolczyki w kolorze srebrnym, o kształcie delikatnych skrzydełek. Bardzo modne i efektowne!",
        "Kolczyki można nosić na dwa sposoby. Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
        "Biżuteria antyalergiczna, nie zawiera niklu ani chromu."
    ],
    specs: {
        "Wymiary": "1,9 cm x 1,7 cm",
        "Materiał wykonania": "Stopy metali nieszlachetnych",
        "Model": "K180S"
    },
    material: "Biżuteria sztuczna", 
    color: "Srebrny", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/64867-large_default/kolczyki-skrzydelka-za-ucho-srebro.jpg",
    image3: "https://hurt.ecarla.pl/64868-large_default/kolczyki-skrzydelka-za-ucho-srebro.jpg"
},
{ 
    id: "4978", 
    name: "KOLCZYKI STAL NIERDZEWNA K558 SREBRNE",
    price: "29.99 zł", 
    image: "https://hurt.ecarla.pl/65117-large_default/kolczyki-stal-nierdzewna-k558-srebrne.jpg",
    description: [
        "STAL NIERDZEWNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje.",
        "Kolczyki w kolorze srebrnym. Bardzo efektowne, idealnie podkreślą naturalne piękno.",
        "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju."
    ],
    specs: {
        "Rodzaj zapięcia": "sztyft",
        "Długość sztyftu": "ok. 1,1 cm",
        "Długość ozdoby": "ok. 0,9 cm",
        "Model": "KST558S"
    },
    material: "Stal chirurgiczna", 
    color: "Srebrny", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/65118-large_default/kolczyki-stal-nierdzewna-k558-srebrne.jpg"
},
{ 
    id: "5267-949", 
    name: "KOLCZYKI PERŁOWE ZA UCHO PIWONIE, Kolor: Różowy",
    price: "29.99 zł", 
    image: "https://hurt.ecarla.pl/65528-large_default/kolczyki-perlowe-za-ucho-piwonie.jpg",
    description: [
        "Eleganckie, perłowe kolczyki piwonie.",
        "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
        "Biżuteria wykonana ze stopu metali nieszlachetnych. Nie są odporne na wodę."
    ],
    specs: {
        "Rodzaj zapięcia": "sztyft",
        "Szerokość kwiatuszka": "1,5 cm",
        "Średnica kuleczki": "1,5 cm",
        "Model": "K249R"
    },
    material: "Biżuteria sztuczna", 
    color: "Różowy", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/65529-large_default/kolczyki-perlowe-za-ucho-piwonie.jpg",
    image3: "https://hurt.ecarla.pl/65530-large_default/kolczyki-perlowe-za-ucho-piwonie.jpg",
    image4: "https://hurt.ecarla.pl/65531-large_default/kolczyki-perlowe-za-ucho-piwonie.jpg"
},
{ 
    id: "5369", 
    name: "KOLCZYKI MODUŁOWE ŁEZKI ZŁOTE",
    price: "34.99 zł", 
    image: "https://hurt.ecarla.pl/65701-large_default/kolczyki-modulowe-lezki-zlote.jpg",
    description: [
        "Eleganckie kolczyki łezki w kolorze złota.",
        "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
        "Biżuteria wykonana ze stopu metali nieszlachetnych. Nie są odporne na wodę."
    ],
    specs: {
        "Długość całkowita": "5,4 cm",
        "Model": "k263z"
    },
    material: "Biżuteria sztuczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/65702-large_default/kolczyki-modulowe-lezki-zlote.jpg",
    image3: "https://hurt.ecarla.pl/65703-large_default/kolczyki-modulowe-lezki-zlote.jpg",
    image4: "https://hurt.ecarla.pl/65704-large_default/kolczyki-modulowe-lezki-zlote.jpg"
},
{ 
    id: "5479", 
    name: "KOLCZYKI WISZĄCE LISTKI",
    price: "29.99 zł", 
    image: "https://hurt.ecarla.pl/66061-large_default/kolczyki-wiszace-listki.jpg",
    description: [
        "Piękne, wiszące kolczyki w kształcie listków. Nadadzą charakteru każdej stylizacji!",
        "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju. Idealny dodatek dla każdej kobiety!",
        "Biżuteria wykonana ze stopu metali nieszlachetnych. Nie są odporne na wodę."
    ],
    specs: {
        "Rodzaj zapięcia": "bigiel",
        "Długość (maksymalna)": "5,7 cm",
        "Szerokość (w najszerszym miejscu)": "1,1 cm",
        "Model": "K279"
    },
    material: "Biżuteria sztuczna", 
    color: "Srebrny/Złoty", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/66062-large_default/kolczyki-wiszace-listki.jpg",
    image3: "https://hurt.ecarla.pl/66063-large_default/kolczyki-wiszace-listki.jpg"
},
{ 
    id: "5582", 
    name: "Kolczyki z cyrkoniami, kryształowe serce K702",
    price: "49.99 zł", 
    image: "https://hurt.ecarla.pl/199812-large_default/kolczyki-z-cyrkoniami-krysztalowe-serce-k702.jpg",
    description: [
        "Kolczyki będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
        "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
        "Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
        "Rodzaj zapięcia": "sztyft",
        "Wymiary": "2cm x 1,8cm",
        "Wymiary kartonika": "10 cm x 8cm",
        "Waga": "3g netto / 8g brutto",
        "Model": "K702"
    },
    material: "Biżuteria sztuczna", 
    color: "Kryształowy", 
    availability: "W magazynie", 
    image2: null
},
{ 
    id: "6012", 
    name: "KOLCZYKI STAL CHIRURGICZNA KST618",
    price: "24.99 zł", 
    image: "https://hurt.ecarla.pl/67291-large_default/kolczyki-stal-chirurgiczna-kst618.jpg",
    description: [
        "Eleganckie i subtelne kolczyki damskie wykonane z wysokiej jakości stali.",
        "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
        "Wysokość": "0,7 cm",
        "Szerokość": "ok. 0,8 cm",
        "Model": "KST618"
    },
    material: "Stal chirurgiczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/67292-large_default/kolczyki-stal-chirurgiczna-kst618.jpg"
},
{ 
    id: "8786", 
    name: "KOLCZYKI KOŁA POMPON CZERWIEŃ WINNA K632W",
    price: "29.99 zł", 
    image: "https://hurt.ecarla.pl/76602-large_default/kolczyki-kola-pompon-czerwien-winna-k632w.jpg",
    description: [
        "Efektowne kolczyki koła z miękkimi pomponami.",
        "Wykonane są ze stopów metali nieszlachetnych. Nie zawierają niklu ani chromu.",
        "Nie moczyć! Unikać kontaktu z wodą!"
    ],
    specs: {
        "Długość kolczyka": "7,5 cm",
        "Szerokość koła": "5 cm",
        "Szerokość pompona": "4 cm",
        "Kolor koła": "Złoty",
        "Model": "K632W"
    },
    material: "Biżuteria sztuczna", 
    color: "Czerwień winna", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/76603-large_default/kolczyki-kola-pompon-czerwien-winna-k632w.jpg",
    image3: "https://hurt.ecarla.pl/76604-large_default/kolczyki-kola-pompon-czerwien-winna-k632w.jpg",
    image4: "https://hurt.ecarla.pl/79725-large_default/kolczyki-kola-pompon-czerwien-winna-k632w.jpg"
},
{ 
    id: "8787", 
    name: "KOLCZYKI KOŁA POMPON BEŻOWE K632BEZ",
    price: "29.99 zł", 
    image: "https://hurt.ecarla.pl/76605-large_default/kolczyki-kola-pompon-bezowe-k632bez.jpg",
    description: [
        "Efektowne kolczyki koła z miękkimi pomponami.",
        "Wykonane są ze stopów metali nieszlachetnych. Nie zawierają niklu ani chromu.",
        "Nie moczyć! Unikać kontaktu z wodą!"
    ],
    specs: {
        "Długość kolczyka": "7,5 cm",
        "Szerokość koła": "5 cm",
        "Szerokość pompona": "4 cm",
        "Kolor koła": "Złoty",
        "Model": "K632BEZ"
    },
    material: "Biżuteria sztuczna", 
    color: "Beżowy", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/76606-large_default/kolczyki-kola-pompon-bezowe-k632bez.jpg",
    image3: "https://hurt.ecarla.pl/79728-large_default/kolczyki-kola-pompon-bezowe-k632bez.jpg",
    image4: "https://hurt.ecarla.pl/79729-large_default/kolczyki-kola-pompon-bezowe-k632bez.jpg"
},
{ 
    id: "8789", 
    name: "KOLCZYKI KOŁA POMPON CZERWONE K632CZE",
    price: "29.99 zł", 
    image: "https://hurt.ecarla.pl/76609-large_default/kolczyki-kola-pompon-czerwone-k632cze.jpg",
    description: [
        "Efektowne kolczyki koła z miękkimi pomponami.",
        "Wykonane są ze stopów metali nieszlachetnych. Nie zawierają niklu ani chromu.",
        "Nie moczyć! Unikać kontaktu z wodą!"
    ],
    specs: {
        "Długość kolczyka": "7,5 cm",
        "Szerokość koła": "5 cm",
        "Szerokość pompona": "4 cm",
        "Kolor koła": "Złoty",
        "Model": "K632CZE"
    },
    material: "Biżuteria sztuczna", 
    color: "Czerwony", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/76610-large_default/kolczyki-kola-pompon-czerwone-k632cze.jpg",
    image3: "https://hurt.ecarla.pl/79723-large_default/kolczyki-kola-pompon-czerwone-k632cze.jpg",
    image4: "https://hurt.ecarla.pl/79724-large_default/kolczyki-kola-pompon-czerwone-k632cze.jpg"
},
{ 
    id: "8790", 
    name: "KOLCZYKI KOŁA POMPON CZARNE K632CZ",
    price: "29.99 zł", 
    image: "https://hurt.ecarla.pl/76611-large_default/kolczyki-kola-pompon-czarne-k632cz.jpg",
    description: [
        "Efektowne kolczyki koła z miękkimi pomponami.",
        "Wykonane są ze stopów metali nieszlachetnych. Nie zawierają niklu ani chromu.",
        "Nie moczyć! Unikać kontaktu z wodą!"
    ],
    specs: {
        "Długość kolczyka": "7,5 cm",
        "Szerokość koła": "5 cm",
        "Szerokość pompona": "4 cm",
        "Kolor koła": "Złoty",
        "Model": "K632CZ"
    },
    material: "Biżuteria sztuczna", 
    color: "Czarny", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/76612-large_default/kolczyki-kola-pompon-czarne-k632cz.jpg",
    image3: "https://hurt.ecarla.pl/79721-large_default/kolczyki-kola-pompon-czarne-k632cz.jpg",
    image4: "https://hurt.ecarla.pl/79722-large_default/kolczyki-kola-pompon-czarne-k632cz.jpg"
},


{ 
    id: "8825", 
    name: "KOLCZYK NAUSZNICA LIŚĆ SREBRNA K641S",
    price: "29.99 zł", 
    image: "https://hurt.ecarla.pl/76687-large_default/kolczyk-nausznica-lisc-srebrna-k641s.jpg",
    description: [
        "Efektowny kolczyk typu nausznica w kształcie liścia w kolorze srebra.",
        "Będzie stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
        "Nausznica lewostronna. Sprzedawane pojedynczo.",
        "Wykonane ze stopów metali nieszlachetnych. Nie zawierają niklu ani chromu. Unikać kontaktu z wodą!"
    ],
    specs: {
        "Długość": "4,2 cm",
        "Szerokość": "1,2 cm",
        "Strona": "Lewostronna",
        "Ilość": "1 szt. (pojedynczo)",
        "Model": "K641S"
    },
    material: "Biżuteria sztuczna", 
    color: "Srebrny", 
    availability: "W magazynie", 
    image2: null
},{ 
    id: "9183", 
    name: "KOLCZYKI ZE STALI PLATEROWANEJ ŻÓŁTYM ZLOTEM KST762",
    price: "34.99 zł", 
    image: "https://hurt.ecarla.pl/77907-large_default/kolczyki-ze-stali-platerowanej-zoltym-zlotem-kst762.jpg",
    description: [
        "Nowa kolekcja biżuterii platerowanej 18-karatowym złotem metodą 'Electroplated'.",
        "Bardzo efektowne kolczyki, które będą stanowić piękne uzupełnienie eleganckiej kreacji, jak i codziennego stroju.",
        "STAL NIERDZEWNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje i nie śniedzieje."
    ],
    specs: {
        "Długość": "1 cm",
        "Szerokość": "0,7 cm",
        "Metoda platerowania": "Electroplated (18k)",
        "Model": "KST762"
    },
    material: "Stal chirurgiczna", 
    color: "Żółte złoto", 
    availability: "W magazynie", 
    image2: null
},
{ 
    id: "9638", 
    name: "KOLCZYKI Nausznice K681Z",
    price: "19.99 zł", 
    image: "https://hurt.ecarla.pl/79642-large_default/kolczyki-nausznice-k681z.jpg",
    description: [
        "Kolczyki nausznice w kolorze złotym. Bardzo efektowne i modne.",
        "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
        "Biżuteria antyalergiczna, nie zawiera niklu ani chromu."
    ],
    specs: {
        "Wymiary": "3 cm x 1 cm",
        "Informacje dodatkowe": "Cena dotyczy 2 sztuk (pary)",
        "Model": "K681Z"
    },
    material: "Biżuteria sztuczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/79643-large_default/kolczyki-nausznice-k681z.jpg"
},
{ 
    id: "9648", 
    name: "KOLCZYKI przy uchu K690S",
    price: "24.99 zł", 
    image: "https://hurt.ecarla.pl/79663-large_default/kolczyki-przy-uchu-k690s.jpg",
    description: [
        "Kolczyki przy uchu w kolorze srebrnym. Bardzo efektowne i subtelne.",
        "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
        "Biżuteria antyalergiczna, nie zawiera niklu ani chromu."
    ],
    specs: {
        "Wymiary": "1,5 cm x 1,5 cm",
        "Model": "K690S"
    },
    material: "Biżuteria sztuczna", 
    color: "Srebrny", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/79664-large_default/kolczyki-przy-uchu-k690s.jpg"
},
{ 
    id: "9649", 
    name: "KOLCZYKI przy uchu K690Z",
    price: "24.99 zł", 
    image: "https://hurt.ecarla.pl/79665-large_default/kolczyki-przy-uchu-k690z.jpg",
    description: [
        "Kolczyki przy uchu w kolorze złotym. Bardzo efektowne i subtelne.",
        "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
        "Biżuteria antyalergiczna, nie zawiera niklu ani chromu."
    ],
    specs: {
        "Wymiary": "1,5 cm x 1,5 cm",
        "Model": "K690Z"
    },
    material: "Biżuteria sztuczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/79666-large_default/kolczyki-przy-uchu-k690z.jpg"
},

{ 
    id: "9864", 
    name: "Kolczyki Wiszące Kiście K765",
    price: "29.99 zł", 
    image: "https://hurt.ecarla.pl/80443-large_default/kolczyki-wiszace-kiscie-k765.jpg",
    description: [
        "Eleganckie wiszące kolczyki w formie ozdobnych kiści.",
        "Świetnie dopełnią look na specjalne okazje, pięknie mieniąc się w świetle.",
        "Wykonane z bezpiecznego dla skóry metalu nieszlachetnego bez zawartości niklu i chromu."
    ],
    specs: {
        "Długość": "3 cm",
        "Szerokość": "2,5 cm",
        "Model": "K765"
    },
    material: "Biżuteria sztuczna", 
    color: "Srebrny/Kryształowy", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/80444-large_default/kolczyki-wiszace-kiscie-k765.jpg",
    image3: "https://hurt.ecarla.pl/80445-large_default/kolczyki-wiszace-kiscie-k765.jpg"
},
{ 
    id: "9932", 
    name: "Kolczyki Wiszące kule wysoka jakość K786",
    price: "34.99 zł", 
    image: "https://hurt.ecarla.pl/80733-large_default/kolczyki-wiszace-kule-wysoka-jakosc-k786.jpg",
    description: [
        "Najwyższej jakości długie kolczyki, wykonane z dbałością o najmniejszy szczegół.",
        "Inspirowane światowymi trendami mody, przyciągają wzrok oryginalną formą kaskadowych kul.",
        "Wykonane z metalu nieszlachetnego bez dodatku niklu oraz chromu."
    ],
    specs: {
        "Długość": "10 cm",
        "Szerokość": "2 cm",
        "Klasa jakości": "Premium High Quality",
        "Model": "K786"
    },
    material: "Biżuteria sztuczna", 
    color: "Srebrny", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/80734-large_default/kolczyki-wiszace-kule-wysoka-jakosc-k786.jpg"
},
{ 
    id: "9940", 
    name: "Kolczyki z cyrkoniami kokardki K699",
    price: "49.99 zł", 
    image: "https://hurt.ecarla.pl/187806-large_default/kolczyki-z-cyrkoniami-kokardki-k699.jpg",
    description: [
        "Urocze i eleganckie kolczyki w kształcie kokardek, bogato wysadzane lśniącymi cyrkoniami.",
        "Będą stanowić przepiękne uzupełnienie zarówno wieczorowej kreacji, jak i codziennego ubioru.",
        "Biżuteria w pełni antyalergiczna – nie zawiera niklu ani chromu. Dla zachowania blasku należy unikać kontaktu z wodą."
    ],
    specs: {
        "Rodzaj zapięcia": "sztyft",
        "Wymiary": "2 cm x 1,9 cm",
        "Wymiary kartonika": "10 cm x 8cm",
        "Waga": "3g netto / 9g brutto",
        "Model": "K699"
    },
    material: "Biżuteria sztuczna", 
    color: "Kryształowy / Srebrny", 
    availability: "W magazynie", 
    image2: null
},


{ 
    id: "10695", 
    name: "KOLCZYKI WISZĄCE AŻUROWE KREM K877K",
    price: "34.99 zł", 
    image: "https://hurt.ecarla.pl/83648-large_default/kolczyki-wiszace-azurowe-krem-k877k.jpg",
    description: [
        "Imponujące, długie kolczyki wiszące o misternej, ażurowej strukturze zdobionej kremowymi kryształkami.",
        "Doskonały, wyrazisty dodatek na specjalne okazje, bankiety czy wesela.",
        "Wykonane ze stopów metali nieszlachetnych. Przyjazne dla skóry (bez niklu i chromu). Unikać wilgoci."
    ],
    specs: {
        "Wymiary": "10 cm x 5 cm",
        "Cechy dodatkowe": "Ażurowy wzór, lśniące kryształki",
        "Model": "K877K"
    },
    material: "Biżuteria sztuczna", 
    color: "Kremowy / Beżowy", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/83649-large_default/kolczyki-wiszace-azurowe-krem-k877k.jpg"
},
{ 
    id: "10705", 
    name: "Ozdobny Top róże czern rozmiar L OZ09CZL",
    price: "69.99 zł", 
    image: "https://hurt.ecarla.pl/83676-large_default/ozdobny-top-roze-czern-rozmiar-l-oz09czl.jpg",
    description: [
        "Niezwykle zmysłowy, ozdobny top wykonany z eleganckiej i miękkiej koronki, która świetnie układa się na ciele.",
        "Przód ozdobiony przepiękną, romantyczną naszywką w kształcie czarnych róż. Z tyłu wygodne zapinanie na praktyczny zatrzask.",
        "Idealna baza pod marynarki, przezroczyste bluzki lub jako samodzielny, odważny element wieczorowego looku."
    ],
    specs: {
        "Rozmiar": "L",
        "Obwód pod biustem": "70 cm (materiał rozciąga się o dodatkowe 4 cm)",
        "Podstawa trójkąta": "19,5 cm",
        "Obwód biustu": "104 do 110 cm",
        "Zapięcie": "Zatrzask z tyłu",
        "Model": "OZ09CZL"
    },
    material: "Galanteria i dodatki / Koronka", 
    color: "Czarny", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/83677-large_default/ozdobny-top-roze-czern-rozmiar-l-oz09czl.jpg",
    image3: "https://hurt.ecarla.pl/83678-large_default/ozdobny-top-roze-czern-rozmiar-l-oz09czl.jpg"
},
{ 
    id: "10718", 
    name: "ZESTAW 5 PAR KOLCZYKÓW BOHO KRYSZTAŁKI HAMSA SREBRNE K893",
    price: "24.99 zł", 
    image: "https://hurt.ecarla.pl/83725-large_default/zestaw-5-par-kolczykow-boho-krysztalki-hamsa-srebrne-k893.jpg",
    description: [
        "Stylowy komplet 5 par kolczyków w modnym klimacie boho i vintage.",
        "W skład zestawu wchodzą klasyczne koła oraz kolczyki z mistycznymi motywami, takimi jak ręka Hamsa i delikatne kryształki.",
        "Wykonane ze stopów metali nieszlachetnych bez zawartości niklu i chromu. Chronić przed kontaktem z wodą."
    ],
    specs: {
        "Wymiary": "Podane szczegółowo na zdjęciu produktowym",
        "Zawartość zestawu": "5 par kolczyków",
        "Motywy": "Boho, Hamsa, Kryształki, Koła",
        "Model": "K893"
    },
    material: "Biżuteria sztuczna", 
    color: "Srebrny", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/83726-large_default/zestaw-5-par-kolczykow-boho-krysztalki-hamsa-srebrne-k893.jpg",
    image3: "https://hurt.ecarla.pl/83727-large_default/zestaw-5-par-kolczykow-boho-krysztalki-hamsa-srebrne-k893.jpg"
},


{ 
    id: "11118", 
    name: "KOLCZYKI TRÓJKĄTY K896",
    price: "19.99 zł", 
    image: "https://hurt.ecarla.pl/89424-large_default/kolczyki-trojkaty-k896.jpg",
    description: [
        "Nowoczesne, geometryczne kolczyki w kształcie trójkątów w kolorze lśniącego złota.",
        "Będą stanowić piękne, minimalistyczne uzupełnienie zarówno eleganckiej kreacji, jak i codziennego stroju.",
        "Wykonane ze stopów metali nieszlachetnych. Biżuteria antyalergiczna, wolna od niklu i chromu."
    ],
    specs: {
        "Długość": "2,9 cm",
        "Szerokość": "1,6 cm",
        "Rodzaj zapięcia": "Sztyft",
        "Model": "K896"
    },
    material: "Biżuteria sztuczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/89425-large_default/kolczyki-trojkaty-k896.jpg",
    image3: "https://hurt.ecarla.pl/89426-large_default/kolczyki-trojkaty-k896.jpg"
},
{ 
    id: "11156", 
    name: "KOLCZYKI KOŁA PERŁY SREBRNE K919S",
    price: "24.99 zł", 
    image: "https://hurt.ecarla.pl/85335-large_default/kolczyki-kola-perly-srebrne-k919s.jpg",
    description: [
        "Klasyczne kolczyki koła w kolorze srebrnym, ozdobione subtelnymi, wiszącymi perłami.",
        "To ponadczasowe połączenie idealnie dopełni wieczorowy look, biznesowy żakiet lub codzienną stylizację.",
        "Produkt wykonany z metalu nieszlachetnego bez dodatku niklu oraz chromu – w pełni bezpieczny dla skóry."
    ],
    specs: {
        "Wymiary": "Szczegółowe wymiary podane na zdjęciu produktowym",
        "Motyw": "Koła z perłami",
        "Model": "K919S"
    },
    material: "Biżuteria sztuczna", 
    color: "Srebrny / Perłowy", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/85336-large_default/kolczyki-kola-perly-srebrne-k919s.jpg",
    image3: "https://hurt.ecarla.pl/85337-large_default/kolczyki-kola-perly-srebrne-k919s.jpg"
},
{ 
    id: "11160", 
    name: "KOLCZYKI KOŁA SREBRNE K921S",
    price: "24.99 zł", 
    image: "https://hurt.ecarla.pl/85349-large_default/kolczyki-kola-srebrne-k921s.jpg",
    description: [
        "Modne, wiszące kolczyki koła o nowoczesnej formie w kolorze czystego srebra.",
        "Stanowią efektowny dodatek, który pięknie rozświetla twarz i nadaje charakteru każdej kreacji.",
        "Biżuteria hipoalergiczna, wyprodukowana bez użycia niklu ani chromu."
    ],
    specs: {
        "Wymiary": "Szczegółowe wymiary podane na zdjęciu produktowym",
        "Model": "K921S"
    },
    material: "Biżuteria sztuczna", 
    color: "Srebrny", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/85350-large_default/kolczyki-kola-srebrne-k921s.jpg",
    image3: "https://hurt.ecarla.pl/85351-large_default/kolczyki-kola-srebrne-k921s.jpg"
},
{ 
    id: "11274", 
    name: "KOLCZYKI Wiszące KOŁA K908",
    price: "29.99 zł", 
    image: "https://hurt.ecarla.pl/85798-large_default/kolczyki-wiszace-kola-k908.jpg",
    description: [
        "Niezwykle eleganckie i długie kolczyki wiszące z motywem kół, wykonane ze szczególną starannością.",
        "Doskonale pasują zarówno do wieczorowych sukienek, jak i biznesowych żakietów czy marynarek.",
        "Wykonane ze stopów metali nieszlachetnych. Brak niklu i chromu chroni przed uczuleniami. Unikać kontaktu z wodą."
    ],
    specs: {
        "Długość kolczyka": "9 cm",
        "Szerokość": "3 cm",
        "Model": "K908"
    },
    material: "Biżuteria sztuczna", 
    color: "Złoty / Metaliczny", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/85799-large_default/kolczyki-wiszace-kola-k908.jpg",
    image3: "https://hurt.ecarla.pl/85800-large_default/kolczyki-wiszace-kola-k908.jpg"
},
{ 
    id: "11394", 
    name: "KOLCZYKI KOŁA SREBRNE K927S",
    price: "24.99 zł", 
    image: "https://hurt.ecarla.pl/86407-large_default/kolczyki-kola-srebrne-k927s.jpg",
    description: [
        "Bardzo efektowne, klasyczne kolczyki koła o dużej średnicy w kolorze srebrnym.",
        "Będą stanowić doskonałe, wyraziste dopełnienie eleganckiej wieczorowej kreacji oraz codziennego outfitu.",
        "Biżuteria w pełni antyalergiczna, bezpieczna dla wrażliwej skóry (nie zawiera niklu i chromu)."
    ],
    specs: {
        "Wymiar (średnica/długość)": "5,8 cm",
        "Model": "K927S"
    },
    material: "Biżuteria sztuczna", 
    color: "Srebrny", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/86408-large_default/kolczyki-kola-srebrne-k927s.jpg",
    image3: "https://hurt.ecarla.pl/86409-large_default/kolczyki-kola-srebrne-k927s.jpg"
},
{ 
    id: "11399", 
    name: "KOLCZYKI WISZĄCE ZŁOTE K931Z",
    price: "24.99 zł", 
    image: "https://hurt.ecarla.pl/86426-large_default/kolczyki-wiszace-zlote-k931z.jpg",
    description: [
        "Długie i niezwykle widowiskowe kolczyki wiszące w kolorze głębokiego złota.",
        "Wyjątkowo efektowny design, który pięknie wysmukla szyję i nadaje szyku każdej stylizacji.",
        "Produkt antyalergiczny, wykonany ze stopów metali nieszlachetnych wolnych od niklu i chromu."
    ],
    specs: {
        "Długość": "7,5 cm",
        "Szerokość": "2,5 cm",
        "Model": "K931Z"
    },
    material: "Biżuteria sztuczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/86427-large_default/kolczyki-wiszace-zlote-k931z.jpg",
    image3: "https://hurt.ecarla.pl/86428-large_default/kolczyki-wiszace-zlote-k931z.jpg",
    image4: "https://hurt.ecarla.pl/86429-large_default/kolczyki-wiszace-zlote-k931z.jpg",
    image5: "https://hurt.ecarla.pl/86430-large_default/kolczyki-wiszace-zlote-k931z.jpg"
},




{ 
    id: "11618", 
    name: "KOLCZYKI ZE STALI CHIRURGICZNEJ PLATEROWANE ZŁOTEM ZŁOTE KST983",
    price: "34.99 zł", 
    image: "https://hurt.ecarla.pl/86989-large_default/kolczyki-ze-stali-chirurgicznej-platerowane-zlotem-zlote-kst983.jpg",
    description: [
        "Eskluzywne kolczyki wykonane z wysokiej jakości stali chirurgicznej, platerowane 18-karatowym złotem.",
        "Wysadzane selekcjonowanymi cyrkoniami, które przepięknie mienią się w świetle, nadając zjawiskowego blasku.",
        "Doskonałe zarówno do wymarzonej kreacji ślubnej, wieczorowych strojów, jak i jako elegancki prezent."
    ],
    specs: {
        "Długość": "1,3 cm",
        "Szerokość": "0,8 cm",
        "Wykończenie": "Platerowanie 18k złotem, lśniące cyrkonie",
        "Model": "KST983"
    },
    material: "Stal chirurgiczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: null
},
{ 
    id: "11654", 
    name: "KOLCZYKI ZE STALI CHIRURGICZNEJ PLATEROWANE ZŁOTEM KST1112",
    price: "29.99 zł", 
    image: "https://hurt.ecarla.pl/87026-large_default/kolczyki-ze-stali-chirurgicznej-platerowane-zlotem-kst1112.jpg",
    description: [
        "Przepiękne i subtelne kolczyki ze stali chirurgicznej, uszlachetnione warstwą 18-karatowego złota.",
        "Zdobione lśniącymi cyrkoniami o wyjątkowym szlifie, które idealnie imitują blask prawdziwych diamentów.",
        "Zaprojektowane z myślą o kreacjach ślubnych, wieczorowych oraz eleganckich stylizacjach biznesowych."
    ],
    specs: {
        "Długość": "1,0 cm",
        "Szerokość": "1,0 cm",
        "Cechy": "Hipoalergiczne, wysoki blask cyrkonii",
        "Model": "KST1112"
    },
    material: "Stal chirurgiczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: null
},
{ 
    id: "11722", 
    name: "KOLCZYKI ZE STALI CHIRURGICZNEJ PLATEROWANE ZŁOTEM KST1097",
    price: "34.99 zł", 
    image: "https://hurt.ecarla.pl/87266-large_default/kolczyki-ze-stali-chirurgicznej-platerowane-zlotem-kst1097.jpg",
    description: [
        "Eleganckie kolczyki z nowej kolekcji biżuterii, wykonane ze stali chirurgicznej i platerowane 18-karatowym złotem.",
        "Precyzyjnie wyselekcjonowane cyrkonie cudownie załamują światło, dodając twarzy niezwykłego blasku.",
        "Idealnie pasują jako biżuteria ślubna, wieczorowa oraz wyrafinowany dodatek na co dzień."
    ],
    specs: {
        "Długość": "1,3 cm",
        "Szerokość": "0,9 cm",
        "Materiał bazy": "Stal nierdzewna 316L",
        "Model": "KST1097"
    },
    material: "Stal chirurgiczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: null
},
{ 
    id: "11886", 
    name: "KOLCZYKI KOŁA ZŁOTE K988",
    price: "24.99 zł", 
    image: "https://hurt.ecarla.pl/89450-large_default/kolczyki-kola-zlote-k988.jpg",
    description: [
        "Ponadczasowe i niezwykle uniwersalne kolczyki koła w kolorze klasycznego złota.",
        "Stanowią idealny element basic, który doskonale uzupełni zarówno codzienny outfit, jak i wieczorową kreację.",
        "Biżuteria w pełni antyalergiczna – nie zawiera niklu ani chromu, zapewniając komfort noszenia."
    ],
    specs: {
        "Wymiary": "Szczegółowe wymiary podane na ostatnim zdjęciu produktowym",
        "Model": "K988"
    },
    material: "Biżuteria sztuczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/89451-large_default/kolczyki-kola-zlote-k988.jpg",
    image3: "https://hurt.ecarla.pl/89452-large_default/kolczyki-kola-zlote-k988.jpg",
    image4: "https://hurt.ecarla.pl/89453-large_default/kolczyki-kola-zlote-k988.jpg",
    image5: "https://hurt.ecarla.pl/89454-large_default/kolczyki-kola-zlote-k988.jpg",
    image6: "https://hurt.ecarla.pl/89455-large_default/kolczyki-kola-zlote-k988.jpg"
},
{ 
    id: "11896", 
    name: "KOLCZYKI STAL CHIRURGICZNA ZŁOTO KST1203",
    price: "19.99 zł", 
    image: "https://hurt.ecarla.pl/89471-large_default/kolczyki-stal-chirurgiczna-zloto-kst1203.jpg",
    description: [
        "Subtelne i bardzo efektowne malutkie kolczyki w kolorze złota z nowej linii produktowej.",
        "Wykonane ze stali nierdzewnej najwyższej jakości i precyzyjnie platerowane 18-karatowym złotem.",
        "Dzięki swojej minimalistycznej formie stanowią doskonałą bazę do tworzenia codziennych i eleganckich stylizacji."
    ],
    specs: {
        "Wymiary": "0,6 cm x 0,1 cm",
        "Wykończenie": "Złocenie 18k",
        "Model": "KST1203"
    },
    material: "Stal chirurgiczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: null
},
{ 
    id: "11906", 
    name: "KOLCZYKI Wiszące Złoto XXL K962",
    price: "24.99 zł", 
    image: "https://hurt.ecarla.pl/89487-large_default/kolczyki-wiszace-zloto-xxl-k962.jpg",
    description: [
        "Wyraziste, duże kolczyki wiszące w rozmiarze XXL o pięknym złotym wykończeniu.",
        "Niezwykle efektowny model, który wspaniale dopełni odważne, wieczorowe kreacje i wyjściowe stylizacje.",
        "Biżuteria antyalergiczna, wolna od zawartości niklu i chromu."
    ],
    specs: {
        "Wymiary": "Dokładna specyfikacja podana na zdjęciu w galerii",
        "Rozmiar": "XXL",
        "Model": "K962"
    },
    material: "Biżuteria sztuczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/89488-large_default/kolczyki-wiszace-zloto-xxl-k962.jpg",
    image3: "https://hurt.ecarla.pl/89489-large_default/kolczyki-wiszace-zloto-xxl-k962.jpg"
},
{ 
    id: "11952", 
    name: "KOLCZYKI STAL CHIRURGICZNA ZŁOTE KST1253",
    price: "34.99 zł", 
    image: "https://hurt.ecarla.pl/89578-large_default/kolczyki-stal-chirurgiczna-zlote-kst1253.jpg",
    description: [
        "Niezwykle efektowne kolczyki o nowoczesnym designie w kolorze głębokiego złota.",
        "Wyprodukowane z trwałej stali chirurgicznej i uszlachetnione powłoką z 18-karatowego złota.",
        "Doskonale sprawdzą się zarówno jako mocny akcent w codziennym ubiorze, jak i uzupełnienie szykownej kreacji."
    ],
    specs: {
        "Wymiary": "2,0 cm x 1,0 cm",
        "Właściwości": "Nie czernieje, odporna na korozję",
        "Model": "KST1253"
    },
    material: "Stal chirurgiczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: null
},




{ 
    id: "12040", 
    name: "Kolczyki stal chirurgiczna srebrne KST1284",
    price: "24.99 zł", 
    image: "https://hurt.ecarla.pl/89736-large_default/kolczyki-stal-chirurgiczna-srebrne-kst1284.jpg",
    description: [
        "Bardzo efektowne i precyzyjnie wykonane kolczyki w kolorze klasycznego srebra.",
        "Stworzone z najwyższej próby stali chirurgicznej – nie rdzewieją, nie ciemnieją i są wyjątkowo trwałe.",
        "Uniwersalny, geometryczny kształt doskonale sprawdzi się do biurowego garnituru oraz casualowego t-shirtu."
    ],
    specs: {
        "Wymiary": "1,0 cm x 1,0 cm",
        "Materiał": "Stal nierdzewna 316L",
        "Model": "KST1284"
    },
    material: "Stal chirurgiczna", 
    color: "Srebrny", 
    availability: "W magazynie", 
    image2: null
},
{ 
    id: "12115", 
    name: "Kolczyki kryształki K1004",
    price: "34.99 zł", 
    image: "https://hurt.ecarla.pl/89932-large_default/kolczyki-krysztalki-k1004.jpg",
    description: [
        "Olśniewające wiszące kolczyki z najnowszej kolekcji, stworzone według najświeższych modowych trendów.",
        "Bogato zdobione kryształkami, które pięknie odbijają światło. Pasują do wieczorowych sukienek oraz eleganckich marynarek.",
        "Wykonane ze stopów metali nieszlachetnych bez zawartości niklu i chromu. Chronić przed wilgocią."
    ],
    specs: {
        "Wymiary": "Dokładna rozpiska graficzna znajduje się na ostatnim zdjęciu",
        "Zdobienie": "Mieniące się kryształki",
        "Model": "K1004"
    },
    material: "Biżuteria sztuczna", 
    color: "Srebrny / Kryształowy", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/89933-large_default/kolczyki-krysztalki-k1004.jpg",
    image3: "https://hurt.ecarla.pl/89934-large_default/kolczyki-krysztalki-k1004.jpg"
},
{ 
    id: "12132", 
    name: "Kolczyki ślubne wiszące z kryształkami KSL04",
    price: "79.99 zł", 
    image: "https://hurt.ecarla.pl/89975-large_default/kolczyki-slubne-wiszace-z-krysztalkami-ksl04.jpg",
    description: [
        "Eskluzywne kolczyki z dedykowanej kolekcji ślubnej, wykonywane ręcznie z najwyższej jakości stopów jubilerskich.",
        "Dzięki starannie dobranym materiałom biżuteria charakteryzuje się wyjątkową twardością, nie ciemnieje i jest w pełni hipoalergiczna.",
        "Wysadzane specjalnie selekcjonowanymi cyrkoniami klasy premium, które gwarantują niesamowity, iście diamentowy blask.",
        "Zaprojektowane, by stać się spektakularnym i luksusowym dopełnieniem najpiękniejszych sukien ślubnych."
    ],
    specs: {
        "Wymiary": "Podane szczegółowo na zdjęciu w galerii",
        "Klasa": "Premium Bridal Collection",
        "Technika": "Handmade (Rękodzieło jubilerskie)",
        "Kamienie": "Selekcjonowane cyrkonie o wysokim współczynniku załamania światła",
        "Model": "KSL04"
    },
    material: "Stopy jubilerskie (Biżuteria ślubna premium)", 
    color: "Srebrny / Diamentowy blask", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/89976-large_default/kolczyki-slubne-wiszace-z-krysztalkami-ksl04.jpg",
    image3: "https://hurt.ecarla.pl/89977-large_default/kolczyki-slubne-wiszace-z-krysztalkami-ksl04.jpg"
},
{ 
    id: "12238", 
    name: "Kolczyki wiszące kryształki złote K979Z",
    price: "39.99 zł", 
    image: "https://hurt.ecarla.pl/90312-large_default/kolczyki-wiszace-krysztalki-zlote-k979z.jpg",
    description: [
        "Unikalne i asymetryczne kolczyki wiszące z lśniącym motywem kół w kolorze jasnego złota.",
        "Komplet składa się z dwóch subtelnie różniących się kolczyków, tworząc niezwykle oryginalny, a zarazem elegancki efekt.",
        "Wykonane z bezpiecznych stopów metali nieszlachetnych, które nie zawierają uczulającego niklu ani chromu."
    ],
    specs: {
        "Wymiary": "Szczegółowe wymiary podane na ostatnim zdjęciu produktowym",
        "Konstrukcja": "Para asymetryczna (dwa różne kolczyki)",
        "Model": "K979Z"
    },
    material: "Biżuteria sztuczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/90313-large_default/kolczyki-wiszace-krysztalki-zlote-k979z.jpg",
    image3: "https://hurt.ecarla.pl/90314-large_default/kolczyki-wiszace-krysztalki-zlote-k979z.jpg"
},
{ 
    id: "12718", 
    name: "Kolczyki wiszące białe K1044B",
    price: "29.99 zł", 
    image: "https://hurt.ecarla.pl/93882-large_default/kolczyki-wiszace-biale-k1044b-1.jpg",
    description: [
        "Efektowne i wyraziste kolczyki wiszące w kolorze klasycznej, czystej bieli.",
        "Stanowią idealne, odświeżające uzupełnienie eleganckiej kreacji bankietowej, jak i letniego, codziennego outfitu.",
        "Produkt w pełni hipoalergiczny, wykonany ze stopów metali nieszlachetnych bez dodatku niklu i chromu."
    ],
    specs: {
        "Długość": "9,5 cm",
        "Szerokość": "2,3 cm",
        "Model": "K1044B"
    },
    material: "Biżuteria sztuczna", 
    color: "Biały", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/93883-large_default/kolczyki-wiszace-biale-k1044b-1.jpg"
},
{ 
    id: "12862", 
    name: "Kolczyki wiszące dżetowe zdobione K1020",
    price: "34.99 zł", 
    image: "https://hurt.ecarla.pl/94898-large_default/kolczyki-wiszace-dzetowe-zdobione-k1020-1.jpg",
    description: [
        "Zjawiskowe kolczyki wieczorowe z nowej kolekcji biżuterii dżetowej o najwyższej staranności wykonania.",
        "Olśniewająco mienią się przy każdym ruchu, pasując idealnie do eleganckich sukienek koktajlowych oraz marynarek.",
        "Stworzone ze stopów metali nieszlachetnych wolnych od niklu i chromu. Unikać bezpośredniego kontaktu z wodą."
    ],
    specs: {
        "Długość": "5,5 cm",
        "Szerokość w najszerszym miejscu": "2,7 cm",
        "Wykończenie": "Lśniące dżety",
        "Model": "K1020"
    },
    material: "Biżuteria sztuczna", 
    color: "Srebrny / Kryształowy", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/94899-large_default/kolczyki-wiszace-dzetowe-zdobione-k1020-1.jpg"
},
{ 
    id: "12920", 
    name: "Kolczyki stal chirurgiczna srebrne KST1352",
    price: "39.99 zł", 
    image: "https://hurt.ecarla.pl/95042-large_default/kolczyki-stal-chirurgiczna-srebrne-kst1352-1.jpg",
    description: [
        "Nowoczesne i niezwykle efektowne kolczyki o metalicznym blasku w kolorze szlachetnego srebra.",
        "Wykonane z trwałej i bezpiecznej stali chirurgicznej, która nie ciemnieje, nie ściera się i nie uczula.",
        "Idealny, designerski dodatek pozwalający w prosty sposób odmienić charakter każdej casualowej i wieczorowej stylizacji."
    ],
    specs: {
        "Wymiary": "3,6 cm x 3,0 cm",
        "Materiał": "Stal nierdzewna 316L",
        "Model": "KST1352"
    },
    material: "Stal chirurgiczna", 
    color: "Srebrny", 
    availability: "W magazynie", 
    image2: null
},
{ 
    id: "13100", 
    name: "Kolczyki wiszące z muszelką złote  K1112",
    price: "24.99 zł", 
    image: "https://hurt.ecarla.pl/96068-large_default/kolczyki-wiszace-z-muszelka-zlote-k1112-1.jpg",
    description: [
        "Urocze kolczyki wiszące inspirowane stylem marynistycznym z modnym motywem morskiej muszelki.",
        "Subtelne połączenie złota i wakacyjnych akcentów pięknie ozdobi zarówno letnią sukienkę, jak i elegancki garnitur.",
        "Biżuteria w pełni antyalergiczna – nie zawiera niklu ani chromu, zapewniając komfort noszenia bez podrażnień."
    ],
    specs: {
        "Wymiary": "Szczegółowe wymiary podane na ostatnim zdjęciu w galerii",
        "Motyw": "Muszelka",
        "Model": "K1112"
    },
    material: "Biżuteria sztuczna", 
    color: "Złoty / Naturalny", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/96069-large_default/kolczyki-wiszace-z-muszelka-zlote-k1112-1.jpg",
    image3: "https://hurt.ecarla.pl/96070-large_default/kolczyki-wiszace-z-muszelka-zlote-k1112-1.jpg"
},
{ 
    id: "13432", 
    name: "Kolczyki wiszące perły kryształ K1163",
    price: "22.99 zł", 
    image: "https://hurt.ecarla.pl/190903-large_default/kolczyki-wiszace-perly-krysztal-k1163.jpg",
    description: [
        "Subtelne i pełne wdzięku kolczyki wiszące stanowiące harmonijne połączenie lśniących kryształków oraz klasycznych pereł.",
        "Będą olśniewającym dopełnieniem wizytowych kreacji, a także eleganckim akcentem w codziennych stylizacjach.",
        "Biżuteria o właściwościach antyalergicznych – wykonana ze stopów metali bez dodatku niklu oraz chromu."
    ],
    specs: {
        "Wymiary": "Szczegółowe wymiary podane na zdjęciu produktowym",
        "Zdobienie": "Perły i kryształki",
        "Model": "K1163"
    },
    material: "Biżuteria sztuczna", 
    color: "Perłowy / Kryształowy", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/97832-large_default/kolczyki-wiszace-perly-krysztal-k1163.jpg",
    image3: "https://hurt.ecarla.pl/97833-large_default/kolczyki-wiszace-perly-krysztal-k1163.jpg"
},

{ 
    id: "14165", 
    name: "Kolczyki wiszące delikatne w złocie K1207",
    price: "18.99 zł", 
    image: "https://hurt.ecarla.pl/101542-large_default/kolczyki-wiszace-delikatne-w-zlocie-k1207.jpg",
    description: [
        "Subtelne kolczyki wiszące w kolorze klasycznego złota, wyróżniające się minimalistycznym i lekkim designem.",
        "Wyposażone w zapięcie typu bigiel wykonane ze srebra próby 925, co gwarantuje najwyższy komfort noszenia przez alergików.",
        "Rewelacyjnie sprawdzą się jako drobny, elegancki detal zarówno do pracy, jak i na wyjątkowe okazje."
    ],
    specs: {
        "Wymiary": "3,5 cm x 1,6 cm",
        "Rodzaj zapięcia": "Bigiel (srebro 925)",
        "Model": "K1207"
    },
    material: "Biżuteria sztuczna / Srebro 925", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: null
},
{ 
    id: "14174", 
    name: "Kolczyki wiszące duże wyraziste K1244",
    price: "29.99 zł", 
    image: "https://hurt.ecarla.pl/101581-large_default/kolczyki-wiszace-duze-wyraziste-k1244.jpg",
    description: [
        "Zjawiskowe, duże kolczyki wiszące o bogatym, misternym zdobieniu, obok których nie da się przejść obojętnie.",
        "Zaprojektowane, by nadawać blasku i luksusowego charakteru eleganckim kreacjom wieczorowym oraz wyjściowym stylizacjom.",
        "Produkt antyalergiczny – stworzony ze specjalnych stopów metali bez zawartości niklu i chromu."
    ],
    specs: {
        "Wymiary": "8 cm x 4,2 cm",
        "Styl": "Glamour / Wyrazisty",
        "Model": "K1244"
    },
    material: "Biżuteria sztuczna", 
    color: "Złoty / Kryształowy", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/101582-large_default/kolczyki-wiszace-duze-wyraziste-k1244.jpg",
    image3: "https://hurt.ecarla.pl/101583-large_default/kolczyki-wiszace-duze-wyraziste-k1244.jpg"
},
{ 
    id: "14216", 
    name: "Kolczyki wiszące pearls triangle K1260",
    price: "16.99 zł", 
    image: "https://hurt.ecarla.pl/101708-large_default/kolczyki-wiszace-pearls-triangle-k1260.jpg",
    description: [
        "Nowoczesne kolczyki wiszące o geometrycznym fasonie trójkąta, subtelnie wykończone delikatnymi perełkami.",
        "Stanowią idealny mariaż współczesnych trendów z ponadczasową elegancją, pasując do sukienek oraz garniturów.",
        "Bezpieczne dla delikatnej skóry – biżuteria w pełni antyalergiczna, wolna od niklu i chromu."
    ],
    specs: {
        "Wymiary": "Szczegółowe wymiary podane w galerii zdjęć",
        "Motyw": "Trójkąt (Triangle) / Perły",
        "Model": "K1260"
    },
    material: "Biżuteria sztuczna", 
    color: "Złoty / Perłowy", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/101709-large_default/kolczyki-wiszace-pearls-triangle-k1260.jpg",
    image3: "https://hurt.ecarla.pl/101710-large_default/kolczyki-wiszace-pearls-triangle-k1260.jpg"
},
{ 
    id: "14281", 
    name: "Kolczyki wiszące pearls serce K1232",
    price: "16.99 zł", 
    image: "https://hurt.ecarla.pl/101958-large_default/kolczyki-wiszace-pearls-serce-k1232.jpg",
    description: [
        "Romantyczne kolczyki wiszące w kształcie serca, wysadzane drobnymi, lśniącymi perełkami.",
        "Dodadzą kobiecego uroku, lekkości i wdzięku zarówno wyszukanym kreacjom randkowym, jak i codziennym ubraniom.",
        "Hipoalergiczny produkt wykonany ze stopów jubilerskich wolnych od uczulającego niklu oraz chromu."
    ],
    specs: {
        "Wymiary": "Szczegółowe wymiary podane w galerii zdjęć",
        "Motyw": "Serce / Perły",
        "Model": "K1232"
    },
    material: "Biżuteria sztuczna", 
    color: "Złoty / Perłowy", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/101960-large_default/kolczyki-wiszace-pearls-serce-k1232.jpg",
    image3: "https://hurt.ecarla.pl/101962-large_default/kolczyki-wiszace-pearls-serce-k1232.jpg"
},
{ 
    id: "14300", 
    name: "Kolczyki wiszące dżetowe, kryształowe, cyrkonie K1227Z",
    price: "24.99 zł", 
    image: "https://hurt.ecarla.pl/190917-large_default/kolczyki-wiszace-dzetowe-krysztalowe-cyrkonie-k1227z.jpg",
    description: [
        "Spektakularne, długie kolczyki wieczorowe bogato zdobione błyszczącymi cyrkoniami oraz dżetami.",
        "Kaskadowa forma o długości aż 10 cm niesamowicie wydłuża szyję i zjawiskowo mieni się w wieczorowym świetle.",
        "Produkt antyalergiczny – idealny dla osób z wrażliwą skórą, nie zawiera niklu ani chromu."
    ],
    specs: {
        "Długość": "10 cm",
        "Kamień": "Cyrkonie / Kryształowe dżety",
        "Model": "K1227Z"
    },
    material: "Biżuteria sztuczna", 
    color: "Złoty / Kryształowy", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/102089-large_default/kolczyki-wiszace-dzetowe-krysztalowe-cyrkonie-k1227z.jpg"
},

{ 
    id: "14504", 
    name: "Kolczyki ślubne wiszące z kryształkami stal chirurgiczna KSL61",
    price: "59.00 zł", 
    image: "https://hurt.ecarla.pl/103163-large_default/kolczyki-slubne-wiszace-z-krysztalkami-stal-chirurgiczna-ksl61.jpg",
    description: [
        "Ekskluzywne, ręcznie wykonywane kolczyki ślubne ze specjalnie selekcjonowanymi cyrkoniami o niesamowitym blasku.",
        "Zaprojektowane z myślą o pannach młodych – stanowią olśniewające, pełne klasy dopełnienie ślubnych i wieczorowych kreacji.",
        "Wytrzymała baza ze stali chirurgicznej gwarantuje, że biżuteria nie ciemnieje, jest trwała i w 100% hipoalergiczna."
    ],
    specs: {
        "Wymiary": "Szczegółowe wymiary podane na zdjęciu",
        "Wykonanie": "Handmade (rękodzieło)",
        "Model": "KSL61"
    },
    material: "Stal chirurgiczna / Stopy jubilerskie", 
    color: "Srebrny / Kryształowy", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/103164-large_default/kolczyki-slubne-wiszace-z-krysztalkami-stal-chirurgiczna-ksl61.jpg",
    image3: "https://hurt.ecarla.pl/103165-large_default/kolczyki-slubne-wiszace-z-krysztalkami-stal-chirurgiczna-ksl61.jpg"
},
{ 
    id: "14505", 
    name: "Kolczyki ślubne wiszące z kryształkami stal chirurgiczna KSL60",
    price: "119.00 zł", 
    image: "https://hurt.ecarla.pl/103169-large_default/kolczyki-slubne-wiszace-z-krysztalkami-stal-chirurgiczna-ksl60.jpg",
    description: [
        "Premium kolczyki ślubne o zjawiskowej kompozycji, stworzone ręcznie z myślą o najważniejszych uroczystościach w życiu.",
        "Wykorzystanie starannie wyselekcjonowanych cyrkonii najwyższej klasy zapewnia spektakularne i luksusowe lśnienie.",
        "Hipoalergiczny, twardy stop jubilerski w połączeniu ze stalą chirurgiczną gwarantuje trwałość barwy i brak reakcji uczuleniowych."
    ],
    specs: {
        "Wymiary": "Szczegółowe wymiary podane na zdjęciu",
        "Kolekcja": "Biżuteria Ślubna Premium",
        "Model": "KSL60"
    },
    material: "Stal chirurgiczna / Stopy jubilerskie", 
    color: "Srebrny / Kryształowy", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/103170-large_default/kolczyki-slubne-wiszace-z-krysztalkami-stal-chirurgiczna-ksl60.jpg",
    image3: "https://hurt.ecarla.pl/103171-large_default/kolczyki-slubne-wiszace-z-krysztalkami-stal-chirurgiczna-ksl60.jpg"
},
{ 
    id: "14525", 
    name: "Kolczyki ze stali chirurgicznej KST1532",
    price: "34.99 zł", 
    image: "https://hurt.ecarla.pl/103234-large_default/kolczyki-ze-stali-chirurgicznej-kst1532.jpg",
    description: [
        "Olśniewające kolczyki ze stali chirurgicznej platerowane wysokiej jakości 14-karatowym złotem.",
        "Bajeczny kształt wysadzany pięknie mieniącymi się cyrkoniami, które fantastycznie przyciągają wzrok i dodają blasku.",
        "Uniwersalny, a zarazem luksusowy dodatek pasujący zarówno do wymarzonej sukni ślubnej, jak i wieczorowego garnituru."
    ],
    specs: {
        "Wymiary / Średnica": "1,7 cm",
        "Platerowanie": "14-karatowe złoto",
        "Model": "KST1532"
    },
    material: "Stal chirurgiczna platerowana", 
    color: "Złoty / Kryształowy", 
    availability: "W magazynie", 
    image2: null
},
{ 
    id: "14766", 
    name: "Kolczyki złote kółka K1196",
    price: "14.99 zł", 
    image: "https://hurt.ecarla.pl/104714-large_default/kolczyki-zlote-kolka-k1196.jpg",
    description: [
        "Klasyczne i ponadczasowe kolczyki w kształcie kół o gładkim, błyszczącym wykończeniu w kolorze złota.",
        "Must-have w każdej garderobie – rewelacyjnie komponują się z minimalistycznym t-shirtem, jak i elegancką wieczorową kreacją.",
        "Wykonane z bezpiecznych metali nieszlachetnych (bez niklu i chromu). Chronić przed bezpośrednim kontaktem z wodą."
    ],
    specs: {
        "Średnica": "2 cm",
        "Fason": "Klasyczne koła",
        "Model": "K1196"
    },
    material: "Biżuteria sztuczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/104715-large_default/kolczyki-zlote-kolka-k1196.jpg"
},
{ 
    id: "14773", 
    name: "Kolczyki złote wiszące K1278",
    price: "24.99 zł", 
    image: "https://hurt.ecarla.pl/104770-large_default/kolczyki-zlote-wiszace-k1278.jpg",
    description: [
        "Imponujące, długie kolczyki wiszące w kolorze głębokiego złota, przyciągające spojrzenia swoją unikalną formą.",
        "Stanowią idealny punkt kulminacyjny wieczorowego outfitu, nadając całości wyrafinowanego i zmysłowego charakteru.",
        "W pełni antyalergiczna struktura metalu gwarantuje pełen komfort i bezpieczeństwo noszenia (brak niklu/chromu)."
    ],
    specs: {
        "Długość": "9 cm",
        "Styl": "Modern / Elegant",
        "Model": "K1278"
    },
    material: "Biżuteria sztuczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/104771-large_default/kolczyki-zlote-wiszace-k1278.jpg"
},
{ 
    id: "14917", 
    name: "Gumka do włosów frotka bordo koronka GUM17BOR",
    price: "19.99 zł", 
    image: "https://hurt.ecarla.pl/105406-large_default/gumka-do-wlosow-frotka-bordo-koronka-gum17bor.jpg",
    description: [
        "Urocza i bardzo stylowa gumka do włosów typu frotka (scrunchie), wykończona elegancką koronką w odcieniu burgundu.",
        "Wspaniały i modny dodatek, który nie tylko świetnie podtrzymuje fryzurę, ale też pięknie prezentuje się na nadgarstku.",
        "Wykonana z delikatnych dla struktury włosa materiałów, dzięki czemu nie wyrywa, nie łamie i nie gniecie pasm."
    ],
    specs: {
        "Średnica": "do 10 cm",
        "EAN": "5900779377981",
        "Model": "GUM17BOR"
    },
    material: "Ozdoby do włosów / Tkanina z koronką", 
    color: "Bordowy / Burgun", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/105407-large_default/gumka-do-wlosow-frotka-bordo-koronka-gum17bor.jpg"
},
{ 
    id: "15276", 
    name: "Kolczyki wiszące dżetowe XXL K1471S",
    price: "39.99 zł", 
    image: "https://hurt.ecarla.pl/107319-large_default/kolczyki-wiszace-dzetowe-xxl-k1471s.jpg",
    description: [
        "Zjawiskowe kolczyki wiszące w spektakularnym rozmiarze XXL, stworzone z myślą o fankach stylu glamour i wielkich wyjść.",
        "Wygodne zapięcie na sztyft stabilnie trzyma kolczyk, a gęsto osadzone dżety generują niesamowity efekt tafli światła.",
        "Biżuteria hipoalergiczna wykonana ze sprawdzonych stopów metali – wolna od domieszek niklu i chromu."
    ],
    specs: {
        "Wymiary": "12,2 cm x 4,7 cm",
        "Rodzaj zapięcia": "Sztyft",
        "Model": "K1471S"
    },
    material: "Biżuteria sztuczna", 
    color: "Srebrny / Kryształowy", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/107320-large_default/kolczyki-wiszace-dzetowe-xxl-k1471s.jpg"
},
{ 
    id: "15277", 
    name: "Kolczyki wiszące dżetowe XXL K1471Z",
    price: "39.99 zł", 
    image: "https://hurt.ecarla.pl/107321-large_default/kolczyki-wiszace-dzetowe-xxl-k1471z.jpg",
    description: [
        "Maksymalistyczne i niesamowicie luksusowe kolczyki wieczorowe XXL w olśniewającym kolorze żółtego złota.",
        "Kaskada błyszczących dżetów perfekcyjnie dopełni prostą suknię wieczorową, stając się głównym punktem całej stylizacji.",
        "Zapięcie na sztyft zapewnia komfort, a antyalergiczny skład (brak niklu oraz chromu) chroni przed podrażnieniami."
    ],
    specs: {
        "Wymiary": "12,2 cm x 4,7 cm",
        "Rodzaj zapięcia": "Sztyft",
        "Model": "K1471Z"
    },
    material: "Biżuteria sztuczna", 
    color: "Złoty / Kryształowy", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/107323-large_default/kolczyki-wiszace-dzetowe-xxl-k1471z.jpg"
},
{ 
    id: "16068", 
    name: "Nausznice ze stali szlachetnej czarne kryształki platerowane złotem KST1724",
    price: "24.99 zł", 
    image: "https://hurt.ecarla.pl/111628-large_default/nausznice-ze-stali-szlachetnej-czarne-krysztalki-platerowane-zlotem-kst1724.jpg",
    description: [
        "Niezwykle efektowne nausznice wykonane z najwyższej jakości stali chirurgicznej i platerowane szczerym złotem.",
        "Kontrastowe, czarne kryształki nadają biżuterii unikalnego, nowoczesnego charakteru z nutą rockowej elegancji.",
        "Stal szlachetna 316L gwarantuje odporność na czynniki atmosferyczne, nie koroduje, nie rdzewieje i nie ciemnieje."
    ],
    specs: {
        "Średnica nausznicy": "ok. 1 cm",
        "Kamień": "Czarne kryształki",
        "Model": "KST1724"
    },
    material: "Stal chirurgiczna platerowana", 
    color: "Złoty / Czarny", 
    availability: "W magazynie", 
    image2: null
},
{ 
    id: "16081", 
    name: "Nausznice podwójne ze stali szlachetnej złoto-srebrne proste platerowane złotem KST1716",
    price: "24.99 zł", 
    image: "https://hurt.ecarla.pl/111654-large_default/nausznice-podwojne-ze-stali-szlachetnej-zloto-srebrne-proste-platerowane-zlotem-kst1716.jpg",
    description: [
        "Designerskie, podwójne nausznice łączące w sobie ponadczasowe, minimalistyczne pasma srebra oraz złota.",
        "Wykonane ze stali chirurgicznej platerowanej złotem – idealna opcja dla kobiet ceniących unikalne i nowoczesne formy.",
        "Biżuteria odporna na ścieranie, nie rdzewieje i nie śniedzieje, stanowiąc trwałe dopełnienie każdej stylizacji."
    ],
    specs: {
        "Średnica nausznicy": "ok. 1 cm",
        "Konstrukcja": "Podwójna (dwukolorowa)",
        "Model": "KST1716"
    },
    material: "Stal chirurgiczna platerowana", 
    color: "Złoto-srebrny", 
    availability: "W magazynie", 
    image2: null
},

[
    { 
        id: "16195", 
        name: "Kolczyki pozłacane literka A KST1683A",
        price: "6.89 zł", 
        image: "https://hurt.ecarla.pl/112746-large_default/kolczyki-pozlacane-literka-a-kst1683a.jpg",
        description: [
            "Kolczyki pozłacane 14 karatowym złotem cena dotyczy 1 sztuki Możesz je dopasować do swojej wymarzonej ślubnej kreacji jak i wieczorowych strojów.",
            "Cyrkonie pięknie się mienią przyciągając wzrok i nadając Ci dodatkowego blasku.",
            "Sprawdź bajeczne kształty w naszej nowej kolekcji biżuterii."
        ],
        specs: {
            "Wymiary": "1 cm x 2 cm",
            "Model": "KST1683A"
        },
        material: "Biżuteria ze stali chirurgicznej / Biżuteria z literkami", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/112512-large_default/kolczyki-pozlacane-literka-a-kst1683a.jpg",
        image3: "https://hurt.ecarla.pl/112511-large_default/kolczyki-pozlacane-literka-a-kst1683a.jpg"
    },
    { 
        id: "16196", 
        name: "Kolczyki pozłacane literka B KST1683B",
        price: "6.89 zł", 
        image: "https://hurt.ecarla.pl/112747-large_default/kolczyki-pozlacane-literka-b-kst1683b.jpg",
        description: [
            "Kolczyki pozłacane 14 karatowym złotem cena dotyczy 1 sztuki Możesz je dopasować do swojej wymarzonej ślubnej kreacji jak i wieczorowych strojów.",
            "Cyrkonie pięknie się mienią przyciągając wzrok i nadając Ci dodatkowego blasku.",
            "Sprawdź bajeczne kształty w naszej nowej kolekcji biżuterii."
        ],
        specs: {
            "Wymiary": "1 cm x 2 cm",
            "Model": "KST1683B"
        },
        material: "Biżuteria ze stali chirurgicznej / Biżuteria z literkami", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/112516-large_default/kolczyki-pozlacane-literka-b-kst1683b.jpg",
        image3: "https://hurt.ecarla.pl/112513-large_default/kolczyki-pozlacane-literka-b-kst1683b.jpg"
    },
    { 
        id: "16199", 
        name: "Kolczyk pozłacany literka E KST1683E",
        price: "6.89 zł", 
        image: "https://hurt.ecarla.pl/112750-large_default/kolczyk-pozlacany-literka-e-kst1683e.jpg",
        description: [
            "Kolczyki pozłacane 14 karatowym złotem cena dotyczy 1 sztuki Możesz je dopasować do swojej wymarzonej ślubnej kreacji jak i wieczorowych strojów.",
            "Cyrkonie pięknie się mienią przyciągając wzrok i nadając Ci dodatkowego blasku.",
            "Sprawdź bajeczne kształty w naszej nowej kolekcji biżuterii."
        ],
        specs: {
            "Wymiary": "1 cm x 2 cm",
            "Model": "KST1683E"
        },
        material: "Biżuteria ze stali chirurgicznej / Biżuteria z literkami", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/112524-large_default/kolczyk-pozlacany-literka-e-kst1683e.jpg",
        image3: "https://hurt.ecarla.pl/112522-large_default/kolczyk-pozlacany-literka-e-kst1683e.jpg"
    },
    { 
        id: "16200", 
        name: "Kolczyk pozłacany literka F KST1683F",
        price: "6.89 zł", 
        image: "https://hurt.ecarla.pl/112751-large_default/kolczyk-pozlacany-literka-f-kst1683f.jpg",
        description: [
            "Kolczyki pozłacane 14 karatowym złotem cena dotyczy 1 sztuki Możesz je dopasować do swojej wymarzonej ślubnej kreacji jak i wieczorowych strojów.",
            "Cyrkonie pięknie się mienią przyciągając wzrok i nadając Ci dodatkowego blasku.",
            "Sprawdź bajeczne kształty w naszej nowej kolekcji biżuterii."
        ],
        specs: {
            "Wymiary": "1 cm x 2 cm",
            "Model": "KST1683F"
        },
        material: "Biżuteria ze stali chirurgicznej / Biżuteria z literkami", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/112526-large_default/kolczyk-pozlacany-literka-f-kst1683f.jpg",
        image3: "https://hurt.ecarla.pl/112525-large_default/kolczyk-pozlacany-literka-f-kst1683f.jpg"
    },
    { 
        id: "16201", 
        name: "Kolczyk pozłacany literka G KST1683G",
        price: "6.89 zł", 
        image: "https://hurt.ecarla.pl/112752-large_default/kolczyk-pozlacany-literka-g-kst1683g.jpg",
        description: [
            "Kolczyki pozłacane 14 karatowym złotem cena dotyczy 1 sztuki Możesz je dopasować do swojej wymarzonej ślubnej kreacji jak i wieczorowych strojów.",
            "Cyrkonie pięknie się mienią przyciągając wzrok i nadając Ci dodatkowego blasku.",
            "Sprawdź bajeczne kształty w naszej nowej kolekcji biżuterii."
        ],
        specs: {
            "Wymiary": "1 cm x 2 cm",
            "Model": "KST1683G"
        },
        material: "Biżuteria ze stali chirurgicznej / Biżuteria z literkami", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/112531-large_default/kolczyk-pozlacany-literka-g-kst1683g.jpg",
        image3: "https://hurt.ecarla.pl/112527-large_default/kolczyk-pozlacany-literka-g-kst1683g.jpg"
    },
    { 
        id: "16202", 
        name: "Kolczyk pozłacany literka I KST1683I",
        price: "6.89 zł", 
        image: "https://hurt.ecarla.pl/112753-large_default/kolczyk-pozlacany-literka-i-kst1683i.jpg",
        description: [
            "Kolczyki pozłacane 14 karatowym złotem cena dotyczy 1 sztuki Możesz je dopasować do swojej wymarzonej ślubnej kreacji jak i wieczorowych strojów.",
            "Cyrkonie pięknie się mienią przyciągając wzrok i nadając Ci dodatkowego blasku.",
            "Sprawdź bajeczne kształty w naszej nowej kolekcji biżuterii."
        ],
        specs: {
            "Wymiary": "1 cm x 2 cm",
            "Model": "KST1683I"
        },
        material: "Biżuteria ze stali chirurgicznej / Biżuteria z literkami", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/112534-large_default/kolczyk-pozlacany-literka-i-kst1683i.jpg",
        image3: "https://hurt.ecarla.pl/112532-large_default/kolczyk-pozlacany-literka-i-kst1683i.jpg"
    },
    { 
        id: "16208", 
        name: "Kolczyk pozłacany literka O KST1683O",
        price: "6.89 zł", 
        image: "https://hurt.ecarla.pl/112759-large_default/kolczyk-pozlacany-literka-o-kst1683o.jpg",
        description: [
            "Kolczyki pozłacane 14 karatowym złotem cena dotyczy 1 sztuki Możesz je dopasować do swojej wymarzonej ślubnej kreacji jak i wieczorowych strojów.",
            "Cyrkonie pięknie się mienią przyciągając wzrok i nadając Ci dodatkowego blasku.",
            "Sprawdź bajeczne kształty w naszej nowej kolekcji biżuterii."
        ],
        specs: {
            "Wymiary": "1 cm x 2 cm",
            "Model": "KST1683O"
        },
        material: "Biżuteria ze stali chirurgicznej / Biżuteria z literkami", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/112558-large_default/kolczyk-pozlacany-literka-o-kst1683o.jpg",
        image3: "https://hurt.ecarla.pl/112555-large_default/kolczyk-pozlacany-literka-o-kst1683o.jpg"
    },
    { 
        id: "16209", 
        name: "Kolczyk pozłacany literka P KST1683P",
        price: "6.89 zł", 
        image: "https://hurt.ecarla.pl/112560-large_default/kolczyk-pozlacany-literka-p-kst1683p.jpg",
        description: [
            "Kolczyki pozłacane 14 karatowym złotem cena dotyczy 1 sztuki Możesz je dopasować do swojej wymarzonej ślubnej kreacji jak i wieczorowych strojów.",
            "Cyrkonie pięknie się mienią przyciągając wzrok i nadając Ci dodatkowego blasku.",
            "Sprawdź bajeczne kształty w naszej nowej kolekcji biżuterii."
        ],
        specs: {
            "Wymiary": "1 cm x 2 cm",
            "Model": "KST1683P"
        },
        material: "Biżuteria ze stali chirurgicznej / Biżuteria z literkami", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/112760-large_default/kolczyk-pozlacany-literka-p-kst1683p.jpg",
        image3: "https://hurt.ecarla.pl/112566-large_default/kolczyk-pozlacany-literka-p-kst1683p.jpg"
    },
    { 
        id: "16210", 
        name: "Kolczyk pozłacany literka S KST1683S",
        price: "6.89 zł", 
        image: "https://hurt.ecarla.pl/112761-large_default/kolczyk-pozlacany-literka-s-kst1683s.jpg",
        description: [
            "Kolczyki pozłacane 14 karatowym złotem cena dotyczy 1 sztuki Możesz je dopasować do swojej wymarzonej ślubnej kreacji jak i wieczorowych strojów.",
            "Cyrkonie pięknie się mienią przyciągając wzrok i nadając Ci dodatkowego blasku.",
            "Sprawdź bajeczne kształty w naszej nowej kolekcji biżuterii."
        ],
        specs: {
            "Wymiary": "1 cm x 2 cm",
            "Model": "KST1683S"
        },
        material: "Biżuteria ze stali chirurgicznej / Biżuteria z literkami", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/112573-large_default/kolczyk-pozlacany-literka-s-kst1683s.jpg",
        image3: "https://hurt.ecarla.pl/112569-large_default/kolczyk-pozlacany-literka-s-kst1683s.jpg"
    },
    { 
        id: "16211", 
        name: "Kolczyk pozłacany literka R KST1683R",
        price: "6.89 zł", 
        image: "https://hurt.ecarla.pl/112762-large_default/kolczyk-pozlacany-literka-r-kst1683r.jpg",
        description: [
            "Kolczyki pozłacane 14 karatowym złotem cena dotyczy 1 sztuki Możesz je dopasować do swojej wymarzonej ślubnej kreacji jak i wieczorowych strojów.",
            "Cyrkonie pięknie się mienią przyciągając wzrok i nadając Ci dodatkowego blasku.",
            "Sprawdź bajeczne kształty w naszej nowej kolekcji biżuterii."
        ],
        specs: {
            "Wymiary": "1 cm x 2 cm",
            "Model": "KST1683R"
        },
        material: "Biżuteria ze stali chirurgicznej / Biżuteria z literkami", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/112575-large_default/kolczyk-pozlacany-literka-r-kst1683r.jpg",
        image3: "https://hurt.ecarla.pl/112574-large_default/kolczyk-pozlacany-literka-r-kst1683r.jpg"
    },
    { 
        id: "16212", 
        name: "Kolczyk pozłacany literka T KST1683T",
        price: "6.89 zł", 
        image: "https://hurt.ecarla.pl/112763-large_default/kolczyk-pozlacany-literka-t-kst1683t.jpg",
        description: [
            "Kolczyki pozłacane 14 karatowym złotem cena dotyczy 1 sztuki Możesz je dopasować do swojej wymarzonej ślubnej kreacji jak i wieczorowych strojów.",
            "Cyrkonie pięknie się mienią przyciągając wzrok i nadając Ci dodatkowego blasku.",
            "Sprawdź bajeczne kształty w naszej nowej kolekcji biżuterii."
        ],
        specs: {
            "Wymiary": "1 cm x 2 cm",
            "Model": "KST1683T"
        },
        material: "Biżuteria ze stali chirurgicznej / Biżuteria z literkami", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/112577-large_default/kolczyk-pozlacany-literka-t-kst1683t.jpg",
        image3: "https://hurt.ecarla.pl/112576-large_default/kolczyk-pozlacany-literka-t-kst1683t.jpg"
    },
    { 
        id: "16213", 
        name: "Kolczyk pozłacany literka U KST1683U",
        price: "6.89 zł", 
        image: "https://hurt.ecarla.pl/112580-large_default/kolczyk-pozlacany-literka-u-kst1683u.jpg",
        description: [
            "Kolczyki pozłacane 14 karatowym złotem cena dotyczy 1 sztuki Możesz je dopasować do swojej wymarzonej ślubnej kreacji jak i wieczorowych strojów.",
            "Cyrkonie pięknie się mienią przyciągając wzrok i nadając Ci dodatkowego blasku.",
            "Sprawdź bajeczne kształty w naszej nowej kolekcji biżuterii."
        ],
        specs: {
            "Wymiary": "1 cm x 2 cm",
            "Model": "KST1683U"
        },
        material: "Biżuteria ze stali chirurgicznej / Biżuteria z literkami", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/112578-large_default/kolczyk-pozlacany-literka-u-kst1683u.jpg",
        image3: null
    },
    { 
        id: "16214", 
        name: "Kolczyk pozłacany literka W KST1683W",
        price: "6.89 zł", 
        image: "https://hurt.ecarla.pl/112764-large_default/kolczyk-pozlacany-literka-w-kst1683w.jpg",
        description: [
            "Kolczyki pozłacane 14 karatowym złotem cena dotyczy 1 sztuki Możesz je dopasować do swojej wymarzonej ślubnej kreacji jak i wieczorowych strojów.",
            "Cyrkonie pięknie się mienią przyciągając wzrok i nadając Ci dodatkowego blasku.",
            "Sprawdź bajeczne kształty w naszej nowej kolekcji biżuterii."
        ],
        specs: {
            "Wymiary": "1 cm x 2 cm",
            "Model": "KST1683W"
        },
        material: "Biżuteria ze stali chirurgicznej / Biżuteria z literkami", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/112582-large_default/kolczyk-pozlacany-literka-w-kst1683w.jpg",
        image3: "https://hurt.ecarla.pl/112581-large_default/kolczyk-pozlacany-literka-w-kst1683w.jpg"
    },
    { 
        id: "16215", 
        name: "Kolczyk pozłacany literka Z KST1683Z",
        price: "6.89 zł", 
        image: "https://hurt.ecarla.pl/112765-large_default/kolczyk-pozlacany-literka-z-kst1683z.jpg",
        description: [
            "Kolczyki pozłacane 14 karatowym złotem cena dotyczy 1 sztuki Możesz je dopasować do swojej wymarzonej ślubnej kreacji jak i wieczorowych strojów.",
            "Cyrkonie pięknie się mienią przyciągając wzrok i nadając Ci dodatkowego blasku.",
            "Sprawdź bajeczne kształty w naszej nowej kolekcji biżuterii."
        ],
        specs: {
            "Wymiary": "1 cm x 2 cm",
            "Model": "KST1683Z"
        },
        material: "Biżuteria ze stali chirurgicznej / Biżuteria z literkami", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/112584-large_default/kolczyk-pozlacany-literka-z-kst1683z.jpg",
        image3: "https://hurt.ecarla.pl/112583-large_default/kolczyk-pozlacany-literka-z-kst1683z.jpg"
    },
    { 
        id: "16217", 
        name: "Naszyjnik stal chirurgiczna literka B platerowana złotem NST995B",
        price: "6.15 zł", 
        image: "https://hurt.ecarla.pl/112600-large_default/naszyjnik-stal-chirurgiczna-literka-b-platerowana-zlotem-nst995b.jpg",
        description: [
            "Modny naszyjnik ze stali chirurgicznej. Nowa kolekcja biżuterii ze stali nierdzewnej platerowanej 14 karatowym złotem.",
            "Świetnie pasuje do eleganckich, jak również do codziennych stylizacji. Elegancki dodatek na każdą okazję, do sukienek, swetrów i bluzek.",
            "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie ciemnieje!"
        ],
        specs: {
            "Długość naszyjnika": "45 + 4,0 cm",
            "Rozmiar zawieszki": "Podana na zdjęciu",
            "Model": "NST995B"
        },
        material: "Biżuteria ze stali chirurgicznej / Biżuteria z literkami", 
        color: "Złoty", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/112598-large_default/naszyjnik-stal-chirurgiczna-literka-b-platerowana-zlotem-nst995b.jpg",
        image3: "https://hurt.ecarla.pl/112599-large_default/naszyjnik-stal-chirurgiczna-literka-b-platerowana-zlotem-nst995b.jpg"
    },
    { 
        id: "16431", 
        name: "Kolczyki stal chirurgiczna złote ażurowe listki sztyft KST1811",
        price: "11.32 zł", 
        image: "https://hurt.ecarla.pl/113733-large_default/kolczyki-stal-chirurgiczna-zlote-azurowe-listki-sztyft-kst1811.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej złotem.",
            "Eleganckie i stylowe kolczyki."
        ],
        specs: {
            "Wymiary": "3,8 x 1,9 cm",
            "Model": "KST1811"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki", 
        color: "Złoty", 
        availability: "W magazynie", 
        image2: null
    },
    { 
        id: "16628", 
        name: "Kolczyki ze stali szlachetnej renifer sztyft KST1846",
        price: "9.96 zł", 
        image: "https://hurt.ecarla.pl/114606-large_default/kolczyki-ze-stali-szlachetnej-renifer-sztyft-kst1846.jpg",
        description: [
            "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje.",
            "Kolczyki bardzo efektowne. Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
            "W naszych kolczykach każda kobieta poczuje się wyjątkowo i pięknie."
        ],
        specs: {
            "Wymiary": "ok. 1,8 x 0,9 cm",
            "Model": "KST1846"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki", 
        color: "Srebrny / Stalowy", 
        availability: "W magazynie", 
        image2: null
    },
    { 
        id: "16793", 
        name: "Kolczyki ze stali chirurgicznej pozłacane sztyfty KST1891",
        price: "19.93 zł", 
        image: "https://hurt.ecarla.pl/115303-large_default/kolczyki-ze-stali-chirurgicznej-pozlacane-sztyfty-kst1891.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
            "Eleganckie i stylowe kolczyki."
        ],
        specs: {
            "Wymiary": "2,8 x 1,3 cm",
            "Model": "KST1891"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: null
    },
    { 
        id: "17095", 
        name: "Kolczyki ze stali chirurgicznej pozłacane KST1911",
        price: "12.18 zł", 
        image: "https://hurt.ecarla.pl/116575-large_default/kolczyki-ze-stali-chirurgicznej-pozlacane-kst1911.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
            "Eleganckie i stylowe kolczyki."
        ],
        specs: {
            "Wymiary": "3,1 x 0,8 cm",
            "Model": "KST1911"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: null
    },
    { 
        id: "17103", 
        name: "Kolczyki ze stali chirurgicznej pozłacane KST1921",
        price: "12.18 zł", 
        image: "https://hurt.ecarla.pl/116592-large_default/kolczyki-ze-stali-chirurgicznej-pozlacane-kst1921.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
            "Eleganckie i stylowe kolczyki."
        ],
        specs: {
            "Wymiary": "2,5 x 1,2 cm",
            "Model": "KST1921"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: null
    },
    { 
        id: "17107", 
        name: "Kolczyki ze stali chirurgicznej pozłacane KST1925",
        price: "20.30 zł", 
        image: "https://hurt.ecarla.pl/116600-large_default/kolczyki-ze-stali-chirurgicznej-pozlacane-kst1925.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
            "Eleganckie i stylowe kolczyki."
        ],
        specs: {
            "Wymiary": "4,2 x 1,8 cm",
            "Model": "KST1925"
        },
        material: "Biżuteria ze stali chirurgicznej", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: null
    },
    { 
        id: "17127", 
        name: "Pojemnik organizer na akcesoria OR58WZ3",
        price: "7.38 zł", 
        image: "https://hurt.ecarla.pl/116663-large_default/pojemnik-organizer-na-akcesoria-or58wz3.jpg",
        description: [
            "Wspaniały organizer, pojemnik na akcesoria.",
            "Piękne wykonanie - najwyższa jakość."
        ],
        specs: {
            "Wymiary": "21 x 25 x 14 cm",
            "Model": "OR58WZ3",
            "EAN": "5900779372009"
        },
        material: "Przechowywanie / Organizery do pokoju dziecka", 
        color: "Wielokolorowy / Wzór", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/116656-large_default/pojemnik-organizer-na-akcesoria-or58wz3.jpg",
        image3: "https://hurt.ecarla.pl/116657-large_default/pojemnik-organizer-na-akcesoria-or58wz3.jpg"
    },
    { 
        id: "17340", 
        name: "Kolczyki ze stali szlachetnej pozłacanej sztyft KST1982",
        price: "15.99 zł", 
        image: "https://hurt.ecarla.pl/117576-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-wkretki-kst1982.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
            "Eleganckie i stylowe kolczyki.",
            "Producent Xuping."
        ],
        specs: {
            "Wymiary produktu": "5,0 x 1,1 cm",
            "Rodzaj zapięcia": "Sztyft",
            "Model": "KST1982"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/117577-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-wkretki-kst1982.jpg",
        image3: null
    },
    { 
        id: "17377", 
        name: "Kolczyki ze stali szlachetnej pozłacanej sztyft KST1992",
        price: "9.72 zł", 
        image: "https://hurt.ecarla.pl/117803-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-sztyft-kst1992.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
            "Eleganckie i stylowe kolczyki.",
            "Producent Xuping."
        ],
        specs: {
            "Średnica produktu": "0,6 cm",
            "Rodzaj zapięcia": "Sztyft",
            "Model": "KST1992"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/117802-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-sztyft-kst1992.jpg",
        image3: null
    },
    { 
        id: "17412", 
        name: "KOLCZYKI WISZĄCE KÓŁKA GLAM K996",
        price: "6.15 zł", 
        image: "https://hurt.ecarla.pl/117899-large_default/kolczyki-wiszace-kolka-glam-k996.jpg",
        description: [
            "Kolczyki w kolorze złota.",
            "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
            "Biżuteria antyalergiczna, nie zawiera niklu ani chromu."
        ],
        specs: {
            "Szerokość": "1,5 cm",
            "Długość": "2,7 cm",
            "Model": "K996",
            "EAN": "5903678511333"
        },
        material: "Biżuteria sztuczna / Kolczyki", 
        color: "Złoty", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/117901-large_default/kolczyki-wiszace-kolka-glam-k996.jpg",
        image3: "https://hurt.ecarla.pl/117900-large_default/kolczyki-wiszace-kolka-glam-k996.jpg"
    },
    { 
        id: "17413", 
        name: "KOLCZYKI KOŁA ZŁOTE K930",
        price: "6.03 zł", 
        image: "https://hurt.ecarla.pl/190899-large_default/kolczyki-kola-zlote-k930.jpg",
        description: [
            "Kolczyki koła w kolorze złotym.",
            "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
            "Kolczyki bardzo efektowne. Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju."
        ],
        specs: {
            "Wymiary": "3 cm / 1,0 cm",
            "Model": "K930",
            "EAN": "5903678511340"
        },
        material: "Biżuteria sztuczna / Kolczyki", 
        color: "Złoty", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/117903-large_default/kolczyki-kola-zlote-k930.jpg",
        image3: "https://hurt.ecarla.pl/117904-large_default/kolczyki-kola-zlote-k930.jpg"
    }
], 
[
    { 
        id: "18848", 
        name: "Kolczyki ze stali szlachetnej pozłacanej sztyft KST2238",
        price: "8 zł", 
        image: "https://hurt.ecarla.pl/123946-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-sztyft-kst2238.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. WYMIARY:",
            "wymiary produktu: 1,9 cm  x 0,4 cm",
            "rodzaj zapięcia: sztyft producent: Xuping"
        ],
        specs: {
            "Model": "KST2238"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: null,
        image3: null
    },
    { 
        id: "18851", 
        name: "Kolczyki ze stali szlachetnej pozłacanej sztyft KST2232",
        price: "14.15 zł", 
        image: "https://hurt.ecarla.pl/123951-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-sztyft-kst2232.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. WYMIARY:",
            "wymiary produktu: 2,3 cm  x 1,2 cm",
            "rodzaj zapięcia: sztyft producent: Xuping"
        ],
        specs: {
            "Model": "KST2232"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: null,
        image3: null
    },
    { 
        id: "18868", 
        name: "Kolczyki ze stali szlachetnej pozłacanej sztyft KST2224",
        price: "5.78 zł", 
        image: "https://hurt.ecarla.pl/123986-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-sztyft-kst2224.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. WYMIARY:",
            "wymiary produktu: 0,1 cm  x 0,1 cm",
            "rodzaj zapięcia: sztyft producent: Xuping"
        ],
        specs: {
            "Model": "KST2224"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: null,
        image3: null
    },
    { 
        id: "18996", 
        name: "Kolczyki ze stali szlachetnej pozłacanej KST2279",
        price: "9.84 zł", 
        image: "https://hurt.ecarla.pl/124493-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst2279.jpg",
        description: [
            "KOLCZYKI ZE STALI CHIRURGICZNEJ PLATEROWANEJ 14 KARATOWYM ZŁOTEM ",
            "Eleganckie i stylowe kolczyki. WYMIARY:",
            "wymiary produktu: 1 cm x 0,5 cm",
            "rodzaj zapięcia: angielskie",
            "producent: Xuping"
        ],
        specs: {
            "Model": "KST2279"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: null,
        image3: null
    },
    { 
        id: "19010", 
        name: "Kolczyk nausznica ze stali szlachetnej pozłacanej KST2280 (1 sztuka)",
        price: "32.6 zł", 
        image: "https://hurt.ecarla.pl/124527-large_default/-kolczyk-nausznica-ze-stali-szlachetnej-pozlacanej-kst2280-1-sztuka.jpg",
        description: [
            "KOLCZYKI ZE STALI CHIRURGICZNEJ PLATEROWANEJ 14 KARATOWYM ZŁOTEM ",
            "Eleganckie i stylowe kolczyki. WYMIARY:",
            "wymiary produktu:",
            "element 1: 2.2 cm x 1 cm",
            "element 2: 3,5 cm średnicy",
            "rodzaj zapięcia: sztyft",
            "producent: Xuping"
        ],
        specs: {
            "Model": "KST2280"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: null,
        image3: null
    },
    { 
        id: "19067", 
        name: "Kolczyki ze stali szlachetnej pozłacanej KST2287",
        price: "7.87 zł", 
        image: "https://hurt.ecarla.pl/124653-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst2287.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 18 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. WYMIARY:",
            "wymiary produktu: 1,2 x 1,2 cm",
            "rodzaj zapięcia: sztyft",
            "Producent Xuping"
        ],
        specs: {
            "Model": "KST2287"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: null,
        image3: null
    },
    { 
        id: "19086", 
        name: "Kolczyki ze stali szlachetnej pozłacanej KST2369",
        price: "13.78 zł", 
        image: "https://hurt.ecarla.pl/124692-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst2369.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 18 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. WYMIARY:",
            "wymiary produktu: 1 x 0,5 cm",
            "rodzaj zapięcia: sztyft",
            "Producent Xuping"
        ],
        specs: {
            "Model": "KST2369"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: null,
        image3: null
    },
    { 
        id: "19759", 
        name: "Kolczyki ze stali szlachetnej pozłacanej sztyft KST2408",
        price: "9.96 zł", 
        image: "https://hurt.ecarla.pl/127516-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-sztyft-kst2408.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. WYMIARY:",
            "średnica produktu: 1,2 x 1,2 cm",
            "rodzaj zapięcia: sztyft",
            "Producent Xuping"
        ],
        specs: {
            "Model": "KST2408"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: null,
        image3: null
    },
    { 
        id: "19772", 
        name: "Kolczyki ze stali szlachetnej pozłacanej KST2449",
        price: "11.19 zł", 
        image: "https://hurt.ecarla.pl/127544-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst2449.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. WYMIARY:",
            "średnica produktu:  1 x 1 cm",
            "rodzaj zapięcia: Sztyft",
            "Producent Xuping"
        ],
        specs: {
            "Model": "KST2449"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: null,
        image3: null
    },
    { 
        id: "19783", 
        name: "Kolczyki ze stali szlachetnej pozłacanej KST2437",
        price: "14.15 zł", 
        image: "https://hurt.ecarla.pl/127566-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst2437.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. WYMIARY:",
            "średnica produktu: 7,5 x 0,7 cm",
            "rodzaj zapięcia: Sztyft",
            "Producent Xuping"
        ],
        specs: {
            "Model": "KST2437"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: null,
        image3: null
    },
    { 
        id: "19786", 
        name: "Kolczyki ze stali szlachetnej pozłacanej KST2433",
        price: "21.65 zł", 
        image: "https://hurt.ecarla.pl/127573-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst2433.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. WYMIARY:",
            "średnica produktu: 3 x 1 cm",
            "rodzaj zapięcia: Zapięcie angielskie",
            "Producent Xuping"
        ],
        specs: {
            "Model": "KST2433"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: null,
        image3: null
    },
    { 
        id: "19794", 
        name: "KOLCZYKI z perełkami i kryształkiem K1572",
        price: "8.61 zł", 
        image: "https://hurt.ecarla.pl/127594-large_default/kolczyki-z-perelkami-i-krysztalkiem-k1572.jpg",
        description: [
            "Kolczyki sztuczne",
            "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
            "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą ! A wtedy posłuży bardzo długo!",
            "Wymiary 8 x 0,7 cm "
        ],
        specs: {
            "Model": "K1572",
            "EAN": "5903678526627"
        },
        material: "Biżuteria sztuczna / Kolczyki", 
        color: "Wielokolorowy", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/127595-large_default/kolczyki-z-perelkami-i-krysztalkiem-k1572.jpg",
        image3: null
    },
    { 
        id: "19795", 
        name: "KOLCZYKI Vintage z kamieniem K1575",
        price: "7.13 zł", 
        image: "https://hurt.ecarla.pl/127598-large_default/kolczyki-vintage-z-kamieniem-k1575.jpg",
        description: [
            "Kolczyki sztuczne",
            "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
            "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą ! A wtedy posłuży bardzo długo!",
            "Wymiary 3,5 x 1,4 cm "
        ],
        specs: {
            "Model": "K1575",
            "EAN": "5903678526641"
        },
        material: "Biżuteria sztuczna / Kolczyki", 
        color: "Wielokolorowy", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/127599-large_default/kolczyki-vintage-z-kamieniem-k1575.jpg",
        image3: null
    },
    { 
        id: "19796", 
        name: "KOLCZYKI Vintage z kokardką jasne K1577",
        price: "8.61 zł", 
        image: "https://hurt.ecarla.pl/127603-large_default/kolczyki-vintage-z-kokardka-jasne-k1577.jpg",
        description: [
            "Kolczyki sztuczne",
            "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
            "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą ! A wtedy posłuży bardzo długo!",
            "Wymiary 4,5 x 1,7 cm "
        ],
        specs: {
            "Model": "K1577",
            "EAN": "5903678526665"
        },
        material: "Biżuteria sztuczna / Kolczyki", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/127602-large_default/kolczyki-vintage-z-kokardka-jasne-k1577.jpg",
        image3: null
    },
    { 
        id: "19798", 
        name: "KOLCZYKI z perełkami długie K1579",
        price: "8.61 zł", 
        image: "https://hurt.ecarla.pl/127612-large_default/kolczyki-z-perelkami-dlugie-k1579.jpg",
        description: [
            "Kolczyki sztuczne",
            "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
            "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą ! A wtedy posłuży bardzo długo!",
            "Wymiary 9 x 1,5 cm "
        ],
        specs: {
            "Model": "K1579",
            "EAN": "5903678526689"
        },
        material: "Biżuteria sztuczna / Kolczyki", 
        color: "Wielokolorowy", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/127613-large_default/kolczyki-z-perelkami-dlugie-k1579.jpg",
        image3: null
    },
    { 
        id: "19800", 
        name: "KOLCZYKI długie K1581",
        price: "8.61 zł", 
        image: "https://hurt.ecarla.pl/127620-large_default/kolczyki-dlugie-k1581.jpg",
        description: [
            "Kolczyki sztuczne",
            "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
            "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą ! A wtedy posłuży bardzo długo!",
            "Wymiary:11,5 x 2 cm "
        ],
        specs: {
            "Model": "K1581",
            "EAN": "5903678526702"
        },
        material: "Biżuteria sztuczna / Kolczyki", 
        color: "Wielokolorowy", 
        availability: "W magazynie", 
        image2: "https://hurt.ecarla.pl/127621-large_default/kolczyki-dlugie-k1581.jpg",
        image3: "https://hurt.ecarla.pl/127622-large_default/kolczyki-dlugie-k1581.jpg"
    },
    { 
        id: "19894", 
        name: "Kolczyki ze stali szlachetnej pozłacanej KST2464",
        price: "17.34 zł", 
        image: "https://hurt.ecarla.pl/127826-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst2464.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. Kolor: Jasne Złoto WYMIARY:",
            "wymiary produktu:  1,1 x 1 cm",
            "rodzaj zapięcia: Sztyft",
            "Producent Xuping"
        ],
        specs: {
            "Model": "KST2464"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki", 
        color: "Pozłacany", 
        availability: "W magazynie", 
        image2: null,
        image3: null
    }
],[
    {
        id: "20322",
        name: "KOLCZYKI delikatne listki kryształki K1591",
        price: "7.38 zł",
        image: "https://hurt.ecarla.pl/130135-large_default/-kolczyki-delikatne-listki-krysztalki-k1591.jpg",
        description: [
            "Kolczyki sztuczne",
            "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
            "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą ! A wtedy posłuży bardzo długo!"
        ],
        specs: {
            "Model": "K1591",
            "EAN": "5903678530464"
        },
        material: "Biżuteria sztuczna / Kolczyki",
        color: "Wielokolorowy",
        availability: "W magazynie",
        image2: "https://hurt.ecarla.pl/130137-large_default/-kolczyki-delikatne-listki-krysztalki-k1591.jpg",
        image3: "https://hurt.ecarla.pl/130138-large_default/-kolczyki-delikatne-listki-krysztalki-k1591.jpg"
    },
    {
        id: "20330",
        name: "KOLCZYKI zausznice złote trójkąty K1600",
        price: "6.15 zł",
        image: "https://hurt.ecarla.pl/130174-large_default/kolczyki-zausznice-zlote-trojkaty-k1600.jpg",
        description: [
            "Kolczyki sztuczne",
            "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
            "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą ! A wtedy posłuży bardzo długo!"
        ],
        specs: {
            "Model": "K1600",
            "EAN": "5903678530549"
        },
        material: "Biżuteria sztuczna / Kolczyki",
        color: "Pozłacany",
        availability: "W magazynie",
        image2: "https://hurt.ecarla.pl/130175-large_default/kolczyki-zausznice-zlote-trojkaty-k1600.jpg",
        image3: "https://hurt.ecarla.pl/130176-large_default/kolczyki-zausznice-zlote-trojkaty-k1600.jpg"
    },
    {
        id: "20385",
        name: "Kolczyki ze stali szlachetnej pozłacanej KST2568",
        price: "14.88 zł",
        image: "https://hurt.ecarla.pl/130397-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst2568.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 18 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. Kolor: Złoto WYMIARY:",
            "wymiary produktu:  1,7 x 1 cm",
            "rodzaj zapięcia: Angielskie Zapięcie",
            "Producent Xuping"
        ],
        specs: {
            "Model": "KST2568"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki",
        color: "Pozłacany",
        availability: "W magazynie",
        image2: null,
        image3: null
    },
    {
        id: "20591",
        name: "Kolczyki ze stali szlachetnej pozłacanej KST2605CZ",
        price: "18.7 zł",
        image: "https://hurt.ecarla.pl/131387-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst2605cz.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. Kolor: Jasne Złoto WYMIARY:",
            "wymiary produktu: 3 x 1,5 cm",
            "rodzaj zapięcia: Sztyft",
            "Producent Xuping"
        ],
        specs: {
            "Model": "KST2605CZ"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki",
        color: "Pozłacany",
        availability: "W magazynie",
        image2: null,
        image3: null
    },
    {
        id: "20594",
        name: "Kolczyki ze stali szlachetnej pozłacanej KST2608",
        price: "22.39 zł",
        image: "https://hurt.ecarla.pl/131393-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst2608.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. Kolor: Jasne Złoto WYMIARY:",
            "wymiary produktu: 3 x 2,5 cm",
            "rodzaj zapięcia: Sztyft",
            "Producent Xuping"
        ],
        specs: {
            "Model": "KST2608"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki",
        color: "Pozłacany",
        availability: "W magazynie",
        image2: null,
        image3: null
    },
    {
        id: "20687",
        name: "Kolczyki ślubne wiszące z kryształkami stal chirurgiczna KSL70S",
        price: "28.29 zł",
        image: "https://hurt.ecarla.pl/131689-large_default/kolczyki-slubne-wiszace-z-krysztalkami-stal-chirurgiczna-ksl70s.jpg",
        description: [
            "Kolekcja biżuterii ślubnejNowe, modne wzory wykonywane ręcznie ze stopów jubilerskich.Starannie dobrane materiały sprawiają, że biżuteria nie zmienia koloru i jest hipoalergiczna, a także jest wytrzymała dzięki odpowiedniej twardości stopów.Zadbaliśmy również o to aby do jej wykonania użyte zostały selekcjonowane cyrkonie dzięki czemu biżuteria ta charakteryzuje się niezwykłym blaskiem.Wszystkie modele będą na pewno pięknym dodatkiem do sukien ślubnych Państwa klientów.Wymiary:2,6 x 2 cm"
        ],
        specs: {
            "Model": "KSL70S",
            "EAN": "5903678530877"
        },
        material: "Biżuteria ze stali chirurgicznej / Biżuteria ślubna / Kolczyki",
        color: "Srebrny",
        availability: "W magazynie",
        image2: "https://hurt.ecarla.pl/131690-large_default/kolczyki-slubne-wiszace-z-krysztalkami-stal-chirurgiczna-ksl70s.jpg",
        image3: "https://hurt.ecarla.pl/131691-large_default/kolczyki-slubne-wiszace-z-krysztalkami-stal-chirurgiczna-ksl70s.jpg"
    },
    {
        id: "20753",
        name: "Złote Kolczyki K1612",
        price: "6.89 zł",
        image: "https://hurt.ecarla.pl/131947-large_default/zlote-kolczyki-k1612.jpg",
        description: [
            "Delikatne kolczyki",
            "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
            "Wymiary:",
            "0,5 x 0,3 cm"
        ],
        specs: {
            "Model": "K1612",
            "EAN": "5903678532277"
        },
        material: "Biżuteria sztuczna / Kolczyki",
        color: "Pozłacany",
        availability: "W magazynie",
        image2: "https://hurt.ecarla.pl/131948-large_default/zlote-kolczyki-k1612.jpg",
        image3: "https://hurt.ecarla.pl/131949-large_default/zlote-kolczyki-k1612.jpg"
    },
    {
        id: "20755",
        name: "Złote Kolczyki K1614",
        price: "8.61 zł",
        image: "https://hurt.ecarla.pl/131959-large_default/zlote-kolczyki-k1614.jpg",
        description: [
            "Delikatne kolczyki",
            "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
            "Wymiary:",
            "1,2 x 1,0 cm"
        ],
        specs: {
            "Model": "K1614",
            "EAN": "5903678532291"
        },
        material: "Biżuteria sztuczna / Kolczyki",
        color: "Pozłacany",
        availability: "W magazynie",
        image2: "https://hurt.ecarla.pl/131960-large_default/zlote-kolczyki-k1614.jpg",
        image3: null
    },
    {
        id: "20759",
        name: "Złote Kolczyki K1618",
        price: "8.24 zł",
        image: "https://hurt.ecarla.pl/131981-large_default/zlote-kolczyki-k1618.jpg",
        description: [
            "Delikatne kolczyki",
            "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
            "Wymiary:",
            "6 x 0,3 cm"
        ],
        specs: {
            "Model": "K1618",
            "EAN": "5903678532338"
        },
        material: "Biżuteria sztuczna / Kolczyki",
        color: "Pozłacany",
        availability: "W magazynie",
        image2: "https://hurt.ecarla.pl/131982-large_default/zlote-kolczyki-k1618.jpg",
        image3: "https://hurt.ecarla.pl/131983-large_default/zlote-kolczyki-k1618.jpg"
    },
    {
        id: "20760",
        name: "Złote Kolczyki K1619",
        price: "8.24 zł",
        image: "https://hurt.ecarla.pl/131987-large_default/zlote-kolczyki-k1619.jpg",
        description: [
            "Delikatne kolczyki",
            "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
            "Wymiary:",
            "0,7 x 0,7 cm"
        ],
        specs: {
            "Model": "K1619",
            "EAN": "5903678532345"
        },
        material: "Biżuteria sztuczna / Kolczyki",
        color: "Pozłacany",
        availability: "W magazynie",
        image2: "https://hurt.ecarla.pl/131988-large_default/zlote-kolczyki-k1619.jpg",
        image3: null
    },
    {
        id: "21199",
        name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem KST2642",
        price: "12.55 zł",
        image: "https://hurt.ecarla.pl/133936-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2642.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem Eleganckie i stylowe kolczyki.Kolor:  Jasne złotoWymiary:1,3 x 1,3 cmRodzaj zapięcia: sztyftSTAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje.Producent: Xuping"
        ],
        specs: {
            "Model": "KST2642"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki",
        color: "Pozłacany",
        availability: "W magazynie",
        image2: null,
        image3: null
    },
    {
        id: "21201",
        name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem KST2644",
        price: "11.19 zł",
        image: "https://hurt.ecarla.pl/133940-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2644.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. Kolor:  Jasne złoto Wymiary:",
            "10,0 x 0,5 cm",
            "Rodzaj zapięcia: sztyft STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje. Producent: Xuping"
        ],
        specs: {
            "Model": "KST2644"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki",
        color: "Pozłacany",
        availability: "W magazynie",
        image2: null,
        image3: null
    },
    {
        id: "21207",
        name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem KST2650",
        price: "13.53 zł",
        image: "https://hurt.ecarla.pl/133952-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2650.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. Kolor:  Jasne złoto Wymiary:",
            "1,5 x 0,5 cm",
            "Rodzaj zapięcia: sztyf STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje. Producent: Xuping"
        ],
        specs: {
            "Model": "KST2650"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki",
        color: "Pozłacany",
        availability: "W magazynie",
        image2: null,
        image3: null
    },
    {
        id: "21219",
        name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem KST2662",
        price: "18.82 zł",
        image: "https://hurt.ecarla.pl/133976-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2662.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. Kolor:  Jasne złoto Wymiary:",
            "3,3 x 1,0 cm",
            "Rodzaj zapięcia: angielskie zapięcie STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje. Producent: Xuping"
        ],
        specs: {
            "Model": "KST2662"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki",
        color: "Pozłacany",
        availability: "W magazynie",
        image2: null,
        image3: null
    },
    {
        id: "21974",
        name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem KST2793",
        price: "20.30 zł",
        image: "https://hurt.ecarla.pl/137006-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2793.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. Kolor:  Jasne złoto Wymiary:",
            "2,5cm x 1.3cm",
            "Rodzaj zapięcia: zapięcie angielskie STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje. Producent: Xuping"
        ],
        specs: {
            "Model": "KST2793"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki",
        color: "Pozłacany",
        availability: "W magazynie",
        image2: null,
        image3: null
    },
    {
        id: "21985",
        name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem KST2801ZIE",
        price: "19.07 zł",
        image: "https://hurt.ecarla.pl/137031-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2801zie.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. Kolor:  Jasne złoto Wymiary: Średnica: 2cm ",
            "rodzaj zapięcia:  zapięcie angielskie STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje. Producent: Xuping"
        ],
        specs: {
            "Model": "KST2801ZIE"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki",
        color: "Pozłacany",
        availability: "W magazynie",
        image2: null,
        image3: null
    },
    {
        id: "21986",
        name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem KST2801CZ",
        price: "19.07 zł",
        image: "https://hurt.ecarla.pl/137033-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2801cz.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. Kolor:  Jasne złoto Wymiary: Średnica: 2cm ",
            "rodzaj zapięcia:  zapięcie angielskie STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje. Producent: Xuping"
        ],
        specs: {
            "Model": "KST2801CZ"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki",
        color: "Pozłacany",
        availability: "W magazynie",
        image2: null,
        image3: null
    },
    {
        id: "22036",
        name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem KST2805",
        price: "18.40 zł",
        image: "https://hurt.ecarla.pl/137201-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2805.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. Kolor:  Jasne złoto Wymiary: średnica: 2cm ",
            "rodzaj zapięcia:  sztyft STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje. Producent: Xuping"
        ],
        specs: {
            "Model": "KST2805"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki",
        color: "Pozłacany",
        availability: "W magazynie",
        image2: null,
        image3: null
    },
    {
        id: "22039",
        name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem KST2807ZIE",
        price: "18.39 zł",
        image: "https://hurt.ecarla.pl/137198-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2807zie.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. Kolor:  Jasne złoto Wymiary: średnica: 2cm ",
            "rodzaj zapięcia:  sztyft STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje. Producent: Xuping"
        ],
        specs: {
            "Model": "KST2807ZIE"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki",
        color: "Pozłacany",
        availability: "W magazynie",
        image2: null,
        image3: null
    },
    {
        id: "22046",
        name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem KST2814",
        price: "20.91 zł",
        image: "https://hurt.ecarla.pl/137191-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2814.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. Kolor:  Jasne złoto Wymiary: Wymiary: długość: 4,5 cm  rodzaj zapięcia: sztyft STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje. Producent: Xuping"
        ],
        specs: {
            "Model": "KST2814"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki",
        color: "Pozłacany",
        availability: "W magazynie",
        image2: null,
        image3: null
    },
    {
        id: "22183",
        name: "Kolczyki ze stali szlachetnej pozłacanej KST2818",
        price: "28.23 zł",
        image: "https://hurt.ecarla.pl/137589-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst2818.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. WYMIARY:",
            "7 x 1,8 cm",
            "rodzaj zapięcia: sztyft",
            "Producent Xuping"
        ],
        specs: {
            "Model": "KST2818"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki",
        color: "Pozłacany",
        availability: "W magazynie",
        image2: null,
        image3: null
    },
    {
        id: "22197",
        name: "Kolczyki ze stali szlachetnej pozłacanej KST2832",
        price: "24.05 zł",
        image: "https://hurt.ecarla.pl/137617-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst2832.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. WYMIARY:",
            "6,5 x 1 cm",
            "rodzaj zapięcia: sztyft",
            "Producent Xuping"
        ],
        specs: {
            "Model": "KST2832"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki",
        color: "Pozłacany",
        availability: "W magazynie",
        image2: null,
        image3: null
    },
    {
        id: "22307",
        name: "Kolczyki ze stali szlachetnej pozłacanej sztyft KST2090",
        price: "9.96 zł",
        image: "https://hurt.ecarla.pl/138017-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-sztyft-kst2090.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 18 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. WYMIARY:",
            "wymiary produktu: 1,2 x 1,2 cm",
            "rodzaj zapięcia: sztyft",
            "Producent Xuping"
        ],
        specs: {
            "Model": "KST2090"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki",
        color: "Pozłacany",
        availability: "W magazynie",
        image2: null,
        image3: null
    },
    {
        id: "22308",
        name: "Kolczyki ze stali szlachetnej pozłacanej sztyft KST2091",
        price: "12.55 zł",
        image: "https://hurt.ecarla.pl/138018-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-sztyft-kst2091.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 18 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. WYMIARY:",
            "wymiary produktu: 1,5 0,7 cm",
            "rodzaj zapięcia: sztyft",
            "Producent Xuping"
        ],
        specs: {
            "Model": "KST2091",
            "EAN": "5903678541149"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki",
        color: "Pozłacany",
        availability: "W magazynie",
        image2: null,
        image3: null
    },
    {
        id: "22314",
        name: "Kolczyki ze stali chirurgicznej pozłacane sztyft KST2143",
        price: "16.24 zł",
        image: "https://hurt.ecarla.pl/138026-large_default/kolczyki-ze-stali-chirurgicznej-pozlacane-sztyft-kst2143.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
            "Eleganckie i stylowe kolczyki. WYMIARY:",
            "1,2 cm rodzaj zapięcia: sztyft",
            "Producent Xuping"
        ],
        specs: {
            "Model": "KST2143",
            "EAN": "5903678537654"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki",
        color: "Pozłacany",
        availability: "W magazynie",
        image2: "https://hurt.ecarla.pl/138027-large_default/kolczyki-ze-stali-chirurgicznej-pozlacane-sztyft-kst2143.jpg",
        image3: null
    },
    {
        id: "22318",
        name: "Kolczyki ze stali chirurgicznej pozłacane sztyft KST2163",
        price: "11.69 zł",
        image: "https://hurt.ecarla.pl/138031-large_default/kolczyki-ze-stali-chirurgicznej-pozlacane-sztyft-kst2163.jpg",
        description: [
            "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
            "Eleganckie i stylowe kolczyki.",
            "WYMIARY:",
            "1,2 x 1,0 cm",
            "rodzaj zapięcia: sztyft",
            "Producent Xuping"
        ],
        specs: {
            "Model": "KST2163"
        },
        material: "Biżuteria ze stali chirurgicznej / Kolczyki",
        color: "Pozłacany",
        availability: "W magazynie",
        image2: null,
        image3: null
    },
    {
        id: "22524",
        name: "KOLCZYKI Długie Ozdobne K1629S",
        price: "10.95 zł",
        image: "https://hurt.ecarla.pl/138769-large_default/kolczyki-dlugie-ozdobne-k1629s.jpg",
        description: [
            "Kolczyki sztuczne",
            "Będą stanowić piękne uzupełnienie elegancznej kreacji jak i codziennego stroju. Wymiary:Długość: 9,5 cmSzerokość: 1,2 cm",
            "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą ! A wtedy posłuży bardzo długo!"
        ],
        specs: {
            "Model": "K1629S"
        },
        material: "Biżuteria sztuczna / Kolczyki",
        color: "Wielokolorowy",
        availability: "W magazynie",
        image2: "https://hurt.ecarla.pl/138770-large_default/kolczyki-dlugie-ozdobne-k1629s.jpg",
        image3: null
    },
    {
        id: "22525",
        name: "KOLCZYKI Długie Ozdobne K1630S",
        price: "9.23 zł",
        image: "https://hurt.ecarla.pl/138773-large_default/kolczyki-dlugie-ozdobne-k1630s.jpg",
        description: [
            "Kolczyki sztuczne",
            "Będą stanowić piękne uzupełnienie elegancznej kreacji jak i codziennego stroju. Wymiary:Długość: 9,3 cmSzerokość: 1,5 cm",
            "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą ! A wtedy posłuży bardzo długo!"
        ],
        specs: {
            "Model": "K1630S"
        },
        material: "Biżuteria sztuczna / Kolczyki",
        color: "Wielokolorowy",
        availability: "W magazynie",
        image2: "https://hurt.ecarla.pl/138774-large_default/kolczyki-dlugie-ozdobne-k1630s.jpg",
        image3: null
    }
],[
  {
    "id": "23650",
    "name": "Kolczyk Nausznica ozdobna KWS12",
    "price": "7.38 zł",
    "image": "https://hurt.ecarla.pl/143607-large_default/kolczyk-nausznica-ozdobna-kws12.jpg",
    "description": [
      "Kolczyk Nausznica wykonany jest ze stopów metali nieszlachetnych.Nie są odporne na wodę.Nie zawiera niklu ani chromu.",
      "Wymiary:",
      "Wysokość: 7 cm ",
      "szerokość: 4,2 cm"
    ],
    "specs": {
      "Model": "KWS12",
      "EAN": "5903678549626"
    },
    "material": "Biżuteria sztuczna / Kolczyki",
    "color": null,
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/143608-large_default/kolczyk-nausznica-ozdobna-kws12.jpg",
    "image3": null
  },
  {
    "id": "23691",
    "name": "Kolczyki długie wiszące  KWS34",
    "price": "10.46 zł",
    "image": "https://hurt.ecarla.pl/143745-large_default/kolczyki-dlugie-wiszace-kws34.jpg",
    "description": [
      "Kolczyk Nausznica wykonany jest ze stopów metali nieszlachetnych.Nie są odporne na wodę.Nie zawiera niklu ani chromu.",
      "Wymiary:",
      "Wysokość: 8,8 cm ",
      "szerokość: 1,5 cm"
    ],
    "specs": {
      "Model": "KWS34",
      "EAN": "5903678554149"
    },
    "material": "Biżuteria sztuczna / Kolczyki",
    "color": null,
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/143744-large_default/kolczyki-dlugie-wiszace-kws34.jpg",
    "image3": null
  },
  {
    "id": "23693",
    "name": "Kolczyki długie wiszące  KWS36",
    "price": "9.23 zł",
    "image": "https://hurt.ecarla.pl/143755-large_default/kolczyki-dlugie-wiszace-kws36.jpg",
    "description": [
      "Kolczyk Nausznica wykonany jest ze stopów metali nieszlachetnych.Nie są odporne na wodę.Nie zawiera niklu ani chromu.",
      "Wymiary:",
      "Wysokość: 3,5 cm ",
      "szerokość: 1 cm"
    ],
    "specs": {
      "Model": "KWS36",
      "EAN": "5903678554163"
    },
    "material": "Biżuteria sztuczna / Kolczyki",
    "color": null,
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/143756-large_default/kolczyki-dlugie-wiszace-kws36.jpg",
    "image3": null
  },
  {
    "id": "23697",
    "name": "Kolczyki długie wiszące  KWS39",
    "price": "22.14 zł",
    "image": "https://hurt.ecarla.pl/143769-large_default/kolczyki-dlugie-wiszace-kws39.jpg",
    "description": [
      "Kolczyk Nausznica wykonany jest ze stopów metali nieszlachetnych.Nie są odporne na wodę.Nie zawiera niklu ani chromu.",
      "Wymiary:",
      "Wysokość: 9,5 cm ",
      "szerokość: 3 cm"
    ],
    "specs": {
      "Model": "KWS39",
      "EAN": "5903678554194"
    },
    "material": "Biżuteria sztuczna / Kolczyki",
    "color": null,
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/143770-large_default/kolczyki-dlugie-wiszace-kws39.jpg",
    "image3": "https://hurt.ecarla.pl/143771-large_default/kolczyki-dlugie-wiszace-kws39.jpg"
  },
  {
    "id": "23716",
    "name": "Kolczyki ze stali chirurgicznej pozłacane sztyfty KST2064",
    "price": "14.88 zł",
    "image": "https://hurt.ecarla.pl/143816-large_default/kolczyki-ze-stali-chirurgicznej-pozlacane-sztyfty-kst2064.jpg",
    "description": [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
      "Eleganckie i stylowe kolczyki. WYMIARY:",
      "4,0 x 0,9 cm",
      "rodzaj zapięcia: sztyft",
      "Producent Xuping"
    ],
    "specs": {
      "Model": "KST2064",
      "EAN": "5903678539122"
    },
    "material": "Biżuteria ze stali chirurgicznej / Kolczyki",
    "color": "Pozłacany",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/143815-large_default/kolczyki-ze-stali-chirurgicznej-pozlacane-sztyfty-kst2064.jpg",
    "image3": "https://hurt.ecarla.pl/143817-large_default/kolczyki-ze-stali-chirurgicznej-pozlacane-sztyfty-kst2064.jpg"
  },
  {
    "id": "23719",
    "name": "Kolczyki ze stali szlachetnej pozłacanej 14k złotem KST2916",
    "price": "20.66 zł",
    "image": "https://hurt.ecarla.pl/143823-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2916.jpg",
    "description": [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
      "Eleganckie i stylowe kolczyki. Kolor:  Jasne złoto Wymiary:",
      "0,9 x 0,9 cm",
      "Rodzaj zapięcia: sztyft STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Model": "KST2916",
      "EAN": "5903678552541"
    },
    "material": "Biżuteria ze stali chirurgicznej / Kolczyki",
    "color": "Pozłacany",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/145641-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2916.jpg",
    "image3": null
  },
  {
    "id": "23722",
    "name": "Kolczyki ze stali szlachetnej pozłacanej 14k złotem KST2926",
    "price": "13.78 zł",
    "image": "https://hurt.ecarla.pl/143832-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2926.jpg",
    "description": [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
      "Eleganckie i stylowe kolczyki. Kolor:  Jasne złoto Wymiary:",
      "0,9 x 0,9 cm",
      "Rodzaj zapięcia: sztyft STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Model": "KST2926",
      "EAN": "5903678552657"
    },
    "material": "Biżuteria ze stali chirurgicznej / Kolczyki",
    "color": "Pozłacany",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/143830-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2926.jpg",
    "image3": "https://hurt.ecarla.pl/143829-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2926.jpg"
  },
  {
    "id": "23741",
    "name": "Kolczyki ze stali szlachetnej pozłacanej 14k złotem KST2976",
    "price": "19.19 zł",
    "image": "https://hurt.ecarla.pl/143930-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2976.jpg",
    "description": [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
      "Eleganckie i stylowe kolczyki. Kolor:  Jasne złoto Wymiary:",
      "1,9 x 0,4 cm",
      "Rodzaj zapięcia: sztyft STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Model": "KST2976",
      "EAN": "5903678556792"
    },
    "material": "Biżuteria ze stali chirurgicznej / Kolczyki",
    "color": "Pozłacany",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/143931-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2976.jpg",
    "image3": null
  },
  {
    "id": "23745",
    "name": "Kolczyki ze stali szlachetnej pozłacanej 14k złotem KST2931CZ",
    "price": "14.39 zł",
    "image": "https://hurt.ecarla.pl/143913-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2931cz.jpg",
    "description": [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
      "Eleganckie i stylowe kolczyki. Kolor:  Jasne złoto Wymiary:",
      "Długość: 2 cm",
      "średnica kółka 1,4 cm  Rodzaj zapięcia: sztyft STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Model": "KST2931CZ",
      "EAN": "5903678556501"
    },
    "material": "Biżuteria ze stali chirurgicznej / Kolczyki",
    "color": "Pozłacany",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/144122-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2931cz.jpg",
    "image3": null
  },
  {
    "id": "23747",
    "name": "Kolczyki ze stali szlachetnej pozłacanej 14k złotem KST2971",
    "price": "19.93 zł",
    "image": "https://hurt.ecarla.pl/143923-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2971.jpg",
    "description": [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem Eleganckie i stylowe kolczyki.Kolor:  Jasne złotoWymiary:1,2 cm x 1 cm Rodzaj zapięcia: sztyftSTAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Model": "KST2971",
      "EAN": "5903678556815"
    },
    "material": "Biżuteria ze stali chirurgicznej / Kolczyki",
    "color": "Pozłacany",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/143868-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2971.jpg",
    "image3": null
  },
  {
    "id": "23749",
    "name": "Kolczyki ze stali szlachetnej pozłacanej 14k złotem KST2972",
    "price": "23.99 zł",
    "image": "https://hurt.ecarla.pl/143926-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2972.jpg",
    "description": [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
      "Eleganckie i stylowe kolczyki. Kolor:  Jasne złoto Wymiary:",
      "4cm x 1 cm ",
      "Rodzaj zapięcia: angielskie STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Model": "KST2972",
      "EAN": "5903678556822"
    },
    "material": "Biżuteria ze stali chirurgicznej / Kolczyki",
    "color": "Pozłacany",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/143870-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2972.jpg",
    "image3": null
  },
  {
    "id": "23755",
    "name": "Kolczyki ze stali szlachetnej pozłacanej 14k złotem Zielone Serce  KST2975",
    "price": "7.26 zł",
    "image": "https://hurt.ecarla.pl/143885-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2975.jpg",
    "description": [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
      "Eleganckie i stylowe kolczyki. Kolor:  Jasne złoto Wymiary:",
      "1 cm x 1cm ",
      "Rodzaj zapięcia: sztyft STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Model": "KST2975",
      "EAN": "5903678556884"
    },
    "material": "Biżuteria ze stali chirurgicznej / Kolczyki",
    "color": "Pozłacany",
    "availability": "W magazynie",
    "image2": null,
    "image3": null
  },
  {
    "id": "23756",
    "name": "Kolczyki ze stali szlachetnej pozłacanej 14k złotem KST2951",
    "price": "8.00 zł",
    "image": "https://hurt.ecarla.pl/143889-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2938.jpg",
    "description": [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem Eleganckie i stylowe kolczyki.Kolor:  Jasne złotoWymiary:1 cm x 1cm Rodzaj zapięcia: sztyftSTAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Model": "KST2951",
      "EAN": "5903678556891"
    },
    "material": "Biżuteria ze stali chirurgicznej / Kolczyki",
    "color": "Pozłacany",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/143919-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst2938.jpg",
    "image3": null
  },
  {
    "id": "23759",
    "name": "Kolczyki ze stali szlachetnej pozłacanej Perłowe Serce KST2941",
    "price": "15.99 zł",
    "image": "https://hurt.ecarla.pl/143932-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst2941.jpg",
    "description": [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem Eleganckie i stylowe kolczyki.Kolor: ZłotoWYMIARY:3 cm x 1,2 cmrodzaj zapięcia: angielskieProducent Xuping"
    ],
    "specs": {
      "Model": "KST2941",
      "EAN": "5903678556464"
    },
    "material": "Biżuteria ze stali chirurgicznej / Kolczyki",
    "color": "Pozłacany",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/143897-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst2941.jpg",
    "image3": null
  },
  {
    "id": "23765",
    "name": "Kolczyki ze stali szlachetnej pozłacanej KST2947",
    "price": "19.19 zł",
    "image": "https://hurt.ecarla.pl/143938-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst2947.jpg",
    "description": [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
      "Eleganckie i stylowe kolczyki. Kolor: jasne złoto",
      "WYMIARY:",
      "6 cm x 3 cm ",
      "rodzaj zapięcia: sztyft Producent Xuping"
    ],
    "specs": {
      "Model": "KST2947",
      "EAN": "5903678556440"
    },
    "material": "Biżuteria ze stali chirurgicznej / Kolczyki",
    "color": "Pozłacany",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/143939-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst2947.jpg",
    "image3": null
  },
  {
    "id": "23769",
    "name": "Kolczyki ze stali szlachetnej pozłacanej KST2953",
    "price": "10.46 zł",
    "image": "https://hurt.ecarla.pl/143940-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst2953.jpg",
    "description": [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem Eleganckie i stylowe kolczyki.Kolor: jasne złotoWYMIARY:3  cm x 1,5cm rodzaj zapięcia: sztyftProducent Xuping"
    ],
    "specs": {
      "Model": "KST2953",
      "EAN": "5903678556785"
    },
    "material": "Biżuteria ze stali chirurgicznej / Kolczyki",
    "color": "Pozłacany",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/144116-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst2953.jpg",
    "image3": null
  },
  {
    "id": "23986",
    "name": "Kolczyki ślubne BOHO wizytowe wiszące z kryształkami stal szlachetna KOLS01",
    "price": "45.51 zł",
    "image": "https://hurt.ecarla.pl/144974-large_default/kolczyki-slubne-boho-wizytowe-wiszace-z-krysztalkami-stal-szlachetna-kols01.jpg",
    "description": [
      "Kolekcja biżuterii ślubnej\nNowe, modne wzory wykonywane ręcznie ze stopów jubilerskich\nStarannie dobrane materiały sprawiają, że biżuteria nie zmienia koloru i jest hipoalergiczna, a także jest wytrzymała dzięki odpowiedniej twardości stopów\nZadbaliśmy również o to aby do jej wykonania użyte zostały selekcjonowane cyrkonie dzięki czemu biżuteria ta charakteryzuje się niezwykłym blaskiem\nWszystkie modele będą na pewno pięknym dodatkiem do sukien ślubnych Państwa klientów\n \nWymiary:\n6 cm x 7 cm długie\n "
    ],
    "specs": {
      "Model": "KOLS01",
      "EAN": "5903678555009"
    },
    "material": "Biżuteria ze stali chirurgicznej / Biżuteria ślubna / Kolczyki",
    "color": "Srebrny",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/144975-large_default/kolczyki-slubne-boho-wizytowe-wiszace-z-krysztalkami-stal-szlachetna-kols01.jpg",
    "image3": "https://hurt.ecarla.pl/144976-large_default/kolczyki-slubne-boho-wizytowe-wiszace-z-krysztalkami-stal-szlachetna-kols01.jpg"
  },
  {
    "id": "23991",
    "name": "Kolczyki ślubne BOHO wizytowe wiszące z kryształkami stal szlachetna KOLS08",
    "price": "46.74 zł",
    "image": "https://hurt.ecarla.pl/145000-large_default/kolczyki-slubne-boho-wizytowe-wiszace-z-krysztalkami-stal-szlachetna-kols08.jpg",
    "description": [
      "Kolekcja biżuterii ślubnej\nNowe, modne wzory wykonywane ręcznie ze stopów jubilerskich\nStarannie dobrane materiały sprawiają, że biżuteria nie zmienia koloru i jest hipoalergiczna, a także jest wytrzymała dzięki odpowiedniej twardości stopów\nZadbaliśmy również o to aby do jej wykonania użyte zostały selekcjonowane cyrkonie dzięki czemu biżuteria ta charakteryzuje się niezwykłym blaskiem\nWszystkie modele będą na pewno pięknym dodatkiem do sukien ślubnych Państwa klientów\n \nWymiary:\n4 cm x 8 cm długie\n "
    ],
    "specs": {
      "Model": "KOLS08",
      "EAN": "5903678555078"
    },
    "material": "Biżuteria ze stali chirurgicznej / Biżuteria ślubna / Kolczyki",
    "color": "Srebrny",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/145001-large_default/kolczyki-slubne-boho-wizytowe-wiszace-z-krysztalkami-stal-szlachetna-kols08.jpg",
    "image3": null
  },
  {
    "id": "23992",
    "name": "Kolczyki ślubne BOHO wizytowe wiszące z kryształkami stal szlachetna KOLS10",
    "price": "51.66 zł",
    "image": "https://hurt.ecarla.pl/145004-large_default/kolczyki-slubne-boho-wizytowe-wiszace-z-krysztalkami-stal-szlachetna-kols10.jpg",
    "description": [
      "Kolekcja biżuterii ślubnej\nNowe, modne wzory wykonywane ręcznie ze stopów jubilerskich\nStarannie dobrane materiały sprawiają, że biżuteria nie zmienia koloru i jest hipoalergiczna, a także jest wytrzymała dzięki odpowiedniej twardości stopów\nZadbaliśmy również o to aby do jej wykonania użyte zostały selekcjonowane cyrkonie dzięki czemu biżuteria ta charakteryzuje się niezwykłym blaskiem\nWszystkie modele będą na pewno pięknym dodatkiem do sukien ślubnych Państwa klientów\n \nWymiary:\n3 cm x 7 cm długie\n "
    ],
    "specs": {
      "Model": "KOLS10",
      "EAN": "5903678555092"
    },
    "material": "Biżuteria ze stali chirurgicznej / Biżuteria ślubna / Kolczyki",
    "color": "Srebrny",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/145005-large_default/kolczyki-slubne-boho-wizytowe-wiszace-z-krysztalkami-stal-szlachetna-kols10.jpg",
    "image3": null
  },
  {
    "id": "23996",
    "name": "Kolczyki ślubne BOHO wizytowe wiszące z kryształkami stal szlachetna KOLS14",
    "price": "55.35 zł",
    "image": "https://hurt.ecarla.pl/145017-large_default/kolczyki-slubne-boho-wizytowe-wiszace-z-krysztalkami-stal-szlachetna-kols14.jpg",
    "description": [
      "Kolekcja biżuterii ślubnej\nNowe, modne wzory wykonywane ręcznie ze stopów jubilerskich\nStarannie dobrane materiały sprawiają, że biżuteria nie zmienia koloru i jest hipoalergiczna, a także jest wytrzymała dzięki odpowiedniej twardości stopów\nZadbaliśmy również o to aby do jej wykonania użyte zostały selekcjonowane cyrkonie dzięki czemu biżuteria ta charakteryzuje się niezwykłym blaskiem\nWszystkie modele będą na pewno pięknym dodatkiem do sukien ślubnych Państwa klientów\n \nWymiary:\n4 cm x 8 cm długie\n "
    ],
    "specs": {
      "Model": "KOLS14",
      "EAN": "5903678555139"
    },
    "material": "Biżuteria ze stali chirurgicznej / Biżuteria ślubna / Kolczyki",
    "color": "Srebrny",
    "availability": "W magazynie",
    "image2": null,
    "image3": null
  },
  {
    "id": "23998",
    "name": "Kolczyki ślubne BOHO wizytowe wiszące z kryształkami stal szlachetna KOLS16",
    "price": "51.66 zł",
    "image": "https://hurt.ecarla.pl/145023-large_default/kolczyki-slubne-boho-wizytowe-wiszace-z-krysztalkami-stal-szlachetna-kols16.jpg",
    "description": [
      "Kolekcja biżuterii ślubnej\nNowe, modne wzory wykonywane ręcznie ze stopów jubilerskich\nStarannie dobrane materiały sprawiają, że biżuteria nie zmienia koloru i jest hipoalergiczna, a także jest wytrzymała dzięki odpowiedniej twardości stopów\nZadbaliśmy również o to aby do jej wykonania użyte zostały selekcjonowane cyrkonie dzięki czemu biżuteria ta charakteryzuje się niezwykłym blaskiem\nWszystkie modele będą na pewno pięknym dodatkiem do sukien ślubnych Państwa klientów\n \nWymiary:\n4 cm x 8 cm długie\n "
    ],
    "specs": {
      "Model": "KOLS16",
      "EAN": "5903678555153"
    },
    "material": "Biżuteria ze stali chirurgicznej / Biżuteria ślubna / Kolczyki",
    "color": "Srebrny",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/145024-large_default/kolczyki-slubne-boho-wizytowe-wiszace-z-krysztalkami-stal-szlachetna-kols16.jpg",
    "image3": null
  },
  {
    "id": "24000",
    "name": "Kolczyki ślubne BOHO wizytowe wiszące z kryształkami stal szlachetna KOLS18",
    "price": "22.14 zł",
    "image": "https://hurt.ecarla.pl/145031-large_default/kolczyki-slubne-boho-wizytowe-wiszace-z-krysztalkami-stal-szlachetna-kols18.jpg",
    "description": [
      "Kolekcja biżuterii ślubnej\nNowe, modne wzory wykonywane ręcznie ze stopów jubilerskich\nStarannie dobrane materiały sprawiają, że biżuteria nie zmienia koloru i jest hipoalergiczna, a także jest wytrzymała dzięki odpowiedniej twardości stopów\nZadbaliśmy również o to aby do jej wykonania użyte zostały selekcjonowane cyrkonie dzięki czemu biżuteria ta charakteryzuje się niezwykłym blaskiem\nWszystkie modele będą na pewno pięknym dodatkiem do sukien ślubnych Państwa klientów\n \nWymiary:\n4 cm x 7 cm długie\n "
    ],
    "specs": {
      "Model": "KOLS18",
      "EAN": "5903678555177"
    },
    "material": "Biżuteria ze stali chirurgicznej / Biżuteria ślubna / Kolczyki",
    "color": "Srebrny",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/145710-large_default/kolczyki-slubne-boho-wizytowe-wiszace-z-krysztalkami-stal-szlachetna-kols18.jpg",
    "image3": null
  },
  {
    "id": "24001",
    "name": "Kolczyki ślubne BOHO wizytowe wiszące z kryształkami stal szlachetna KOLS19",
    "price": "29.52 zł",
    "image": "https://hurt.ecarla.pl/145034-large_default/kolczyki-slubne-boho-wizytowe-wiszace-z-krysztalkami-stal-szlachetna-kols19.jpg",
    "description": [
      "Kolekcja biżuterii ślubnej\nNowe, modne wzory wykonywane ręcznie ze stopów jubilerskich\nStarannie dobrane materiały sprawiają, że biżuteria nie zmienia koloru i jest hipoalergiczna, a także jest wytrzymała dzięki odpowiedniej twardości stopów\nZadbaliśmy również o to aby do jej wykonania użyte zostały selekcjonowane cyrkonie dzięki czemu biżuteria ta charakteryzuje się niezwykłym blaskiem\nWszystkie modele będą na pewno pięknym dodatkiem do sukien ślubnych Państwa klientów\n \nWymiary:\n4 cm x 7 cm długie\n "
    ],
    "specs": {
      "Model": "KOLS19",
      "EAN": "5903678555184"
    },
    "material": "Biżuteria ze stali chirurgicznej / Biżuteria ślubna / Kolczyki",
    "color": "Srebrny",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/145033-large_default/kolczyki-slubne-boho-wizytowe-wiszace-z-krysztalkami-stal-szlachetna-kols19.jpg",
    "image3": null
  },
  {
    "id": "24018",
    "name": "Kolczyki ze stali szlachetnej pozłacane KST2897",
    "price": "22.76 zł",
    "image": "https://hurt.ecarla.pl/145122-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-kst2897.jpg",
    "description": [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
      "Eleganckie i stylowe kolczyki. Kolor: Złoto WYMIARY:",
      "podane na zdjęciu",
      "rodzaj zapięcia: angielski",
      "Producent inny"
    ],
    "specs": {
      "Model": "KST2897",
      "EAN": "5903678560331"
    },
    "material": "Biżuteria ze stali chirurgicznej / Kolczyki",
    "color": "Pozłacany",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/145123-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-kst2897.jpg",
    "image3": "https://hurt.ecarla.pl/145124-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-kst2897.jpg"
  },
  {
    "id": "24029-2371",
    "name": "Pierścionek cyrkonie stal chirurgiczna platerowana złotem PST866, Rozmiar pierścionków: US7 EU14",
    "price": "17.22 zł",
    "image": "https://hurt.ecarla.pl/145170-large_default/pierscionek-cyrkonie-stal-chirurgiczna-platerowana-zlotem-pst866.jpg",
    "description": [
      "Nowa kolekcja biżuterii pozłacanej",
      "PLATEROWANY 14 karatowym złotem pierścionek z dużymi cyrkoniami.  Kolor: złoty",
      "STAL NIERDZEWNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Rozmiar pierścionków": "US7 EU14",
      "Model": "PST866R7"
    },
    "material": "Biżuteria ze stali chirurgicznej / Pierścionki",
    "color": "Pozłacany",
    "availability": "Brak w magazynie",
    "image2": "https://hurt.ecarla.pl/145171-large_default/pierscionek-cyrkonie-stal-chirurgiczna-platerowana-zlotem-pst866.jpg",
    "image3": null
  },
  {
    "id": "24108",
    "name": "Kolczyki ze stali szlachetnej pozłacanej KST2995",
    "price": "17.96 zł",
    "image": "https://hurt.ecarla.pl/145555-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst2995.jpg",
    "description": [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
      "Eleganckie i stylowe kolczyki.",
      "Kolor: Jasne złoto WYMIARY: 5 cm",
      "Rodzaj zapięcia: bigiel otwarty",
      "Producent: inny",
      "Waga: 9g STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Model": "KST2995",
      "EAN": "5903678558819"
    },
    "material": "Biżuteria ze stali chirurgicznej / Kolczyki",
    "color": "Pozłacany",
    "availability": "W magazynie",
    "image2": null,
    "image3": null
  },
  {
    "id": "24110",
    "name": "Kolczyki ze stali szlachetnej pozłacanej KST2999",
    "price": "16.73 zł",
    "image": "https://hurt.ecarla.pl/145556-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst2999.jpg",
    "description": [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
      "Eleganckie i stylowe kolczyki.",
      "Kolor: Jasne złoto WYMIARY:",
      "0,8 x 2 cm",
      "rodzaj zapięcia: angielskie zapięcie",
      "Producent inny",
      "Waga: 4g STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Model": "KST2999",
      "EAN": "5903678559663"
    },
    "material": "Biżuteria ze stali chirurgicznej / Kolczyki",
    "color": "Pozłacany",
    "availability": "W magazynie",
    "image2": null,
    "image3": null
  },
  {
    "id": "24111",
    "name": "Kolczyki ze stali szlachetnej pozłacanej Perłowe Serce KST2997",
    "price": "17.22 zł",
    "image": "https://hurt.ecarla.pl/198866-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst2997.jpg",
    "description": [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem ",
      "Eleganckie i stylowe kolczyki. WYMIARY:",
      "1,2 x 2,5 cm",
      "rodzaj zapięcia: angielskie zapięcie",
      "Producent inny",
      "Waga: 6g"
    ],
    "specs": {
      "Model": "KST2997",
      "EAN": "5903678559939"
    },
    "material": "Biżuteria ze stali chirurgicznej / Kolczyki",
    "color": "Pozłacany",
    "availability": "W magazynie",
    "image2": null,
    "image3": null
  }
], 



    { 
          id: "KST2951", 
          name: "Kolczyki 'Gwiazdki' złote", 
          price: "99.99 zł", 
          image: "/img/Kolczyki Gwiazdki złote-KST2938.jpg", 
          url: "/product/KST2951",
          description: ["Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem. Eleganckie i stylowe kolczyki. STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedziej"],
          specs: {
            "Wymiar kolczyków": "1 cm x 1cm ",
            "Kolor": "jasne złoto",  
            "Rodzaj zapięcia": "sztyft",  
          },
          material: "Stal szlachetna", 
          color: "Jasne złoto", 
          availability: "W magazynie",
            image2:  "/img/Kolczyki Gwiazdki złote-KST2938 (1).jpg",
    },
    { 
        id: "KST3409", 
        name: "Kolczyki 'Wiszące' złote", 
        price: "99.99 zł", 
        image: "/img/Kolczyki wiszące kst3409.jpg", 
        url: "/product/KST3409",
        description: ["Kolczyki ze stali szlachetnej platerowane 14k złotem, wiszące"],
        specs: {
          "Wymiar kolczyków": "1,5 cm x 3,8 cm",
          "Wymiar kartonika": " 5,5 cm x 6 cm",
          "Waga": "6 g netto / 8 g brutto",  
          "Kolor": "jasne złoto",  
          "Rodzaj zapięcia": "sztyft",  
        },
        material: "Stal szlachetna", 
        color: "Jasne złoto", 
        availability: "W magazynie",
          image2:  "/img/Kolczyki wiszące kst3409 (1).jpg",
    },
    { 
          id: "KST3325", 
          name: "Kolczyki 'Muszelki' złote", 
          price: "99.99 zł", 
          image: "/img/Kolczyki eperełki złote-KST3325.jpg", 
          url: "/product/KST3325",
          description: ["Kolczyki damskie  platerowane złotem. Eleganckie i stylowe kolczyki. STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedziej"],
          specs: {
            "Wymiar kolczyków": "1,7cm x 1,7cm x 0,8cm",
            "Wymiar kartonika": "6 cm x 5,5 cm ",
            "Waga": "10g netto / 13g brutto",  
            "Kolor": " złoto",  
            "Rodzaj zapięcia": "sztyft",  
          },
          material: "Stal szlachetna", 
          color: "jasne złoto", 
          availability: "W magazynie",
            image2:  "/img/Kolczyki eperełki złote-KST3325 (1).jpg",
            image3:  "/img/Kolczyki eperełki złote-KST3325 (2).jpg",
    },
    { 
            id: "KST2823", 
            name: "Kolczyki 'Serca' złote", 
            price: "99.99 zł", 
            image: "/img/Kolczyki serca-KST2823.jpg", 
            url: "/product/KST2823",
            description: ["Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem. Eleganckie i stylowe kolczyki. STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedziej"],
            specs: {
              "Wymiar kolczyków": "2,5 x 1,4 cm",
              "Kolor": " złoto",  
              "Rodzaj zapięcia": "sztyft",  
            },
            material: "Stal szlachetna", 
            color: " złoto", 
            availability: "W magazynie",
              image2:  "/img/Kolczyki serca-KST2823(1).jpg",
    },
    { 
        id: "KST3349", 
        name: "Kolczyki 'Łezki' wiszące złote", 
        price: "99.99 zł", 
        image: "/img/Kolczyki Łezki wiszące KST3349 (1).jpg", 
        url: "/product/KST3349",
        description: ["Kolczyki damskie  platerowane złotem. Eleganckie i stylowe kolczyki. STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedziej"],
        specs: {
          "Wymiar kolczyków": "7cm x 1,1cm",
          "Wymiar kartonika": "6 cm x 5,5 cm",
          "Waga": "10g netto / 12g brutto",  
          "Kolor": "jasne złoto",  
          "Rodzaj zapięcia": "sztyft",  
        },
        material: "Stal szlachetna", 
        color: "Jasne złoto", 
        availability: "W magazynie",
          image2:  "/img/Kolczyki Łezki wiszące KST3349.jpg",
    },
    { 
           id: "KST3369", 
        name: "Kolczyki 'Cyrkonie' złote", 
        price: "99.99 zł", 
        image: "/img/Kolczyki Cyrkonie złote-kst3369 (1).jpg", 
        url: "/product/KST3369",
        description: ["Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem . STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedziej"],
        specs: {
          "Wymiar kolczyków": "1,5cm x 1cm x 1,7cm",
          "Wymiar kartonika": "6cm x 5,5 cm",
          "Waga": "4g netto / 7g brutto",  
          "Kolor": "Złoto",  
          "Rodzaj zapięcia": "sztyft ze srebra S925",  
        },
        material: "Stal szlachetna", 
        color: "Złoty", 
        availability: "W magazynie",
          image2:  "/img/Kolczyki Cyrkonie złote-kst3369.jpg",
          image3:  "/img/Kolczyki Cyrkonie złote-kst3369 (2).jpg",
          image4:  "/img/Kolczyki Cyrkonie złote-kst3369 (3)  .jpg",
    },
    { 
           id: "KST2951_2", 
           name: "Kolczyki 'Koła' gemetryczne", 
           price: "99.99 zł", 
           image: "/img/Kolczyki koła geometryczne KST3409 (1).jpg", 
           url: "/product/KST2951",
           description: ["Kolczyki damskie  platerowane złotem. Eleganckie i stylowe kolczyki. STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedziej"],
           specs: {
             "Wymiar kolczyków": "1 cm x 1cm ",
             "Wymiar kartonika": "6 cm x 5,5 cm ",
             "Waga": "4g netto / 7g brutto",  
             "Kolor": "jasne złoto",  
             "Rodzaj zapięcia": "sztyft",  
           },
           material: "Stal szlachetna", 
           color: "Jasne złoto", 
           availability: "W magazynie",
             image2:  "/img/Kolczyki koła geometryczne KST3409 .jpg",
             image3:  "/img/Kolczyki koła geometryczne KST3409 (2).jpg",
    },
    { 
           id: "KST3359", 
           name: "Kolczyki 'Wisienki' gemetryczne", 
           price: "99.99 zł", 
           image: "/img/Kolczyki wisienki jasne złoto KST3359(1).jpg", 
           url: "/product/KST3359",
           description: ["Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem. Eleganckie i stylowe kolczyki. STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedziej"],
           specs: {
             "Wymiar kolczyków": "1,4cm x 1,3cm",
             "Wymiar kartonika": "6 cm x 5,5 cm ",
             "Waga": "6g netto / 8g brutto",  
             "Kolor": "jasne złoto",  
             "Rodzaj zapięcia": "sztyft",  
           },
           material: "Stal szlachetna", 
           color: "Jasne złoto", 
           availability: "W magazynie",
             image2:  "/img/Kolczyki wisienki jasne złoto KST3359.jpg",
    },
    { 
           id: "KST2844B", 
           name: "Kolczyki 'Piękne' złote", 
           price: "99.99 zł", 
           image: "/img/Kolczyki Pieknezłote-KST2844b.jpg", 
           url: "/product/KST2844B",
           description: ["Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem. Eleganckie i stylowe kolczyki. STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedziej"],
           specs: {
             "Wymiar kolczyków": "Wysokość: 2,9 cm Szerokość: 0,4 cm",
             "Kolor": " złoto",  
             "Rodzaj zapięcia": "sztyft",  
           },
           material: "Stal szlachetna", 
           color: " złoto", 
           availability: "W magazynie",
    },
    { 
           id: "KST2931CZ", 
           name: "Kolczyki 'Pętelka' złote", 
           price: "99.99 zł", 
           image: "/img/Kolczyki kółka KST2931cz.jpg", 
           url: "/product/KST2931CZ",
           description: ["Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem. Eleganckie i stylowe kolczyki. STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedziej"],
           specs: {
             "Wymiar kolczyków": "2 cm",
             "Średnica kółka": "1,4 cm  ",
             "Kolor": " złoto",  
             "Rodzaj zapięcia": "sztyft",  
           },
           material: "Stal szlachetna", 
           color: " złoto", 
           availability: "W magazynie",
             image2:  "/img/Kolczyki kółka KST2931cz(1).jpg",
    },{ 
    id: "24143",    
    name: "Kolczyki ze stali chirurgicznej pozłacane KST3011",
    price: "23.37 zł", 
    image: "https://hurt.ecarla.pl/145647-large_default/kolczyki-ze-stali-chirurgicznej-pozlacane-kst3011.jpg",
    description: [
      "Eleganckie kolczyki wykonane z wysokiej jakości stali chirurgicznej, pokryte warstwą złota.",
      "Klasyczny design sprawia, że idealnie pasują zarówno do wieczorowych kreacji, jak i codziennego looku.",
      "Produkt w 100% antyalergiczny – bezpieczny dla delikatnej skóry, nie ciemnieje podczas użytkowania."
    ],
    specs: {
      "Rodzaj zapięcia": "Angielskie",
      "Materiał wykonania": "Stal chirurgiczna 316L",
      "Model": "KST3011" 
    },
    material: "Stal chirurgiczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/145647-large_default/kolczyki-ze-stali-chirurgicznej-pozlacane-kst3011.jpg", // duplikaty linków zabezpieczone pod galerię
    image3: "https://hurt.ecarla.pl/145647-large_default/kolczyki-ze-stali-chirurgicznej-pozlacane-kst3011.jpg"
  },
  { 
    id: "24185",    
    name: "Kolczyki ze stali chirurgicznej pozłacane sztyfty KST2682",
    price: "16.61 zł", 
    image: "https://hurt.ecarla.pl/145739-large_default/kolczyki-ze-stali-chirurgicznej-pozlacane-sztyfty-kst2682.jpg",
    description: [
      "Subtelne kolczyki typu sztyft od renomowanego producenta Xuping.",
      "Platerowane złotem, wysadzane drobnymi elementami, które pięknie odbijają światło.",
      "Biżuteria odporna na czynniki zewnętrzne, całkowicie pozbawiona niklu."
    ],
    specs: {
      "Rodzaj zapięcia": "Sztyft",
      "Materiał wykonania": "Stal chirurgiczna (Xuping)",
      "Model": "KST2682" 
    },
    material: "Stal chirurgiczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/145739-large_default/kolczyki-ze-stali-chirurgicznej-pozlacane-sztyfty-kst2682.jpg",
    image3: "https://hurt.ecarla.pl/145739-large_default/kolczyki-ze-stali-chirurgicznej-pozlacane-sztyfty-kst2682.jpg"
  },
  { 
    id: "3809",    
    name: "KOLCZYKI GAŁĄZKI ZA UCHO K179 ZŁOTO",
    price: "29.99 zł", 
    image: "https://hurt.ecarla.pl/63904-large_default/kolczyki-galazki-za-ucho-k179-zloto.jpg",
    description: [
      "Kolczyki o kształcie gałązek wysadzanych lśniącymi kryształkami. Bardzo modne i efektowne!",
      "Kolczyki można nosić na dwa sposoby. Będą stanowić piękne uzupełnienie eleganckiej kreacji, jak i codziennego stroju.",
      "Biżuteria antyalergiczna – nie zawiera niklu ani chromu."
    ],
    specs: {
      "Wymiary": "2,5 cm x 2,8 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K179Z" 
    },
    material: "Biżuteria sztuczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/63905-large_default/kolczyki-galazki-za-ucho-k179-zloto.jpg",
    image3: "https://hurt.ecarla.pl/63906-large_default/kolczyki-galazki-za-ucho-k179-zloto.jpg"
  },
  { 
    id: "24439",    
    name: "KOLCZYKI przy uchu moon kryształki K1657",
    price: "7.38 zł", 
    image: "https://hurt.ecarla.pl/147260-large_default/kolczyki-przy-uchu-moon-krysztalki-k1657.jpg",
    description: [
      "Drobne i urocze kolczyki przylegające do ucha z motywem księżyca.",
      "Wysadzane błyszczącymi cyrkoniami, które dodają blasku każdej stylizacji.",
      "Idealny pomysł na drobny upominek."
    ],
    specs: {
      "Rodzaj zapięcia": "Sztyft",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K1657" 
    },
    material: "Biżuteria sztuczna", 
    color: "Srebrny/Złoty", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/147266-large_default/kolczyki-przy-uchu-moon-krysztalki-k1658.jpg",
    image3: "https://hurt.ecarla.pl/147260-large_default/kolczyki-przy-uchu-moon-krysztalki-k1657.jpg"
  }, 
  { 
    id: "25753",    
    name: "Kolczyki srebro 925 rodowane KST1829S",
    price: "3.69 zł", 
    image: "https://hurt.ecarla.pl/152660-large_default/kolczyki-srebro-925-rodowane-kst1829s.jpg",
    description: [
      "Sprawdź bajeczne kształty w naszej nowej kolekcji biżuterii.",
      "Zabieg rodowania pozwala zabezpieczyć srebro przed matowieniem i ciemnieniem, dodatkowo zapobiega powstawaniu uszkodzeń.",
      "Rodowanie sprawia, że biżuteria zachowuje też swój blask i kolor. Biżuteria antyalergiczna."
    ],
    specs: {
      "Wymiary": "Kolczyk: 0,9 x 0,9 cm, sztyft: 1,2 cm",
      "Materiał wykonania": "Rodowane srebro 925",
      "Rodzaj zapięcia": "Silikonowy sztyft",
      "Model": "KST1829S" 
    },
    material: "Srebro 925", 
    color: "Srebrny", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/152658-large_default/kolczyki-srebro-925-rodowane-kst1829s.jpg",
    image3: "https://hurt.ecarla.pl/152659-large_default/kolczyki-srebro-925-rodowane-kst1829s.jpg"
  },
  { 
    id: "25755",    
    name: "KOLCZYKI SREBRO 925 RODOWANE MINI KST1839",
    price: "3.69 zł", 
    image: "https://hurt.ecarla.pl/152665-large_default/kolczyki-srebro-925-rodowane-mini-kst1839.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej. Materiał : rodowane srebro.",
      "Sprawdź bajeczne kształty w naszej nowej kolekcji biżuterii.",
      "Drobny, minimalistyczny wzór idealny do noszenia na co dzień."
    ],
    specs: {
      "Wymiary": "Długość: 0,9 cm, Szerokość: 0,9 cm",
      "Materiał wykonania": "Rodowane srebro 925",
      "Model": "KST1839" 
    },
    material: "Srebro 925", 
    color: "Srebrny", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/152664-large_default/kolczyki-srebro-925-rodowane-mini-kst1839.jpg",
    image3: ""
  },
  { 
    id: "25761",    
    name: "KOLCZYKI SREBRO 925 RODOWANE MINI KST1831",
    price: "3.69 zł", 
    image: "https://hurt.ecarla.pl/152690-large_default/kolczyki-srebro-925-rodowane-mini-kst1831.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej. Materiał : rodowane srebro.",
      "Sprawdź bajeczne kształty w naszej nowej kolekcji biżuterii.",
      "Ponadczasowy design, który subtelnie rozświetli Twoją twarz."
    ],
    specs: {
      "Wymiary": "0,7 x 0,7 cm, Długość sztyftu: 1,1 cm",
      "Materiał wykonania": "Rodowane srebro 925",
      "Model": "KST1831" 
    },
    material: "Srebro 925", 
    color: "Srebrny", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/152689-large_default/kolczyki-srebro-925-rodowane-mini-kst1831.jpg",
    image3: ""
  },
  { 
    id: "25783",    
    name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem KST3114",
    price: "24.11 zł", 
    image: "https://hurt.ecarla.pl/152784-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst3114.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem. Eleganckie i stylowe.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje.",
      "Wysokiej jakości produkt od zaufanego producenta Xuping."
    ],
    specs: {
      "Wymiary": "3,5 x 3,5 cm",
      "Waga": "18 g",
      "Rodzaj zapięcia": "Bigiel zamknięty",
      "Producent": "Xuping",
      "Model": "KST3114" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "25906",    
    name: "KOLCZYKI Długie Ozdobne K1632S",
    price: "12.30 zł", 
    image: "https://hurt.ecarla.pl/153145-large_default/kolczyki-dlugie-ozdobne-k1632s.jpg",
    description: [
      "Kolczyki sztuczne. Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
      "Wymiary": "Długość: 12,5 cm, Szerokość: 3,5 cm",
      "Waga": "20 g",
      "Rodzaj zapięcia": "Angielskie",
      "Model": "K1632S" 
    },
    material: "Biżuteria sztuczna", 
    color: "Srebrny", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/153144-large_default/kolczyki-dlugie-ozdobne-k1632s.jpg",
    image3: ""
  },
  { 
    id: "26015",    
    name: "KOLCZYKI Ozdobne K1624S",
    price: "12.30 zł", 
    image: "https://hurt.ecarla.pl/153723-large_default/kolczyki-ozdobne-k1624s.jpg",
    description: [
      "Kolczyki sztuczne. Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
      "Wymiary": "Długość: 11 cm, Szerokość: 3,3 cm",
      "Waga": "27 g",
      "Model": "K1624S" 
    },
    material: "Biżuteria sztuczna", 
    color: "Srebrny", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/153722-large_default/kolczyki-ozdobne-k1624s.jpg",
    image3: "https://hurt.ecarla.pl/153721-large_default/kolczyki-ozdobne-k1624s.jpg"
  },
  [
  { 
    id: "26028",    
    name: "Kolczyki ze stali szlachetnej pozłacanej KST2691",
    price: "14.87 zł", 
    image: "https://hurt.ecarla.pl/153752-large_default/kolczyki-jawa-ze-stali-szlachetnej-pozlacanej-kst2691.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Produkt od cenionego producenta biżuterii Xuping."
    ],
    specs: {
      "Wymiary": "4,5 x 1 cm",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "KST2691" 
    },
    material: "Stal chirurgiczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "26033",    
    name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem KST3054",
    price: "19.68 zł", 
    image: "https://hurt.ecarla.pl/153759-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst3054.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Materiał wykonania": "Stal chirurgiczna (Xuping)",
      "Rodzaj zapięcia": "Zapięcie angielskie",
      "Model": "KST3054" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "26039",    
    name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem KST3043R",
    price: "17.21 zł", 
    image: "https://hurt.ecarla.pl/153777-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-kst3043r.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary": "Długość: 1,3 cm, Szerokość: 0,3 cm",
      "Waga": "4 g",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Angielskie",
      "Model": "KST3043R" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "26041",    
    name: "KOLCZYKI Kryształowe K1622Z",
    price: "13.53 zł", 
    image: "https://hurt.ecarla.pl/153782-large_default/kolczyki-krysztalowe-k1622z.jpg",
    description: [
      "Kolczyki sztuczne. Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
      "Wymiary": "Długość: 12,5 cm, Szerokość: 2 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K1622Z" 
    },
    material: "Biżuteria sztuczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/153780-large_default/kolczyki-krysztalowe-k1622z.jpg",
    image3: "https://hurt.ecarla.pl/153781-large_default/kolczyki-krysztalowe-k1622z.jpg"
  },
  { 
    id: "26118",    
    name: "Kolczyki ze stali szlachetnej pozłacanej KST2823",
    price: "18.82 zł", 
    image: "https://hurt.ecarla.pl/153987-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst2823.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary": "2,5 x 1,4 cm",
      "Materiał wykonania": "Stal chirurgiczna (Xuping)",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "KST2823" 
    },
    material: "Stal chirurgiczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/153986-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst2823.jpg",
    image3: ""
  },
  { 
    id: "26121",    
    name: "KOLCZYKI WISZĄCE DELIKATNE SERCA CYRKONIE K1501",
    price: "6.03 zł", 
    image: "https://hurt.ecarla.pl/154000-large_default/kolczyki-wiszace-delikatne-serca-cyrkonie-k1501.jpg",
    description: [
      "Kolczyki wiszące perełki delikatne serca.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą!"
    ],
    specs: {
      "Materiał wykonania": "Stopy metali nieszlachetnych, perełki",
      "Model": "K1501" 
    },
    material: "Biżuteria sztuczna", 
    color: "Srebrny/Biały", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/153999-large_default/kolczyki-wiszace-delikatne-serca-cyrkonie-k1501.jpg",
    image3: "https://hurt.ecarla.pl/153998-large_default/kolczyki-wiszace-delikatne-serca-cyrkonie-k1501.jpg"
  },
  { 
    id: "26122",    
    name: "KOLCZYKI sztyfty serca wiszące K1523",
    price: "7.38 zł", 
    image: "https://hurt.ecarla.pl/154003-large_default/kolczyki-sztyfty-serca-wiszace-k1523.jpg",
    description: [
      "Kolczyki sztuczne sztyfty serca wiszące.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą!"
    ],
    specs: {
      "Wymiary": "3,2 x 1,6 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "K1523" 
    },
    material: "Biżuteria sztuczna", 
    color: "Srebrny", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/154001-large_default/kolczyki-sztyfty-serca-wiszace-k1523.jpg",
    image3: "https://hurt.ecarla.pl/154002-large_default/kolczyki-sztyfty-serca-wiszace-k1523.jpg"
  }
], [
  { 
    id: "26230",    
    name: "Kolczyki ze stali szlachetnej pozłacanej KST3173",
    price: "23.37 zł", 
    image: "https://hurt.ecarla.pl/154762-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst3173.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary": "0,8 x 2,1 cm",
      "Waga": "5 g",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "KST3173" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "26233",    
    name: "Kolczyki ze stali szlachetnej pozłacanej KST3176",
    price: "18.45 zł", 
    image: "https://hurt.ecarla.pl/154766-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst3176.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary": "1 x 2 cm",
      "Waga": "1 g",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "KST3176" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "26301",    
    name: "Kolczyki ze stali szlachetnej platerowane złotem KST3035",
    price: "14.75 zł", 
    image: "https://hurt.ecarla.pl/154989-large_default/kolczyki-ze-stali-szlachetnej-platerowane-zlotem-kst3035.jpg",
    description: [
      "Kolczyki damskie platerowane złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary": "0,6 x 0,6 cm",
      "Waga": "1 g",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "KST3035" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "26317",    
    name: "Kolczyki wiszące ze stali szlachetnej platerowanej 14k złotem KST3131",
    price: "26.45 zł", 
    image: "https://hurt.ecarla.pl/155045-large_default/kolczyki-wiszace-ze-stali-szlachetnej-platerowanej-14k-zlotem-kst3131.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary": "0,5 x 2,1 cm",
      "Waga": "10 g",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "KST3131" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "26318",    
    name: "Kolczyki ze stali szlachetnej platerowanej 14k złotem KST3132",
    price: "18.45 zł", 
    image: "https://hurt.ecarla.pl/155044-large_default/kolczyki-ze-stali-szlachetnej-platerowanej-14k-zlotem-kst3132.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary": "1,2 x 0,7 cm",
      "Waga": "1 g",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "KST3132" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/155226-large_default/kolczyki-ze-stali-szlachetnej-platerowanej-14k-zlotem-kst3132.jpg",
    image3: ""
  },
  { 
    id: "26322",    
    name: "Kolczyki ze stali szlachetnej platerowanej 14k złotem KST3136",
    price: "15.99 zł", 
    image: "https://hurt.ecarla.pl/155037-large_default/kolczyki-ze-stali-szlachetnej-platerowanej-14k-zlotem-kst3136.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary kolczyków": "0,7 cm x 0,7 cm",
      "Wymiary kartonika": "6 cm x 5,5 cm x 0,5 cm",
      "Waga": "3 g brutto (2 g netto)",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "KST3136" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  }
], [
  { 
    id: "26579",    
    name: "KOLCZYKI zestaw 7w1 nausznice K1514Z",
    price: "9.84 zł", 
    image: "https://hurt.ecarla.pl/156426-large_default/kolczyki-zestaw-7w1-nausznice-k1514z.jpg",
    description: [
      "Kolczyki wiszące 7w1.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K1514Z" 
    },
    material: "Biżuteria sztuczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/156423-large_default/kolczyki-zestaw-7w1-nausznice-k1514z.jpg",
    image3: "https://hurt.ecarla.pl/156424-large_default/kolczyki-zestaw-7w1-nausznice-k1514z.jpg"
  },
  { 
    id: "26580",    
    name: "Delikatne kolczyki damskie K1524",
    price: "7.38 zł", 
    image: "https://hurt.ecarla.pl/156687-large_default/delikatne-kolczyki-damskie-k1524.jpg",
    description: [
      "Delikatne kolczyki przy uchu.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
      "Zawartość zestawu": "1x kolczyk sztyft (śr. 1,3 cm), 1x nausznica (wys. 1,4 cm)",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "K1524" 
    },
    material: "Biżuteria sztuczna", 
    color: "Nierozpoznany", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/156686-large_default/delikatne-kolczyki-damskie-k1524.jpg",
    image3: ""
  },
  { 
    id: "26581",    
    name: "Delikatne kolczyki damskie K1527",
    price: "2.95 zł", 
    image: "https://hurt.ecarla.pl/156536-large_default/delikatne-kolczyki-damskie-k1527.jpg",
    description: [
      "Delikatne kolczyki przy uchu.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
      "Wymiary": "Średnica: 1 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "K1527" 
    },
    material: "Biżuteria sztuczna", 
    color: "Nierozpoznany", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/156537-large_default/delikatne-kolczyki-damskie-k1527.jpg",
    image3: "https://hurt.ecarla.pl/156535-large_default/delikatne-kolczyki-damskie-k1527.jpg"
  },
  { 
    id: "26583",    
    name: "Delikatny kolczyk Nausznica 1szt K1535",
    price: "3.57 zł", 
    image: "https://hurt.ecarla.pl/156690-large_default/delikatny-kolczyk-nausznica-1szt-k1535.jpg",
    description: [
      "Delikatny kolczyk przy uchu. Cena dotyczy 1 szt kolczyka nausznicy.",
      "Będzie stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
      "Wymiary": "Wysokość: 0,6 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K1535" 
    },
    material: "Biżuteria sztuczna", 
    color: "Nierozpoznany", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/156528-large_default/delikatny-kolczyk-nausznica-1szt-k1535.jpg",
    image3: "https://hurt.ecarla.pl/156691-large_default/delikatny-kolczyk-nausznica-1szt-k1535.jpg"
  },
  { 
    id: "26584",    
    name: "Kolczyki damskie koła 6,7 cm K1542",
    price: "4.92 zł", 
    image: "https://hurt.ecarla.pl/156688-large_default/kolczyki-damskie-kola-67-cm-k1542.jpg",
    description: [
      "Kolczyki damskie koła.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
      "Wymiary": "Średnica: 6,7 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "K1542" 
    },
    material: "Biżuteria sztuczna", 
    color: "Nierozpoznany", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/156689-large_default/kolczyki-damskie-kola-67-cm-k1542.jpg",
    image3: ""
  },
  { 
    id: "26587",    
    name: "Złote Kolczyki K1616",
    price: "7.63 zł", 
    image: "https://hurt.ecarla.pl/156438-large_default/zlote-kolczyki-k1616.jpg",
    description: [
      "Delikatne kolczyki.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu."
    ],
    specs: {
      "Wymiary": "2,5 x 2 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K1616" 
    },
    material: "Biżuteria sztuczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/156436-large_default/zlote-kolczyki-k1616.jpg",
    image3: "https://hurt.ecarla.pl/156437-large_default/zlote-kolczyki-k1616.jpg"
  },
  { 
    id: "26754",    
    name: "Kolczyki ze stali szlachetnej pozłacanej KST1575",
    price: "17.22 zł", 
    image: "https://hurt.ecarla.pl/157581-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst1575.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary": "0,8 x 14 cm",
      "Waga": "5 g",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "KST1575" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "26880",    
    name: "Kolczyki delikatne wianuszki kwiatki kryształki 1,2x1,4cm K1541",
    price: "7.38 zł", 
    image: "https://hurt.ecarla.pl/158647-large_default/kolczyki-delikatne-wianuszki-kwiatki-krysztalki-12x14cm-k1541.jpg",
    description: [
      "Kolczyki sztuczne- wianuszki.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
      "Wymiary kolczyków": "1,2 x 1,4 cm",
      "Wymiary kartonika": "10 cm x 8 cm x 0,5 cm",
      "Waga": "7 g brutto (6 g netto)",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "K1541" 
    },
    material: "Biżuteria sztuczna", 
    color: "Nierozpoznany", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/158650-large_default/kolczyki-delikatne-wianuszki-kwiatki-krysztalki-12x14cm-k1541.jpg",
    image3: "https://hurt.ecarla.pl/158651-large_default/kolczyki-delikatne-wianuszki-kwiatki-krysztalki-12x14cm-k1541.jpg"
  },
  { 
    id: "26881",    
    name: "Kolczyki sztyfty wianki kolorowe cyrkonie kwiatuszki 1,9cm K1539",
    price: "7.38 zł", 
    image: "https://hurt.ecarla.pl/158686-large_default/kolczyki-sztyfty-wianki-kolorowe-cyrkonie-kwiatuszki-19cm-k1539.jpg",
    description: [
      "Kolczyki sztuczne- wianuszki.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
      "Wymiary": "1,9 x 1,9 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych, cyrkonie",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "K1539" 
    },
    material: "Biżuteria sztuczna", 
    color: "Kolorowy", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/158653-large_default/kolczyki-sztyfty-wianki-kolorowe-cyrkonie-kwiatuszki-19cm-k1539.jpg",
    image3: "https://hurt.ecarla.pl/158654-large_default/kolczyki-sztyfty-wianki-kolorowe-cyrkonie-kwiatuszki-19cm-k1539.jpg"
  },
  { 
    id: "26882",    
    name: "Kolczyki sztyfty wianuszki cyrkonie kwiatek K1672",
    price: "7.38 zł", 
    image: "https://hurt.ecarla.pl/158683-large_default/kolczyki-sztyfty-wianuszki-cyrkonie-kwiatek-k1672.jpg",
    description: [
      "Kolczyki sztuczne- wianuszki.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
      "Wymiary kolczyków": "1,8 x 1,3 cm",
      "Wymiary kartonika": "10 cm x 8 cm x 0,5 cm",
      "Waga": "7 g brutto (6 g netto)",
      "Materiał wykonania": "Stopy metali nieszlachetnych, cyrkonie",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "K1672" 
    },
    material: "Biżuteria sztuczna", 
    color: "Nierozpoznany", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/158679-large_default/kolczyki-sztyfty-wianuszki-cyrkonie-kwiatek-k1672.jpg",
    image3: "https://hurt.ecarla.pl/158678-large_default/kolczyki-sztyfty-wianuszki-cyrkonie-kwiatek-k1672.jpg"
  },
  { 
    id: "26884",    
    name: "Kolczyki sztyfty wianki cyrkonie kwiatuszki kolor K1674",
    price: "7.38 zł", 
    image: "https://hurt.ecarla.pl/158732-large_default/kolczyki-sztyfty-wianki-cyrkonie-kwiatuszki-kolor-k1674.jpg",
    description: [
      "Kolczyki sztuczne- wianuszki.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
      "Wymiary kolczyków": "1,2 x 1,1 cm",
      "Wymiary kartonika": "10 cm x 8 cm x 0,5 cm",
      "Waga": "8 g brutto (7 g netto)",
      "Materiał wykonania": "Stopy metali nieszlachetnych, cyrkonie",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "K1674" 
    },
    material: "Biżuteria sztuczna", 
    color: "Kolorowy", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/158725-large_default/kolczyki-sztyfty-wianki-cyrkonie-kwiatuszki-kolor-k1674.jpg",
    image3: "https://hurt.ecarla.pl/158730-large_default/kolczyki-sztyfty-wianki-cyrkonie-kwiatuszki-kolor-k1674.jpg"
  },
 
], [
  { 
    id: "27411",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem KST3037",
    price: "15.98 zł", 
    image: "https://hurt.ecarla.pl/160937-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-kst3037.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "1,5 cm x 1,6 cm",
      "Wymiar kartonika z opakowaniem": "9 cm x 6 cm",
      "Waga": "5 g netto / 7 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Kreol",
      "Model": "KST3037" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/160936-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-kst3037.jpg",
    image3: "https://hurt.ecarla.pl/160935-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-kst3037.jpg"
  },
  { 
    id: "27434",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem sztyft KST3208",
    price: "15.74 zł", 
    image: "https://hurt.ecarla.pl/160978-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-kst3208.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "1 x 0,5 cm",
      "Wymiar kartonika z opakowaniem": "8,5 cm x 6,6 cm",
      "Waga": "1 g netto / 3 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "KST3208" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/160976-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-kst3208.jpg",
    image3: "https://hurt.ecarla.pl/160977-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-kst3208.jpg"
  },
  { 
    id: "27437",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem, literka B 2szt. KST3203B",
    price: "6.89 zł", 
    image: "https://hurt.ecarla.pl/160990-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-literka-b-2szt-kst3203b.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "0,7 cm x 0,6 cm",
      "Wymiar kartonika z opakowaniem": "8,5 cm x 7 cm",
      "Waga": "1 g netto / 3 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Motyw": "Literka B",
      "Model": "KST3203B" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/160988-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-literka-b-2szt-kst3203b.jpg",
    image3: ""
  },
  { 
    id: "27438",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem, literka D 2szt. KST3203D",
    price: "6.89 zł", 
    image: "https://hurt.ecarla.pl/160993-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-literka-d-2szt-kst3203d.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "0,7 cm x 0,6 cm",
      "Wymiar kartonika z opakowaniem": "8,5 cm x 7 cm",
      "Waga": "1 g netto / 3 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Motyw": "Literka D",
      "Model": "KST3203D" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/160991-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-literka-d-2szt-kst3203d.jpg",
    image3: ""
  },
  { 
    id: "27439",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem, literka J 2szt. KST3203J",
    price: "6.89 zł", 
    image: "https://hurt.ecarla.pl/160996-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-literka-j-2szt-kst3203j.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "0,7 cm x 0,6 cm",
      "Wymiar kartonika z opakowaniem": "8,5 cm x 7 cm",
      "Waga": "1 g netto / 3 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Motyw": "Literka J",
      "Model": "KST3203J" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/160994-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-literka-j-2szt-kst3203j.jpg",
    image3: ""
  },
  { 
    id: "27587",    
    name: "Kolczyki ze stali szlachetnej pozłacanej KST3171",
    price: "23.37 zł", 
    image: "https://hurt.ecarla.pl/201001-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst3171.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary": "1,8 cm x 1,8 cm",
      "Wymiar kartonika z opakowaniem": "6,5 cm x 10,5 cm",
      "Waga": "15 g netto / 17 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Model": "KST3171" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "27591",    
    name: "Kolczyki ze stali szlachetnej pozłacanej wkrętki 3,1 cm KST3172",
    price: "27.06 zł", 
    image: "https://hurt.ecarla.pl/161847-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-wkretki-31-cm-kst3172.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary": "1,5 cm x 3,2 cm",
      "Wymiar kartonika z opakowaniem": "6,5 cm x 9,5 cm",
      "Waga": "10 g netto / 12 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Wkrętki / Sztyft",
      "Model": "KST3172" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "27624",    
    name: "Kolczyki ze stali szlachetnej pozłacanej KST3223",
    price: "23.99 zł", 
    image: "https://hurt.ecarla.pl/161907-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst3223.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki."
    ],
    specs: {
      "Wymiary": "2,1 cm x 3,6 cm",
      "Wymiar kartonika z opakowaniem": "6,5 cm x 9,5 cm",
      "Waga": "9 g netto / 10 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Model": "KST3223" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "27625",    
    name: "Kolczyki ze stali szlachetnej pozłacanej KST3224",
    price: "22.14 zł", 
    image: "https://hurt.ecarla.pl/161909-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst3224.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki."
    ],
    specs: {
      "Wymiary": "2,1 cm x 1,6 cm",
      "Wymiar kartonika z opakowaniem": "6,5 cm x 9,5 cm",
      "Waga": "6 g netto / 7 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Model": "KST3224" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "27626",    
    name: "Kolczyki ze stali szlachetnej pozłacanej KST3225",
    price: "25.83 zł", 
    image: "https://hurt.ecarla.pl/161911-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst3225.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki."
    ],
    specs: {
      "Wymiary": "2,1 cm x 6 cm",
      "Wymiar kartonika z opakowaniem": "6,5 cm x 12 cm",
      "Waga": "12 g netto / 14 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Model": "KST3225" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  }
], [
  { 
    id: "27681",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem, sztyft S925 KST3186",
    price: "17.84 zł", 
    image: "https://hurt.ecarla.pl/162188-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-s925-kst3186.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft S925.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "0,9 cm x 0,6 cm",
      "Wymiar kartonika z opakowaniem": "6 cm x 5,5 cm",
      "Waga": "1 g netto / 3 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem, sztyft S925",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "KST3186" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/162187-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-s925-kst3186.jpg",
    image3: ""
  },
  { 
    id: "27685",    
    name: "Kolczyki damskie Wianuszki KST3210",
    price: "10.21 zł", 
    image: "https://hurt.ecarla.pl/162211-large_default/kolczyki-damskie-wianuszki-kst3210.jpg",
    description: [
      "Delikatne kolczyki damskie.",
      "Eleganckie i stylowe kolczyki.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
      "Wymiar kolczyków": "1,5 cm x 1 cm",
      "Wymiar kartonika": "10 cm x 8 cm",
      "Waga": "2 g netto / 4 g brutto",
      "Materiał wykonania": "Stop metali nieszlachetnych, sztyft S925",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "KST3210" 
    },
    material: "Biżuteria sztuczna", 
    color: "Nierozpoznany", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/162210-large_default/kolczyki-damskie-wianuszki-kst3210.jpg",
    image3: "https://hurt.ecarla.pl/162208-large_default/kolczyki-damskie-wianuszki-kst3210.jpg"
  },
  { 
    id: "27837",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem, sztyft KST3229",
    price: "22.14 zł", 
    image: "https://hurt.ecarla.pl/163225-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-kst3229.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "3 cm x 3 cm x 1 cm",
      "Wymiar kartonika": "5,5 cm x 6 cm",
      "Waga": "10 g netto / 12 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "KST3229" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "27846",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem, sztyft KST3238",
    price: "23.37 zł", 
    image: "https://hurt.ecarla.pl/163234-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-kst3238.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "4,5 cm x 2 cm",
      "Wymiar kartonika": "5,5 cm x 6 cm",
      "Waga": "10 g netto / 12 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "KST3238" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "27847",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem, sztyft KST3239",
    price: "20.91 zł", 
    image: "https://hurt.ecarla.pl/201006-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-kst3239.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "2,1 cm x 2 cm",
      "Wymiar kartonika": "5,5 cm x 6 cm",
      "Waga": "12 g netto / 14 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "KST3239" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/201007-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-kst3239.jpg",
    image3: ""
  },
  { 
    id: "27852",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem, sztyft KST3244",
    price: "19.68 zł", 
    image: "https://hurt.ecarla.pl/163240-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-kst3244.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "1,4 cm x 1,4 cm",
      "Wymiar kartonika": "5,5 cm x 6 cm",
      "Waga": "4 g netto / 6 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "KST3244" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "27859",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem, sztyft KST3251",
    price: "28.29 zł", 
    image: "https://hurt.ecarla.pl/163282-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-kst3251.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "Długość: 3,8 cm, Szerokość kwiatków: od 1,7 cm do 2 cm",
      "Wymiar kartonika": "5,5 cm x 6 cm",
      "Waga": "10 g netto / 12 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Motyw": "Kwiatki",
      "Model": "KST3251" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "27860",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem, sztyft KST3252",
    price: "26.57 zł", 
    image: "https://hurt.ecarla.pl/163283-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-kst3252.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "4,4 cm x 0,8 cm",
      "Wymiar kartonika": "5,5 cm x 6 cm",
      "Waga": "6 g netto / 8 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "KST3252" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "27862",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem, sztyft KST3254",
    price: "28.29 zł", 
    image: "https://hurt.ecarla.pl/163294-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-kst3254.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "Mniejszy kwiat: 1,9 cm x 1,8 cm, Większy kwiat: 2,4 cm x 2,2 cm",
      "Wymiar kartonika": "5,5 cm x 6 cm",
      "Waga": "10 g netto / 12 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Motyw": "Kwiaty",
      "Model": "KST3254" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "27864",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem, sztyft KST3256",
    price: "22.14 zł", 
    image: "https://hurt.ecarla.pl/163295-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-kst3256.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "9 cm x 1,1 cm",
      "Wymiar kartonika": "5,5 cm x 6 cm",
      "Waga": "4 g netto / 6 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "KST3256" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "27871",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem, sztyft KST3263",
    price: "30.01 zł", 
    image: "https://hurt.ecarla.pl/163281-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-kst3263.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14k złotem, sztyft.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "4 cm x 2,5 cm",
      "Wymiar kartonika": "5,5 cm x 6 cm",
      "Waga": "11 g netto / 13 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "KST3263" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "27872",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem KST3264",
    price: "18.82 zł", 
    image: "https://hurt.ecarla.pl/163287-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-kst3264.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14k złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "2,5 cm x 2,5 cm",
      "Wymiar kartonika": "5,5 cm x 6 cm",
      "Waga": "9 g netto / 11 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Kreol",
      "Model": "KST3264" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "27874",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem, sztyft KST3266",
    price: "20.91 zł", 
    image: "https://hurt.ecarla.pl/163299-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-kst3266.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14k złotem, sztyft.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "2 cm x 1,8 cm",
      "Wymiar kartonika": "5,5 cm x 6 cm",
      "Waga": "6 g netto / 8 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "KST3266" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "27929",    
    name: "Zestaw Balonów Bride to Be BLN01",
    price: "15.99 zł", 
    image: "https://hurt.ecarla.pl/163417-large_default/zestaw-balonow-bln01.jpg",
    description: [
      "Zestaw balonów okazjonalnych.",
      "Z pięknym motywem i mocnymi kolorami."
    ],
    specs: {
      "Model": "BLN01" 
    },
    material: "Guma / Folia (balony)", 
    color: "Nierozpoznany", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  }
],
[
  { 
    id: "28468",    
    name: "Kolczyki wiszące ze stali szlachetnej platerowanej 14k złotem KST3219",
    price: "16.61 zł", 
    image: "https://hurt.ecarla.pl/166126-large_default/kolczyki-wiszace-ze-stali-szlachetnej-platerowanej-14k-zlotem-kst3219.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem, sztyft srebro S925.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem, sztyft srebro S925",
      "Rodzaj zapięcia": "Sztyft",
      "Producent": "Inny",
      "Model": "KST3219" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/166125-large_default/kolczyki-wiszace-ze-stali-szlachetnej-platerowanej-14k-zlotem-kst3219.jpg",
    image3: ""
  },
  { 
    id: "28679",    
    name: "Kolczyki ze stali szlachetnej pozłacanej KST3115",
    price: "17.22 zł", 
    image: "https://hurt.ecarla.pl/167622-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst3115.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary": "1,8 x 1,8 cm",
      "Waga": "11 g",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Producent": "Xuping",
      "Model": "KST3115" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "28873",    
    name: "Kolczyki wiszące koła tiulowe kwiaty 6,5x5cm K1677R",
    price: "10.46 zł", 
    image: "https://hurt.ecarla.pl/168961-large_default/kolczyki-wiszace-kola-tiulowe-kwiaty-65x5cm-k1677r.jpg",
    description: [
      "Kolczyki sztuczne tiulowe kwiaty.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
      "Wymiary": "6,5 x 5 cm",
      "Wymiary kartonika": "10 cm x 8,5 cm",
      "Waga": "8 g netto / 10 g brutto",
      "Rodzaj zapięcia": "Bigiel",
      "Motyw": "Tiulowe kwiaty, koła",
      "Model": "K1677R" 
    },
    material: "Biżuteria sztuczna", 
    color: "Nierozpoznany", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/168962-large_default/kolczyki-wiszace-kola-tiulowe-kwiaty-65x5cm-k1677r.jpg",
    image3: "https://hurt.ecarla.pl/168963-large_default/kolczyki-wiszace-kola-tiulowe-kwiaty-65x5cm-k1677r.jpg"
  },
  { 
    id: "29130",    
    name: "Kolczyki wiszące, efektowne tiulowe z koralikami 15 x 8 cm czarne K1680CZ",
    price: "9.23 zł", 
    image: "https://hurt.ecarla.pl/170741-large_default/kolczyki-wiszace-efektowne-tiulowe-z-koralikami-15-x-8-cm-czarne-k1680cz.jpg",
    description: [
      "Kolczyki sztuczne tiulowe kwiaty.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
      "Wymiary": "15 x 8 cm",
      "Rodzaj zapięcia": "Bigiel",
      "Motyw": "Tiulowe kwiaty z koralikami",
      "Model": "K1680CZ" 
    },
    material: "Biżuteria sztuczna", 
    color: "Czarne", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/170740-large_default/kolczyki-wiszace-efektowne-tiulowe-z-koralikami-15-x-8-cm-czarne-k1680cz.jpg",
    image3: "https://hurt.ecarla.pl/171519-large_default/kolczyki-wiszace-efektowne-tiulowe-z-koralikami-15-x-8-cm-czarne-k1680cz.jpg"
  },
  { 
    id: "29449",    
    name: "Kolczyki ze stali szlachetnej platerowane złotem KST3282",
    price: "20.30 zł", 
    image: "https://hurt.ecarla.pl/173237-large_default/kolczyki-ze-stali-szlachetnej-platerowane-zlotem-kst3282.jpg",
    description: [
      "Kolczyki damskie platerowane złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary kolczyków": "2,5 cm x 0,2 cm x 1,2 cm",
      "Wymiary kartonika": "6 cm x 5,5 cm",
      "Waga": "3 g netto / 4 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Kajdankowy - sztyft zatrzaskowy",
      "Producent": "Inny",
      "Model": "KST3282" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/172950-large_default/kolczyki-ze-stali-szlachetnej-platerowane-zlotem-kst3282.jpg",
    image3: "https://hurt.ecarla.pl/172951-large_default/kolczyki-ze-stali-szlachetnej-platerowane-zlotem-kst3282.jpg"
  },
  { 
    id: "29450",    
    name: "Kolczyki ze stali szlachetnej platerowane złotem KST3283",
    price: "31.98 zł", 
    image: "https://hurt.ecarla.pl/172954-large_default/kolczyki-ze-stali-szlachetnej-platerowane-zlotem-kst3283.jpg",
    description: [
      "Kolczyki damskie platerowane złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary kolczyków": "2,5 cm x 0,8 cm x 1,4 cm",
      "Wymiary kartonika": "6 cm x 5,5 cm",
      "Waga": "6 g netto / 7 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Na zatrzask",
      "Producent": "Inny",
      "Model": "KST3283" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "29454",    
    name: "Kolczyki ze stali szlachetnej platerowane złotem KST3292",
    price: "15.01 zł", 
    image: "https://hurt.ecarla.pl/172971-large_default/kolczyki-ze-stali-szlachetnej-platerowane-zlotem-kst3292.jpg",
    description: [
      "Kolczyki damskie platerowane złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary kolczyków": "1,7 cm x 0,5 cm x 1,5 cm",
      "Wymiary kartonika": "6 cm x 5,5 cm",
      "Waga": "4 g netto / 5 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Producent": "Inny",
      "Model": "KST3292" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/172972-large_default/kolczyki-ze-stali-szlachetnej-platerowane-zlotem-kst3292.jpg",
    image3: "https://hurt.ecarla.pl/173553-large_default/kolczyki-ze-stali-szlachetnej-platerowane-zlotem-kst3292.jpg"
  },
  { 
    id: "29455",    
    name: "Kolczyki ze stali szlachetnej platerowane złotem KST3295",
    price: "19.07 zł", 
    image: "https://hurt.ecarla.pl/172975-large_default/kolczyki-ze-stali-szlachetnej-platerowane-zlotem-kst3295.jpg",
    description: [
      "Kolczyki damskie platerowane złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary kolczyków": "2 cm x 1,2 cm",
      "Głębokość": "0,5 cm",
      "Wymiary kartonika": "6 cm x 5,5 cm",
      "Waga": "3 g netto / 4 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Kajdankowy - sztyft zatrzaskowy",
      "Producent": "Inny",
      "Model": "KST3295" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/172976-large_default/kolczyki-ze-stali-szlachetnej-platerowane-zlotem-kst3295.jpg",
    image3: ""
  }
], [
  { 
    id: "29543",    
    name: "Kolczyki ze stali szlachetnej platerowane 14K złotem, sztyft S925 KST3287",
    price: "16.61 zł", 
    image: "https://hurt.ecarla.pl/173514-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-s925-kst3287.jpg",
    description: [
      "Kolczyki damskie platerowane złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary kolczyków": "1,5 cm x 0,3 cm x 1,2 cm",
      "Wymiary kartonika": "6 cm x 5,5 cm",
      "Waga": "3 g netto / 4 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem, sztyft S925",
      "Rodzaj zapięcia": "Sztyft zatrzaskowy",
      "Producent": "Inny",
      "Model": "KST3287" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/173845-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-s925-kst3287.jpg",
    image3: "https://hurt.ecarla.pl/173513-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-s925-kst3287.jpg"
  },
  { 
    id: "29547",    
    name: "Kolczyki ze stali szlachetnej piesek, sztyft S925, cyrkonie KST3302",
    price: "17.22 zł", 
    image: "https://hurt.ecarla.pl/173541-large_default/kolczyki-ze-stali-szlachetnej-piesek-sztyft-s925-cyrkonie-kst3302.jpg",
    description: [
      "Kolczyki damskie ze stali szlachetnej.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary kolczyków": "1,1 x 0,8 cm",
      "Wymiary kartonika": "6 cm x 5,5 cm",
      "Waga": "3 g netto / 4 g brutto",
      "Materiał wykonania": "Stal chirurgiczna, cyrkonie, sztyft S925",
      "Rodzaj zapięcia": "Sztyft",
      "Motyw": "Piesek",
      "Producent": "Inny",
      "Model": "KST3302" 
    },
    material: "Stal chirurgiczna", 
    color: "Srebrny", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/173538-large_default/kolczyki-ze-stali-szlachetnej-piesek-sztyft-s925-cyrkonie-kst3302.jpg",
    image3: "https://hurt.ecarla.pl/173539-large_default/kolczyki-ze-stali-szlachetnej-piesek-sztyft-s925-cyrkonie-kst3302.jpg"
  },
  { 
    id: "29993",    
    name: "Kolczyki przy uchu, wiszące złote krople 1,8 x 1 cm K1683Z",
    price: "6.77 zł", 
    image: "https://hurt.ecarla.pl/176474-large_default/kolczyki-przy-uchu-wiszace-zlote-krople-18-x-1-cm-k1683z.jpg",
    description: [
      "Kolczyki złote krople.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
      "Wymiary": "1,8 cm x 1 cm",
      "Wymiary kartonika": "8 cm x 10 cm",
      "Waga": "7 g netto / 9 g brutto",
      "Rodzaj zapięcia": "Sztyft",
      "Motyw": "Krople",
      "Model": "K1683Z" 
    },
    material: "Biżuteria sztuczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/176473-large_default/kolczyki-przy-uchu-wiszace-zlote-krople-18-x-1-cm-k1683z.jpg",
    image3: "https://hurt.ecarla.pl/176472-large_default/kolczyki-przy-uchu-wiszace-zlote-krople-18-x-1-cm-k1683z.jpg"
  },
  { 
    id: "30095",    
    name: "Kolczyki wiszące, efektowne perłowe Kule z kokardkami, K1691",
    price: "6.77 zł", 
    image: "https://hurt.ecarla.pl/177179-large_default/kolczyki-wiszace-efektowne-perlowe-kule-z-kokardkami-k1691.jpg",
    description: [
      "Kolczyki sztuczne perłowe kule z kokardkami.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
      "Wymiary": "1,9 cm x 2,2 cm",
      "Wymiary kartonika": "10 cm x 8 cm",
      "Waga": "5 g netto / 10 g brutto",
      "Rodzaj zapięcia": "Sztyft",
      "Motyw": "Perłowe kule, kokardki",
      "Model": "K1691" 
    },
    material: "Biżuteria sztuczna", 
    color: "Nierozpoznany", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/177180-large_default/kolczyki-wiszace-efektowne-perlowe-kule-z-kokardkami-k1691.jpg",
    image3: "https://hurt.ecarla.pl/177164-large_default/kolczyki-wiszace-efektowne-perlowe-kule-z-kokardkami-k1691.jpg"
  },
  { 
    id: "30421",    
    name: "KOLCZYKI Ozdobne cyrkonie KOKARDY K1693",
    price: "11.69 zł", 
    image: "https://hurt.ecarla.pl/179164-large_default/kolczyki-ozdobne-cyrkonie-kokardy-k1693.jpg",
    description: [
      "Kolczyki sztuczne.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
      "Wymiary": "3,5 cm x 2,7 cm",
      "Wymiary kartonika": "10 cm x 8 cm",
      "Waga": "8 g netto / 9 g brutto",
      "Rodzaj zapięcia": "Sztyft",
      "Motyw": "Kokardy",
      "Dodatki": "Cyrkonie",
      "Model": "K1693" 
    },
    material: "Biżuteria sztuczna", 
    color: "Nierozpoznany", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/179154-large_default/kolczyki-ozdobne-cyrkonie-kokardy-k1693.jpg",
    image3: "https://hurt.ecarla.pl/179152-large_default/kolczyki-ozdobne-cyrkonie-kokardy-k1693.jpg"
  }
],
[
  { 
    id: "30583",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem ZAWIJANE KST3352",
    price: "22.14 zł", 
    image: "https://hurt.ecarla.pl/180487-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-zawijane-kst3352.jpg",
    description: [
      "Kolczyki damskie platerowane złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary kolczyków": "2cm x 1,8cm",
      "Głębokość": "1cm",
      "Wymiary kartonika": "6 cm x 5,5 cm",
      "Waga": "14g netto / 16g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Producent": "Inny",
      "Model": "KST3352" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/180486-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-zawijane-kst3352.jpg",
    image3: ""
  },
  { 
    id: "30584",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem ZAWIJANE KST3353",
    price: "22.14 zł", 
    image: "https://hurt.ecarla.pl/180418-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-zawijane-kst3353.jpg",
    description: [
      "Kolczyki damskie platerowane złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary kolczyków": "2,5cm x 2cm",
      "Głębokość": "1,8cm",
      "Wymiary kartonika": "6 cm x 5,5 cm",
      "Waga": "10g netto / 12g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Producent": "Inny",
      "Model": "KST3353" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/180407-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-zawijane-kst3353.jpg",
    image3: ""
  },
  { 
    id: "30585",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem SERCA KST3354",
    price: "22.14 zł", 
    image: "https://hurt.ecarla.pl/180419-large_default/kolczyki-ze-stali-szlachetnej-platerowane-zlotem-kst3354.jpg",
    description: [
      "Kolczyki damskie platerowane złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary kolczyków": "4,5cm x 3,7cm",
      "Głębokość": "0,3cm",
      "Wymiary kartonika": "6 cm x 5,5 cm",
      "Waga": "7g netto / 9g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Motyw": "Serca",
      "Producent": "Inny",
      "Model": "KST3354" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/180420-large_default/kolczyki-ze-stali-szlachetnej-platerowane-zlotem-kst3354.jpg",
    image3: ""
  },
  { 
    id: "30587",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem WISIENKI KST3356",
    price: "24.48 zł", 
    image: "https://hurt.ecarla.pl/180423-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-wisienki-kst3356.jpg",
    description: [
      "Kolczyki damskie platerowane złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary kolczyków": "2,5cm x 2,5cm",
      "Głębokość": "0,6cm",
      "Wymiary kartonika": "6 cm x 5,5 cm",
      "Waga": "12g netto / 14g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Motyw": "Wisienki",
      "Producent": "Inny",
      "Model": "KST3356" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/180424-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-wisienki-kst3356.jpg",
    image3: "https://hurt.ecarla.pl/180280-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-wisienki-kst3356.jpg"
  },
  { 
    id: "30593",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem KWIATY perełki KST3361",
    price: "25.71 zł", 
    image: "https://hurt.ecarla.pl/180255-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-kwiaty-perelki-kst3361.jpg",
    description: [
      "Kolczyki damskie platerowane złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary kolczyków": "2,5cm x 2,7cm",
      "Długość całkowita": "7,5cm",
      "Głębokość": "0,8cm",
      "Wymiary kartonika": "6 cm x 5,5 cm",
      "Waga": "4 g netto / 6 g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Motyw": "Kwiaty",
      "Dodatki": "Perełki",
      "Producent": "Inny",
      "Model": "KST3361" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/180252-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-kwiaty-perelki-kst3361.jpg",
    image3: ""
  },
  { 
    id: "30798",    
    name: "Kolczyki wiszące ze stali szlachetnej platerowane złotem KST3122",
    price: "16.85 zł", 
    image: "https://hurt.ecarla.pl/181618-large_default/kolczyki-wiszace-ze-stali-szlachetnej-platerowane-zlotem-kst3122.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "1,8cm cm x 1,3cm",
      "Wymiar kartonika z opakowaniem": "6,5 cm x 8 cm",
      "Waga": "3g netto / 5g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Kreol",
      "Model": "KST3122" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/181617-large_default/kolczyki-wiszace-ze-stali-szlachetnej-platerowane-zlotem-kst3122.jpg",
    image3: ""
  },
  { 
    id: "30800",    
    name: "Kolczyki wiszące ze stali szlachetnej platerowanej 14k złotem KST3212",
    price: "15.87 zł", 
    image: "https://hurt.ecarla.pl/181625-large_default/kolczyki-wiszace-ze-stali-szlachetnej-platerowanej-14k-zlotem-kst3212.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary": "1,6cm x 1,4cm",
      "Wymiary kartonika": "6cm x 5,5cm",
      "Waga": "2g netto / 5g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Kajdankowe - sztyft zatrzaskowy",
      "Producent": "Inny",
      "Model": "KST3212" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/181623-large_default/kolczyki-wiszace-ze-stali-szlachetnej-platerowanej-14k-zlotem-kst3212.jpg",
    image3: "https://hurt.ecarla.pl/181624-large_default/kolczyki-wiszace-ze-stali-szlachetnej-platerowanej-14k-zlotem-kst3212.jpg"
  },
  { 
    id: "30802",    
    name: "Kolczyki wiszące ze stali szlachetnej platerowanej 14k złotem gwiazdki KST3314",
    price: "21.40 zł", 
    image: "https://hurt.ecarla.pl/184069-large_default/kolczyki-wiszace-ze-stali-szlachetnej-platerowanej-14k-zlotem-gwiazdki-kst3314.jpg",
    description: [
      "Kolczyki damskie ze stali szlachetnej.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary kolczyków": "1cm x 1,1 cm",
      "Wymiary opakowania": "8,5cm x 7cm",
      "Waga": "3g netto / 5g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Motyw": "Gwiazdki",
      "Producent": "Inny",
      "Model": "KST3314" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/181659-large_default/kolczyki-wiszace-ze-stali-szlachetnej-platerowanej-14k-zlotem-gwiazdki-kst3314.jpg",
    image3: "https://hurt.ecarla.pl/181658-large_default/kolczyki-wiszace-ze-stali-szlachetnej-platerowanej-14k-zlotem-gwiazdki-kst3314.jpg"
  },
  { 
    id: "30811",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem owalne KST3384",
    price: "22.14 zł", 
    image: "https://hurt.ecarla.pl/182044-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-owalne-kst3384.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "2cm x 2cm x 0,6cm",
      "Wymiar kartonika": "8,5cm x 7cm",
      "Waga": "14g netto / 17g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Motyw": "Owalne",
      "Model": "KST3384" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/181678-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-owalne-kst3384.jpg",
    image3: ""
  },
  { 
    id: "30814",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem duże okrągłe KST3387",
    price: "28.91 zł", 
    image: "https://hurt.ecarla.pl/181692-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-duze-okragle-kst3387.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "2,6cm x 2,6cm x 1,1cm",
      "Wymiar kartonika z opakowaniem": "8,5cm x 7cm",
      "Waga": "18g netto / 22g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Kreol",
      "Motyw": "Okrągłe",
      "Model": "KST3387" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/181691-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-duze-okragle-kst3387.jpg",
    image3: ""
  },
  { 
    id: "30818",    
    name: "Naszyjnik stal szlachetna pozłacana 14k złotem NST2182",
    price: "23.25 zł", 
    image: "https://hurt.ecarla.pl/181718-large_default/naszyjnik-stal-szlachetna-pozlacana-14k-zlotem-nst2182.jpg",
    description: [
      "Modny naszyjnik ze stali chirurgicznej.",
      "Nowa kolekcja biżuterii ze stali nierdzewnej platerowanej 14 karatowym złotem.",
      "Świetnie pasuje do eleganckich, jak również do codziennych stylizacji.",
      "Elegancki dodatek na każdą okazję, do sukienek, swetrów i bluzek.",
      "Biżuteria ze stali chirurgicznej nie ulega korozji, nie rdzewieje, nie ciemnieje!"
    ],
    specs: {
      "Długość łańcuszka": "41cm",
      "Długość regulacji": "5cm",
      "Wymiary kartonika": "12cm x 10cm",
      "Waga": "6g / 10g brutto",
      "Materiał wykonania": "Stal chirurgiczna pozłacana",
      "Producent": "Inny",
      "Model": "NST2182" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasny odcień złota", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/181697-large_default/naszyjnik-stal-szlachetna-pozlacana-14k-zlotem-nst2182.jpg",
    image3: ""
  }
],
[
  { 
    id: "30896",    
    name: "Kolczyki ze stali szlachetnej pozłacanej kryształ górski KST2911",
    price: "12.18 zł", 
    image: "https://hurt.ecarla.pl/182283-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-krysztal-gorski-kst2911.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki."
    ],
    specs: {
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Dodatki": "Kryształ górski",
      "Producent": "Inny",
      "Model": "KST2911" 
    },
    material: "Stal chirurgiczna", 
    color: "Złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "30897",    
    name: "Kolczyki ze stali szlachetnej pozłacanej kryształ górski KST2943",
    price: "12.18 zł", 
    image: "https://hurt.ecarla.pl/182284-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-krysztal-gorski-kst2943.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki."
    ],
    specs: {
      "Długość": "5 cm",
      "Średnica kółka": "3 cm",
      "Długość kamienia": "3,5 cm",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Angielskie zapięcie",
      "Dodatki": "Kryształ górski",
      "Producent": "Xuping",
      "Model": "KST2943" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/182285-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-krysztal-gorski-kst2943.jpg",
    image3: ""
  },
  { 
    id: "30898",    
    name: "Kolczyki ze stali szlachetnej pozłacanej kryształ górski KST2914",
    price: "12.18 zł", 
    image: "https://hurt.ecarla.pl/182286-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-krysztal-gorski-kst2914.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki."
    ],
    specs: {
      "Wymiary": "0,8 x 4,2 cm",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Dodatki": "Kryształ górski",
      "Producent": "Inny",
      "Model": "KST2914" 
    },
    material: "Stal chirurgiczna", 
    color: "Złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "30899",    
    name: "Kolczyki ze stali szlachetnej pozłacanej kryształ górski KST2912CZ",
    price: "10.95 zł", 
    image: "https://hurt.ecarla.pl/182287-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-krysztal-gorski-kst2912cz.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki."
    ],
    specs: {
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Dodatki": "Kryształ górski",
      "Producent": "Inny",
      "Model": "KST2912CZ" 
    },
    material: "Stal chirurgiczna", 
    color: "Złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "30900",    
    name: "Kolczyki ze stali szlachetnej pozłacanej kryształ górski KST2912B",
    price: "10.95 zł", 
    image: "https://hurt.ecarla.pl/182288-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-krysztal-gorski-kst2912b.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki."
    ],
    specs: {
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Dodatki": "Kryształ górski",
      "Producent": "Inny",
      "Model": "KST2912B" 
    },
    material: "Stal chirurgiczna", 
    color: "Złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "30901",    
    name: "Kolczyki ze stali szlachetnej pozłacanej kryształ górski KST2912R",
    price: "10.95 zł", 
    image: "https://hurt.ecarla.pl/182289-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-krysztal-gorski-kst2912r.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki."
    ],
    specs: {
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Dodatki": "Kryształ górski",
      "Producent": "Inny",
      "Model": "KST2912R" 
    },
    material: "Stal chirurgiczna", 
    color: "Złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "30902",    
    name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem kryształ górski KST2904CZE",
    price: "11.69 zł", 
    image: "https://hurt.ecarla.pl/182290-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-krysztal-gorski-kst2904cze.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary": "1,0 x 5,1 cm",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Zapięcie angielskie",
      "Dodatki": "Kryształ górski",
      "Model": "KST2904CZE" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/182291-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-krysztal-gorski-kst2904cze.jpg",
    image3: ""
  },
  { 
    id: "30903",    
    name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem kryształ górski KST2904CZ",
    price: "11.69 zł", 
    image: "https://hurt.ecarla.pl/182292-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-krysztal-gorski-kst2904cz.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary": "1,0 x 5,1 cm",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Zapięcie angielskie",
      "Dodatki": "Kryształ górski",
      "Model": "KST2904CZ" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "30955",    
    name: "Kolczyki perełki ażurowe w trójkącie, srebrne sztyft K11S",
    price: "1.85 zł", 
    image: "https://hurt.ecarla.pl/182574-large_default/kolczyki-perelki-azurowe-w-trojkacie-srebrne-sztyft-k11s.jpg",
    description: [
      "Klasyczne, piękne wzornictwo kolczyków idealnie podkreśli naturalne piękno i klasę kobiety.",
      "Kolczyki zdobione perłą.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Kolczyki bardzo efektowne! Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju."
    ],
    specs: {
      "Wymiary": "1,3 x 1,3 cm",
      "Rodzaj zapięcia": "Sztyft",
      "Motyw / Ozdoba": "Perła, ażurowy trójkąt",
      "Model": "K11S" 
    },
    material: "Biżuteria sztuczna", 
    color: "Srebrny", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "30956",    
    name: "Kolczyki Nausznica Korona Złoto K26Z",
    price: "1.85 zł", 
    image: "https://hurt.ecarla.pl/182577-large_default/kolczyki-nausznica-korona-zloto-k26z.jpg",
    description: [
      "Klasyczne, piękne wzornictwo kolczyków idealnie podkreśli naturalne piękno i klasę kobiety.",
      "Kolczyki zdobione szklanymi kryształkami.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Kolczyki bardzo efektowne! Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju."
    ],
    specs: {
      "Wymiary": "2,5 x 1 cm",
      "Typ": "Nausznica",
      "Motyw": "Korona",
      "Dodatki": "Szklane kryształki",
      "Model": "K26Z" 
    },
    material: "Biżuteria sztuczna", 
    color: "Złoty", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/182575-large_default/kolczyki-nausznica-korona-zloto-k26z.jpg",
    image3: "https://hurt.ecarla.pl/182576-large_default/kolczyki-nausznica-korona-zloto-k26z.jpg"
  },
  { 
    id: "30971",    
    name: "Kolczyki wiszące, efektowne tiulowe kwiat, pudrowy róż K1704",
    price: "15.99 zł", 
    image: "https://hurt.ecarla.pl/182631-large_default/kolczyki-wiszace-efektowne-tiulowe-kwiat-pudrowy-roz-k1704.jpg",
    description: [
      "Kolczyki sztuczne tiulowe kwiaty.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
      "Wymiary": "11cm x 5 cm",
      "Wymiary opakowania": "16,5cm x 9cm",
      "Waga": "10g netto / 13g brutto",
      "Rodzaj zapięcia": "Bigiel",
      "Motyw": "Tiulowe kwiaty",
      "Model": "K1704" 
    },
    material: "Biżuteria sztuczna", 
    color: "Pudrowy róż", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/182630-large_default/kolczyki-wiszace-efektowne-tiulowe-kwiat-pudrowy-roz-k1704.jpg",
    image3: "https://hurt.ecarla.pl/182629-large_default/kolczyki-wiszace-efektowne-tiulowe-kwiat-pudrowy-roz-k1704.jpg"
  }
],
[
  { 
    id: "31009",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem, sztyft KST3235",
    price: "22.14 zł", 
    image: "https://hurt.ecarla.pl/184065-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-kst3235.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "3 cm x 1,9 cm",
      "Wymiar kartonika": "5,5 cm x 6 cm",
      "Waga": "10g netto / 12g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "KST3235" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/182780-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-kst3235.jpg",
    image3: ""
  },
  { 
    id: "31031",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem, duże sztyft KST3374",
    price: "22.51 zł", 
    image: "https://hurt.ecarla.pl/183241-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-duze-sztyft-kst3374.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "3,5cm x 2cm",
      "Wymiar kartonika": "5,5 cm x 6 cm",
      "Waga": "14g netto / 16g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Model": "KST3374" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/183086-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-duze-sztyft-kst3374.jpg",
    image3: ""
  },
  { 
    id: "31060",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem, SERCA cyrkonie KST3394",
    price: "17.84 zł", 
    image: "https://hurt.ecarla.pl/184050-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-serca-cyrkonie-kst3394.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "1,3cm x 1,1cm",
      "Wymiar kartonika": "5,5 cm x 6 cm",
      "Waga": "6g netto / 9g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Motyw": "Serca",
      "Dodatki": "Cyrkonie",
      "Model": "KST3394" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/183219-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-serca-cyrkonie-kst3394.jpg",
    image3: ""
  },
  { 
    id: "31061",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem, MUSZELKI, sztyft KST3395",
    price: "18.45 zł", 
    image: "https://hurt.ecarla.pl/183242-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-muszelki-sztyft-kst3395.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "2cm x 1,6cm x 0,3cm",
      "Wymiar kartonika": "5,5 cm x 6 cm",
      "Waga": "3g netto / 6g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Motyw": "Muszelki",
      "Model": "KST3395" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/183147-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-muszelki-sztyft-kst3395.jpg",
    image3: ""
  }
],
[
  { 
    id: "31207",    
    name: "Kolczyki wiszące, efektowne tiulowe kwiat z perła, sztyft fiolet K1709",
    price: "9.72 zł", 
    image: "https://hurt.ecarla.pl/184276-large_default/kolczyki-wiszace-efektowne-tiulowe-kwiat-z-perla-sztyft-fiolet-k1709.jpg",
    description: [
      "Kolczyki sztuczne tiulowe kwiaty.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
      "Wymiary": "10cm x 12 cm",
      "Wymiary opakowania": "16,5cm x 9cm",
      "Waga": "18g netto / 21g brutto",
      "Rodzaj zapięcia": "Sztyft",
      "Motyw / Ozdoba": "Tiulowe kwiaty, perła",
      "Model": "K1709" 
    },
    material: "Biżuteria sztuczna", 
    color: "Fiolet", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/184083-large_default/kolczyki-wiszace-efektowne-tiulowe-kwiat-z-perla-sztyft-fiolet-k1709.jpg",
    image3: "https://hurt.ecarla.pl/184081-large_default/kolczyki-wiszace-efektowne-tiulowe-kwiat-z-perla-sztyft-fiolet-k1709.jpg"
  },
  { 
    id: "31208",    
    name: "Kolczyki wiszące, efektowne tiulowe kwiat z perła, sztyft krem K1710",
    price: "9.72 zł", 
    image: "https://hurt.ecarla.pl/185290-large_default/kolczyki-wiszace-efektowne-tiulowe-kwiat-z-perla-sztyft-krem-k1710.jpg",
    description: [
      "Kolczyki sztuczne tiulowe kwiaty.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
      "Wymiary": "10cm x 12 cm",
      "Wymiary opakowania": "16,5cm x 9cm",
      "Waga": "18g netto / 21g brutto",
      "Rodzaj zapięcia": "Sztyft",
      "Motyw / Ozdoba": "Tiulowe kwiaty, perła",
      "Model": "K1710" 
    },
    material: "Biżuteria sztuczna", 
    color: "Krem", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/184605-large_default/kolczyki-wiszace-efektowne-tiulowe-kwiat-z-perla-sztyft-krem-k1710.jpg",
    image3: "https://hurt.ecarla.pl/185288-large_default/kolczyki-wiszace-efektowne-tiulowe-kwiat-z-perla-sztyft-krem-k1710.jpg"
  },
  { 
    id: "31216",    
    name: "Kolczyki KOŁA ze stali szlachetnej platerowane 14k złotem, cyrkonie KST3326",
    price: "20.79 zł", 
    image: "https://hurt.ecarla.pl/184290-large_default/kolczyki-kola-ze-stali-szlachetnej-platerowane-14k-zlotem-cyrkonie-kst3326.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "4,2cm x 4,2cm x 0,1cm",
      "Wymiar kartonika": "5,5 cm x 6 cm",
      "Waga": "6g netto / 9g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Dodatki": "Cyrkonie",
      "Motyw": "Koła",
      "Model": "KST3326" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/184150-large_default/kolczyki-kola-ze-stali-szlachetnej-platerowane-14k-zlotem-cyrkonie-kst3326.jpg",
    image3: "https://hurt.ecarla.pl/184153-large_default/kolczyki-kola-ze-stali-szlachetnej-platerowane-14k-zlotem-cyrkonie-kst3326.jpg"
  },
  { 
    id: "31217",    
    name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem z cyrkoniami, sztyft srebro S925 KST3327",
    price: "19.56 zł", 
    image: "https://hurt.ecarla.pl/184503-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-z-cyrkoniami-sztyft-srebro-s925-kst3327.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary": "2cm x 1,2cm x 1,7cm",
      "Wymiar kartonika": "6cm x 5,5 cm",
      "Waga": "4g netto / 7g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft ze srebra S925",
      "Dodatki": "Cyrkonie",
      "Model": "KST3327" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/184160-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-z-cyrkoniami-sztyft-srebro-s925-kst3327.jpg",
    image3: "https://hurt.ecarla.pl/184162-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-z-cyrkoniami-sztyft-srebro-s925-kst3327.jpg"
  },
  { 
    id: "31221",    
    name: "Kolczyki KOKARDKI ze stali szlachetnej pozłacanej 14k złotem, cyrkonie, sztyft srebro S925 KST3330",
    price: "18.33 zł", 
    image: "https://hurt.ecarla.pl/184506-large_default/kolczyki-kokardki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-cyrkonie-sztyft-srebro-s925-kst3330.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary": "1,8cm x 1,2cm",
      "Wymiar kartonika": "6cm x 5,5 cm",
      "Waga": "2g netto / 4g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Angielskie (sztyft ze srebra S925)",
      "Motyw": "Kokardki",
      "Dodatki": "Cyrkonie",
      "Producent": "Inny",
      "Model": "KST3330" 
    },
    material: "Stal chirurgiczna", 
    color: "Złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/184206-large_default/kolczyki-kokardki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-cyrkonie-sztyft-srebro-s925-kst3330.jpg",
    image3: "https://hurt.ecarla.pl/184205-large_default/kolczyki-kokardki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-cyrkonie-sztyft-srebro-s925-kst3330.jpg"
  },
  { 
    id: "31222",    
    name: "Kolczyki KOKARDKI ze stali szlachetnej pozłacanej 14k złotem z cyrkoniami, sztyft S925 KST3329",
    price: "21.53 zł", 
    image: "https://hurt.ecarla.pl/184505-large_default/kolczyki-kokardki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-z-cyrkoniami-sztyft-s925-kst3329.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary": "1,9cm x 2cm",
      "Wymiar kartonika": "6cm x 5,5 cm",
      "Waga": "2g netto / 4g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft ze srebra S925",
      "Motyw": "Kokardki",
      "Dodatki": "Cyrkonie",
      "Producent": "Inny",
      "Model": "KST3329" 
    },
    material: "Stal chirurgiczna", 
    color: "Złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/184231-large_default/kolczyki-kokardki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-z-cyrkoniami-sztyft-s925-kst3329.jpg",
    image3: "https://hurt.ecarla.pl/184230-large_default/kolczyki-kokardki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-z-cyrkoniami-sztyft-s925-kst3329.jpg"
  },
  { 
    id: "31224",    
    name: "Kolczyki WISIENKI ze stali szlachetnej pozłacanej 14k złotem cyrkonie, sztyft srebro S925 perły KST3334",
    price: "18.33 zł", 
    image: "https://hurt.ecarla.pl/184416-large_default/kolczyki-wisienki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-cyrkonie-sztyft-srebro-s925-perly-kst3334.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary": "1,7cm x 1,2",
      "Wymiar kartonika": "6cm x 5,5 cm",
      "Waga": "2g netto / 4g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft ze srebra S925",
      "Motyw": "Wisienki",
      "Dodatki": "Cyrkonie, perły",
      "Producent": "Inny",
      "Model": "KST3334" 
    },
    material: "Stal chirurgiczna", 
    color: "Złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/184264-large_default/kolczyki-wisienki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-cyrkonie-sztyft-srebro-s925-perly-kst3334.jpg",
    image3: "https://hurt.ecarla.pl/184261-large_default/kolczyki-wisienki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-cyrkonie-sztyft-srebro-s925-perly-kst3334.jpg"
  },
  { 
    id: "31226",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złote, cyrkonie SERCA KST3339",
    price: "15.38 zł", 
    image: "https://hurt.ecarla.pl/184497-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlote-cyrkonie-serca-kst3339.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "1,5cm x 1,7cm x 0,7cm",
      "Wymiar kartonika": "5,5 cm x 6 cm",
      "Waga": "4g netto / 8g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft zatrzaskowy",
      "Motyw": "Serca",
      "Dodatki": "Cyrkonie",
      "Model": "KST3339" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/184303-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlote-cyrkonie-serca-kst3339.jpg",
    image3: "https://hurt.ecarla.pl/184307-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlote-cyrkonie-serca-kst3339.jpg"
  },
  { 
    id: "31227",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złote, perły SERCA, sztyft srebro S925KST3341",
    price: "19.07 zł", 
    image: "https://hurt.ecarla.pl/184460-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlote-perly-serca-sztyft-srebro-s925kst3341.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "2,6cm x 1,6cm x 0,5cm",
      "Wymiar kartonika": "5,5 cm x 6 cm",
      "Waga": "6g netto / 9g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft ze srebra S925",
      "Motyw": "Serca",
      "Dodatki": "Perły",
      "Model": "KST3341" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/184317-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlote-perly-serca-sztyft-srebro-s925kst3341.jpg",
    image3: "https://hurt.ecarla.pl/184318-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlote-perly-serca-sztyft-srebro-s925kst3341.jpg"
  },
  { 
    id: "31229",    
    name: "Kolczyki KOKARDY ze stali szlachetnej platerowane 14k złote, perły, sztyft S925 KST3342",
    price: "28.17 zł", 
    image: "https://hurt.ecarla.pl/184491-large_default/kolczyki-kokardy-ze-stali-szlachetnej-platerowane-14k-zlote-perly-sztyft-s925-kst3342.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "3,8cm x 1,4cm",
      "Wymiar kartonika": "5,5 cm x 6 cm",
      "Waga": "6g netto / 9g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft ze srebra S925",
      "Motyw": "Kokardy",
      "Dodatki": "Perły",
      "Model": "KST3342" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/184331-large_default/kolczyki-kokardy-ze-stali-szlachetnej-platerowane-14k-zlote-perly-sztyft-s925-kst3342.jpg",
    image3: "https://hurt.ecarla.pl/184330-large_default/kolczyki-kokardy-ze-stali-szlachetnej-platerowane-14k-zlote-perly-sztyft-s925-kst3342.jpg"
  },
  { 
    id: "31259",    
    name: "Kolczyki wiszące, efektowne koronkowe kwiat, różowa RÓŻA sztyft K1707",
    price: "12.92 zł", 
    image: "https://hurt.ecarla.pl/184713-large_default/kolczyki-wiszace-efektowne-koronkowe-kwiat-rozowa-roza-sztyft-k1707.jpg",
    description: [
      "Kolczyki sztuczne tiulowe kwiaty.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
      "Wymiary": "6,5cm x 5 cm x 1,5cm",
      "Wymiary kartonika": "10cm x 8cm",
      "Waga": "9g netto / 11g brutto",
      "Rodzaj zapięcia": "Sztyft",
      "Motyw": "Różowa róża, koronkowe kwiaty",
      "Model": "K1707" 
    },
    material: "Biżuteria sztuczna", 
    color: "Różowy", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/184612-large_default/kolczyki-wiszace-efektowne-koronkowe-kwiat-rozowa-roza-sztyft-k1707.jpg",
    image3: "https://hurt.ecarla.pl/184613-large_default/kolczyki-wiszace-efektowne-koronkowe-kwiat-rozowa-roza-sztyft-k1707.jpg"
  },
  { 
    id: "31260",    
    name: "Kolczyki wiszące, efektowne koronkowe kwiat, kremowa RÓŻA sztyft K1708",
    price: "12.92 zł", 
    image: "https://hurt.ecarla.pl/184720-large_default/kolczyki-wiszace-efektowne-koronkowe-kwiat-kremowa-roza-sztyft-k1708.jpg",
    description: [
      "Kolczyki sztuczne tiulowe kwiaty.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    specs: {
      "Wymiary": "6,5cm x 5 cm x 1,5cm",
      "Wymiary kartonika": "10cm x 8cm",
      "Waga": "9g netto / 11g brutto",
      "Rodzaj zapięcia": "Sztyft",
      "Motyw": "Kremowa róża, koronkowe kwiaty",
      "Model": "K1708" 
    },
    material: "Biżuteria sztuczna", 
    color: "Kremowy", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/184619-large_default/kolczyki-wiszace-efektowne-koronkowe-kwiat-kremowa-roza-sztyft-k1708.jpg",
    image3: "https://hurt.ecarla.pl/184617-large_default/kolczyki-wiszace-efektowne-koronkowe-kwiat-kremowa-roza-sztyft-k1708.jpg"
  },
  { 
    id: "31263",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem, KOŁA geometryczne KST3320",
    price: "23.25 zł", 
    image: "https://hurt.ecarla.pl/184743-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-kola-geometryczne-kst3320.jpg",
    description: [
      "Kolczyki damskie platerowane złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary kolczyków": "2,2cm x 2cm x 0,4cm",
      "Wymiary kartonika": "6 cm x 5,5 cm",
      "Waga": "4g netto / 7g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Kreol",
      "Motyw": "Koła geometryczne",
      "Producent": "Inny",
      "Model": "KST3320" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/184642-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-kola-geometryczne-kst3320.jpg",
    image3: "https://hurt.ecarla.pl/184643-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-kola-geometryczne-kst3320.jpg"
  },
  { 
    id: "31268",    
    name: "Kolczyki wiszące ze stali szlachetnej platerowane 14k złotem, sztyft srebro S925, perły KST3340",
    price: "25.22 zł", 
    image: "https://hurt.ecarla.pl/184830-large_default/kolczyki-wiszace-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-srebro-s925-perly-kst3340.jpg",
    description: [
      "Kolczyki damskie platerowane złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiary kolczyków": "5,9cm x 1,9cm 0,9cm",
      "Wymiary kartonika": "6 cm x 5,5 cm",
      "Waga": "19g netto / 22g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft ze srebra S925",
      "Dodatki": "Perły",
      "Producent": "Inny",
      "Model": "KST3340" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "Wikh magazynie", 
    image2: "https://hurt.ecarla.pl/184670-large_default/kolczyki-wiszace-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-srebro-s925-perly-kst3340.jpg",
    image3: "https://hurt.ecarla.pl/184669-large_default/kolczyki-wiszace-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-srebro-s925-perly-kst3340.jpg"
  },
  { 
    id: "31436",    
    name: "Kolczyki ze stali szlachetnej platerowane 14k złotem, Koniczynka masa perłowa KST3388",
    price: "16.61 zł", 
    image: "https://hurt.ecarla.pl/185798-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-koniczynka-masa-perlowa-kst3388.jpg",
    description: [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "Wymiar kolczyków": "1,3cm x 1,3cm",
      "Wymiar kartonika": "5,5 cm x 6 cm",
      "Waga": "4g netto / 6g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Motyw": "Koniczynka",
      "Dodatki": "Masa perłowa",
      "Model": "KST3388" 
    },
    material: "Stal chirurgiczna", 
    color: "Jasne złoto", 
    availability: "W magazynie", 
    image2: "",
    image3: ""
  },
  { 
    id: "31437",    
    name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem z cyrkoniami, SERCE KST3389",
    price: "22.76 zł", 
    image: "https://hurt.ecarla.pl/186114-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-z-cyrkoniami-serce-kst3389.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "WYMIARY": "2,8cm x 0,8cm",
      "Wymiar kartonika": "6cm x 5,5 cm",
      "Waga": "4g netto / 7g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Szarnir",
      "Motyw": "Serce",
      "Dodatki": "Cyrkonie",
      "Producent": "Inny",
      "Model": "KST3389" 
    },
    material: "Stal chirurgiczna", 
    color: "Złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/185799-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-z-cyrkoniami-serce-kst3389.jpg",
    image3: "https://hurt.ecarla.pl/185779-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-z-cyrkoniami-serce-kst3389.jpg"
  },
  { 
    id: "31455",    
    name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem, SERCE RÓŻA sztyft srebro S925 KST3368",
    price: "16.61 zł", 
    image: "https://hurt.ecarla.pl/186103-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-serce-roza-sztyft-srebro-s925-kst3338.jpg",
    description: [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    specs: {
      "WYMIARY": "1,4cm x 1,7cm",
      "Wymiar kartonika": "6cm x 5,5 cm",
      "Waga": "4g netto / 6g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft (sztyft ze srebra S925)",
      "Motyw": "Serce, róża",
      "Producent": "Inny",
      "Model": "KST3368" 
    },
    material: "Stal chirurgiczna", 
    color: "Złoto", 
    availability: "W magazynie", 
    image2: "https://hurt.ecarla.pl/185883-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-serce-roza-sztyft-srebro-s925-kst3338.jpg",
    image3: "https://hurt.ecarla.pl/185882-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-serce-roza-sztyft-srebro-s925-kst3338.jpg"
  }
],
[
  {
    "id": "31534",
    "name": "Kolczyki ze stali szlachetnej pozłacanej 14k złotem, SERCE KST3318",
    "price": "22.14 zł",
    "image": "https://hurt.ecarla.pl/201003-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-serce-kst3318.jpg",
    "description": [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "3,2cm x 1,9cm",
      "Wymiar kartonika": "6cm x 5,5 cm",
      "Waga": "6g netto / 8g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft zatrzaskowy (sztyft ze srebra S925)",
      "Producent": "Inny",
      "Model": "KST3318"
    },
    "material": "Stal chirurgiczna",
    "color": "Złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/186554-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-serce-kst3318.jpg",
    "image3": "https://hurt.ecarla.pl/186552-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-serce-kst3318.jpg"
  },
  {
    "id": "31541",
    "name": "Kolczyki ze stali szlachetnej pozłacanej 14k złotem, grube KOŁA sztyft KST3324",
    "price": "22.14 zł",
    "image": "https://hurt.ecarla.pl/186711-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-grube-kola-sztyft-kst3324.jpg",
    "description": [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "2,5cm x 2,5cm x 0,7cm",
      "Wymiar kartonika": "6cm x 5,5 cm",
      "Waga": "8g netto / 11g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft (sztyft ze srebra S925)",
      "Producent": "Inny",
      "Model": "KST3324"
    },
    "material": "Stal chirurgiczna",
    "color": "Złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/186596-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-grube-kola-sztyft-kst3324.jpg",
    "image3": "https://hurt.ecarla.pl/186595-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-grube-kola-sztyft-kst3324.jpg"
  },
  {
    "id": "31542",
    "name": "Kolczyki wiszące srebro platerowane 14k złotem, srebro S925 KST3391",
    "price": "19.07 zł",
    "image": "https://hurt.ecarla.pl/186712-large_default/kolczyki-wiszace-srebro-platerowane-14k-zlotem-srebro-s925-kst3391.jpg",
    "description": [
      "Kolczyki damskie platerowane złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "2cm x 1,7cm",
      "Wymiar kartonika": "6cm x 5,5 cm",
      "Waga": "2g netto / 5g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft zatrzaskowy ze srebra S925",
      "Producent": "Inny",
      "Model": "KST3391"
    },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/186598-large_default/kolczyki-wiszace-srebro-platerowane-14k-zlotem-srebro-s925-kst3391.jpg",
    "image3": "https://hurt.ecarla.pl/186597-large_default/kolczyki-wiszace-srebro-platerowane-14k-zlotem-srebro-s925-kst3391.jpg"
  },
  {
    "id": "31543",
    "name": "Kolczyki wiszące srebro platerowane 14k złotem, srebro S925 KST3392",
    "price": "16.61 zł",
    "image": "https://hurt.ecarla.pl/186715-large_default/kolczyki-wiszace-srebro-platerowane-14k-zlotem-srebro-s925-kst3392.jpg",
    "description": [
      "Kolczyki damskie platerowane złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "1,9cm x 1,3cm x 1,5cm",
      "Wymiar kartonika": "6cm x 5,5 cm",
      "Waga": "6g netto / 8g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft ze srebra S925",
      "Producent": "Inny",
      "Model": "KST3392"
    },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/186599-large_default/kolczyki-wiszace-srebro-platerowane-14k-zlotem-srebro-s925-kst3392.jpg",
    "image3": "https://hurt.ecarla.pl/186713-large_default/kolczyki-wiszace-srebro-platerowane-14k-zlotem-srebro-s925-kst3392.jpg"
  },
  {
    "id": "31761",
    "name": "Kolczyki ze stali szlachetnej pozłacanej 14k złotem, sztyft srebro S925 KST3404",
    "price": "16.61 zł",
    "image": "https://hurt.ecarla.pl/188325-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-sztyft-srebro-s925-kst3404.jpg",
    "description": [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "2,1cm x 2cm x 0,9cm",
      "Wymiar kartonika": "6cm x 5,5 cm",
      "Waga": "4g netto / 9g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft (sztyft ze srebra S925)",
      "Producent": "Inny",
      "Model": "KST3404"
    },
    "material": "Stal chirurgiczna",
    "color": "Złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/188322-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-sztyft-srebro-s925-kst3404.jpg",
    "image3": "https://hurt.ecarla.pl/188324-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-14k-zlotem-sztyft-srebro-s925-kst3404.jpg"
  },
  {
    "id": "31780",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem KST2895",
    "price": "18.45 zł",
    "image": "https://hurt.ecarla.pl/188391-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst2895.jpg",
    "description": [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "1,6cm x 2cm",
      "Waga": "7g",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Zapięcie angielskie",
      "Producent": "Inny",
      "Model": "KST2895"
    },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": null,
    "image3": null
  },
  {
    "id": "31781",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, sztyft KST3241",
    "price": "22.14 zł",
    "image": "https://hurt.ecarla.pl/188378-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-kst3241.jpg",
    "description": [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "2,7cm x 2,5cm",
      "Wymiar kartonika": "5,5cm x 6cm",
      "Waga": "6g netto / 8g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft",
      "Producent": "Inny",
      "Model": "KST3241"
    },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": null,
    "image3": null
  },
  {
    "id": "31785",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem WISIENKI, sztyft srebro S925 KST3317",
    "price": "11.69 zł",
    "image": "https://hurt.ecarla.pl/188387-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-wisienki-sztyft-srebro-s925-kst3317.jpg",
    "description": [
      "Kolczyki damskie platerowane złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "1,7cm x 1,7cm",
      "Wymiar kartonika": "6cm x 5,5cm",
      "Waga": "1g netto / 3g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft ze srebra S925",
      "Producent": "Inny",
      "Model": "KST3317"
    },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/188385-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-wisienki-sztyft-srebro-s925-kst3317.jpg",
    "image3": "https://hurt.ecarla.pl/188384-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-wisienki-sztyft-srebro-s925-kst3317.jpg"
  },
  {
    "id": "31789",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, TRUSKAWKI wiszące czerwone KST3406",
    "price": "26.45 zł",
    "image": "https://hurt.ecarla.pl/188614-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-truskawki-wiszace-czerwone-kst3406.jpg",
    "description": [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "3,3cm x 0,7cm",
      "Wymiar kartonika": "5,5cm x 6cm",
      "Waga": "4g netto / 7g brutto",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Rodzaj zapięcia": "Sztyft ze srebra S925",
      "Producent": "Inny",
      "Model": "KST3406"
    },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/188421-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-truskawki-wiszace-czerwone-kst3406.jpg",
    "image3": null
  },
  {
    "id": "32122",
    "name": "Kolczyki nausznica srebrne z cyrkoniami i perełką K325S",
    "price": "2.80 zł",
    "image": "https://hurt.ecarla.pl/190764-large_default/kolczyki-nausznica-srebrne-z-cyrkoniami-i-perelka-k325s.jpg",
    "description": [
      "Kolczyki w kolorze srebrnym.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu."
    ],
    "specs": {
      "WYMIARY": "wysokość 2,1 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K325S"
    },
    "material": "Metal nieszlachetny",
    "color": "Srebro",
    "availability": "W magazynie",
    "image2": null,
    "image3": null
  },
  {
    "id": "32124",
    "name": "Kolczyki nausznica złoty krzyżyk cyrkonią K691WZ3Z",
    "price": "2.80 zł",
    "image": "https://hurt.ecarla.pl/190767-large_default/kolczyki-nausznica-zloty-krzyzyk-cyrkonia-k691wz3z.jpg",
    "description": [
      "Kolczyki w kolorze złotym.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Nie moczyć! Unikać kontaktu z wodą!"
    ],
    "specs": {
      "WYMIARY": "wysokość 1 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K691WZ3Z"
    },
    "material": "Metal nieszlachetny",
    "color": "Złoto",
    "availability": "W magazynie",
    "image2": null,
    "image3": null
  },
  {
    "id": "32125",
    "name": "Kolczyki nausznica srebrny krzyżyk cyrkonią K691WZ3S",
    "price": "2.80 zł",
    "image": "https://hurt.ecarla.pl/190771-large_default/kolczyki-nausznica-srebrny-krzyzyk-cyrkonia-k691wz3s.jpg",
    "description": [
      "Kolczyki przy uchu.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Nie moczyć! Unikać kontaktu z wodą!"
    ],
    "specs": {
      "WYMIARY": "wysokość 1 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K691WZ3S"
    },
    "material": "Metal nieszlachetny",
    "color": "Srebro",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/190772-large_default/kolczyki-nausznica-srebrny-krzyzyk-cyrkonia-k691wz3s.jpg",
    "image3": null
  },
  {
    "id": "32126",
    "name": "Kolczyki delikatne wielokąty, delikatne złote K314Z",
    "price": "2.15 zł",
    "image": "https://hurt.ecarla.pl/190782-large_default/kolczyki-delikatne-wielokaty-delikatne-zlote-k314z.jpg",
    "description": [
      "Kolczyki przy uchu.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Nie moczyć! Unikać kontaktu z wodą!"
    ],
    "specs": {
      "WYMIARY": "wysokość 1 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K314Z"
    },
    "material": "Metal nieszlachetny",
    "color": "Złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/190778-large_default/kolczyki-delikatne-wielokaty-delikatne-zlote-k314z.jpg",
    "image3": null
  },
  {
    "id": "32127",
    "name": "Kolczyki delikatne wielokąty, delikatne srebrne K314S",
    "price": "2.15 zł",
    "image": "https://hurt.ecarla.pl/190784-large_default/kolczyki-delikatne-wielokaty-delikatne-srebrne-k314s.jpg",
    "description": [
      "Kolczyki przy uchu.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Nie moczyć! Unikać kontaktu z wodą!"
    ],
    "specs": {
      "WYMIARY": "wysokość 1 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K314S"
    },
    "material": "Metal nieszlachetny",
    "color": "Srebro",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/190787-large_default/kolczyki-delikatne-wielokaty-delikatne-srebrne-k314s.jpg",
    "image3": null
  },
  {
    "id": "32128",
    "name": "Kolczyki delikatne wielokąty, czarne, silikonowe K320CZ",
    "price": "2.80 zł",
    "image": "https://hurt.ecarla.pl/190786-large_default/kolczyki-delikatne-wielokaty-czarne-silikonowe-k320cz.jpg",
    "description": [
      "Kolczyki przy uchu.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Nie moczyć! Unikać kontaktu z wodą!"
    ],
    "specs": {
      "WYMIARY": "wysokość 1 cm",
      "Materiał wykonania": "Silikon/Stopy metali nieszlachetnych",
      "Model": "K320CZ"
    },
    "material": "Silikon/Metal nieszlachetny",
    "color": "Czarny",
    "availability": "W magazynie",
    "image2": null,
    "image3": null
  },
  {
    "id": "32131",
    "name": "KOLCZYKI WISZĄCE KÓŁECZKA SREBRNE K923S",
    "price": "4.89 zł",
    "image": "https://hurt.ecarla.pl/190801-large_default/kolczyki-wiszace-koleczka-srebrne-k923s.jpg",
    "description": [
      "Kolczyki w kolorze srebrnym.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu."
    ],
    "specs": {
      "WYMIARY": "podane na ostatnim zdjęciu",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K923S"
    },
    "material": "Metal nieszlachetny",
    "color": "Srebro",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/190799-large_default/kolczyki-wiszace-koleczka-srebrne-k923s.jpg",
    "image3": "https://hurt.ecarla.pl/190798-large_default/kolczyki-wiszace-koleczka-srebrne-k923s.jpg"
  },
  {
    "id": "32132",
    "name": "Kolczyki delikatne delfiny, delikatne srebrne K324",
    "price": "2.15 zł",
    "image": "https://hurt.ecarla.pl/190804-large_default/kolczyki-delikatne-delfiny-delikatne-srebrne-k324.jpg",
    "description": [
      "Kolczyki przy uchu.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Nie moczyć! Unikać kontaktu z wodą!"
    ],
    "specs": {
      "WYMIARY": "wysokość 1 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K324"
    },
    "material": "Metal nieszlachetny",
    "color": "Srebro",
    "availability": "W magazynie",
    "image2": null,
    "image3": null
  },
  {
    "id": "32134",
    "name": "Kolczyki w kolorze złotym z kryształkiem sztyft róż MEDUZA K1549WZ3",
    "price": "3.87 zł",
    "image": "https://hurt.ecarla.pl/190809-large_default/kolczyki-w-kolorze-zlotym-z-krysztalkiem-sztyft-roz-meduza-k1549wz3.jpg",
    "description": [
      "Kolczyki w kształcie Kraba.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Nie moczyć! Unikać kontaktu z wodą!"
    ],
    "specs": {
      "WYMIARY": "0,7 cm x 0,6 cm",
      "Waga": "1 g netto/ 3 g brutto",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K1549WZ3"
    },
    "material": "Metal nieszlachetny",
    "color": "Złoto",
    "availability": "W magazynie",
    "image2": null,
    "image3": null
  },
  {
    "id": "32137",
    "name": "Kolczyki delikatne SALVA cyrkonie K743",
    "price": "4.89 zł",
    "image": "https://hurt.ecarla.pl/190819-large_default/kolczyki-delikatne-salva-cyrkonie-k743.jpg",
    "description": [
      "Kolczyki przy uchu.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Nie moczyć! Unikać kontaktu z wodą!"
    ],
    "specs": {
      "WYMIARY": "wysokość 1,8 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K743"
    },
    "material": "Metal nieszlachetny",
    "color": "Srebro/cyrkonie",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/190817-large_default/kolczyki-delikatne-salva-cyrkonie-k743.jpg",
    "image3": null
  },
  {
    "id": "32138",
    "name": "Kolczyki nausznice z listkiem, łańcuszki K625Z",
    "price": "4.19 zł",
    "image": "https://hurt.ecarla.pl/190822-large_default/kolczyki-nausznice-z-listkiem-lancuszki-k625z.jpg",
    "description": [
      "Kolczyki Nausznice z listkiem w kolorze srebra.",
      "Bardzo subtelne a zarazem efektowne.",
      "Wykonane ze stopów metali nieszlachetnych. Nie zawierają niklu ani chromu."
    ],
    "specs": {
      "WYMIARY": "Długość wiszących łańcuszków: 7.5 cm, Całkowita długość kolczyka: 13.5 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K625Z"
    },
    "material": "Metal nieszlachetny",
    "color": "Srebro",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/190870-large_default/kolczyki-nausznice-z-listkiem-lancuszki-k625z.jpg",
    "image3": null
  },
  {
    "id": "32139",
    "name": "Kolczyki podwójne, Cyrkonia, skrzydła Anioła srebrne K222S",
    "price": "2.80 zł",
    "image": "https://hurt.ecarla.pl/190826-large_default/kolczyki-podwojne-cyrkonia-skrzydla-aniola-srebrne-k222s.jpg",
    "description": [
      "Kolczyki przy uchu.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Nie moczyć! Unikać kontaktu z wodą!"
    ],
    "specs": {
      "WYMIARY": "3 x 1,5 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K222S"
    },
    "material": "Metal nieszlachetny",
    "color": "Srebro",
    "availability": "W magazynie",
    "image2": null,
    "image3": null
  },
  {
    "id": "32140",
    "name": "Kolczyki podwójne, Cyrkonia, skrzydła Anioła złote K222Z",
    "price": "2.80 zł",
    "image": "https://hurt.ecarla.pl/190828-large_default/kolczyki-podwojne-cyrkonia-skrzydla-aniola-zlote-k222z.jpg",
    "description": [
      "Kolczyki przy uchu.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Nie moczyć! Unikać kontaktu z wodą!"
    ],
    "specs": {
      "WYMIARY": "3 x 1,5 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K222Z"
    },
    "material": "Metal nieszlachetny",
    "color": "Złoto",
    "availability": "W magazynie",
    "image2": null,
    "image3": null
  },


],
[
  {
    "id": "32144",
    "name": "Kolczyki wiszące duże drewniane półkola K1080",
    "price": "5.17 zł",
    "image": "https://hurt.ecarla.pl/190837-large_default/kolczyki-wiszace-duze-drewniane-k1261.jpg",
    "description": [
      "Kolczyki wiszące.",
      "Bardzo modne i efektowne.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Unikać kontaktu z wodą, perfumami."
    ],
    "specs": {
      "WYMIARY": "6,5 x 8,5 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K1080"
    },
    "material": "Metal nieszlachetny, drewno",
    "color": "Drewniany",
    "availability": "W magazynie"
  },
  {
    "id": "32145",
    "name": "Kolczyki geometryczne romby, czarno złote K943CZ",
    "price": "5.17 zł",
    "image": "https://hurt.ecarla.pl/190844-large_default/kolczyki-geometryczne-romby-czarno-zlote-k943cz.jpg",
    "description": [
      "Kolczyki wiszące.",
      "Bardzo modne i efektowne.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Unikać kontaktu z wodą, perfumami."
    ],
    "specs": {
      "WYMIARY": "długość ok. 4 cm, szerokość ok. 1,5 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K943CZ"
    },
    "material": "Metal nieszlachetny",
    "color": "Czarno-złoty",
    "availability": "W magazynie"
  },
  {
    "id": "32146",
    "name": "Kolczyki czarne kryształy, cyrkonie złote K321",
    "price": "5.60 zł",
    "image": "https://hurt.ecarla.pl/190848-large_default/kolczyki-zielony-krysztal-mini-k328.jpg",
    "description": [
      "Kolczyki wiszące.",
      "Bardzo modne i efektowne.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Unikać kontaktu z wodą, perfumami."
    ],
    "specs": {
      "WYMIARY": "długość ok. 3,8 cm, szerokość ok. 2,5 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K321"
    },
    "material": "Metal nieszlachetny",
    "color": "Czarno-złoty",
    "availability": "W magazynie"
  },
  {
    "id": "32148",
    "name": "Efektowne kolczyki z kryształami niebieskimi i dużym różowym kwiatem K572",
    "price": "9.79 zł",
    "image": "https://hurt.ecarla.pl/190859-large_default/efektowne-kolczyki-z-krysztalami-niebieskimi-i-duzym-rozowym-kwiatem-k572.jpg",
    "description": [
      "Kolczyki wiszące.",
      "Bardzo modne i efektowne.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Unikać kontaktu z wodą, perfumami."
    ],
    "specs": {
      "WYMIARY": "długość ok. 7,7 cm, szerokość ok. 3,7 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K572"
    },
    "material": "Metal nieszlachetny",
    "color": "Niebieski, różowy",
    "availability": "W magazynie"
  },
  {
    "id": "32150",
    "name": "Kolczyki kryształowe, ozdobne, wiszące złote K1503Z",
    "price": "6.89 zł",
    "image": "https://hurt.ecarla.pl/190876-large_default/kolczyki-krysztalowe-ozdobne-wiszace-zlote-k1503z.jpg",
    "description": [
      "Kolczyki wiszące.",
      "Bardzo modne i efektowne.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Unikać kontaktu z wodą, perfumami."
    ],
    "specs": {
      "WYMIARY": "długość ok. 7,5 cm, szerokość ok. 3 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K1503Z"
    },
    "material": "Metal nieszlachetny",
    "color": "Złoty",
    "availability": "W magazynie"
  },
  {
    "id": "32152",
    "name": "Kolczyki wiszące kryształki srebrne K979S",
    "price": "12.05 zł",
    "image": "https://hurt.ecarla.pl/190884-large_default/kolczyki-wiszace-krysztalki-srebrne-k979s.jpg",
    "description": [
      "Kolczyki wiszące.",
      "Bardzo modne i efektowne.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Unikać kontaktu z wodą, perfumami."
    ],
    "specs": {
      "WYMIARY": "brak danych",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K979S"
    },
    "material": "Metal nieszlachetny",
    "color": "Srebrny",
    "availability": "W magazynie"
  },
  {
    "id": "32153",
    "name": "Kolczyki okrągłe kryształowa rozeta, cyrkonie K711",
    "price": "18.94 zł",
    "image": "https://hurt.ecarla.pl/190891-large_default/kolczyki-okragle-krysztalowa-rozeta-cyrkonie-k711.jpg",
    "description": [
      "Kolczyki wiszące.",
      "Bardzo modne i efektowne.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Unikać kontaktu z wodą, perfumami."
    ],
    "specs": {
      "WYMIARY": "brak danych",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K711"
    },
    "material": "Metal nieszlachetny",
    "color": "Kryształowy",
    "availability": "W magazynie"
  },
  {
    "id": "32154",
    "name": "Kolczyki srebrne koła potrójne, sztyft K928S",
    "price": "4.54 zł",
    "image": "https://hurt.ecarla.pl/190898-large_default/kolczyki-kola-zlote-k928.jpg",
    "description": [
      "Kolczyki wiszące.",
      "Bardzo modne i efektowne.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Unikać kontaktu z wodą, perfumami."
    ],
    "specs": {
      "WYMIARY": "5,5 x 7.7 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "k928S"
    },
    "material": "Metal nieszlachetny",
    "color": "Srebrny",
    "availability": "W magazynie"
  },
 
  {
    "id": "32162",
    "name": "Kolczyki sztyft, tiulowy KWIAT, frędzle róż K884R",
    "price": "5.25 zł",
    "image": "https://hurt.ecarla.pl/190906-large_default/kolczyki-sztyft-tiulowy-kwiat-fredzle-roz-k884.jpg",
    "description": [
      "Kolczyki wiszące.",
      "Bardzo modne i efektowne.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Unikać kontaktu z wodą, perfumami."
    ],
    "specs": {
      "WYMIARY": "5,5 x 7.7 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K884R"
    },
    "material": "Metal nieszlachetny",
    "color": "Różowy",
    "availability": "W magazynie"
  }
],
[
  {
    "id": "32252",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, KST2093",
    "price": "11.07 zł",
    "image": "https://hurt.ecarla.pl/191512-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-kst2093.jpg",
    "description": [
      "Kolczyki damskie ze stali szlachetnej.",
      "Eleganckie i stylowe kolczyki.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "1,2 cm x 1,2 cm",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Model": "KST2093"
    },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/191513-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-kst2093.jpg",
    "image3": null
  },
  {
    "id": "32253",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, z cyrkoniami KST1217",
    "price": "11.07 zł",
    "image": "https://hurt.ecarla.pl/191517-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-z-cyrkoniami-kst1217.jpg",
    "description": [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "1,4 x 1,8 cm",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Model": "KST1217"
    },
    "material": "Stal chirurgiczna",
    "color": "Złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/191518-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-z-cyrkoniami-kst1217.jpg",
    "image3": null
  },
  {
    "id": "32256",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, wiszące KST3409",
    "price": "21.53 zł",
    "image": "https://hurt.ecarla.pl/191534-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-wiszace-kst3409.jpg",
    "description": [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft.",
      "Eleganckie i stylowe kolczyki.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "1,5 cm x 3,8 cm",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Model": "KST3409"
    },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/201008-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-wiszace-kst3409.jpg",
    "image3": "https://hurt.ecarla.pl/191535-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-wiszace-kst3409.jpg"
  },
  {
    "id": "32258",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, wiszące KST3413",
    "price": "21.53 zł",
    "image": "https://hurt.ecarla.pl/191544-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-wiszace-kst3413.jpg",
    "description": [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft.",
      "Eleganckie i stylowe kolczyki.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "0,8 cm x 2,5 cm",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Model": "KST3413"
    },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/191543-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-wiszace-kst3413.jpg",
    "image3": null
  },
  {
    "id": "32275",
    "name": "Kolczyki ze stali szlachetnej pozłacanej KST3001",
    "price": "18.45 zł",
    "image": "https://hurt.ecarla.pl/191588-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst3001.jpg",
    "description": [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "1,5 x 7,5 cm",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Model": "KST3001"
    },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/191587-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst3001.jpg",
    "image3": null
  },
  {
    "id": "32276",
    "name": "Kolczyki ze stali szlachetnej pozłacanej KST3002",
    "price": "17.22 zł",
    "image": "https://hurt.ecarla.pl/191590-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst3002.jpg",
    "description": [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "1,9 x 6 cm",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Model": "KST3002"
    },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/191589-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-kst3002.jpg",
    "image3": null
  },
  {
    "id": "32384",
    "name": "Kolczyki wiszące duże eleganckie Kwiaty z perłami 4,6 x 10,6 cm K1696",
    "price": "11.69 zł",
    "image": "https://hurt.ecarla.pl/192339-large_default/kolczyki-wiszace-duze-eleganckie-kwiaty-z-perlami-46-x-106-cm-k1696.jpg",
    "description": [
      "Kolczyki złote kwiaty.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    "specs": {
      "WYMIARY": "4,6 cm x 10,6 cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K1696"
    },
    "material": "Metal nieszlachetny",
    "color": "Złoty",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/192336-large_default/kolczyki-wiszace-duze-eleganckie-kwiaty-z-perlami-46-x-106-cm-k1696.jpg",
    "image3": "https://hurt.ecarla.pl/192335-large_default/kolczyki-wiszace-duze-eleganckie-kwiaty-z-perlami-46-x-106-cm-k1696.jpg"
  },
  {
    "id": "32385",
    "name": "Kolczyki przy uchu ozdobne wianiuszki z koralikami K1712",
    "price": "16.61 zł",
    "image": "https://hurt.ecarla.pl/197762-large_default/kolczyki-przy-uchu-ozdobne-wianiuszki-z-koralikami-k1712.jpg",
    "description": [
      "Kolczyki sztuczne sztyfty przy uchu z koralikami.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    "specs": {
      "WYMIARY": "2,2 cm x 2,5 cm x 1cm",
      "Materiał wykonania": "Stopy metali nieszlachetnych",
      "Model": "K1712"
    },
    "material": "Metal nieszlachetny",
    "color": "Wielokolorowy",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/197755-large_default/kolczyki-przy-uchu-ozdobne-wianiuszki-z-koralikami-k1712.jpg",
    "image3": null
  },
  {
    "id": "32386",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, z cyrkoniami KST2859",
    "price": "16.61 zł",
    "image": "https://hurt.ecarla.pl/192353-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-z-cyrkoniami-kst2859.jpg",
    "description": [
      "Kolczyki damskie platerowane złotem.",
      "Eleganckie i stylowe kolczyki.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "0,9 x 0,9 cm",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Model": "KST2859"
    },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/192352-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-z-cyrkoniami-kst2859.jpg",
    "image3": "https://hurt.ecarla.pl/192351-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-z-cyrkoniami-kst2859.jpg"
  },
  {
    "id": "32390",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, z cyrkoniami KST3416",
    "price": "19.56 zł",
    "image": "https://hurt.ecarla.pl/192438-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-z-cyrkoniami-kst3416.jpg",
    "description": [
      "Kolczyki damskie platerowane złotem.",
      "Eleganckie i stylowe kolczyki.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "0,8cm x 0,8cm x 0,5cm",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Model": "KST3416"
    },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/192418-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-z-cyrkoniami-kst3416.jpg",
    "image3": "https://hurt.ecarla.pl/192419-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-z-cyrkoniami-kst3416.jpg"
  }
],
[
  {
    "id": "32776",
    "name": "Kolczyki KOKARDY wiszące ze stali szlachetnej pozłacanej, perełki KST3281",
    "price": "30.75 zł",
    "image": "https://hurt.ecarla.pl/194487-large_default/kolczyki-kokardy-wiszace-ze-stali-szlachetnej-pozlacanej-perelki-kst3281.jpg",
    "description": [
      "Kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "6,5 cm x 5,5 cm",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Model": "KST3281"
    },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/194485-large_default/kolczyki-kokardy-wiszace-ze-stali-szlachetnej-pozlacanej-perelki-kst3281.jpg",
    "image3": "https://hurt.ecarla.pl/194486-large_default/kolczyki-kokardy-wiszace-ze-stali-szlachetnej-pozlacanej-perelki-kst3281.jpg"
  },
  {
    "id": "32830",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, zapięcie angielskie KST3421",
    "price": "14.15 zł",
    "image": "https://hurt.ecarla.pl/194874-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-zapiecie-angielskie-kst3421.jpg",
    "description": [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft.",
      "Eleganckie i stylowe kolczyki.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "1,3 cm x 1,3 cm",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Model": "KST3421"
    },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/194748-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-zapiecie-angielskie-kst3421.jpg",
    "image3": null
  },
  {
    "id": "32835",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, zapięcie angielskie KST3429",
    "price": "18.45 zł",
    "image": "https://hurt.ecarla.pl/194794-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-zapiecie-angielskie-kst3429.jpg",
    "description": [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "1,2 cm x 1,2 cm",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Model": "KST3429"
    },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": null,
    "image3": null
  },
  {
    "id": "32836",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, zapięcie sztyfit KST3410",
    "price": "20.30 zł",
    "image": "https://hurt.ecarla.pl/194948-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-zapiecie-sztyfit-kst3410.jpg",
    "description": [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft.",
      "Eleganckie i stylowe kolczyki.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "2,3 cm x 1 cm",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Model": "KST3410"
    },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/194759-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-zapiecie-sztyfit-kst3410.jpg",
    "image3": null
  },
  {
    "id": "32838",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, zapięcie sztyfit KST3411",
    "price": "23.99 zł",
    "image": "https://hurt.ecarla.pl/194761-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-zapiecie-sztyfit-kst3411.jpg",
    "description": [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft.",
      "Eleganckie i stylowe kolczyki.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "2 cm x 2 cm",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Model": "KST3411"
    },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": null,
    "image3": null
  },
  {
    "id": "32840",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, zapięcie sztyfit SERCE KST3435",
    "price": "12.92 zł",
    "image": "https://hurt.ecarla.pl/201005-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-zapiecie-sztyfit-serce-kst3435.jpg",
    "description": [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft.",
      "Eleganckie i stylowe kolczyki.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "1,8 cm x 2,2 cm",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Model": "KST3435"
    },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/201004-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-zapiecie-sztyfit-serce-kst3435.jpg",
    "image3": null
  },
  {
    "id": "32842",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, zapięcie angielskie KST3426",
    "price": "21.53 zł",
    "image": "https://hurt.ecarla.pl/194951-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-zapiecie-angielskie-kst3426.jpg",
    "description": [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "2 cm x 2 cm",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Model": "KST3426"
    },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": null,
    "image3": null
  },
  {
    "id": "32845",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, zapięcie angielskie KST3432",
    "price": "16.61 zł",
    "image": "https://hurt.ecarla.pl/194772-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-zapiecie-angielskie-kst3432.jpg",
    "description": [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
      "Eleganckie i stylowe kolczyki.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "1,5 cm x 1,1 cm",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Model": "KST3432"
    },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": null,
    "image3": null
  },
  {
    "id": "32849",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, zapięcie sztyfit KST3436",
    "price": "12.92 zł",
    "image": "https://hurt.ecarla.pl/194954-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-zapiecie-sztyfit-kst3436.jpg",
    "description": [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, sztyft.",
      "Eleganckie i stylowe kolczyki.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "2 cm x 2 cm",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Model": "KST3436"
    },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": null,
    "image3": null
  },
  {
    "id": "32850",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, zapięcie angielskie KST3465",
    "price": "12.30 zł",
    "image": "https://hurt.ecarla.pl/194787-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-zapiecie-angielskie-kst3465.jpg",
    "description": [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, angielskie.",
      "Eleganckie i stylowe kolczyki.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "1,2 cm x 1,2 cm",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Model": "KST3465"
    },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": null,
    "image3": null
  },
  {
    "id": "32852",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, zapięcie angielskie KST3464",
    "price": "17.10 zł",
    "image": "https://hurt.ecarla.pl/194950-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-zapiecie-angielskie-kst3464.jpg",
    "description": [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, angielskie.",
      "Eleganckie i stylowe kolczyki.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "WYMIARY": "1,4 cm x 1 cm",
      "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
      "Model": "KST3464"
    },
    "material": "Stal chirurgiczna",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": null,
    "image3": null
  }
], {
  "id": "33105",
  "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, cyrkonie serca KST2856",
  "price": "11.07 zł",
  "image": "https://hurt.ecarla.pl/196349-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-serca-kst2856.jpg",
  "description": [
    "Kolczyki damskie ze stali szlachetnej.",
    "Eleganckie i stylowe kolczyki.",
    "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
  ],
  "specs": {
    "WYMIARY": "1 x 1 cm",
    "Materiał wykonania": "Stal chirurgiczna platerowana złotem",
    "Model": "KST2856"
  },
  "material": "Stal chirurgiczna",
  "color": "Jasne złoto",
  "availability": "W magazynie",
  "image2": "https://hurt.ecarla.pl/196350-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-serca-kst2856.jpg",
  "image3": "https://hurt.ecarla.pl/196348-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-serca-kst2856.jpg"
},
[
  {
    "id": "33144",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, cyrkonie KST3499",
    "price": "9.23 zł",
    "image": "https://hurt.ecarla.pl/196418-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-kst3499.jpg",
    "specs": { "WYMIARY": "0,7 x 0,7 cm", "Model": "KST3499" }
  },
  {
    "id": "33145",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, kokardka cyrkonie KST3494",
    "price": "19.07 zł",
    "image": "https://hurt.ecarla.pl/196420-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-kokardka-cyrkonie-kst3494.jpg",
    "specs": { "WYMIARY": "1,6 x 1,5 cm", "Model": "KST3494" }
  },
  {
    "id": "33146",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, cyrkonie serce, gwiazdka KST3493",
    "price": "11.07 zł",
    "image": "https://hurt.ecarla.pl/196545-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-serce-gwiazdka-kst3493.jpg",
    "specs": { "WYMIARY": "0,7 x 0,7 cm", "Model": "KST3493" }
  },
  {
    "id": "33147",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, cyrkonie motylki KST3491",
    "price": "13.41 zł",
    "image": "https://hurt.ecarla.pl/196546-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-motylki-kst3491.jpg",
    "specs": { "WYMIARY": "1 x 0,8 cm", "Model": "KST3491" }
  },
  {
    "id": "33148",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, cyrkonie serca KST3487",
    "price": "12.3 zł",
    "image": "https://hurt.ecarla.pl/196426-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-serca-kst3487.jpg",
    "specs": { "WYMIARY": "1 x 0,9 cm", "Model": "KST3487" }
  },
  {
    "id": "33150",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, cyrkonie serca KST3485",
    "price": "9.72 zł",
    "image": "https://hurt.ecarla.pl/196431-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-serca-kst3485.jpg",
    "specs": { "WYMIARY": "0,7 x 0,7 cm", "Model": "KST3485" }
  },
  {
    "id": "33152",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, cyrkonie serca KST3483",
    "price": "12.92 zł",
    "image": "https://hurt.ecarla.pl/196435-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-serca-kst3483.jpg",
    "specs": { "WYMIARY": "1 x 0,9 cm", "Model": "KST3483" }
  },
  {
    "id": "33153",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, cyrkonie, kółka sztyft KST3471",
    "price": "17.1 zł",
    "image": "https://hurt.ecarla.pl/196437-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-kolka-sztyft-kst3471.jpg",
    "specs": { "WYMIARY": "1,2 x 1,5 cm", "Model": "KST3471" }
  },
  {
    "id": "33154",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, cyrkonie zielone kwiaty KST3472",
    "price": "22.14 zł",
    "image": "https://hurt.ecarla.pl/196441-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-zielone-kwiaty-kst3472.jpg",
    "specs": { "WYMIARY": "2,5 x 2,7 cm", "Model": "KST3472" }
  },
  {
    "id": "33156",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, cyrkonie perły KST3474",
    "price": "22.14 zł",
    "image": "https://hurt.ecarla.pl/196451-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-perly-kst3474.jpg",
    "specs": { "WYMIARY": "2 x 2,5 cm", "Model": "KST3474" }
  },
  {
    "id": "33159",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, cyrkonie, perły KST3515",
    "price": "19.68 zł",
    "image": "https://hurt.ecarla.pl/196461-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-perly-kst3515.jpg",
    "specs": { "WYMIARY": "1,2 x 2,2 cm", "Model": "KST3515" }
  },
  {
    "id": "33160",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, kokardki KST3476",
    "price": "12.92 zł",
    "image": "https://hurt.ecarla.pl/196466-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-kokardki-kst3476.jpg",
    "specs": { "WYMIARY": "2,5 x 2 cm", "Model": "KST3476" }
  },
  {
    "id": "33162",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wyraziste, nowoczesne KST3478",
    "price": "15.38 zł",
    "image": "https://hurt.ecarla.pl/196471-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wyraziste-nowoczesne-kst3478.jpg",
    "specs": { "WYMIARY": "2,5 x 3 cm", "Model": "KST3478" }
  },
  {
    "id": "33163",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, dekoracyjne róż KST3479R",
    "price": "14.15 zł",
    "image": "https://hurt.ecarla.pl/196473-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-dekoracyjne-roz-kst3479r.jpg",
    "specs": { "WYMIARY": "2,4 x 2,6 cm", "Model": "KST3479R" }
  },
  {
    "id": "33164",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, dekoracyjne czarne KST3479CZ",
    "price": "14.15 zł",
    "image": "https://hurt.ecarla.pl/196475-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-dekoracyjne-czarne-kst3479cz.jpg",
    "specs": { "WYMIARY": "2,4 x 2,6 cm", "Model": "KST3479CZ" }
  },
  {
    "id": "33165",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, dekoracyjne ecru KST3479B",
    "price": "14.15 zł",
    "image": "https://hurt.ecarla.pl/196477-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-dekoracyjne-ecru-kst3479b.jpg",
    "specs": { "WYMIARY": "2,4 x 2,6 cm", "Model": "KST3479B" }
  },
  {
    "id": "33166",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, efektowne czarne serca KST3481CZ",
    "price": "14.15 zł",
    "image": "https://hurt.ecarla.pl/196479-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-efektowne-czarne-serca-kst3481cz.jpg",
    "specs": { "WYMIARY": "2,5 x 2,8 cm", "Model": "KST3481CZ" }
  },
  {
    "id": "33167",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, efektowne białe serca KST3481B",
    "price": "14.15 zł",
    "image": "https://hurt.ecarla.pl/196481-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-efektowne-biale-serca-kst3481b.jpg",
    "specs": { "WYMIARY": "2,5 x 2,8 cm", "Model": "KST3481B" }
  },
  {
    "id": "33168",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, kwiaty, masa perłowa KST3480",
    "price": "14.15 zł",
    "image": "https://hurt.ecarla.pl/196483-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-kwiaty-masa-perlowa-kst3480.jpg",
    "specs": { "WYMIARY": "2,6 x 3 cm", "Model": "KST3480" }
  },
  {
    "id": "33169",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, koła KST3455",
    "price": "15.38 zł",
    "image": "https://hurt.ecarla.pl/196559-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-kola-kst3455.jpg",
    "specs": { "WYMIARY": "1,2 x 3 cm", "Model": "KST3455" }
  },
  {
    "id": "33170",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, potrójne koła KST3457",
    "price": "15.38 zł",
    "image": "https://hurt.ecarla.pl/196561-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-potrojne-kola-kst3457.jpg",
    "specs": { "WYMIARY": "1,6 x 2,5 cm", "Model": "KST3457" }
  },
  {
    "id": "33171",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, podwójny owal KST3458",
    "price": "15.38 zł",
    "image": "https://hurt.ecarla.pl/196554-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-podwojny-owal-kst3458.jpg",
    "specs": { "WYMIARY": "2,5 x 1,1 cm", "Model": "KST3458" }
  },
  {
    "id": "33172",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, owalne KST3459",
    "price": "15.38 zł",
    "image": "https://hurt.ecarla.pl/196565-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-owalne-kst3459.jpg",
    "specs": { "WYMIARY": "2,5 x 1,8 x 0,4 cm", "Model": "KST3459" }
  },
  {
    "id": "33173",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, dekoracyjne KST3461",
    "price": "15.38 zł",
    "image": "https://hurt.ecarla.pl/196563-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-dekoracyjne-kst3461.jpg",
    "specs": { "WYMIARY": "1 x 1 cm", "Model": "KST3461" }
  },
  {
    "id": "33174",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, okrągłe KST3462",
    "price": "15.38 zł",
    "image": "https://hurt.ecarla.pl/196564-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-okragle-kst3462.jpg",
    "specs": { "WYMIARY": "3 x 1,8 x 0,4 cm", "Model": "KST3462" }
  },
  {
    "id": "33176",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, cyrkonie serca KST3495",
    "price": "24.6 zł",
    "image": "https://hurt.ecarla.pl/196494-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-serca-kst3495.jpg",
    "specs": { "WYMIARY": "1 x 1 cm", "Model": "KST3495" }
  },
  {
    "id": "33177",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, cyrkonie luksusowy blask KST3501",
    "price": "19.68 zł",
    "image": "https://hurt.ecarla.pl/196497-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-luksusowy-blask-kst3501.jpg",
    "specs": { "WYMIARY": "1 x 1 cm", "Model": "KST3501" }
  },
  {
    "id": "33178",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, cyrkonie kwiatki KST3504",
    "price": "17.22 zł",
    "image": "https://hurt.ecarla.pl/196590-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-kwiatki-kst3504.jpg",
    "specs": { "WYMIARY": "1 x 1 cm", "Model": "KST3504" }
  }
],
[
  {
    "id": "33179",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, cyrkonie niebieskie KST3498",
    "price": "16.61 zł",
    "image": "https://hurt.ecarla.pl/196593-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-niebieskie-kst3498.jpg",
    "specs": { "WYMIARY": "1 x 1,3 cm", "Model": "KST3498" }
  },
  {
    "id": "33181",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, cyrkonie niebieskie KST3496",
    "price": "16.61 zł",
    "image": "https://hurt.ecarla.pl/196589-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-niebieskie-kst3496.jpg",
    "specs": { "WYMIARY": "1 x 1,6 x 0,5 cm", "Model": "KST3496" }
  },
  {
    "id": "33185",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, cyrkonie motylki KST3489",
    "price": "18.45 zł",
    "image": "https://hurt.ecarla.pl/196581-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-motylki-kst3489.jpg",
    "specs": { "WYMIARY": "1,2 x 1,1 cm", "Model": "KST3489" }
  },
  {
    "id": "33186",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, KST3482",
    "price": "17.22 zł",
    "image": "https://hurt.ecarla.pl/196592-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-kst3482.jpg",
    "specs": { "WYMIARY": "1 x 1 cm", "Model": "KST3482" }
  },
  {
    "id": "33187",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, cyrkonia wiszące kwiaty KST3454",
    "price": "17.84 zł",
    "image": "https://hurt.ecarla.pl/196594-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonia-wiszace-kwiaty-kst3454.jpg",
    "specs": { "WYMIARY": "2,5 x 3,5 cm", "Model": "KST3454" }
  },
  {
    "id": "33188",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące kokardy z perełkami KST3453",
    "price": "19.07 zł",
    "image": "https://hurt.ecarla.pl/196505-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-kokardy-z-perelkami-kst3453.jpg",
    "specs": { "WYMIARY": "10 x 4 cm", "Model": "KST3453" }
  },
  {
    "id": "33189",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące KST3452",
    "price": "17.84 zł",
    "image": "https://hurt.ecarla.pl/196507-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-kst3452.jpg",
    "specs": { "WYMIARY": "6,5 x 2 cm", "Model": "KST3452" }
  },
  {
    "id": "33190",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, cyrkonie wiszące kwiaty KST3451",
    "price": "17.84 zł",
    "image": "https://hurt.ecarla.pl/196584-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-wiszace-kwiaty-kst3451.jpg",
    "specs": { "WYMIARY": "5,7 x 1,5 cm", "Model": "KST3451" }
  },
  {
    "id": "33191",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące liście kwiat KST3450",
    "price": "17.84 zł",
    "image": "https://hurt.ecarla.pl/201002-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-liscie-kwiat-kst3450.jpg",
    "specs": { "WYMIARY": "4,7 x 2 cm", "Model": "KST3450" }
  },
  {
    "id": "33192",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące z perłą KST3449",
    "price": "17.84 zł",
    "image": "https://hurt.ecarla.pl/196576-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-z-perla-kst3449.jpg",
    "specs": { "WYMIARY": "6,5 x 1,8 cm", "Model": "KST3449" }
  },
  {
    "id": "33193",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, panterka KST3448",
    "price": "17.84 zł",
    "image": "https://hurt.ecarla.pl/196566-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-panterka-kst3448.jpg",
    "specs": { "WYMIARY": "2,8 x 2,3 cm", "Model": "KST3448" }
  },
  {
    "id": "33195",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące KST3446",
    "price": "17.84 zł",
    "image": "https://hurt.ecarla.pl/196572-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-kst3446.jpg",
    "specs": { "WYMIARY": "8 x 1 cm", "Model": "KST3446" }
  },
  {
    "id": "33196",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, panterka i kwiaty KST3445",
    "price": "17.84 zł",
    "image": "https://hurt.ecarla.pl/196570-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-panterka-i-kwiaty-kst3445.jpg",
    "specs": { "WYMIARY": "3 x 1,9 cm", "Model": "KST3445" }
  },
  {
    "id": "33199",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące KST3442",
    "price": "17.84 zł",
    "image": "https://hurt.ecarla.pl/196518-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-kst3442.jpg",
    "specs": { "WYMIARY": "6,2 x 2,6 cm", "Model": "KST3442" }
  },
  {
    "id": "33200",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące kwiaty KST3441",
    "price": "17.84 zł",
    "image": "https://hurt.ecarla.pl/196580-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-kwiaty-kst3441.jpg",
    "specs": { "WYMIARY": "5,6 x 1,4 cm", "Model": "KST3441" }
  },
  {
    "id": "33201",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące kwiaty z perłą KST3440",
    "price": "17.84 zł",
    "image": "https://hurt.ecarla.pl/196532-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-kwiaty-z-perla-kst3440.jpg",
    "specs": { "WYMIARY": "6,5 x 3,3 cm", "Model": "KST3440" }
  },
  {
    "id": "33204",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące z perłą KST3437",
    "price": "17.84 zł",
    "image": "https://hurt.ecarla.pl/196577-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-z-perla-kst3437.jpg",
    "specs": { "WYMIARY": "6,8 x 1,2 cm", "Model": "KST3437" }
  },
  {
    "id": "33205",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, miś z czarną cyrkonią KST3535",
    "price": "22.76 zł",
    "image": "https://hurt.ecarla.pl/196556-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-mis-z-czarna-cyrkonia-kst3535.jpg",
    "specs": { "WYMIARY": "2 x 1,6 cm", "Model": "KST3535" }
  },
  {
    "id": "33206",
    "name": "Naszyjnik stal szlachetna pozłacana 14k złotem, miś z czarną cyrkonią NST2231",
    "price": "27.06 zł",
    "image": "https://hurt.ecarla.pl/196557-large_default/naszyjnik-stal-szlachetna-pozlacana-14k-zlotem-mis-z-czarna-cyrkonia-nst2231.jpg",
    "specs": { "WYMIARY": "3,7 x 2,8 cm", "Model": "NST2231" }
  }
],
[
  {
    "id": "33211",
    "name": "Kolczyki wiszące, efektowne materiałowe kwiaty, koraliki K1703",
    "price": "9.84 zł",
    "image": "https://hurt.ecarla.pl/196640-large_default/kolczyki-wiszace-efektowne-materialowe-kwiaty-koraliki-k1703.jpg",
    "specs": { "WYMIARY": "7 x 6 cm", "Model": "K1703" }
  },
  {
    "id": "33263",
    "name": "Zewnętrzne/ wewnętrzne lampki choinkowe drucik 500 LED 50m, ciepłe białe LAMP48",
    "price": "54.12 zł",
    "image": "https://hurt.ecarla.pl/196893-large_default/zewnetrzne-wewnetrzne-lampki-choinkowe-drucik-500-led-50m-cieple-biale-lamp48.jpg",
    "specs": { "DŁUGOŚĆ": "50 m", "Model": "LAMP48" }
  },
  {
    "id": "33402",
    "name": "Kolczyki przy uchu ozdobne wianiuszki z koralikami K1717",
    "price": "16.61 zł",
    "image": "https://hurt.ecarla.pl/197757-large_default/kolczyki-przy-uchu-ozdobne-wianiuszki-z-koralikami-k1717.jpg",
    "specs": { "WYMIARY": "2,2 x 2,5 x 1 cm", "Model": "K1717" }
  },
  {
    "id": "33404",
    "name": "Kolczyki wiszące, efektowne tiulowe kwiat, fioletowe K1705",
    "price": "16.85 zł",
    "image": "https://hurt.ecarla.pl/199573-large_default/kolczyki-wiszace-efektowne-tiulowe-kwiat-fioletowe-k1705.jpg",
    "specs": { "WYMIARY": "12,5 x 4,5 cm", "Model": "K1705" }
  },
  {
    "id": "33420",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, dwustronne serca KST3412",
    "price": "22.76 zł",
    "image": "https://hurt.ecarla.pl/197934-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-dwustronne-serca-kst3412.jpg",
    "specs": { "WYMIARY": "1,6 x 1,5 cm", "Model": "KST3412" }
  },
  {
    "id": "33462",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące KST3521",
    "price": "16.61 zł",
    "image": "https://hurt.ecarla.pl/198051-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-kst3521.jpg",
    "specs": { "WYMIARY": "2,6 x 1 cm", "Model": "KST3521" }
  },
  {
    "id": "33463",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące Gwiazdki KST3531",
    "price": "28.29 zł",
    "image": "https://hurt.ecarla.pl/198053-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-gwiazdki-kst3531.jpg",
    "specs": { "WYMIARY": "2,8 x 1,9 cm", "Model": "KST3531" }
  },
  {
    "id": "33465",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące z Perłą KST3522",
    "price": "21.53 zł",
    "image": "https://hurt.ecarla.pl/198057-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-z-perla-kst3522.jpg",
    "specs": { "WYMIARY": "4,8 x 0,8 cm", "Model": "KST3522" }
  },
  {
    "id": "33466",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem KST3516",
    "price": "21.53 zł",
    "image": "https://hurt.ecarla.pl/198059-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-kst3516.jpg",
    "specs": { "WYMIARY": "1,5 x 1,2 cm", "Model": "KST3516" }
  }
],
[
  {
    "id": "33472",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące KST3517",
    "price": "15.87 zł",
    "image": "https://hurt.ecarla.pl/198081-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-kst3517.jpg",
    "specs": { "WYMIARY": "2,2 x 1,5 cm", "Model": "KST3517" }
  },
  {
    "id": "33473",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, Kokardki KST3523",
    "price": "12.92 zł",
    "image": "https://hurt.ecarla.pl/198074-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-kokardki-kst3523.jpg",
    "specs": { "WYMIARY": "1,2 x 0,8 cm", "Model": "KST3523" }
  },
  {
    "id": "33475",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, Kwiatuszki z perełką KST3519",
    "price": "15.38 zł",
    "image": "https://hurt.ecarla.pl/198078-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-kwiatuszki-z-perelka-kst3519.jpg",
    "specs": { "WYMIARY": "1,1 x 0,8 cm", "Model": "KST3519" }
  },
  {
    "id": "33477",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, Wiszące Perły KST3512",
    "price": "20.79 zł",
    "image": "https://hurt.ecarla.pl/198080-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-perly-kst3512.jpg",
    "specs": { "WYMIARY": "2,6 x 1,2 cm", "Model": "KST3512" }
  },
  {
    "id": "33479",
    "name": "Kolczyki wiszące, złote blaszki K1718",
    "price": "9.72 zł",
    "image": "https://hurt.ecarla.pl/198087-large_default/kolczyki-wiszace-zlote-blaszki-k1718.jpg",
    "specs": { "WYMIARY": "4,7 x 2 cm", "Model": "K1718" }
  },
  {
    "id": "33480",
    "name": "Kolczyki wiszące, efektowne zawijasy złote K1719",
    "price": "10.95 zł",
    "image": "https://hurt.ecarla.pl/198093-large_default/kolczyki-wiszace-efektowne-zawijasy-zlote-k1719.jpg",
    "specs": { "WYMIARY": "4,2 x 2,5 cm", "Model": "K1719" }
  },
  {
    "id": "33481",
    "name": "Kolczyki wiszące, efektowne metalowe krople złote K1720",
    "price": "10.95 zł",
    "image": "https://hurt.ecarla.pl/198141-large_default/kolczyki-wiszace-efektowne-metalowe-krople-zlote-k1720.jpg",
    "specs": { "WYMIARY": "3,4 x 1,3 cm", "Model": "K1720" }
  },
  {
    "id": "33482",
    "name": "Kolczyki wiszące, efektowne złote blaszki K1721",
    "price": "10.95 zł",
    "image": "https://hurt.ecarla.pl/198105-large_default/kolczyki-wiszace-efektowne-zlote-blaszki-k1721.jpg",
    "specs": { "WYMIARY": "4,6 x 2,8 cm", "Model": "K1721" }
  },
  {
    "id": "33483",
    "name": "Kolczyki wiszące, efektowne złote blaszki liście miłorzębu K1722",
    "price": "10.95 zł",
    "image": "https://hurt.ecarla.pl/198109-large_default/kolczyki-wiszace-efektowne-zlote-blaszki-liscie-milorzebu-k1722.jpg",
    "specs": { "WYMIARY": "6,1 x 3,8 cm", "Model": "K1722" }
  },
  {
    "id": "33611",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, z cyrkoniami KST3301",
    "price": "23.25 zł",
    "image": "https://hurt.ecarla.pl/198692-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-z-cyrkoniami-kst3301.jpg",
    "specs": { "WYMIARY": "0,9 x 0,9 x 0,3 cm", "Model": "KST3301" }
  },
  {
    "id": "33614",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, KOŁA 4,5 cm KST3537",
    "price": "19.07 zł",
    "image": "https://hurt.ecarla.pl/198719-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-kola-45-cm-kst3537.jpg",
    "specs": { "WYMIARY": "4,5 x 4,3 x 0,1 cm", "Model": "KST3537" }
  },
  {
    "id": "33733",
    "name": "Kolczyki wiszące, efektowne czarne kwiaty, kryształki K1733",
    "price": "18.33 zł",
    "image": "https://hurt.ecarla.pl/199743-large_default/kolczyki-wiszace-efektowne-czarne-kwiaty-krysztalki-k1733.jpg",
    "specs": { "WYMIARY": "2,5 x 4 cm", "Model": "K1733" }
  },
  {
    "id": "33735",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem KOŁA duże KST3350",
    "price": "21.53 zł",
    "image": "https://hurt.ecarla.pl/199587-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-kola-duze-kst3350.jpg",
    "specs": { "WYMIARY": "4,5 x 4,3 cm", "Model": "KST3350" }
  }
],
[
  {
    "id": "33472",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące KST3517",
    "price": "15.87 zł",
    "image": "https://hurt.ecarla.pl/198081-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-kst3517.jpg",
    "specs": { "WYMIARY": "2,2 x 1,5 cm", "Model": "KST3517" }
  },
  {
    "id": "33473",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, Kokardki KST3523",
    "price": "12.92 zł",
    "image": "https://hurt.ecarla.pl/198074-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-kokardki-kst3523.jpg",
    "specs": { "WYMIARY": "1,2 x 0,8 cm", "Model": "KST3523" }
  },
  {
    "id": "33475",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, Kwiatuszki z perełką KST3519",
    "price": "15.38 zł",
    "image": "https://hurt.ecarla.pl/198078-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-kwiatuszki-z-perelka-kst3519.jpg",
    "specs": { "WYMIARY": "1,1 x 0,8 cm", "Model": "KST3519" }
  },
  {
    "id": "33477",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, Wiszące Perły KST3512",
    "price": "20.79 zł",
    "image": "https://hurt.ecarla.pl/198080-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-perly-kst3512.jpg",
    "specs": { "WYMIARY": "2,6 x 1,2 cm", "Model": "KST3512" }
  },
  {
    "id": "33479",
    "name": "Kolczyki wiszące, złote blaszki K1718",
    "price": "9.72 zł",
    "image": "https://hurt.ecarla.pl/198087-large_default/kolczyki-wiszace-zlote-blaszki-k1718.jpg",
    "specs": { "WYMIARY": "4,7 x 2 cm", "Model": "K1718" }
  },
  {
    "id": "33480",
    "name": "Kolczyki wiszące, efektowne zawijasy złote K1719",
    "price": "10.95 zł",
    "image": "https://hurt.ecarla.pl/198093-large_default/kolczyki-wiszace-efektowne-zawijasy-zlote-k1719.jpg",
    "specs": { "WYMIARY": "4,2 x 2,5 cm", "Model": "K1719" }
  },
  {
    "id": "33481",
    "name": "Kolczyki wiszące, efektowne metalowe krople złote K1720",
    "price": "10.95 zł",
    "image": "https://hurt.ecarla.pl/198141-large_default/kolczyki-wiszace-efektowne-metalowe-krople-zlote-k1720.jpg",
    "specs": { "WYMIARY": "3,4 x 1,3 cm", "Model": "K1720" }
  },
  {
    "id": "33482",
    "name": "Kolczyki wiszące, efektowne złote blaszki K1721",
    "price": "10.95 zł",
    "image": "https://hurt.ecarla.pl/198105-large_default/kolczyki-wiszace-efektowne-zlote-blaszki-k1721.jpg",
    "specs": { "WYMIARY": "4,6 x 2,8 cm", "Model": "K1721" }
  },
  {
    "id": "33483",
    "name": "Kolczyki wiszące, efektowne złote blaszki liście miłorzębu K1722",
    "price": "10.95 zł",
    "image": "https://hurt.ecarla.pl/198109-large_default/kolczyki-wiszace-efektowne-zlote-blaszki-liscie-milorzebu-k1722.jpg",
    "specs": { "WYMIARY": "6,1 x 3,8 cm", "Model": "K1722" }
  },
  {
    "id": "33611",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, z cyrkoniami KST3301",
    "price": "23.25 zł",
    "image": "https://hurt.ecarla.pl/198692-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-z-cyrkoniami-kst3301.jpg",
    "specs": { "WYMIARY": "0,9 x 0,9 x 0,3 cm", "Model": "KST3301" }
  },
  {
    "id": "33614",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, KOŁA 4,5 cm KST3537",
    "price": "19.07 zł",
    "image": "https://hurt.ecarla.pl/198719-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-kola-45-cm-kst3537.jpg",
    "specs": { "WYMIARY": "4,5 x 4,3 x 0,1 cm", "Model": "KST3537" }
  },
  {
    "id": "33733",
    "name": "Kolczyki wiszące, efektowne czarne kwiaty, kryształki K1733",
    "price": "18.33 zł",
    "image": "https://hurt.ecarla.pl/199743-large_default/kolczyki-wiszace-efektowne-czarne-kwiaty-krysztalki-k1733.jpg",
    "specs": { "WYMIARY": "2,5 x 4 cm", "Model": "K1733" }
  },
  {
    "id": "33735",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem KOŁA duże KST3350",
    "price": "21.53 zł",
    "image": "https://hurt.ecarla.pl/199587-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-kola-duze-kst3350.jpg",
    "specs": { "WYMIARY": "4,5 x 4,3 cm", "Model": "KST3350" }
  }
],
[
  {
    "id": "33748",
    "name": "Kolczyki SERCA ze stali szlachetnej platerowane 14k złotem, delikatne KST3401",
    "price": "14.64 zł",
    "image": "https://hurt.ecarla.pl/199753-large_default/kolczyki-serca-ze-stali-szlachetnej-platerowane-14k-zlotem-delikatne-kst3401.jpg",
    "description": [
      "Kolczyki ze stali szlachetnej platerowane 14-karatowym złotem, z zapięciem typu sztyft.",
      "Eleganckie i stylowe kolczyki.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1 cm x 1,1 cm",
      "Waga": "2g netto / 5g brutto",
      "Model": "KST3401"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/199735-large_default/kolczyki-serca-ze-stali-szlachetnej-platerowane-14k-zlotem-delikatne-kst3401.jpg"
  },
  {
    "id": "33750",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, z cyrkoniami KST3536",
    "price": "18.33 zł",
    "image": "https://hurt.ecarla.pl/199751-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-z-cyrkoniami-kst3536.jpg",
    "description": [
      "Kolczyki damskie platerowane złotem z cyrkoniami.",
      "Eleganckie i stylowe kolczyki.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "0,9 cm x 0,9 cm x 0,3 cm",
      "Waga": "2g netto / 4g brutto",
      "Model": "KST3536"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/199734-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-z-cyrkoniami-kst3536.jpg"
  },
  {
    "id": "33751",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, perły, efektowne, wiszące blaszki KST3505",
    "price": "18.33 zł",
    "image": "https://hurt.ecarla.pl/199762-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-perly-efektowne-wiszace-blaszki-kst3505.jpg",
    "description": [
      "Eleganckie, wiszące kolczyki damskie ze stali szlachetnej z perłami.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "8,5 cm x 3 cm",
      "Waga": "8g netto / 11g brutto",
      "Model": "KST3505"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/199725-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-perly-efektowne-wiszace-blaszki-kst3505.jpg"
  },
  {
    "id": "33752",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, efektowne, wiszące kwiaty KST3506",
    "price": "18.33 zł",
    "image": "https://hurt.ecarla.pl/199766-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-efektowne-wiszace-kwiaty-kst3506.jpg",
    "description": [
      "Efektowne, wiszące kolczyki w kształcie kwiatów.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "11,5 cm x 1,5 cm",
      "Waga": "4g netto / 7g brutto",
      "Model": "KST3506"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/199726-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-efektowne-wiszace-kwiaty-kst3506.jpg"
  },
  {
    "id": "33753",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, efektowne, wiszące perełki KST3507",
    "price": "18.33 zł",
    "image": "https://hurt.ecarla.pl/199768-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-efektowne-wiszace-perelki-kst3507.jpg",
    "description": [
      "Eleganckie, wiszące kolczyki z perełkami.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "8 cm x 1 cm x 0,5 cm",
      "Waga": "12g netto / 16g brutto",
      "Model": "KST3507"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/199727-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-efektowne-wiszace-perelki-kst3507.jpg"
  },
  {
    "id": "33754",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące kwiaty z perełkami KST3508",
    "price": "18.33 zł",
    "image": "https://hurt.ecarla.pl/199761-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-kwiaty-z-perelkami-kst3508.jpg",
    "description": [
      "Damskie, wiszące kolczyki w kształcie kwiatów z perełkami.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "12,5 cm x 3,2 cm",
      "Waga": "16g netto / 19g brutto",
      "Model": "KST3508"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/199728-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-kwiaty-z-perelkami-kst3508.jpg"
  },
  {
    "id": "33755",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące kwiaty z cyrkoniami KST3509",
    "price": "18.33 zł",
    "image": "https://hurt.ecarla.pl/199764-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-kwiaty-z-cyrkoniami-kst3509.jpg",
    "description": [
      "Damskie, wiszące kolczyki w kształcie kwiatów z cyrkoniami.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "11 cm x 2 cm x 0,3 cm",
      "Waga": "5g netto / 8g brutto",
      "Model": "KST3509"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/199729-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-kwiaty-z-cyrkoniami-kst3509.jpg"
  },
  {
    "id": "33756",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące kwiaty z cyrkoniami KST3510",
    "price": "18.33 zł",
    "image": "https://hurt.ecarla.pl/199763-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-kwiaty-z-cyrkoniami-kst3510.jpg",
    "description": [
      "Damskie, wiszące kolczyki w kształcie kwiatów z cyrkoniami.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "7,5 cm x 2,8 cm x 0,6 cm",
      "Waga": "8g netto / 10g brutto",
      "Model": "KST3510"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/199730-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-kwiaty-z-cyrkoniami-kst3510.jpg"
  },
  {
    "id": "33757",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące kwiaty z cyrkoniami KST3526",
    "price": "18.33 zł",
    "image": "https://hurt.ecarla.pl/199765-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-kwiaty-z-cyrkoniami-kst3526.jpg",
    "description": [
      "Damskie, wiszące kolczyki w kształcie kwiatów z cyrkoniami.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "12 cm x 3,3 cm x 0,3 cm",
      "Waga": "6g netto / 10g brutto",
      "Model": "KST3526"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/199731-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-kwiaty-z-cyrkoniami-kst3526.jpg"
  },
  {
    "id": "33758",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące kwiaty z cyrkoniami KST3527",
    "price": "18.33 zł",
    "image": "https://hurt.ecarla.pl/199767-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-kwiaty-z-cyrkoniami-kst3527.jpg",
    "description": [
      "Damskie, wiszące kolczyki w kształcie kwiatów z cyrkoniami.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "8,5 cm x 3,4 cm x 0,9 cm",
      "Waga": "8g netto / 12g brutto",
      "Model": "KST3527"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/199732-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-kwiaty-z-cyrkoniami-kst3527.jpg"
  },
  {
    "id": "33777",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem KWIATY perły KST3381",
    "price": "28.91 zł",
    "image": "https://hurt.ecarla.pl/199746-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-kwiaty-perly-kst3381.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki ze stali szlachetnej z motywem kwiatów i pereł.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "5 cm x 3 cm x 0,7 cm",
      "Waga": "18g netto / 21g brutto",
      "Model": "KST3381"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/199747-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-kwiaty-perly-kst3381.jpg"
  },
  {
    "id": "33788",
    "name": "KOLCZYKI KULE TRIBALL PODWÓJNE SZTYFT BŁYSK CZARNE K69CZ",
    "price": "1.85 zł",
    "image": "https://hurt.ecarla.pl/199802-large_default/kolczyki-kule-triball-podwojne-sztyft-blysk-czarne-k69cz.jpg",
    "description": [
      "Kobaltowe błyszczące kolczyki typu triball."
    ],
    "specs": {
      "Wymiary": "średnica mniejszych: 0,5 cm, większych: 1 cm",
      "Model": "K69CZ"
    },
    "material": "Biżuteria sztuczna",
    "color": "Czarne",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/199785-large_default/kolczyki-kule-triball-podwojne-sztyft-blysk-czarne-k69cz.jpg"
  },
  {
    "id": "33789",
    "name": "KOLCZYKI KULE TRIBALL PODWÓJNE SZTYFT BŁYSK BEŻOWE K69Z",
    "price": "1.85 zł",
    "image": "https://hurt.ecarla.pl/199803-large_default/kolczyki-kule-triball-podwojne-sztyft-blysk-bezowe-k69z.jpg",
    "description": [
      "Kobaltowe błyszczące kolczyki typu triball."
    ],
    "specs": {
      "Wymiary": "średnica mniejszych: 0,5 cm, większych: 1 cm",
      "Model": "K69ZL"
    },
    "material": "Biżuteria sztuczna",
    "color": "Beżowe",
    "availability": "W magazynie"
  },
  {
    "id": "33790",
    "name": "KOLCZYKI KULE TRIBALL PODWÓJNE SZTYFT BŁYSK JASNO RÓŻOWE K69R",
    "price": "1.85 zł",
    "image": "https://hurt.ecarla.pl/199801-large_default/kolczyki-kule-triball-podwojne-sztyft-blysk-jasno-rozowe-k69r.jpg",
    "description": [
      "Kobaltowe błyszczące kolczyki typu triball."
    ],
    "specs": {
      "Wymiary": "średnica mniejszych: 0,5 cm, większych: 1 cm",
      "Model": "K69R"
    },
    "material": "Biżuteria sztuczna",
    "color": "Jasno różowe",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/199788-large_default/kolczyki-kule-triball-podwojne-sztyft-blysk-jasno-rozowe-k69r.jpg"
  },
  {
    "id": "33792",
    "name": "Kolczyki Kule Triball Perłowe z fioletowym Kryształem K70FIO",
    "price": "3.08 zł",
    "image": "https://hurt.ecarla.pl/199805-large_default/kolczyki-kule-triball-perlowe-z-fioletowym-krysztalem-k70fio.jpg",
    "description": [
      "Kolczyki sztuczne perełki z Kryształkiem. Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
      "Nie moczyć! Unikać kontaktu z wodą! A wtedy posłuży bardzo długo!"
    ],
    "specs": {
      "Wymiary": "2,2 cm x 1,5 cm",
      "Waga": "4g netto / 8g brutto",
      "Model": "K70FIO"
    },
    "material": "Biżuteria sztuczna",
    "color": "Perłowe z fioletowym kryształem",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/199811-large_default/kolczyki-kule-triball-perlowe-z-fioletowym-krysztalem-k70fio.jpg"
  },
  {
    "id": "33799",
    "name": "Brelok do kluczy pluszowa puchata Kapibara z ananasem BRL388",
    "price": "9.84 zł",
    "image": "https://hurt.ecarla.pl/199844-large_default/brelok-do-kluczy-pluszowa-puchata-kapibara-z-ananasem-brl388.jpg",
    "description": [
      "Uroczy brelok z przywieszką. Idealny dodatek do kluczy lub ozdoba do torebki."
    ],
    "specs": {
      "Wymiary": "Szerokość: 9,5 cm, Wysokość: 12,5 cm",
      "Długość_całkowita": "18 cm",
      "Model": "BRL388"
    },
    "material": "Plusz",
    "color": "Brązowy/Wielokolorowy",
    "availability": "W magazynie"
  }
],
[
  {
    "id": "33845",
    "name": "Kolczyki wiszące tiulowe złote efektowne kwiaty 5x12cm K1678",
    "price": "18.45 zł",
    "image": "https://hurt.ecarla.pl/200079-large_default/kolczyki-wiszace-tiulowe-zlote-efektowne-kwiaty-5x12cm-k1678.jpg",
    "description": [
      "Efektowne, złote kolczyki w kształcie kwiatów wykonane z tiulu.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć!"
    ],
    "specs": {
      "Wymiary": "5 cm x 12 cm",
      "Model": "K1678"
    },
    "material": "Biżuteria sztuczna",
    "color": "Złoty",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/200078-large_default/kolczyki-wiszace-tiulowe-zlote-efektowne-kwiaty-5x12cm-k1678.jpg",
    "image3": "https://hurt.ecarla.pl/200077-large_default/kolczyki-wiszace-tiulowe-zlote-efektowne-kwiaty-5x12cm-k1678.jpg"
  },
  {
    "id": "33848",
    "name": "Kolczyki wiszące, efektowne tiulowe z perełkami, białe sztyft K1724",
    "price": "12.18 zł",
    "image": "https://hurt.ecarla.pl/200140-large_default/kolczyki-wiszace-efektowne-tiulowe-z-perelkami-biale-sztyft-k1724.jpg",
    "description": [
      "Efektowne kolczyki sztuczne z tiulowymi kwiatami i perełkami.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć!"
    ],
    "specs": {
      "Wymiary": "10 cm x 4,5 cm",
      "Model": "K1724"
    },
    "material": "Biżuteria sztuczna",
    "color": "Biały",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/200100-large_default/kolczyki-wiszace-efektowne-tiulowe-z-perelkami-biale-sztyft-k1724.jpg",
    "image3": "https://hurt.ecarla.pl/200141-large_default/kolczyki-wiszace-efektowne-tiulowe-z-perelkami-biale-sztyft-k1724.jpg"
  },
  {
    "id": "33849",
    "name": "Kolczyki wiszące, efektowne tiulowe niebieskie z perełkami, sztyft K1725",
    "price": "14.15 zł",
    "image": "https://hurt.ecarla.pl/200136-large_default/kolczyki-wiszace-efektowne-tiulowe-niebieskie-z-perelkami-sztyft-k1725.jpg",
    "description": [
      "Efektowne kolczyki sztuczne z tiulowymi kwiatami i perełkami w niebieskim kolorze.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć!"
    ],
    "specs": {
      "Wymiary": "10 cm x 3 cm",
      "Model": "K1725"
    },
    "material": "Biżuteria sztuczna",
    "color": "Niebieski",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/200107-large_default/kolczyki-wiszace-efektowne-tiulowe-niebieskie-z-perelkami-sztyft-k1725.jpg",
    "image3": "https://hurt.ecarla.pl/200106-large_default/kolczyki-wiszace-efektowne-tiulowe-niebieskie-z-perelkami-sztyft-k1725.jpg"
  },
  {
    "id": "33850",
    "name": "Kolczyki wiszące, efektowne z perełkami i cyrkonią, białe sztyft K1727",
    "price": "9.72 zł",
    "image": "https://hurt.ecarla.pl/200114-large_default/kolczyki-wiszace-efektowne-z-perelkami-i-cyrkonia-biale-sztyft-k1727.jpg",
    "description": [
      "Efektowne kolczyki sztuczne z perełkami i cyrkonią.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć!"
    ],
    "specs": {
      "Wymiary": "8 cm x 1,5 cm",
      "Model": "K1727"
    },
    "material": "Biżuteria sztuczna",
    "color": "Biały",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/200117-large_default/kolczyki-wiszace-efektowne-z-perelkami-i-cyrkonia-biale-sztyft-k1727.jpg",
    "image3": "https://hurt.ecarla.pl/200116-large_default/kolczyki-wiszace-efektowne-z-perelkami-i-cyrkonia-biale-sztyft-k1727.jpg"
  },
  {
    "id": "33851",
    "name": "Kolczyki wiszące, efektowne tiulowe z kryształkami, niebieskie ombre sztyft K1729",
    "price": "14.15 zł",
    "image": "https://hurt.ecarla.pl/200213-large_default/kolczyki-wiszace-efektowne-tiulowe-z-krysztalkami-niebieskie-ombre-sztyft-k1729.jpg",
    "description": [
      "Efektowne kolczyki sztuczne z tiulowymi kwiatami i kryształkami w kolorze niebieskie ombre.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć!"
    ],
    "specs": {
      "Wymiary": "9 cm x 5 cm",
      "Model": "K1729"
    },
    "material": "Biżuteria sztuczna",
    "color": "Niebieskie ombre",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/200212-large_default/kolczyki-wiszace-efektowne-tiulowe-z-krysztalkami-niebieskie-ombre-sztyft-k1729.jpg",
    "image3": "https://hurt.ecarla.pl/200211-large_default/kolczyki-wiszace-efektowne-tiulowe-z-krysztalkami-niebieskie-ombre-sztyft-k1729.jpg"
  },
  {
    "id": "33852",
    "name": "Kolczyki wiszące, efektowne tiulowe różowe z kryształkami, sztyft K1730",
    "price": "15.38 zł",
    "image": "https://hurt.ecarla.pl/200214-large_default/kolczyki-wiszace-efektowne-tiulowe-rozowe-z-krysztalkami-sztyft-k1730.jpg",
    "description": [
      "Efektowne kolczyki sztuczne z tiulowymi kwiatami i kryształkami w różowym kolorze.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć!"
    ],
    "specs": {
      "Wymiary": "8,5 cm x 5,5 cm",
      "Model": "K1730"
    },
    "material": "Biżuteria sztuczna",
    "color": "Różowy",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/200215-large_default/kolczyki-wiszace-efektowne-tiulowe-rozowe-z-krysztalkami-sztyft-k1730.jpg",
    "image3": "https://hurt.ecarla.pl/200210-large_default/kolczyki-wiszace-efektowne-tiulowe-rozowe-z-krysztalkami-sztyft-k1730.jpg"
  },
  {
    "id": "33853",
    "name": "Kolczyki wiszące KOŁA, efektowne tiulowe, różowe kwiaty, perełki K1732",
    "price": "14.15 zł",
    "image": "https://hurt.ecarla.pl/200135-large_default/kolczyki-wiszace-kola-efektowne-tiulowe-rozowe-kwiaty-perelki-k1732.jpg",
    "description": [
      "Efektowne kolczyki koła z tiulowymi kwiatami i perełkami.",
      "Będą stanowić piękne uzupełnienie eleganckiej kreacji jak i codziennego stroju.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć!"
    ],
    "specs": {
      "Wymiary": "7,5 cm x 9 cm x 4 cm",
      "Model": "K1732"
    },
    "material": "Biżuteria sztuczna",
    "color": "Różowy",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/200131-large_default/kolczyki-wiszace-kola-efektowne-tiulowe-rozowe-kwiaty-perelki-k1732.jpg",
    "image3": "https://hurt.ecarla.pl/200132-large_default/kolczyki-wiszace-kola-efektowne-tiulowe-rozowe-kwiaty-perelki-k1732.jpg"
  },
  {
    "id": "33874",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, cyrkonie masa perłowa KST3514",
    "price": "17.84 zł",
    "image": "https://hurt.ecarla.pl/200239-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-masa-perlowa-kst3514.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej z cyrkoniami i masą perłową.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "0,8 cm x 1,5 cm",
      "Waga": "2g netto / 4g brutto",
      "Model": "KST3514"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/200238-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-masa-perlowa-kst3514.jpg",
    "image3": "https://hurt.ecarla.pl/200237-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-masa-perlowa-kst3514.jpg"
  },
  {
    "id": "33875",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące Perły z Kwiatem KST3513",
    "price": "22.14 zł",
    "image": "https://hurt.ecarla.pl/200243-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-perly-z-kwiatem-kst3513.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki wiszące damskie ze stali szlachetnej z perłami i kwiatem.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "2,5 cm x 1,5 cm",
      "Waga": "9g netto / 11g brutto",
      "Model": "KST3513"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/200241-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-perly-z-kwiatem-kst3513.jpg",
    "image3": "https://hurt.ecarla.pl/200240-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-perly-z-kwiatem-kst3513.jpg"
  }
],
[
  {
    "id": "33878",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, sztyft, cyrkonie KST2225",
    "price": "22.76 zł",
    "image": "https://hurt.ecarla.pl/200254-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-cyrkonie-kst2225.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki ze stali chirurgicznej platerowanej 14-karatowym złotem.",
      "Zapięcie typu sztyft. Produkt marki Xuping."
    ],
    "specs": {
      "Wymiary": "1,9 cm x 0,8 cm x 0,9 cm",
      "Waga": "2g netto / 5g brutto",
      "Model": "KST2225"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/200250-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-cyrkonie-kst2225.jpg"
  },
  {
    "id": "33882",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, sztyft, KULKI KST3567",
    "price": "9.72 zł",
    "image": "https://hurt.ecarla.pl/200261-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-kulki-kst3567.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki w kształcie kulek, wykonane ze stali chirurgicznej platerowanej 14-karatowym złotem.",
      "Zapięcie typu sztyft. Produkt marki Xuping."
    ],
    "specs": {
      "Wymiary": "0,5 cm x 0,5 cm",
      "Waga": "2g netto / 5g brutto",
      "Model": "KST3567"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "33886",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, sztyft, SERCA KST3565",
    "price": "9.72 zł",
    "image": "https://hurt.ecarla.pl/200268-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-serca-kst3565.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki w kształcie serc, wykonane ze stali chirurgicznej platerowanej 14-karatowym złotem.",
      "Zapięcie typu sztyft. Produkt marki Xuping."
    ],
    "specs": {
      "Wymiary": "0,8 cm x 0,7 cm x 0,4 cm",
      "Waga": "2g netto / 5g brutto",
      "Model": "KST3565"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "33988",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, z cyrkoniami KST3153",
    "price": "19.07 zł",
    "image": "https://hurt.ecarla.pl/201205-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-z-cyrkoniami-kst3153.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki z cyrkoniami, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "2,7 cm x 2,2 cm",
      "Waga": "5g netto / 7g brutto",
      "Model": "KST3153"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/201206-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-z-cyrkoniami-kst3153.jpg",
    "image3": "https://hurt.ecarla.pl/201207-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-z-cyrkoniami-kst3153.jpg"
  },
  {
    "id": "33989",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, z cyrkoniami KST3155",
    "price": "19.07 zł",
    "image": "https://hurt.ecarla.pl/201217-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-z-cyrkoniami-kst3155.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki z cyrkoniami, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "2,0 cm x 2,0 cm",
      "Waga": "4g netto / 5g brutto",
      "Model": "KST3155"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/201216-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-z-cyrkoniami-kst3155.jpg"
  },
  {
    "id": "33990",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem Miś z różowym sercem KST3157",
    "price": "19.07 zł",
    "image": "https://hurt.ecarla.pl/201229-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-mis-z-rozowym-sercem-kst3157.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki w kształcie misia z różowym sercem, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1,1 cm x 2,5 cm",
      "Waga": "4g netto / 5g brutto",
      "Model": "KST3157"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34040",
    "name": "Kolczyki wiszące, efektowne z perełkami Kwadraty sztyft K1726",
    "price": "6.77 zł",
    "image": "https://hurt.ecarla.pl/201962-large_default/kolczyki-wiszace-efektowne-z-perelkami-kwadraty-sztyft-k1726.jpg",
    "description": [
      "Efektowne kolczyki sztuczne z perełkami i motywem kwadratów.",
      "Biżuteria antyalergiczna, nie zawiera niklu ani chromu. Nie moczyć!"
    ],
    "specs": {
      "Wymiary": "Kartonik 10cm x 8cm",
      "Model": "K1726"
    },
    "material": "Biżuteria sztuczna",
    "color": "Wielokolorowy",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/201756-large_default/kolczyki-wiszace-efektowne-z-perelkami-kwadraty-sztyft-k1726.jpg",
    "image3": "https://hurt.ecarla.pl/201754-large_default/kolczyki-wiszace-efektowne-z-perelkami-kwadraty-sztyft-k1726.jpg"
  },
  {
    "id": "34041",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, sztyft, Białe SERCA KST3555",
    "price": "17.84 zł",
    "image": "https://hurt.ecarla.pl/201677-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-biale-serca-kst3555.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki z białymi sercami, wykonane ze stali chirurgicznej platerowanej 14-karatowym złotem.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1,2 cm x 1 cm",
      "Waga": "3g netto / 6g brutto",
      "Model": "KST3555"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34042",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, sztyft, SERCA KST3556",
    "price": "12.92 zł",
    "image": "https://hurt.ecarla.pl/201678-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-serca-kst3556.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki w kształcie serc, wykonane ze stali chirurgicznej platerowanej 14-karatowym złotem.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "0,6 cm x 1 cm",
      "Waga": "2g netto / 5g brutto",
      "Model": "KST3556"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34043",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, perły serca KST3475",
    "price": "19.68 zł",
    "image": "https://hurt.ecarla.pl/201636-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-perly-serca-kst3475.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki z perłami w kształcie serc, z zapięciem angielskim.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Model": "KST3475"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/201635-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-perly-serca-kst3475.jpg"
  },
  {
    "id": "34044",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, sztyft, Kryształowe SERCA KST3545",
    "price": "17.22 zł",
    "image": "https://hurt.ecarla.pl/201680-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-krysztalowe-serca-kst3545.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki z kryształowymi sercami, wykonane ze stali chirurgicznej platerowanej 14-karatowym złotem.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Model": "KST3545"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34045",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, sztyft, Perełkowe SERCA KST3548",
    "price": "20.91 zł",
    "image": "https://hurt.ecarla.pl/201681-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-perelkowe-serca-kst3548.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki z perełkowymi sercami, wykonane ze stali chirurgicznej platerowanej 14-karatowym złotem.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1,5 cm x 1 cm",
      "Waga": "4g netto / 7g brutto",
      "Model": "KST3548"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34046",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, sztyft, czarne SERCA KST3583",
    "price": "11.07 zł",
    "image": "https://hurt.ecarla.pl/201682-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-czarne-serca-kst3583.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki z czarnymi sercami, wykonane ze stali chirurgicznej platerowanej 14-karatowym złotem.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1,8 cm x 1,7 cm",
      "Waga": "4g netto / 7g brutto",
      "Model": "KST3583"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34048",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, zapięcie angielski, Różowe SERCA KST3564",
    "price": "22.76 zł",
    "image": "https://hurt.ecarla.pl/201684-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-zapiecie-angielski-rozowe-serca-kst3564.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki z różowymi sercami, zapięcie angielskie.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "2,3 cm x 1 cm",
      "Waga": "4g netto / 7g brutto",
      "Model": "KST3564"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34049",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, sztyft, SERCA z cyrkonią KST3636",
    "price": "9.84 zł",
    "image": "https://hurt.ecarla.pl/201723-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-serca-z-cyrkonia-kst3636.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki w kształcie serc z cyrkonią, wykonane ze stali chirurgicznej platerowanej 14-karatowym złotem.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "0,6 cm x 0,5 cm",
      "Waga": "1g netto / 4g brutto",
      "Model": "KST3636"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34050",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, sztyft, SERCA KST3634",
    "price": "9.84 zł",
    "image": "https://hurt.ecarla.pl/201924-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-serca-kst3634.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki w kształcie serc, wykonane ze stali chirurgicznej platerowanej 14-karatowym złotem.",
      "STAL CHIRURGICZNA jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "0,6 cm x 0,5 cm",
      "Waga": "1g netto / 3g brutto",
      "Model": "KST3634"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  }
],
[
  {
    "id": "34095",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, sztyft, Cyrkonie, Koniczyna KST3540",
    "price": "22.14 zł",
    "image": "https://hurt.ecarla.pl/201735-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-cyrkonie-koniczyna-kst3540.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki z motywem koniczyny i cyrkoniami, wykonane ze stali chirurgicznej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1,2 cm x 1,2 cm",
      "Waga": "4g netto / 6g brutto",
      "Model": "KST3540"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34096",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, sztyft, Koniczynka czarna KST3377",
    "price": "12.92 zł",
    "image": "https://hurt.ecarla.pl/201738-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-koniczynka-czarna-kst3377.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki w kształcie czarnej koniczynki, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1 cm x 1 cm",
      "Waga": "4g netto / 6g brutto",
      "Model": "KST3377"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto, czarny",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/201737-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-koniczynka-czarna-kst3377.jpg",
    "image3": "https://hurt.ecarla.pl/201736-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-koniczynka-czarna-kst3377.jpg"
  },
  {
    "id": "34097",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, sztyft, Białe Koniczynki KST3582",
    "price": "12.30 zł",
    "image": "https://hurt.ecarla.pl/201764-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-biale-koniczynki-kst3582.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki w kształcie białych koniczynek, wykonane ze stali chirurgicznej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1 cm x 1 cm",
      "Waga": "4g netto / 6g brutto",
      "Model": "KST3582"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto, biały",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/202744-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-biale-koniczynki-kst3582.jpg"
  },
  {
    "id": "34098",
    "name": "Naszyjnik stal szlachetna pozłacana 14k złotem, cyrkonie, koniczynka NST2196",
    "price": "19.56 zł",
    "image": "https://hurt.ecarla.pl/201763-large_default/naszyjnik-stal-szlachetna-pozłacana-14k-zlotem-cyrkonie-koniczynka-nst2196.jpg",
    "description": [
      "Modny naszyjnik z koniczynką i cyrkoniami, wykonany ze stali nierdzewnej platerowanej 14-karatowym złotem.",
      "Biżuteria ze stali chirurgicznej nie ulega korozji, nie rdzewieje, nie ciemnieje!"
    ],
    "specs": {
      "Wymiary": "Długość 42 cm + 5 cm regulacji",
      "Waga": "3g netto / 12g brutto",
      "Model": "NST2196"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/201722-large_default/naszyjnik-stal-szlachetna-pozłacana-14k-zlotem-cyrkonie-koniczynka-nst2196.jpg",
    "image3": "https://hurt.ecarla.pl/201721-large_default/naszyjnik-stal-szlachetna-pozłacana-14k-zlotem-cyrkonie-koniczynka-nst2196.jpg"
  },
  {
    "id": "34084",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, sztyft, Pudrowe Kwiaty KST3552",
    "price": "21.53 zł",
    "image": "https://hurt.ecarla.pl/203519-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-pudrowe-kwiaty-kst3552.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki z motywem kwiatów, wykonane ze stali chirurgicznej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "2 cm x 1,5 cm",
      "Waga": "6g netto / 9g brutto",
      "Model": "KST3552"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34085",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, sztyft, Pudrowe Kwiaty z Perłą KST3562",
    "price": "17.84 zł",
    "image": "https://hurt.ecarla.pl/201705-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-pudrowe-kwiaty-z-perla-kst3562.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki w kształcie kwiatów z perłą, wykonane ze stali chirurgicznej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1,2 cm x 1,2 cm",
      "Waga": "6g netto / 8g brutto",
      "Model": "KST3562"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34086",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, sztyft, Cyrkonie, Fuksjowe Kwiaty KST3543",
    "price": "30.14 zł",
    "image": "https://hurt.ecarla.pl/201708-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-cyrkonie-fuksjowe-kwiaty-kst3543.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki z fuksjowymi kwiatami i cyrkoniami, wykonane ze stali chirurgicznej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1,6 cm x 1,6 cm",
      "Waga": "4g netto / 8g brutto",
      "Model": "KST3543"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto, fuksja",
    "availability": "W magazynie"
  },
  {
    "id": "34115",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, kokarda z kryształem KST3559",
    "price": "19.68 zł",
    "image": "https://hurt.ecarla.pl/201768-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-kokarda-z-krysztalem-kst3559.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki w kształcie kokardy z kryształem, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "2,3 cm x 1,5 cm",
      "Waga": "4g netto / 7g brutto",
      "Model": "KST3559"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34116",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, perełkowe Kokardki KST3511",
    "price": "22.02 zł",
    "image": "https://hurt.ecarla.pl/201810-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-perelkowe-kokardki-kst3511.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki w kształcie kokardek z perełkami, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1,4 cm x 1,6 cm",
      "Waga": "4g netto / 7g brutto",
      "Model": "KST3511"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie",
    "image2": "https://hurt.ecarla.pl/201911-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-perelkowe-kokardki-kst3511.jpg"
  },
  {
    "id": "34117",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, małe kokardki KST3633",
    "price": "9.84 zł",
    "image": "https://hurt.ecarla.pl/201800-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-male-kokardki-kst3633.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki w kształcie małych kokardek, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "0,5 cm x 0,8 cm",
      "Waga": "1g netto / 4g brutto",
      "Model": "KST3633"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34118",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, perły z cyrkonią KST3542",
    "price": "18.45 zł",
    "image": "https://hurt.ecarla.pl/201770-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-perly-z-cyrkonia-kst3542.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki z perłami i cyrkonią, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1,5 cm x 1,3 cm",
      "Waga": "6g netto / 8g brutto",
      "Model": "KST3542"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34119",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, perłowe kwadraty KST3544",
    "price": "14.15 zł",
    "image": "https://hurt.ecarla.pl/201772-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-perłowe-kwadraty-kst3544.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki w kształcie kwadratów z perłami, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "2 cm x 1 cm",
      "Waga": "2g netto / 5g brutto",
      "Model": "KST3544"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34120",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, perły, cyrkonie KST3549",
    "price": "24.60 zł",
    "image": "https://hurt.ecarla.pl/201774-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-perły-cyrkonie-kst3549.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki z perłami i cyrkoniami, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1,3 cm x 1,3 cm",
      "Waga": "4g netto / 6g brutto",
      "Model": "KST3549"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34121",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, perła KST3550",
    "price": "15.38 zł",
    "image": "https://hurt.ecarla.pl/201776-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-perła-kst3550.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki z perłami, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "2 cm x 1,8 cm",
      "Waga": "4g netto / 6g brutto",
      "Model": "KST3550"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  }
],
[
  {
    "id": "34128",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, podwójne okręgi KST3553",
    "price": "18.45 zł",
    "image": "https://hurt.ecarla.pl/201896-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-podwojne-okregi-kst3553.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki w kształcie podwójnych okręgów, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "2,5 cm x 2,3 cm",
      "Waga": "8g netto / 12g brutto",
      "Model": "KST3553",
      "Zapięcie": "angielskie"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34129",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, okręgi Brąz KST3557",
    "price": "16.61 zł",
    "image": "https://hurt.ecarla.pl/201788-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-okregi-braz-kst3557.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki w kształcie okręgów w kolorze brązowym, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1,8 cm x 1,8 cm",
      "Waga": "4g netto / 8g brutto",
      "Model": "KST3557",
      "Zapięcie": "sztyft"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto, brąz",
    "availability": "W magazynie"
  },
  {
    "id": "34130",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, Owalne KST3560",
    "price": "18.45 zł",
    "image": "https://hurt.ecarla.pl/201790-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-owalne-kst3560.jpg",
    "description": [
      "Eleganckie i stylowe owalne kolczyki, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1,8 cm x 1,8 cm",
      "Waga": "4g netto / 7g brutto",
      "Model": "KST3560",
      "Zapięcie": "sztyft"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34131",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, perłowe, cyrkonie KST3561",
    "price": "18.45 zł",
    "image": "https://hurt.ecarla.pl/201792-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-perlowe-cyrkonie-kst3561.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki z perłami i cyrkoniami, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1,4 cm x 1 cm",
      "Waga": "5g netto / 8g brutto",
      "Model": "KST3561",
      "Zapięcie": "angielskie"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34132",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem KST3541",
    "price": "14.15 zł",
    "image": "https://hurt.ecarla.pl/201908-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-kst3541.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1,3 cm x 0,5 cm",
      "Waga": "5g netto / 7g brutto",
      "Model": "KST3541",
      "Zapięcie": "angielskie"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34133",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, kryształki KST3546",
    "price": "20.91 zł",
    "image": "https://hurt.ecarla.pl/201796-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-krysztalki-kst3546.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki z kryształkami, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1,5 cm x 0,8 cm",
      "Waga": "6g netto / 9g brutto",
      "Model": "KST3546",
      "Zapięcie": "angielskie"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34134",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, kwadraty, kryształ, cyrkonie KST3547",
    "price": "22.14 zł",
    "image": "https://hurt.ecarla.pl/201798-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-kwadraty-krysztal-cyrkonie-kst3547.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki w kształcie kwadratów z kryształem i cyrkoniami, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1,8 cm x 1,2 cm",
      "Waga": "6g netto / 9g brutto",
      "Model": "KST3547",
      "Zapięcie": "sztyft"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34135",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, cyrkonie KST2847",
    "price": "11.07 zł",
    "image": "https://hurt.ecarla.pl/201819-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-kst2847.jpg",
    "description": [
      "Eleganckie i stylowe damskie kolczyki z cyrkoniami, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1 cm x 1,1 cm",
      "Waga": "2g netto / 4g brutto",
      "Model": "KST2847",
      "Zapięcie": "sztyft"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34136",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące, kryształki KST3539",
    "price": "25.22 zł",
    "image": "https://hurt.ecarla.pl/201802-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-krysztalki-kst3539.jpg",
    "description": [
      "Eleganckie i stylowe wiszące kolczyki z kryształkami, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "3 cm x 1,3 cm",
      "Waga": "6g netto / 8g brutto",
      "Model": "KST3539",
      "Zapięcie": "bigiel"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34137",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, koła 3,5 cm KST3626",
    "price": "15.38 zł",
    "image": "https://hurt.ecarla.pl/201949-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-kola-35-cm-kst3626.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki w kształcie kół o średnicy 3,5 cm, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "3,5 cm",
      "Waga": "5g netto / 8g brutto",
      "Model": "KST3626",
      "Zapięcie": "angielskie"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34138",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, plecione koła KST3627",
    "price": "12.92 zł",
    "image": "https://hurt.ecarla.pl/201806-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-plecione-kola-kst3627.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki w kształcie plecionych kół, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1,9 cm x 0,2 cm x 1 cm",
      "Waga": "2g netto / 4g brutto",
      "Model": "KST3627",
      "Zapięcie": "angielskie"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34139",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, płaskie koła KST3628",
    "price": "12.92 zł",
    "image": "https://hurt.ecarla.pl/201808-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-plaskie-kola-kst3628.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki w kształcie płaskich kół, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "2,3 cm x 0,2 cm x 1,2 cm",
      "Waga": "3g netto / 6g brutto",
      "Model": "KST3628",
      "Zapięcie": "angielskie"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34140",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, koła, cyrkonie KST3629",
    "price": "11.69 zł",
    "image": "https://hurt.ecarla.pl/201921-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-kola-cyrkonie-kst3629.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki w kształcie kół z cyrkoniami, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1,8 cm x 1,4 cm",
      "Waga": "3g netto / 6g brutto",
      "Model": "KST3629",
      "Zapięcie": "sztyft"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34141",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, okręgi z cyrkoniami KST3631",
    "price": "18.45 zł",
    "image": "https://hurt.ecarla.pl/201923-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-okregi-z-cyrkoniami-kst3631.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki w kształcie okręgów z cyrkoniami, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1,9 cm x 0,3 cm x 1,2 cm",
      "Waga": "4g netto / 6g brutto",
      "Model": "KST3631",
      "Zapięcie": "angielskie"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34142",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, Krople, kryształki KST3632",
    "price": "15.38 zł",
    "image": "https://hurt.ecarla.pl/201815-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-krople-krysztalki-kst3632.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki w kształcie kropli z kryształkami, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1,5 cm x 0,8 cm",
      "Waga": "6g netto / 10g brutto",
      "Model": "KST3632",
      "Zapięcie": "sztyft"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34143",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, KST3635",
    "price": "9.84 zł",
    "image": "https://hurt.ecarla.pl/201925-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-kst3635.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "1 cm x 0,3 cm",
      "Waga": "2g netto / 5g brutto",
      "Model": "KST3635",
      "Zapięcie": "angielskie"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  },
  {
    "id": "34144",
    "name": "Kolczyki ze stali szlachetnej pozłacanej wkrętki 2,1 cm, KROPLE KST3139",
    "price": "17.71 zł",
    "image": "https://hurt.ecarla.pl/201828-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-wkretki-21-cm-krople-kst3139.jpg",
    "description": [
      "Eleganckie i stylowe kolczyki wkrętki w kształcie kropli, wykonane ze stali szlachetnej platerowanej 14-karatowym złotem.",
      "Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje."
    ],
    "specs": {
      "Wymiary": "2,1 cm x 2 cm",
      "Waga": "5g netto / 7g brutto",
      "Model": "KST3139",
      "Zapięcie": "wkrętki"
    },
    "material": "Biżuteria ze stali chirurgicznej",
    "color": "Jasne złoto",
    "availability": "W magazynie"
  }
],
[
  {
    "id": "34145",
    "name": "Kolczyki ze stali szlachetnej platerowane 14K złotem, sztyft S925, cyrkonie KST3304",
    "price": "23.12 zł",
    "image": "https://hurt.ecarla.pl/201822-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-s925-cyrkonie-kst3304.jpg",
    "description": "Eleganckie kolczyki platerowane złotem z cyrkoniami. Stal szlachetna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje.",
    "specs": {
      "Wymiary": "1,7 cm x 0,8 cm",
      "Waga": "7g netto / 10g brutto",
      "Zapięcie": "angielskie",
      "Model": "KST3304"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34152",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, okręgi perełkowe 4 cm KST3575",
    "price": "25.22 zł",
    "image": "https://hurt.ecarla.pl/201897-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-okregi-perelkowe-4-cm-kst3575.jpg",
    "description": "Eleganckie kolczyki w kształcie okręgów perełkowych, platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "4 cm x 2 cm",
      "Waga": "16g netto / 19g brutto",
      "Zapięcie": "angielskie",
      "Model": "KST3575"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34153",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, okręgi perełkowe 3,5 cm KST3576",
    "price": "25.22 zł",
    "image": "https://hurt.ecarla.pl/201898-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-okregi-perelkowe-35-cm-kst3576.jpg",
    "description": "Stylowe kolczyki - okręgi perełkowe platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "2,8 cm x 2 cm",
      "Waga": "10g netto / 12g brutto",
      "Zapięcie": "angielskie",
      "Model": "KST3576"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34154",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, okręgi z cyrkoniami KST3630",
    "price": "13.53 zł",
    "image": "https://hurt.ecarla.pl/201922-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-okregi-z-cyrkoniami-kst3630.jpg",
    "description": "Subtelne okręgi z cyrkoniami, platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "1,2 cm x 0,2 cm",
      "Waga": "2g netto / 5g brutto",
      "Zapięcie": "angielskie",
      "Model": "KST3630"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34288",
    "name": "Kolczyki wiszące, efektowne tiulowe kwiat, czarne K1706",
    "price": "16.85 zł",
    "image": "https://hurt.ecarla.pl/202680-large_default/kolczyki-wiszące-efektowne-tiulowe-kwiat-czarne-k1706.jpg",
    "description": "Efektowne kolczyki z tiulowymi kwiatami. Biżuteria antyalergiczna, nie zawiera niklu ani chromu.",
    "specs": {
      "Wymiary": "12,5 cm x 4,5 cm",
      "Waga": "14g netto / 20g brutto",
      "Zapięcie": "sztyft",
      "Model": "K1706"
    },
    "material": "Biżuteria sztuczna",
    "availability": "W magazynie"
  },
  {
    "id": "34289",
    "name": "Kolczyki wiszące, efektowne tiulowe z kryształkami, róż złote sztyft K1723R",
    "price": "20.30 zł",
    "image": "https://hurt.ecarla.pl/202684-large_default/kolczyki-wiszące-efektowne-tiulowe-z-kryształkami-róż-złote-sztyft-k1723r.jpg",
    "description": "Tiulowe kwiaty z kryształkami. Biżuteria antyalergiczna.",
    "specs": {
      "Wymiary": "5,7 cm x 5,5 cm",
      "Waga": "6g netto / 11g brutto",
      "Zapięcie": "sztyft",
      "Model": "K1723R"
    },
    "material": "Biżuteria sztuczna",
    "availability": "W magazynie"
  },
  {
    "id": "34290",
    "name": "Kolczyki wiszące, efektowne tiulowe z kryształkami, fuksja złote sztyft K1723F",
    "price": "20.30 zł",
    "image": "https://hurt.ecarla.pl/202686-large_default/kolczyki-wiszące-efektowne-tiulowe-z-kryształkami-fuksja-złote-sztyft-k1723f.jpg",
    "description": "Efektowne kolczyki w kolorze fuksji z kryształkami.",
    "specs": {
      "Wymiary": "5,7 cm x 5,5 cm",
      "Waga": "6g netto / 11g brutto",
      "Zapięcie": "sztyft",
      "Model": "K1723F"
    },
    "material": "Biżuteria sztuczna",
    "availability": "W magazynie"
  },
  {
    "id": "34291",
    "name": "Kolczyki wiszące, efektowne złote, sztyft, fioletowy KWIAT K1734",
    "price": "9.84 zł",
    "image": "https://hurt.ecarla.pl/202696-large_default/kolczyki-wiszące-efektowne-złote-sztyft-fioletowy-kwiat-k1734.jpg",
    "description": "Złote kolczyki z fioletowym kwiatem. Antyalergiczne.",
    "specs": {
      "Wymiary": "6 cm x 3 cm",
      "Waga": "8g netto / 13g brutto",
      "Zapięcie": "sztyft",
      "Model": "K1734"
    },
    "material": "Biżuteria sztuczna",
    "availability": "W magazynie"
  },
  {
    "id": "34292",
    "name": "Kolczyki wiszące, efektowne złote, sztyft, KWIAT beżowy K1735",
    "price": "9.84 zł",
    "image": "https://hurt.ecarla.pl/202729-large_default/kolczyki-wiszące-efektowne-złote-sztyft-kwiat-beżowy-k1735.jpg",
    "description": "Złote kolczyki z beżowym kwiatem.",
    "specs": {
      "Wymiary": "5,3 cm (długość całkowita)",
      "Waga": "6g netto / 13g brutto",
      "Zapięcie": "sztyft",
      "Model": "K1735"
    },
    "material": "Biżuteria sztuczna",
    "availability": "W magazynie"
  },
  {
    "id": "34293",
    "name": "Kolczyki wiszące, efektowne złote, sztyft, KWIAT różowy K1736",
    "price": "9.84 zł",
    "image": "https://hurt.ecarla.pl/202725-large_default/kolczyki-wiszące-efektowne-złote-sztyft-kwiat-różowy-k1736.jpg",
    "description": "Złote kolczyki z różowym kwiatem.",
    "specs": {
      "Wymiary": "5,3 cm (długość całkowita)",
      "Waga": "6g netto / 13g brutto",
      "Zapięcie": "sztyft",
      "Model": "K1736"
    },
    "material": "Biżuteria sztuczna",
    "availability": "W magazynie"
  },
  {
    "id": "34294",
    "name": "Kolczyki wiszące, efektowne złote, sztyft, KWIAT fioletowy K1737",
    "price": "9.84 zł",
    "image": "https://hurt.ecarla.pl/202728-large_default/kolczyki-wiszące-efektowne-złote-sztyft-kwiat-fioletowy-k1737.jpg",
    "description": "Złote kolczyki z fioletowym kwiatem.",
    "specs": {
      "Wymiary": "5,3 cm (długość całkowita)",
      "Waga": "6g netto / 13g brutto",
      "Zapięcie": "sztyft",
      "Model": "K1737"
    },
    "material": "Biżuteria sztuczna",
    "availability": "W magazynie"
  },
  {
    "id": "34297",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, podwójne okręgi, koła KST3551",
    "price": "14.76 zł",
    "image": "https://hurt.ecarla.pl/202707-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-podwójne-okręgi-koła-kst3551.jpg",
    "description": "Podwójne okręgi ze stali szlachetnej platerowanej złotem.",
    "specs": {
      "Wymiary": "1,4 cm x 1,4 cm x 0,8 cm",
      "Waga": "4g netto / 7g brutto",
      "Zapięcie": "sztyft zatrzaskowy",
      "Model": "KST3551"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34298",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, perełki, sztyft KST3554",
    "price": "14.76 zł",
    "image": "https://hurt.ecarla.pl/202709-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-perełki-sztyft-kst3554.jpg",
    "description": "Delikatne perełki platerowane 14K złotem.",
    "specs": {
      "Wymiary": "0,8 cm x 0,8 cm x 0,4 cm",
      "Waga": "2g netto / 4g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3554"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34299",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, fioletowa cyrkonia KST3558",
    "price": "16.61 zł",
    "image": "https://hurt.ecarla.pl/202711-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-fioletowa-cyrkonia-kst3558.jpg",
    "description": "Kolczyki z fioletową cyrkonią, platerowane 14K złotem.",
    "specs": {
      "Wymiary": "1,3 cm x 1,3 cm x 0,5 cm",
      "Waga": "4g netto / 6g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3558"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34300",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, KONICZYNY, różowe cyrkonie KST3569",
    "price": "23.99 zł",
    "image": "https://hurt.ecarla.pl/203113-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-koniczyny-różowe-cyrkonie-kst3569.jpg",
    "description": "Kolczyki w kształcie koniczynek z różowymi cyrkoniami.",
    "specs": {
      "Wymiary": "Długość całkowita: 2,1 cm",
      "Waga": "6g netto / 9g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3569"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34301",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, KONICZYNY złote cyrkonie KST3571",
    "price": "23.99 zł",
    "image": "https://hurt.ecarla.pl/202716-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-koniczyny-złote-cyrkonie-kst3571.jpg",
    "description": "Złote koniczynki z cyrkoniami.",
    "specs": {
      "Wymiary": "Długość całkowita: 2,5 cm",
      "Waga": "6g netto / 8g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3571"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34302",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, Białe Koniczyny, cyrkonie KST3572",
    "price": "19.07 zł",
    "image": "https://hurt.ecarla.pl/202719-large_default/kolczyki-ze-stali-szlachetnej-pozłacane-14k-zlotem-białe-koniczyny-cyrkonie-kst3572.jpg",
    "description": "Białe koniczynki z cyrkoniami, pozłacane 14K złotem.",
    "specs": {
      "Wymiary": "1,2 cm x 1,2 cm x 0,4 cm",
      "Waga": "6g netto / 9g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3572"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34303",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, KONICZYNY białe cyrkonie KST3573",
    "price": "16.61 zł",
    "image": "https://hurt.ecarla.pl/202722-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-koniczyny-białe-cyrkonie-kst3573.jpg",
    "description": "Białe koniczynki platerowane 14K złotem.",
    "specs": {
      "Wymiary": "Długość całkowita: 2,9 cm",
      "Waga": "4g netto / 7g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3573"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  }
],

[
  {
    "id": "34304",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, sztyft, Białe Koniczynki KST3574",
    "price": "14.76 zł",
    "image": "https://hurt.ecarla.pl/203116-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-biale-koniczynki-kst3574.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
    "specs": {
      "Wymiary": "1,5cm x 1,5cm",
      "Waga": "4g netto / 6g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3574"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34306",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, sztyft, róż Koniczynki KST3608",
    "price": "10.46 zł",
    "image": "https://hurt.ecarla.pl/203105-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-roz-koniczynki-kst3608.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
    "specs": {
      "Wymiary": "1,3cm x 1,3cm",
      "Waga": "4g netto / 6g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3608"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34307",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, Koniczynka masa perłowa KST3609",
    "price": "10.46 zł",
    "image": "https://hurt.ecarla.pl/203106-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-koniczynka-masa-perlowa-kst3609.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowanej 14-karatowym złotem.",
    "specs": {
      "Wymiary": "1,3cm x 1,3cm",
      "Waga": "4g netto / 6g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3609"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34308",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, Koniczynka mini czarna KST3603",
    "price": "11.69 zł",
    "image": "https://hurt.ecarla.pl/203128-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-koniczynka-mini-czarna-kst3603.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowanej 14-karatowym złotem.",
    "specs": {
      "Wymiary": "0,6cm x 0,6cm",
      "Waga": "1g netto / 3g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3603"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34309",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, Koniczynka mini biała KST3604",
    "price": "11.69 zł",
    "image": "https://hurt.ecarla.pl/203132-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-koniczynka-mini-biala-kst3604.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowanej 14-karatowym złotem.",
    "specs": {
      "Wymiary": "0,6cm x 0,6cm",
      "Waga": "1g netto / 3g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3604"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34310",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, Koniczynka mini różowa KST3605",
    "price": "11.69 zł",
    "image": "https://hurt.ecarla.pl/203129-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-koniczynka-mini-rozowa-kst3605.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowanej 14-karatowym złotem.",
    "specs": {
      "Wymiary": "0,6cm x 0,6cm",
      "Waga": "1g netto / 3g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3605"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34311",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, sztyft, Koniczynka czarna KST3419",
    "price": "12.92 zł",
    "image": "https://hurt.ecarla.pl/203114-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-koniczynka-czarna-kst3419.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowanej 14-karatowym złotem.",
    "specs": {
      "Wymiary": "1,3cm x 1,3cm",
      "Waga": "2g netto / 5g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3419"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34312",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, Koniczynka masa perłowa KST3602",
    "price": "12.92 zł",
    "image": "https://hurt.ecarla.pl/203115-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-koniczynka-masa-perlowa-kst3602.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowanej 14-karatowym złotem.",
    "specs": {
      "Wymiary": "1,3cm x 1,3cm",
      "Waga": "2g netto / 5g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3602"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34313",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, biała Koniczyna, masa perłowa KST3611",
    "price": "11.69 zł",
    "image": "https://hurt.ecarla.pl/203112-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-biala-koniczyna-masa-perlowa-kst3611.jpg",
    "description": "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej.",
    "specs": {
      "Wymiary": "Długość całkowita: 3cm, Koniczynka: 1,2cm x 1,2cm",
      "Waga": "6g netto / 7g brutto",
      "Zapięcie": "sztyft zatrzaskowy",
      "Model": "KST3611"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34314",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące czarne Koniczyny KST3463",
    "price": "11.69 zł",
    "image": "https://hurt.ecarla.pl/203118-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-czarne-koniczyny-kst3463.jpg",
    "description": "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej.",
    "specs": {
      "Wymiary": "Długość całkowita: 3cm, Koniczynka: 1,2cm x 1,2cm",
      "Waga": "6g netto / 7g brutto",
      "Zapięcie": "sztyft zatrzaskowy",
      "Model": "KST3463"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34315",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, sztyft, SERCA cyrkonie KST3577",
    "price": "12.92 zł",
    "image": "https://hurt.ecarla.pl/203502-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-serca-cyrkonie-kst3577.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
    "specs": {
      "Wymiary": "1,1cm x 1,1cm",
      "Waga": "2g netto / 4g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3577"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34316",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, SERCA i motylki cyrkonie KST3579",
    "price": "17.84 zł",
    "image": "https://hurt.ecarla.pl/202760-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-serca-i-motylki-cyrkonie-kst3579.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
    "specs": {
      "Wymiary": "1cm x 1cm",
      "Waga": "1g netto / 4g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3579"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34317",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, SERCA cyrkonie KST3621",
    "price": "9.84 zł",
    "image": "https://hurt.ecarla.pl/202762-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-serca-cyrkonie-kst3621.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
    "specs": {
      "Wymiary": "0,7cm x 0,7cm",
      "Waga": "1g netto / 4g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3621"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34318",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, sztyft, SERCA KST3623",
    "price": "12.30 zł",
    "image": "https://hurt.ecarla.pl/202836-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-serca-kst3623.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
    "specs": {
      "Wymiary": "1,8cm x 1,6cm x 0,5cm",
      "Waga": "4g netto / 8g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3623"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34319",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, sztyft, SERCA KST3666",
    "price": "19.07 zł",
    "image": "https://hurt.ecarla.pl/202768-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-serca-kst3666.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
    "specs": {
      "Wymiary": "1,7cm x 1,5cm x 0,4cm",
      "Waga": "4g netto / 7g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3666"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34320",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, sztyft, SERCA cyrkonie KST3617",
    "price": "9.84 zł",
    "image": "https://hurt.ecarla.pl/202770-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-serca-cyrkonie-kst3617.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
    "specs": {
      "Wymiary": "0,6cm x 0,6cm",
      "Waga": "1g netto / 4g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3617"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  }
],
[
  {
    "id": "34321",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, sztyft, SERCA kremowe KST3615",
    "price": "8,00 zł",
    "image": "https://hurt.ecarla.pl/203133-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-serca-kremowe-kst3615.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
    "specs": {
      "Wymiary": "0,8cm x 0,7cm",
      "Waga": "1g netto / 3g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3615"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34322",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, sztyft, SERCA czarne KST3614",
    "price": "8,00 zł",
    "image": "https://hurt.ecarla.pl/202779-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-sztyft-serca-czarne-kst3614.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali chirurgicznej platerowanej 14 karatowym złotem.",
    "specs": {
      "Wymiary": "0,8cm x 0,7cm",
      "Waga": "1g netto / 3g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3614"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34323",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem KST3618",
    "price": "11,07 zł",
    "image": "https://hurt.ecarla.pl/202786-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-kst3618.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "1,6cm x 1,1cm x 0,7cm",
      "Waga": "8g netto / 10g brutto",
      "Zapięcie": "sztyft zatrzaskowy",
      "Model": "KST3618"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34324",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, sztyft KST3620",
    "price": "9,84 zł",
    "image": "https://hurt.ecarla.pl/202788-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-kst3620.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "1,7cm x 1cm x 1,3cm",
      "Waga": "6g netto / 8g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3620"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34325",
    "name": "Kolczyki ze stali szlachetnej pozłacanej, sztyft KROPLE KST3670",
    "price": "12,92 zł",
    "image": "https://hurt.ecarla.pl/202790-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-sztyft-krople-kst3670.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "1,2cm x 0,7cm x 0,6cm",
      "Waga": "4g netto / 6g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3670"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34326",
    "name": "Kolczyki ze stali szlachetnej pozłacanej, sztyft KST3667",
    "price": "16,61 zł",
    "image": "https://hurt.ecarla.pl/202792-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-sztyft-kst3667.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "2cm x 0,9cm x 0,5cm",
      "Waga": "2g netto / 5g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3667"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34327",
    "name": "Kolczyki ze stali szlachetnej pozłacanej, sztyft KULKI KST3669",
    "price": "17,84 zł",
    "image": "https://hurt.ecarla.pl/203142-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-sztyft-kulki-kst3669.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "1,5cm x 1,5cm",
      "Waga": "8g netto / 11g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3669"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34328",
    "name": "Kolczyki ze stali szlachetnej pozłacanej, sztyft KROPLE nowoczesne KST3662",
    "price": "15,38 zł",
    "image": "https://hurt.ecarla.pl/203088-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-sztyft-krople-nowoczesne-kst3662.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "2,6cm x 2cm x 0,7cm",
      "Waga": "12g netto / 17g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3662"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34329",
    "name": "Kolczyki ze stali szlachetnej pozłacanej, sztyft nowoczesne KST3661",
    "price": "16,61 zł",
    "image": "https://hurt.ecarla.pl/203089-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-sztyft-nowoczesne-kst3661.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "3cm x 2,1cm x 0,5cm",
      "Waga": "12g netto / 19g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3661"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34330",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, cyrkonie KST3619",
    "price": "15,38 zł",
    "image": "https://hurt.ecarla.pl/202802-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-cyrkonie-kst3619.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "1,9cm x 0,8cm x 1,4cm",
      "Waga": "6g netto / 8g brutto",
      "Zapięcie": "sztyft zatrzaskowy",
      "Model": "KST3619"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34331",
    "name": "Kolczyki ze stali szlachetnej pozłacanej, sztyft KWIAT, cyrkonia KST3637",
    "price": "12,92 zł",
    "image": "https://hurt.ecarla.pl/202804-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-sztyft-kwiat-cyrkonia-kst3637.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "Długość całkowita: 4cm",
      "Waga": "6g netto / 9g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3637"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34332",
    "name": "Kolczyki ze stali szlachetnej pozłacanej, sztyft, wiszące cyrkonie KST3580",
    "price": "24,60 zł",
    "image": "https://hurt.ecarla.pl/202806-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-sztyft-wiszace-cyrkonie-kst3580.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "5cm x 0,9cm",
      "Waga": "6g netto / 9g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3580"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34333",
    "name": "Kolczyki ze stali szlachetnej pozłacanej, wiszące cyrkonie, PERŁA KST3581",
    "price": "22,76 zł",
    "image": "https://hurt.ecarla.pl/202808-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-wiszace-cyrkonie-perla-kst3581.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "3,5cm x 1,3cm",
      "Waga": "6g netto / 8g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3581"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34334",
    "name": "Kolczyki ze stali szlachetnej pozłacanej, sztyft, cyrkonie, PERŁA KST3622",
    "price": "9,84 zł",
    "image": "https://hurt.ecarla.pl/202810-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-sztyft-cyrkonie-perla-kst3622.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "Długość całkowita: 1,2cm",
      "Waga": "1g netto / 4g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3622"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34335",
    "name": "Kolczyki ze stali szlachetnej pozłacanej, wiszące cyrkonie KST3578",
    "price": "17,84 zł",
    "image": "https://hurt.ecarla.pl/202812-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-wiszace-cyrkonie-kst3578.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "2,7cm x 2cm",
      "Waga": "8g netto / 10g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3578"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34336",
    "name": "Kolczyki ze stali szlachetnej pozłacanej, sztyft, cyrkonie KST3664",
    "price": "19,07 zł",
    "image": "https://hurt.ecarla.pl/202814-large_default/kolczyki-ze-stali-szlachetnej-pozlacanej-sztyft-cyrkonie-kst3664.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "1,7cm x 1,8cm",
      "Waga": "6g netto / 12g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3664"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34337",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem, sztyft, perła KST3420",
    "price": "14,15 zł",
    "image": "https://hurt.ecarla.pl/202817-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-sztyft-perla-kst3420.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "0,8cm x 0,8cm",
      "Waga": "1g netto / 3g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3420"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34338",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, zapięcie angielski, Białe SERCA KST3563",
    "price": "22,76 zł",
    "image": "https://hurt.ecarla.pl/202818-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-zapiecie-angielski-biale-serca-kst3563.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej.",
    "specs": {
      "Wymiary": "2,3cm x 1cm",
      "Waga": "4g netto / 6g brutto",
      "Zapięcie": "zapięcie angielskie",
      "Model": "KST3563"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34339",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem Serce duże, zapięcie angielskie KST3660",
    "price": "15,38 zł",
    "image": "https://hurt.ecarla.pl/203125-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-serce-duze-zapiecie-angielskie-kst3660.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "5,4cm x 5,5cm",
      "Waga": "8g netto / 15g brutto",
      "Zapięcie": "angielskie",
      "Model": "KST3660"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34341",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem Serce z perłą KST3594",
    "price": "11,69 zł",
    "image": "https://hurt.ecarla.pl/202841-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-serce-z-perla-kst3594.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "3,2cm x 2,2cm",
      "Waga": "10g netto / 13g brutto",
      "Zapięcie": "angielskie",
      "Model": "KST3594"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34342",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem Serce geometryczne z perłą KST3595",
    "price": "11,69 zł",
    "image": "https://hurt.ecarla.pl/202843-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-serce-geometryczne-z-perla-kst3595.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "2,2cm x 2cm",
      "Waga": "6g netto / 9g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3595"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
 
],
[
  {
    "id": "34344",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem KST3644",
    "price": "19,68 zł",
    "image": "https://hurt.ecarla.pl/202846-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-kst3644.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "2,6cm x 1,8cm x 0,7cm",
      "Waga": "12g netto / 15g brutto",
      "Zapięcie": "sztyft zatrzaskowy",
      "Model": "KST3644"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34345",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem z różowym serduszkiem KST3607",
    "price": "11,69 zł",
    "image": "https://hurt.ecarla.pl/202848-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-z-rozowym-serduszkiem-kst3607.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "3cm x 2,8cm x 0,5cm",
      "Waga": "6g netto / 9g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3607"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34346",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem KST3638",
    "price": "12,92 zł",
    "image": "https://hurt.ecarla.pl/202850-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-kst3638.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "1,6cm x 1cm x 0,3cm",
      "Waga": "4g netto / 5g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3638"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34347",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem KST3650",
    "price": "19,68 zł",
    "image": "https://hurt.ecarla.pl/203317-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-kst3650.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "1,4cm x 1,1cm x 1,3cm",
      "Waga": "6g netto / 8g brutto",
      "Zapięcie": "sztyft zatrzaskowy",
      "Model": "KST3650"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34348",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem KST3651",
    "price": "17,84 zł",
    "image": "https://hurt.ecarla.pl/202856-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-kst3651.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "2,4cm x 2,3cm",
      "Waga": "4g netto / 7g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3651"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34349",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem wiszące z perłą KST3655",
    "price": "15,38 zł",
    "image": "https://hurt.ecarla.pl/202858-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-wiszace-z-perla-kst3655.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "Długość: 2,6cm",
      "Waga": "6g netto / 8g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3655"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34350",
    "name": "Kolczyki ze stali szlachetnej platerowane 14k złotem KST3640",
    "price": "15,38 zł",
    "image": "https://hurt.ecarla.pl/202860-large_default/kolczyki-ze-stali-szlachetnej-platerowane-14k-zlotem-kst3640.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej platerowane 14-karatowym złotem.",
    "specs": {
      "Wymiary": "1,9cm x 1,7cm x 1cm",
      "Waga": "6g netto / 9g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3640"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34352",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, delikatne z cyrkonią KST3534",
    "price": "6,03 zł",
    "image": "https://hurt.ecarla.pl/202864-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-delikatne-z-cyrkonia-kst3534.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej.",
    "specs": {
      "Wymiary": "0,3cm x 0,3cm",
      "Waga": "1g netto / 4g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3534"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34353",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące panterka KST3443",
    "price": "17,84 zł",
    "image": "https://hurt.ecarla.pl/202865-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-panterka-kst3443.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej.",
    "specs": {
      "Wymiary": "7cm x 2,9cm",
      "Waga": "10g netto / 11g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3443"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34354",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, cyrkonie łezki KST3447",
    "price": "14,15 zł",
    "image": "https://hurt.ecarla.pl/202866-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-lezki-kst3447.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej.",
    "specs": {
      "Wymiary": "1cm x 1,6cm",
      "Waga": "4g netto / 5g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3447"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34355",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, cyrkonie KST3656",
    "price": "14,15 zł",
    "image": "https://hurt.ecarla.pl/202868-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonie-kst3656.jpg",
    "description": "Eleganckie i stylowe kolczyki ze stali szlachetnej.",
    "specs": {
      "Wymiary": "2cm x 1,7cm",
      "Waga": "4g netto / 6g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3656"
    },
    "material": "Stal szlachetna, platerowane 14K złotem",
    "availability": "W magazynie"
  }
],
[
  {
    "id": "34386",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące czarne Koniczyny KST3613",
    "price": "12,92 zł",
    "image": "https://hurt.ecarla.pl/202943-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-czarne-koniczyny-kst3613.jpg",
    "description": "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej.",
    "specs": {
      "Wymiary": "Długość: 2,7 cm; Mała koniczynka: 0,9cm x 0,9cm; Duża koniczynka: 1,3cm x 1,3cm",
      "Waga": "4g netto / 7g brutto",
      "Zapięcie": "angielskie",
      "Model": "KST3613"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34387",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące białe Koniczyny KST3624",
    "price": "12,92 zł",
    "image": "https://hurt.ecarla.pl/202946-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-biale-koniczyny-kst3624.jpg",
    "description": "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej.",
    "specs": {
      "Wymiary": "Długość całkowita: 2,7cm; Mała koniczynka: 0,9cm x 0,9cm; Duża koniczynka: 1,3cm x 1,3cm",
      "Waga": "4g netto / 7g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3624"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34388",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące różowe Koniczyny KST3625",
    "price": "12,92 zł",
    "image": "https://hurt.ecarla.pl/203107-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-rozowe-koniczyny-kst3625.jpg",
    "description": "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej.",
    "specs": {
      "Wymiary": "Długość całkowita: 2,7cm; Mała koniczynka: 0,9cm x 0,9cm; Duża koniczynka: 1,3cm x 1,3cm",
      "Waga": "4g netto / 7g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3625"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34472",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące kwiat KST3593",
    "price": "9,84 zł",
    "image": "https://hurt.ecarla.pl/203475-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-kwiat-kst3593.jpg",
    "description": "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej.",
    "specs": {
      "Wymiary": "2,5cm x 2,5cm x 1,6cm",
      "Waga": "10g netto / 14g brutto",
      "Zapięcie": "kreol",
      "Model": "KST3593"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34473",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, serca koła KST3596",
    "price": "9,84 zł",
    "image": "https://hurt.ecarla.pl/203477-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-serca-kola-kst3596.jpg",
    "description": "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej.",
    "specs": {
      "Wymiary": "2,5cm x 2,3cm x 1,2cm",
      "Waga": "4g netto / 6g brutto",
      "Zapięcie": "kreol",
      "Model": "KST3596"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34474",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, kwiaty koła KST3597",
    "price": "9,84 zł",
    "image": "https://hurt.ecarla.pl/203476-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-kwiaty-kola-kst3597.jpg",
    "description": "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej.",
    "specs": {
      "Wymiary": "2cm x 2,6cm x 1,5cm",
      "Waga": "6g netto / 9g brutto",
      "Zapięcie": "angielskie",
      "Model": "KST3597"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34475",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, koła KST3598",
    "price": "9,84 zł",
    "image": "https://hurt.ecarla.pl/203473-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-kola-kst3598.jpg",
    "description": "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej.",
    "specs": {
      "Wymiary": "2,4cm x 2,5cm x 1,7cm",
      "Waga": "10g netto / 13g brutto",
      "Zapięcie": "angielskie",
      "Model": "KST3598"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34476",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, złota koniczyna KST3606",
    "price": "19,07 zł",
    "image": "https://hurt.ecarla.pl/203468-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-zlota-koniczyna-kst3606.jpg",
    "description": "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej.",
    "specs": {
      "Wymiary": "1cm x 1cm",
      "Waga": "2g netto / 5g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3606"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34477",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące z perłą KST3639",
    "price": "16,61 zł",
    "image": "https://hurt.ecarla.pl/203474-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-z-perla-kst3639.jpg",
    "description": "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej.",
    "specs": {
      "Wymiary": "1,8cm x 0,7cm x 0,6cm; Perełka: 0,4cm x 0,4cm; Cyrkonia: 0,4cm x 0,4cm",
      "Waga": "1g netto / 4g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3639"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34478",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, geometryczna kropla KST3641",
    "price": "19,07 zł",
    "image": "https://hurt.ecarla.pl/203470-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-geometryczna-kropla-kst3641.jpg",
    "description": "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej.",
    "specs": {
      "Wymiary": "2cm x 1,4cm x 1,5cm",
      "Waga": "8g netto / 11g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3641"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34479",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, cyrkonia, wiszące koraliki KST3642",
    "price": "23,99 zł",
    "image": "https://hurt.ecarla.pl/203435-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-cyrkonia-wiszace-koraliki-kst3642.jpg",
    "description": "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej.",
    "specs": {
      "Wymiary": "Długość całkowita: 6cm; Kwadracik: 0,6cm x 0,6cm",
      "Waga": "4g netto / 6g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3642"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34480",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące kropelki KST3643",
    "price": "23,99 zł",
    "image": "https://hurt.ecarla.pl/203432-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-kropelki-kst3643.jpg",
    "description": "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej.",
    "specs": {
      "Wymiary": "Długość całkowita: 5,7cm; Kropelka: 0,8cm x 0,5cm",
      "Waga": "2g netto / 5g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3643"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34481",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, kropla KST3645",
    "price": "19,07 zł",
    "image": "https://hurt.ecarla.pl/203469-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-kropla-kst3645.jpg",
    "description": "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej.",
    "specs": {
      "Wymiary": "21cm x 1,4cm x 0,6cm",
      "Waga": "4g netto / 8g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3645"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34482",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, koła przeplatane KST3646",
    "price": "16,61 zł",
    "image": "https://hurt.ecarla.pl/203472-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-kola-przeplatane-kst3646.jpg",
    "description": "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej.",
    "specs": {
      "Wymiary": "2,1cm x 2,3cm x 0,3cm",
      "Waga": "6g netto / 9g brutto",
      "Zapięcie": "kreol",
      "Model": "KST3646"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34483",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, serca wiszące podwójne KST3647",
    "price": "17,84 zł",
    "image": "https://hurt.ecarla.pl/203471-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-serca-wiszace-podwojne-kst3647.jpg",
    "description": "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej.",
    "specs": {
      "Wymiary": "Długość: 2,2cm; Serce małe: 0,8cm x 0,7cm; Serce duże: 1,2cm x 1,1cm",
      "Waga": "6g netto / 9g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3647"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34484",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, serce wzorki KST3648",
    "price": "14,15 zł",
    "image": "https://hurt.ecarla.pl/203430-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-serce-wzorki-kst3648.jpg",
    "description": "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej.",
    "specs": {
      "Wymiary": "1,2cm x 1,1cm",
      "Waga": "2g netto / 4g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3648"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34485",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, kulki KST3649",
    "price": "17,84 zł",
    "image": "https://hurt.ecarla.pl/203438-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-kulki-kst3649.jpg",
    "description": "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej.",
    "specs": {
      "Wymiary": "1,5cm x 1,1cm x 1,3cm",
      "Waga": "8g netto / 11g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3649"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34486",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, okrągłe z sercem KST3652",
    "price": "15,38 zł",
    "image": "https://hurt.ecarla.pl/203437-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-okragle-z-sercem-kst3652.jpg",
    "description": "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej.",
    "specs": {
      "Wymiary": "Długość: 2cm; Kółeczko: 1,1cm x 1,1cm; Serce: 1cm x 0,9cm",
      "Waga": "2g netto / 5g brutto",
      "Zapięcie": "sztyft zatrzaskowy",
      "Model": "KST3652"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34487",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, okrągłe kwadrat KST3653",
    "price": "17,84 zł",
    "image": "https://hurt.ecarla.pl/203436-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-okragle-kwadrat-kst3653.jpg",
    "description": "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej.",
    "specs": {
      "Wymiary": "1,1cm x 1,1cm; Kwadracik: 0,4cm x 0,4cm",
      "Waga": "2g netto / 4g brutto",
      "Zapięcie": "sztyft zatrzaskowy",
      "Model": "KST3653"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34488",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące z sercem i kryształem KST3654",
    "price": "17,84 zł",
    "image": "https://hurt.ecarla.pl/203431-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-z-sercem-i-krysztalem-kst3654.jpg",
    "description": "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej.",
    "specs": {
      "Wymiary": "Długość: 3,6cm; Serce: 0,6cm x 0,6cm; Cyrkonia: 0,3cm x 0,3cm",
      "Waga": "2g netto / 4g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3654"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34489",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, falowane koła KST3657",
    "price": "16,61 zł",
    "image": "https://hurt.ecarla.pl/203384-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-falowane-kola-kst3657.jpg",
    "description": "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej.",
    "specs": {
      "Wymiary": "2,4cm x 1,3cm x 0,5cm",
      "Waga": "4g netto / 6g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3657"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34490",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, wiszące okręgi z sercami, serce w sercu KST3658",
    "price": "16,61 zł",
    "image": "https://hurt.ecarla.pl/203443-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-wiszace-okregi-z-sercami-serce-w-sercu-kst3658.jpg",
    "description": "Eleganckie i stylowe kolczyki damskie ze stali szlachetnej.",
    "specs": {
      "Wymiary": "Długość: 2,8cm; Serce: 1,3cm x 1,1cm; Kółeczko: 1,3cm x 1,3cm x 0,2cm",
      "Waga": "4g netto / 7g brutto",
      "Zapięcie": "sztyft zatrzaskowy",
      "Model": "KST3658"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  }
],
[
  {
    "id": "34492",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, serce z perełką KST3592",
    "price": "10,46 zł",
    "image": "https://hurt.ecarla.pl/203433-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-serce-z-perelka-kst3592.jpg",
    "description": "Kolczyki damskie ze stali szlachetnej. Eleganckie i stylowe kolczyki. Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje.",
    "specs": {
      "Wymiary": "2,2cm x 1,9cm; Perełka: 0,7cm x 0,7cm",
      "Waga": "8g netto / 11g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3592",
      "EAN": "5903843911548"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "34654",
    "name": "Kolczyki ze stali szlachetnej pozłacane 14k złotem, różowe perełki, SERCE KST3584",
    "price": "15,38 zł",
    "image": "https://hurt.ecarla.pl/203506-large_default/kolczyki-ze-stali-szlachetnej-pozlacane-14k-zlotem-rozowe-perelki-serce-kst3584.jpg",
    "description": "Kolczyki damskie ze stali szlachetnej. Eleganckie i stylowe kolczyki. Stal chirurgiczna jest odporna na warunki atmosferyczne, nie ulega korozji, nie rdzewieje, nie śniedzieje.",
    "specs": {
      "Wymiary": "1,8cm x 1,1cm; Perełka: 0,8cm x 0,8cm",
      "Waga": "8g netto / 11g brutto",
      "Zapięcie": "sztyft",
      "Model": "KST3584",
      "EAN": "5903843911432"
    },
    "material": "Stal szlachetna, pozłacane 14K złotem",
    "availability": "W magazynie"
  },
  {
    "id": "381",
    "name": "KOLCZYKI KOSTECZKI ZŁOTE DROBNE",
    "price": "2,99 zł",
    "image": "https://hurt.ecarla.pl/62744-large_default/kolczyki-kosteczki-zlote-drobne.jpg",
    "description": "Drobne złote kolczyki w kształcie kosteczek.",
    "specs": {
      "Wymiary": "1 cm x 1 cm",
      "Model": "K577"
    },
    "material": "Biżuteria sztuczna",
    "availability": "W magazynie"
  }
],

];

const EarRings = ({ category }) => {
  
  console.log("Kategoria:", category);
  console.log("Dane produktów:", earRings);
  const { addProduct } = useContext(CartContext);
  const [visible, setVisible] = useState(false);
  const [productToAdd, setProductToAdd] = useState(null); 

  // <--- 2. Tutaj dodaj logikę filtrowania
  const filteredProducts = category 
    ? earRings.filter(p => p.category === category) 
    : earRings;

  const handleButtonClick = (product) => {
    addProduct(product); 
    setProductToAdd(product);  
    setVisible(true);  
  };

  return (
    <section id="product-ear-rings" className="ear-v2-main-container container" role="region" aria-label="product-ear-rings">
      {/* MODAL PO DODANIU */}
      <ProductAdded visible={visible} setVisible={setVisible} products={productToAdd ? [productToAdd] : []} />
      
      <h1 className="ear-v2-title">Kolczyki {category ? `- ${category}` : ''}</h1>
      
      <div className="row ear-v2-row-grid">
        {/* <--- 3. Tutaj zmień earRings.map na filteredProducts.map */}
        {filteredProducts.map((product) => (
          <article
            key={product.id}
            className="col-6 col-md-3 mb-4 ear-v2-card"
            role="group"
            aria-label={`${product.name}, cena ${product.price}`}
          >
            <div className="ear-v2-image-wrapper">
              <img
                src={product.image}
                className="img-fluid ear-v2-img"
                alt={product.name}
                onMouseEnter={(e) => {
                  if(product.image2) e.currentTarget.src = product.image2;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.src = product.image;
                }}
              />
              <button
                className="ear-v2-buy-btn"
                onClick={() => handleButtonClick(product)}
                aria-label={`Dodaj ${product.name} do koszyka`}
              >
                <i className="fa-solid fa-bag-shopping fa-fw"></i>
              </button>
            </div>
            
            <div className="ear-v2-product-info">
              <h5>
                <Link 
                  to={`/product/${product.id}`} 
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {product.name}
                </Link>
              </h5>
              <p className="ear-v2-product-price">{product.price}</p>
            </div>
          </article>
        ))}
      </div>
      {/* <UpperFooter /> */}
    </section>
  );
}

export default EarRings;