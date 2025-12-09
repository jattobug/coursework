function rand(min, max) { const minCeiled = Math.ceil(min); const maxFloored = Math.floor(max); return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) };

console.log('Kartojimas - žinojimo žinios');

// Mergaitė turi penkis spalvotus pieštukus.

let mergaitesPiestukuKiekis = 5; // priskyrimas

console.log(mergaitesPiestukuKiekis);

mergaitesPiestukuKiekis = 7;

console.log(mergaitesPiestukuKiekis);

mergaitesPiestukuKiekis = 9;

console.log(mergaitesPiestukuKiekis);


mergaitesPiestukuKiekis = 25;

console.log(mergaitesPiestukuKiekis);


// Mergaitės vardas Marytė

const mergaitesVardas = 'Marytė';


// Berniukas, kurio vardas Tomukas, turi 5 pieštukus


const berniukas = {} // objektas tuščias

berniukas.piestukuKiekis = 5;
berniukas.vardas = 'Tomukas';

console.log(berniukas);


const kazkas = {}; 


const piestukai = []; // tuščias masyvas

piestukai[0] = 'Raudonas';
piestukai[1] = 'Geltonas';
piestukai[2] = 'Žalias';


// Gyveno žvėris - Bebras. Jis turėjo užtvanką ant Neries upės. Užtvankoje buvo sutempta 59 pagaliai
// Bebro uodega buvo ilga 39cm. Bebras turėjo 3 vaikus: 'Bebrius', 'Bebrikė' ir 'Bebroidas'.
// Aprašyti žvėrį


// Prekė 'Rašiklių rinkinys'. Prekės kodas: 6548942158789. Kaina: 3.75 Rašiklių spalvos: 'Mėlyna', 'Juoda', 'Raudona'


const zveris1 = {}

zveris1.tipas = 'Bebras';
zveris1.uztvankosUpe = 'Neris';
zveris1.uztvankosPagaliuKiekis = 59;
zveris1.uodegosIlgis = '39cm';
zveris1.vaikai = [];
zveris1.vaikai[0] = 'Bebrius';
zveris1.vaikai[1] = 'Bebrikė';
zveris1.vaikai[2] = 'Bebroidas';


const zveris2 = {
    tipas: 'Bebras',
    uztvankosUpe: 'Neris',
    uztvankosPagaliuKiekis: 59,
    uodegosIlgis: '39cm',
    vaikai: ['Bebrius', 'Bebrikė', 'Bebroidas']
}

console.log(zveris1, zveris2);


const product1 = {
    title: 'Rašiklių rinkinys TRYS',
    code: '6548942158789',
    price: 3.75,
    colors: ['Mėlyna', 'Juoda', 'Raudona']
}

const product2 = {
    title: 'Rašiklių rinkinys KETURI',
    code: '5666465135954',
    price: 4.25,
    colors: ['Mėlyna', 'Juoda', 'Raudona', 'Geltona']
}

// Kurio rinkinio vienas rašiklis yra pigesnis?


// if (sąlygos vieta) {
// TAIP veiksmas
// } else {
// NE veiksmas
// }

if (product1.price / product1.colors.length < product2.price / product2.colors.length) {
    console.log(product1.title);
} else {
    console.log(product2.title);
}


const getOnePenPrice = product => {
    product.price / product.colors.length;
}


if (getOnePenPrice(product1) < getOnePenPrice(product2)) {
    console.log(product1.title);
} else {
    console.log(product2.title);
}




console.log('Labas dienas');

const namas = {
    kaminas: 'yra didelis',
    durys: 'metalinės'
}

console.log(structuredClone(namas)); // gilus kopijavimas
console.log({ ...namas }); // seklus kopijavimas

namas.lagai = 5;

console.log(namas);

const unshuffled = ['hello', 'a', 't', 'q', 1, 2, 3, { cats: true }];

const shuffled = unshuffled.sort(() => Math.random() - 0.5); // atsitiktinis išdėstymas paremtas rūšiavimu
console.log(shuffled);

/*
Naujos statybos name parduodami du butai (analogija product1 ir product2)

Butas. numeris: 45; užbaigtumas: "euroremontas", balkonas: nėra, kambariai: virtuvė 10m2,
miegamasis: 15m2, svetainė: 18m2; kaina 75500eur

Butas. numeris: 12; užbaigtumas: "neįrengtas", balkonas: yra,  kambariai: virtuvė 9m2,
miegamasis: 12m2, svetainė: 20m2, vaikų kambarys: 14m2; kaina 92500eur

Klausimas pirmas: Kuris butas turi daugiau kambarių?
Klausimas antras: Kurio buto kvadratinis metras yra brangesnis (nesikartojome šito, tiesiog kam
 per paprastas pirmas klausimas, kad turėtų ką veikti - tema masyvo metodai)

*/

const flat1 = {
    number: 45,
    finish: 'euroremontas',
    balcone: false,
    rooms: [
        { name: 'virtuvė', sq: 10 },
        { name: 'miegamasis', sq: 15 },
        { name: 'svetainė', sq: 18 }
    ],
    price: 75500
}

const flat2 = {
    number: 12,
    finish: 'neįrengtas',
    balcone: true,
    rooms: [
        { name: 'virtuvė', sq: 9 },
        { name: 'miegamasis', sq: 12 },
        { name: 'svetainė', sq: 20 },
        { name: 'vaikų kambarys', sq: 14 }
    ],
    price: 92500
}


if (flat1.rooms.length > flat2.rooms.length) {
    console.log(flat1.number);
} else {
    console.log(flat2.number);
}

const oneSqPrice = flat => {

    const size = flat.rooms.reduce((counter, room) => {
        return counter + room.sq;
    }, 0);

    return flat.price / size;
}

if (oneSqPrice(flat1) > oneSqPrice(flat2)) {
    console.log(flat1.number);
} else {
    console.log(flat2.number);
}

function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const skaiciusA = rand(1, 45);
const skaiciusB = rand(1, 45);

console.log('A', skaiciusA, 'B', skaiciusB);

if (skaiciusA < skaiciusB) {
    console.log('Didesnis B'); // taip
} else {
    console.log('Didesnis A'); // ne
}


// Duoti random (nuo 1 iki 25) skaičiai A1 A2 ir B1 B2
// Išrinkiti didesnį iš A ir didesnį iš B ir pasakyti kuris mažesnis
// 8 ir 7 - 9 ir 4 ==> 8 9 ==> 8
// pateikti skaičių

const skaiciusA1 = rand(1, 25);
const skaiciusA2 = rand(1, 25);
const skaiciusB1 = rand(1, 25);
const skaiciusB2 = rand(1, 25);

console.log('A1', skaiciusA1, 'A2', skaiciusA2, 'B1', skaiciusB1, 'B2', skaiciusB2);

// priskiriamoji sąlyga - ternaris

const A = skaiciusA1 > skaiciusA2 ? skaiciusA1 : skaiciusA2;
// salyga skaiciusA1 > skaiciusA2
// jeigu sąlyga true tai A po ? = skaiciusA1
// jeigu sąlyga false tai A po : = skaiciusA1

const B = skaiciusB1 > skaiciusB2 ? skaiciusB1 : skaiciusB2;

const rez = A < B ? A : B;

const rez2 = Math.min(Math.max(skaiciusA1, skaiciusA2), Math.max(skaiciusB1, skaiciusB2));


let didesnisA;
let didesnisB;
let mazesnis;

if (skaiciusA1 > skaiciusA2) {
    didesnisA = skaiciusA1;
} else {
    didesnisA = skaiciusA2;
}

if (skaiciusB1 > skaiciusB2) {
    didesnisB = skaiciusB1;
} else {
    didesnisB = skaiciusB2;
}

if (didesnisA < didesnisB) {
    mazesnis = didesnisA;
} else {
    mazesnis = didesnisB;
}

console.log(rez, rez2, mazesnis);

// Duoti 2 random skaičiai nuo 1 iki 17.
// A. ar jie abudu yra didesni nei 11?
// B. ar yra bent vienas skaičius didesnis už 14?

console.clear();

const skaiciusC1 = rand(1, 17);
const skaiciusC2 = rand(1, 17);

console.log('C1', skaiciusC1, 'C2', skaiciusC2);

if (skaiciusC1 > 11 && skaiciusC2 > 11) {
    console.log('Abu didesni nei 11');
} else {
    console.log('Vinas ar abu ne didesni nei 11');
}

if (skaiciusC1 > 14 || skaiciusC2 > 14) {
    console.log('Kažkuris didesnis nei 14');
} else {
    console.log('Nei vienas ne didesnis nei 14');
}

// Atspausdinkite žodžio "Karakumai" kas antrą raide ====> Krkmi 

const word = 'Karakumai';
let word2 = '';
let word3 = '';

for (let i = 0; i < word.length; i = i + 2) { // einam kas du
    word2 = word2 + word[i];
}

for (let i = 0; i < word.length; i++) {
    // if (i % 2 == 0) {
    //     word3 = word3 + word[i];
    // }
    if (i % 2) {
        continue;
    }
    word3 = word3 + word[i];
}
console.log(word2, word3);




console.log('Laba');

// "Bebras nori banano" kiek yra a raidžių?

const where = 'Bebras nori banano';
let lettersA = 0;

for (let i = 0; i < where.length; i++) {
    if (where[i] == 'a') {
        lettersA++; // pridedam vienetą
    }

    // where[i] == 'a' && lettersA++;
}

console.log(lettersA);


// "Bebras nori banano" sukurti masyvą, kurio elementai sakinio raidės ir tarpai

const lettersArray = [];

for (let i = 0; i < where.length; i++) {
    lettersArray.push(where[i]);
}

console.log(lettersArray);

// "Bebras nori banano" sukurti masyvą, kurio elementai sakinio raidės ir tarpai, a raidžių nedėti

const lettersArrayWOA = [];
for (let i = 0; i < where.length; i++) {

    where[i] == 'a' || lettersArrayWOA.push(where[i]);
    
    // where[i] == 'a' ==> true
    // po || operatoriaus push nedaromas

    // where[i] == 'a' ==> false
    // po || operatoriaus push daromas
    
    
    // if (where[i] == 'a') {
    //     continue
    // }

    // lettersArrayWOA.push(where[i]);
}

console.log(lettersArrayWOA);


/*  

TRUE  ||  nesvarbu kas čia  =====> visada bus TRUE

FALSE  &&  nesvarbu kas čia  =====> visada bus FALSE

*/

console.log(typeof lettersA == 'number');
const masyvas0 = [
    45,
    87,
    'a', 
    32,
    74,
    53
];

// suskaičiuoti skaičių sumą
let sumOfNumbers0 = 0;

for (let i = 0; i < masyvas.length; i++) {
    if (typeof masyvas0[i] == 'number') {
        sumOfNumbers0 += masyvas0[i];
    }
}
console.log(sumOfNumbers0);


const masyvas2 = [
    '45',
    87,
    32,
    '74',
    '53'
];
// suskaičiuoti skaičių sumą (visų)

// parseFloat()
// parseInt()

sumOfNumbers = 0;

for (let i = 0; i < masyvas2.length; i++) {
    if (typeof masyvas2[i] == 'number') {
        sumOfNumbers += masyvas2[i]; // jeigu skaičius tai paprastai sumuojam
    } else {
        const asNumber = parseInt(masyvas2[i]); // jeigu ne, padarom skaičių
        sumOfNumbers += asNumber; // ir tada sumuojam

        // sumOfNumbers += parseInt(masyvas2[i]);
    }
}
console.log(sumOfNumbers);

const allH2 = document.querySelectorAll('h2'); // 3 H2 TAGAI, sudėti masyve* (node liste)

const h2FirstNumber = parseInt(allH2[0].innerText); 

// allH2[0] ===> visas elementas (tagas) pirmasis
// allH2[0].innerText ===> elemento vidinis tekstas
// parseInt(allH2[0].innerText) ===> elemento vidinis tekstas verčiamas į skaičių

const h2SecondNumber = parseInt(allH2[1].innerText); 

allH2[2].innerText = h2FirstNumber + h2SecondNumber;

// allH2[2].innerText ===> trečio h2 vidinis tekstas
// = h2FirstNumber + h2SecondNumber ===> yra suma skaičių 
// prieš atsitinkant priskyrimui suma verčiama į tekstą AUTOMATIŠKAI

const allH3 = document.querySelectorAll('h3');

const h3FirstNumber = parseInt(allH3[0].innerText); 
const h3LastNumber = parseInt(allH3[2].innerText); 

allH3[1].innerText = h3LastNumber - h3FirstNumber;


const nr1 = document.querySelector('#nr1');

nr1.addEventListener('click', eventas => {
    // eventas ===> event objektas (ataskaita apie įvykį)
    console.log(eventas.target, 'Elementas kuriame įvyko eventas');
    console.log(eventas.target.innerText);
});



// ciklas cikle. "Kotleto valgymas"
const kasniu = 7;
const kramtymo = 4;

for (let i = 1; i <= kasniu; i++) { // i skaičiuoja kąsnius

    for (let j = 1; j <= kramtymo; j++) { // j skaičiuoja kramtymus

        console.log('kasnis nr', i, 'kramtom', j, 'kartą');

    }

}
console.clear();

const masyvas = [
    [5, 9],
    [8, 0, 9, 7],
    [1, 6, 3]
];

// console.log(masyvas);
for (let i = 0; i < masyvas.length; i++) {

    for (let j = 0; j < masyvas[i].length; j++) {

        console.log(masyvas[i][j]);

    }
}


const masyvasB = [
    [5, 9],
    ['C', 'B', 3],
    [8, 0, 9, 7],
    [1, '', 3]
];
// kokia skaičių suma?

let sumOfNumbers = 0;

for (let i = 0; i < masyvasB.length; i++) {


    for (let j = 0; j < masyvasB[i].length; j++) {

        if (typeof masyvasB[i][j] == 'number') {
            sumOfNumbers += masyvasB[i][j];
        }

    }

}

masyvasB.forEach(eil => {
    eil.forEach(num => {
        if (typeof num == 'number') {
            sumOfNumbers += num;
        }
    });
});




console.log(sumOfNumbers);


const sq1 = document.querySelector('.sq1');
const sq2 = document.querySelector('.sq2');


sq1.addEventListener('click', e => {
    setTimeout(_ => {
        e.target.style.backgroundColor = 'orange';
    }, 1000);

});


sq2.addEventListener('click', e => {
    e.stopPropagation(); // stabdo evento plitimą į tėvinius elementus
    e.target.style.backgroundColor = 'crimson';
});


const aTag = document.querySelector('a');

aTag.addEventListener('click', e => {
    e.preventDefault(); // stabdo defoltinį tago evento veikimą
    e.target.innerText = 'Gal neik';
    setTimeout(_ => {
        window.location.href = e.target.href; // atidaro puslapį e.target.href (tago a linkas)
    }, 2000);
});



const fun = _ => {
    document.querySelector('body').style.backgroundColor = 'gray';
}

setTimeout(fun, 3000); // fun ==> funkcija, 3000 ==> laikas milisekundėm



// inline variantas
// setTimeout( _ => {
//     document.querySelector('body').style.backgroundColor = 'gray';
// }, 3000)


const h1Tag = document.querySelector('h1');
const h2Tag = document.querySelector('h2');

let count = 0;
let count2 = 0;

const add1 = _ => {
    count++;
    h1Tag.innerText = count;
}

const add2 = _ => {
    count2++;
    h2Tag.innerText = count2;
}

const intId1 = setInterval(add1, 1); // intervalo ID
const intId2 = setInterval(add2, 1000);


setTimeout(_ => {
    // nutrukia veikimą
    clearInterval(intId1);
    clearInterval(intId2);
}, 10000);