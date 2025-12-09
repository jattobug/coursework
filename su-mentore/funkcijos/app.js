function rand(min, max) { const minCeiled = Math.ceil(min); const maxFloored = Math.floor(max); return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) };


let atsakymas18 = document.querySelector('p[data-18] > span');
let atsakymas24 = document.querySelector('p[data-24] > span');
let atsakymas30 = document.querySelector('p[data-30] > span');

let pasisveikinimai = document.querySelectorAll('#labasRytas > p');

console.log(pasisveikinimai);
console.log(pasisveikinimai.length);

let sriftas18 = 0;
let sriftas24 = 0;
let sriftas30 = 0;

for (let i = 0; i < pasisveikinimai.length; i++) {
    if (pasisveikinimai[i].style.fontSize == '18px') {
        sriftas18 += 1;
    } else {
        if (pasisveikinimai[i].style.fontSize == '24px') {
            sriftas24 += 1;
        } else {
            sriftas30 += 1;
        }
    }
}
atsakymas18.innerText = sriftas18;
atsakymas24.innerText = sriftas24;
atsakymas30.innerText = sriftas30;



// 3. Jei krepšelio suma mažesnė nei 100 eur - pristatymas 19.99 eur
// Krepšelio suma nuo 100eur iki 700 eur - pristatymas 9.99 eur
// Krepšelio sumai nuo 700 eur - pristatymas nemokamas ir taikoma 10% nuolaida.
// krepšelio suma atsitiktinis skaičius nuo 20 iki 1000 eur
let krSuma = document.querySelector('.uzduotis3 > p > span');
let prKaina = document.querySelector('.uzduotis3 > p + p > span');
let nuolaida = document.querySelector('.uzduotis3 > p + p + p > span');
let kainaGalutine = document.querySelector('.uzduotis3 > p:nth-child(4) > span');

let krepselis = rand(20, 1000);
let nuolaidosSuma = 0;
let pristatymoKaina = 0;

if (krepselis < 100) {
    pristatymoKaina = 19.99;
} else {
    if (krepselis >= 100 && krepselis < 700) {
        pristatymoKaina = 9.99;
    } else {
        nuolaidosSuma = krepselis * 0.1;
    }
}

krSuma.innerText = krepselis;
prKaina.innerText = pristatymoKaina;
nuolaida.innerText = nuolaidosSuma.toFixed(2);
kainaGalutine.innerText = (krepselis + pristatymoKaina - nuolaidosSuma).toFixed(2);



// 1. ridenam kamuoliuka. i atsitiktinius tag'us rasom skaiciu ir as skaicius lyginis/nelyginis.
// lygini skaiciu nudazome melynai, nelygini - raudonai.

const skaicius = document.querySelector('.uzduotis1 > p > span');
const lygNelyg = document.querySelector('.uzduotis1 > p + p > span');

const ridenam = rand(1, 6);
skaicius.innerText = ridenam;

if (ridenam == 2 || ridenam == 4 || ridenam == 6) {
    lygNelyg.innerText = 'lyginis';
    skaicius.style.color = 'blue';
} else {
    lygNelyg.innerText = 'NElyginis';
    skaicius.style.color = 'red';
}


// 2. Petras ir Birutė ridena kamuoliuką. Į atitinkamus tagus įrašyti išridentus skaičius. 
// Didesnį skaičių nuspalvinti žaliai.
// Parašyti kas nugalėjo.

const Petras = document.querySelector('.uzduotis2 > p > span');
const Birute = document.querySelector('.uzduotis2 > p + p > span');
const nugaletojas = document.querySelector('.uzduotis2 > p + p + p > span');

const ridenaPetras = rand(1, 6);
const ridenaBirute = rand(1, 6);
Petras.innerText = ridenaPetras; //write in html text
Birute.innerText = ridenaBirute;

if (ridenaBirute > ridenaPetras) {
    nugaletojas.innerText = 'Birute';
    Birute.style.color = 'green';
} else {
    if (ridenaBirute < ridenaPetras) {
        nugaletojas.innerText = 'Petras';
        Petras.style.color = 'green';
    } else {
        nugaletojas.innerText = 'lygiosios';
    }
} 


function pasisveikinti() {
    console.log('Sveiki prisijunge');
}
pasisveikinti();


function pasisveikinti2(vardas) {
    console.log('Sveiki prisijunge' + vardas);
}
pasisveikinti2('Aldona');


function pasisveikinti3(vardas) {
    console.log(`Sveiki prisijunge ${vardas}. Geru pirkiniu`);
}
pasisveikinti3('Aldona');




// Prisijungimas prie paskyros. 
// Patikrinti ar vartotojo vardas užregustruotas. Jei ne, konsolėje atspausdinti // "Toks vartotojas neegzistuoja"
// Patikrinti ar slaptažodis teisingas. Jei teisingas, konsolėje atspausdinti "Sveiki atvykę".
// Jei slaptažodis neteisingas, konsolėje atskžpausdinti "Slaptažodis ir vartotojo vardas neatitinka".
// Vartotojo vardas ir slaptažodis atsitiktinai yra true/false.
// Parašyti funkciją, kurį sukurtų ir patikrintų prisijungumo duomenis.
function paskyra() {
    let vartotojoVardas = rand(0, 1) ? true : false;
    console.log(`vartotojo vardo reiksme - ${vartotojoVardas}`);
    let slaptazodis = rand(0, 1) ? true : false;
    console.log(`slaptazodzio reiksme: ${slaptazodis}`);


    if (!vartotojoVardas) {
        console.log("Toks vartotojas neegzistuoja");
    } else {
        if (slaptazodis) {
            pasisveikinti();
        } else {
            console.log("Slaptazodis ir vartotojo vardas neatitinka");
        }
    }
}
paskyra();




// Parašykite funkciją, kuri gauna amžių ir parašo konsolėje ar žmogus yra pilnametis.
const pilnametis = amzius => {
    if (amzius >= 18) {
        console.log('Pilnametis');
    } else {
        console.log('Nepilnametis');
    }
}
pilnametis(17);
pilnametis(18);


const pilnametis2 = amzius =>
(amzius) >= 18 ? console.log('Pilnametis') : console.log('Ne');
// ? = if
// ! = not
// : = this or that
pilnametis(16);
pilnametis(1966929);


const pilnametis3 = amzius => console.log((amzius >= 18) ? 'Pilnametis': 'Nepilnametis');
pilnametis(11);
pilnametis(1111111111);



console.clear();
// Parašykite funkciją, kuri: atspausdina „Lyginis“, jei duotas skaičius dalijasi iš 2;
// kitaip – „Nelyginis“.


//const arLyginis = _ => (tikrinam ar lyginis) ? (jei lyginis) : (jei nelyginis);
const arLyginis = skaicius => (skaicius % 2 == 0) ? (console.log('Lyginis')) : (console.log('Ne'));
arLyginis(12);
arLyginis(7);
//deklaruojam funkcija = parametras => (salyga, kuria tikrinom) ? (ka darom jei true) : (ka darom jei false);



function rand(min, max) { const minCeiled = Math.ceil(min); const maxFloored = Math.floor(max); return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) };


// 1. Atspausdinti žinutę. Sukurti funkciją hello(), kuri atspausdina „Hello!“.
function hello() {
    console.log('Hello');
}
hello();


// 2. Atspausdinti bet kokį skaičių. Sukurti funkciją, kuri atspausdina perduotą (kaip argumentas) skaičių.
const antras = function (sk1) {
    console.log(sk1);
};
antras(6);


// 3. Sudėti du skaičius. Sukurti funkciją sum(a, b), kuri grąžina a + b rezultatą.
// ----------------------------


// 4. Padidinti skaičių. Sukurti funkciją padidinti(num), kuri grąžina skaičių, padidintą +10.
 function padidinti(sk2) {
    return sk2 + 10;
 }
 console.log(padidinti(15));


 // 5. Sujungti du žodžius tarpu. Sukurti funkciją sujungti(a, b), kuri grąžina tekstą „a - b“.
  function sujungti(a, b) {
    return a + '/' + b;
 }
 console.log(sujungti('Yes', 'No'));


// 6. Grąžinti tą pačią reikšmę. Sukurti funkciją, kuri atspausdina konsolėje tą patį, kas perduota.
 const six = function(something) {
    return console.log(something);
}
six('cia kaip 2 uzduotyje');


// 7. Sukurti „prisistatymą“. Sukurti funkciją prisistatymas(vardas), kuri grąžina: „Mano vardas VARDAS“ (vietoj VARDAS įrašyti perduotą argumentą).
 const prisistatymas = function(vardas) {
    return 'Mano vardas' + ' ' + vardas;
 }
 console.log(prisistatymas('Karolina'));

//
 const funkcija50 = (vardas) => 'Mano vardas yra: ' + vardas;
 console.log(funkcija50('Karolina'));


 // 8. Pakėlimas kvadratu. Sukurti funkciją square(x), kuri grąžina x * x.
 const x2 =(x) => x**2;
 
console.log(x2(11))


// 9. Grąžinti dvigubą tekstą. Sukurti funkciją dvigubasTekstas(text), kuri grąžina text + text.
const dvigubasTekstas = text => text + ' ' + text;
 
console.log(dvigubasTekstas('sdfghjk'));


// 10. Paversti skaičių neigiamu. Sukurti funkciją makeNegative(num), kuri grąžina skaičių -num.
function neigiamas(num) {
    return -num;
}
console.log(neigiamas(-10));




// 1. Patikrinti ar skaičius teigiamas
// Sukurti funkciją, kuri gauna skaičių (kaip argumentą) ir:
// išspausdina konsolėje „Teigiamas“ arba „Neigiamas“



// 2. Patikrinti slaptažodį
// Jei slaptažodis yra „labas“ , spausdinam konsolėje -  „Teisingas“
// Kitu atveju - „Neteisingas“
 function password(a) {
    if (a == 'labas') {
        return 'Teisingas'
    } else {
        'Neteisingas'
    }
}
console.log(password('labas'));


// 3. Temperatūros tikrinimas. Sukurti funkciją
// Jei temp > 20 , spausdinam konsolėje - „Šilta“
// Kitu atveju - „Vėsu“

 function termometras(temp) {
    if (temp < 20) {
        console.log('Vėsu');
    } else {
        console.log('Šilta');
    }
 }
 
termometras(21);
termometras(-2);


// 4. Sukurti funkciją kuri patikrintų ar vardas lygus „Jonas“. Sukurti funkciją
// Jei vardas "Jonas" spausdinam konsolėje - „Labas, Jonai!“
// Kitu atveju  -  „Sveiki.“

const arTikrai = function(vardas) {
    if (vardas == 'Jonas') {
        console.log('Labas, Jonai!');
    } else {
        console.log('Welcome');
    }
}

arTikrai('Jonas');
arTikrai('Ne Jonas');


// 5. Sukurti funkciją kuri patikrintų ar skaičius didesnis už 100.
// Jei >= 100 = „Daug!“
// Kitu atveju = „Mažai.“

const penki = function(sk3) {
    if (sk3 >= 100) {
        console.log('Daug!');
    } else {
        console.log('Mažai.');
    }
}
penki(101);
penki(303);


const penki2 = (sk3) => console.log(sk3 >= 100 ? 'Daug!' : 'Mažai.');
penki(50);
penki(120);


// 6. Sukurti funkciją kuri patikrintų ar tekstas yra tuščias
// Jei textas yra  "" - „Tuščia“
// Kitu atveju - „Yra tekstas“
const ArTuscias = (word) => {
    if (word.length > 0) {
        return 'Yra tekstas';
    } else {
        return 'Tuscia';
    }
};
console.log(ArTuscias('katinas')); 
console.log(ArTuscias(''));


const tekstas = (par) => console.log(par === '' ? 'Tuščia' : 'Yra tekstas');
tekstas('awooo');
tekstas('');



function rand(min, max) { const minCeiled = Math.ceil(min); const maxFloored = Math.floor(max); return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) };
// Petras ir Birutė ridena kauliuką. 
// Parašyti funkciją, kuri sukurtų ir konsolėje atspausdintų išridentus skaičius.
// Parašytų kas nugalėjo.
function kauliukoRidenimas() {
    let Birute = rand(1,6);
    let Petras = rand(1,6);
    console.log(`Birutei iskrito ${Birute}, o Petrui ${Petras}`);
    if (Birute > Petras) {
        console.log('Nugalejo Birute');
    } else if (Petras > Birute) {
        console.log('Nugalejo Petras');
    } else {
        console.log('Lygiosios, meskite dar karta');
    }
}
kauliukoRidenimas();


//Užduotis:
//Parašykite funkciją, kurį gauna krepšelio sumą ir kliento tipą ir grąžina galutinę kainą:
// Klientas "bazinis:  nuolaidos nėra
// Klientas "vip" -  20% nuolaida
// Klientas "darbuotojas" -  30% nuolaida
const kainosPaskaiciavimas = (krSuma, klientoTipas) => {
    if (klientoTipas === 'bazinis') {
        return krSuma;
    } else if (klientoTipas === "vip") {
        return krSuma * 0.8;
    } else if (klientoTipas === "darbuotojas") {
        return krSuma * 0.7;
    } else {
        return krSuma;
    }
}
console.log(kainosPaskaiciavimas(100, "bazinis"));
console.log(kainosPaskaiciavimas(100, "vip"));
console.log(kainosPaskaiciavimas(100, "darbuotojas"));
console.log(kainosPaskaiciavimas(100, "akcija"));


const manoKaipVIPKr = KainosPaskaiciavimas(10, "vip");
let manoDraugesKaipDarb = KainosPaskaiciavimas(120, "darbuotojas");
console.log(200 - manoKaipVIPKr - manoDraugesKaipDarb);