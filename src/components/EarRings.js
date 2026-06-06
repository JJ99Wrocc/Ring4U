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



[
  
 
  

 
 

    


  

 

 




  

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
  
], 



    
   
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
  
], [
  
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
  
],
[
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
  
],
[
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
    "id": "33733",
    "name": "Kolczyki wiszące, efektowne czarne kwiaty, kryształki K1733",
    "price": "18.33 zł",
    "image": "https://hurt.ecarla.pl/199743-large_default/kolczyki-wiszace-efektowne-czarne-kwiaty-krysztalki-k1733.jpg",
    "specs": { "WYMIARY": "2,5 x 4 cm", "Model": "K1733" }
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