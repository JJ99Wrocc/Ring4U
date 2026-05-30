    import react, { useContext, useState } from 'react';
    import { CartContext } from './CartContext';
    import { Link } from 'react-router-dom';
    import ProductAdded from './ProductsAdded'; // DODANO
    // import UpperFooter from './Footer';
    // import "../css/EarRings.css";
    import { earRings } from "./Products";
    export const kolczykiStal = [
{ 
    id: "H_34487", // Oryginalne ID z hurtowni (zostaje do zamówień!)
    name: "Kolczyki ze stali szlachetnej pozłacane 14k złotem, okrągłe kwadrat",
    category: "stal",
    price: "99.99 zł",
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
    id: "14505", 
    name: "Kolczyki ślubne wiszące z kryształkami stal chirurgiczna",
    category: "stal",
    url: "/product/14505",
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
    id: "14504", 
    name: "Kolczyki ślubne wiszące z kryształkami stal chirurgiczna",
    price: "94.99 zł", 
    category: "stal",
    url: "/product/14504",
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
    id: "12920", 
    name: "Kolczyki stal chirurgiczna srebrne",
    price: "94.99 zł", 
    category: "stal",
    url: "/product/12920",
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
    id: "12040", 
    name: "Kolczyki stal chirurgiczna srebrne",
    price: "94.99 zł", 
    category: "stal",
    url: "/product/12040",
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
    id: "11952", 
    name: "KOLCZYKI STAL CHIRURGICZNA ZŁOTE ",
    price: "94.99 zł", 
    category: "stal",
    url: "/product/11952",
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
    id: "11896", 
    name: "KOLCZYKI STAL CHIRURGICZNA ZŁOTO ",
    price: "99.99 zł", 
    category: "stal",
    url: "/product/11896",
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
    id: "11722", 
    name: "KOLCZYKI ZE STALI CHIRURGICZNEJ PLATEROWANE ZŁOTEM ",
    price: "94.99 zł", 
    category: "stal",
    url: "/product/11722",
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
    id: "11654", 
    name: "KOLCZYKI ZE STALI CHIRURGICZNEJ PLATEROWANE ZŁOTEM",
    price: "99.99 zł", 
    category: "stal",
    url: "/product/11654",
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
    id: "11618", 
    name: "KOLCZYKI ZE STALI CHIRURGICZNEJ PLATEROWANE ZŁOTEM ZŁOTE ",
    price: "94.99 zł", 
    category: "stal",
    url: "/product/11618",
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
    id: "9183", 
    name: "KOLCZYKI ZE STALI PLATEROWANEJ ŻÓŁTYM ZLOTEM",
    category: "stal",
    price: "94.99 zł", 
    url: "/product/9183",
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
    id: "6012", 
    name: "KOLCZYKI STAL CHIRURGICZNA ",
    category: "stal",
    price: "99.99 zł", 
    url: "/product/6012",
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
    id: "4978", 
    name: "KOLCZYKI STAL NIERDZEWNA K558 SREBRNE",
    category: "stal",
    url: "/product/4978",
    price: "99.99 zł", 
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
    id: "3999", 
    name: "KOLCZYKI STAL CHIRURGICZNA ",
    category: "stal",
    price: "99.99 zł", 
    url: "/product/3999",
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
    id: "14525", 
    name: "Kolczyki ze stali chirurgicznej ",
    price: "94.99 zł", 
    category: "stal",
    url: "/product/14525",
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
    id: "16068", 
    name: "Nausznice ze stali szlachetnej czarne kryształki platerowane złotem ",
    price: "94.99 zł", 
    category: "stal",
    url: "/product/16068",
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
    name: "Nausznice podwójne ze stali szlachetnej złoto-srebrne proste platerowane złotem ",
    price: "94.99 zł", 
    category: "stal",
    url: "/product/16081",
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
  { 
        id: "16195", 
        name: "Kolczyki pozłacane literka A ",
        price: "89.89 zł", 
        category: "stal",
        url: "/product/16195",
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
        name: "Kolczyki pozłacane literka B ",
        price: "89.89 zł", 
        category: "stal",
        url: "/product/16196",
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
        name: "Kolczyk pozłacany literka E ",
        price: "89.89 zł", 
        category: "stal",
        url: "/product/16199",
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
        name: "Kolczyk pozłacany literka F ",
        price: "89.89 zł", 
        category: "stal",
        url: "/product/16200",
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
        name: "Kolczyk pozłacany literka G ",
        price: "89.89 zł", 
        category: "stal",
        url: "/product/16201",
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
        name: "Kolczyk pozłacany literka I ",
        price: "89.89 zł", 
        category: "stal",
        url: "/product/16202",
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
        name: "Kolczyk pozłacany literka O ",
        price: "89.89 zł",
        category: "stal",
        url: "/product/16208", 
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
        name: "Kolczyk pozłacany literka P ",
        price: "89.89 zł", 
        category: "stal",
        url: "/product/16209",
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
        name: "Kolczyk pozłacany literka S ",
        price: "89.89 zł", 
        category: "stal",
        url: "/product/16210",
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
        name: "Kolczyk pozłacany literka R ",
        price: "89.89 zł", 
        category: "stal",
        url: "/product/16211",
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
        name: "Kolczyk pozłacany literka T ",
        price: "89.89 zł", 
        category: "stal",
        url: "/product/16212",
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
        name: "Kolczyk pozłacany literka U ",
        price: "89.89 zł", 
        category: "stal",
        url: "/product/16213",
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
        name: "Kolczyk pozłacany literka W ",
        price: "89.89 zł", 
        category: "stal",
        url: "/product/16214",
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
        name: "Kolczyk pozłacany literka Z ",
        price: "89.89 zł", 
        category: "stal",
        url: "/product/16215",
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
        name: "Naszyjnik stal chirurgiczna literka B platerowana złotem ",
        price: "89.15 zł", 
        category: "stal",
        url: "/product/16217",
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
        name: "Kolczyki stal chirurgiczna złote ażurowe listki sztyft ",
        price: "89.32 zł",
        category: "stal",
        url: "/product/16431", 
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
        name: "Kolczyki ze stali szlachetnej renifer sztyft ",
        price: "99.96 zł", 
        category: "stal",
        url: "/product/16628",
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
        name: "Kolczyki ze stali chirurgicznej pozłacane sztyfty ",
        price: "99.93 zł",
        category: "stal",
        url: "/product/16793", 
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
        name: "Kolczyki ze stali chirurgicznej pozłacane ",
        price: "99.18 zł", 
        category: "stal",
        url: "/product/17095",
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
        name: "Kolczyki ze stali chirurgicznej pozłacane ",
        price: "92.18 zł", 
        category: "stal",
        url: "/product/17103",
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
        price: "89.30 zł", 
        category: "stal",
        url: "/product/17107",
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
        id: "17340", 
        name: "Kolczyki ze stali szlachetnej pozłacanej sztyft ",
        price: "95.99 zł", 
        category: "stal",
        url: "/product/17340",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej sztyft",
        price: "89.72 zł", 
        category: "stal",
        url: "/product/17377",
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
        id: "18848", 
        name: "Kolczyki ze stali szlachetnej pozłacanej sztyft",
        price: "89.00 zł", 
        category: "stal",
        url: "/product/18848",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej sztyft ",
        price: "84.15 zł", 
        category: "stal",
        url: "/product/18851",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej sztyft ",
        price: "85.78 zł", 
        category: "stal",
        url: "/product/18868",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej ",
        price: "89.84 zł", 
        category: "stal",
        url: "/product/18996",
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
        name: "Kolczyk nausznica ze stali szlachetnej pozłacane",
        price: "109.6 zł", 
        category: "stal",
        url: "/product/19010",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej",
        price: "89.87 zł", 
        category: "stal",
        url: "/product/19067",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej ",
        price: "89 zł", 
        category: "stal",
        url: "/product/19086",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej sztyft ",
        price: "89.96 zł", 
        category: "stal",
        url: "/product/19759",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej ",
        price: "89.19 zł", 
        category: "stal",
        url: "/product/19772",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej ",
        price: "84.15 zł", 
        category: "stal",
        url: "/product/19783",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej",

        price: "89.65 zł", 
        category: "stal",
        url: "/product/19786",
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
        id: "19894", 
        name: "Kolczyki ze stali szlachetnej pozłacanej ",
        price: "89.34 zł", 
        category: "stal",
        url: "/product/19894",
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
    },
     {
        id: "20385",
        name: "Kolczyki ze stali szlachetnej pozłacanej ",
        price: "79.88 zł",
        category: "stal",
        url: "/product/20385",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej ",
        price: "89.9 zł",
        category: "stal",
        url: "/product/20591",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej",
        price: "109.39 zł",
        category: "stal",
        url: "/product/20594",
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
        name: "Kolczyki ślubne wiszące z kryształkami stal chirurgiczna ",
        price: "109.99 zł",
        category: "stal",
        url: "/product/20687",
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
        id: "21199",
        name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem ",
        price: "89.9 zł",
        category: "stal",
        url: "/product/21199",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem",
        price: "79.9 zł",
        category: "stal",
        url: "/product/21201",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem",
        price: "79.53 zł",
        category: "stal",
        url: "/product/21207",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem ",
        price: "89.82 zł",
        category: "stal",
        url: "/product/21219",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem ",
        price: "89.30 zł",
        category: "stal",
        url: "/product/21974",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem ",
        price: "89.9 zł",
            category: "stal",
        url: "/product/21985",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem",
        price: "89.07 zł",
        category: "stal",
        url: "/product/21986",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem ",
        price: "89.99 zł",
        category: "stal",
        url: "/product/22036",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem",
        price: "89.39 zł",
        category: "stal",
        url: "/product/22039",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej 14k złotem ",
        price: "89.91 zł",
        category: "stal",
        url: "/product/22046",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej ",
        price: "109.23 zł",
        category: "stal",
        url: "/product/22183",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej ",
        price: "104.99 zł",
        category: "stal",
        url: "/product/22197",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej sztyft",
        price: "79.96 zł",
        category: "stal",
        url: "/product/22307",
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
        name: "Kolczyki ze stali szlachetnej pozłacanej sztyft",
        price: "79.55 zł",
        category: "stal",
        url: "/product/22308",
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
        name: "Kolczyki ze stali chirurgicznej pozłacane sztyft",
        price: "79.24 zł",
        category: "stal",
        url: "/product/22314",
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
        name: "Kolczyki ze stali chirurgicznej pozłacane sztyft",
        price: "79.69 zł",
        category: "stal",
        url: "/product/22318",
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
    "id": "23716",
    "name": "Kolczyki ze stali chirurgicznej pozłacane sztyfty ",
    "price": "79.88 zł",
    "category": "stal",
    "url": "/product/23716",
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
    "name": "Kolczyki ze stali szlachetnej pozłacanej 14k złotem ",
    "price": "79.66 zł",
    "category": "stal",
    "url": "/product/23719",
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
    "name": "Kolczyki ze stali szlachetnej pozłacanej 14k złotem",
    "price": "79.78 zł",
    "category": "stal",
    "url": "/product/23722",
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
    "name": "Kolczyki ze stali szlachetnej pozłacanej 14k złotem ",
    "price": "79.19 zł",
    "category": "stal",
    "url": "/product/23741",
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
    "name": "Kolczyki ze stali szlachetnej pozłacanej 14k złotem ",
    "price": "74.99 zł",
    "category": "stal",
    "url": "/product/23745",
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
    "name": "Kolczyki ze stali szlachetnej pozłacanej 14k złotem",
    "price": "79.93 zł",
    "category": "stal",
    "url": "/product/23747",
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
    "name": "Kolczyki ze stali szlachetnej pozłacanej 14k złotem",
    "price": "89.99 zł",
    "category": "stal",
    "url": "/product/23749",
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
    "name": "Kolczyki ze stali szlachetnej pozłacanej 14k złotem Zielone Serce ",
    "price": "69.26 zł",
    "category": "stal",
    "url": "/product/23755",
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
    "name": "Kolczyki ze stali szlachetnej pozłacanej 14k złotem",
    "price": "69.00 zł",
    "category": "stal",
    "url": "/product/23756",
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
    "name": "Kolczyki ze stali szlachetnej pozłacanej Perłowe Serce ",
    "price": "79.99 zł",
    "category": "stal",
    "url": "/product/23759",
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
    "name": "Kolczyki ze stali szlachetnej pozłacanej ",
    "price": "89.19 zł",
    "category": "stal",
    "url": "/product/23765",
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
    "name": "Kolczyki ze stali szlachetnej pozłacanej",
    "price": "79.46 zł",
    "category": "stal",
    "url": "/product/23769",
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
    "name": "Kolczyki ślubne BOHO wizytowe wiszące z kryształkami stal szlachetna ",
    "price": "119. zł",
    "category": "stal",
    "url": "/product/23986",
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
    "name": "Kolczyki ślubne BOHO wizytowe wiszące z kryształkami stal szlachetna",
    "price": "159.74 zł",
    "category": "stal", 
    "url": "/product/23991",
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
    "name": "Kolczyki ślubne BOHO wizytowe wiszące z kryształkami stal szlachetna",
    "price": "159.99 zł",
    "category": "stal",
    "url": "/product/23992",
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
    "name": "Kolczyki ślubne BOHO wizytowe wiszące z kryształkami stal szlachetna ",
    "price": "159.99 zł",
    "category": "stal",
    "url": "/product/23996",
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
    "name": "Kolczyki ślubne BOHO wizytowe wiszące z kryształkami stal szlachetna",
    "price": "159.99 zł",
    "category": "stal",
    "url": "/product/23998",
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
    "name": "Kolczyki ślubne BOHO wizytowe wiszące z kryształkami stal szlachetna",
    "price": "109.99 zł",
    "category": "stal",
    "url": "/product/24000",
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
    "name": "Kolczyki ślubne BOHO wizytowe wiszące z kryształkami stal szlachetna",
    "price": "109 zł",
    "category": "stal",
    "url": "/product/24001",
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
    "name": "Kolczyki ze stali szlachetnej pozłacane",
    "price": "99.76 zł",
    "category": "stal",
    "url": "/product/24018",
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
    "id": "24108",
    "name": "Kolczyki ze stali szlachetnej pozłacanej",
    "price": "89.96 zł",
    "category": "stal",
    "url": "/product/24108",
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
    "name": "Kolczyki ze stali szlachetnej pozłacanej",
    "price": "79.99 zł",
    "category": "stal",
    "url": "/product/24110",
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
    "name": "Kolczyki ze stali szlachetnej pozłacanej Perłowe Serce",
    "price": "89.99 zł",
    "category": "stal",
    "url": "/product/24111",
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
    ]


    const EarRingsStal = ({ category }) => {
    
    console.log("Kategoria:", category);
    console.log("Dane produktów:", kolczykiStal);
    const { addProduct } = useContext(CartContext);
    const [visible, setVisible] = useState(false);
    const [productToAdd, setProductToAdd] = useState(null); 

const filteredProducts = kolczykiStal.filter(p => p.category === "stal");
 

    const handleButtonClick = (product) => {
        addProduct(product); 
        setProductToAdd(product);  
        setVisible(true);  
    };
    if (!filteredProducts || filteredProducts.length === 0) {
return <div className="container">Brak produktów w tej kategorii.</div>;
    }

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

    export default EarRingsStal;