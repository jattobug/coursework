console.log('fun,fun,fun..')
function rand(min, max) { const minCeiled = Math.ceil(min); const maxFloored = Math.floor(max); return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)};


// 0.Kintamajam priskirti atsitiktinę reikšmę nuo 10 iki 99 ir tą reikšmę atspausdinti konsolėje.
const Sk0 = rand(10, 99);
console.log(Sk0);



// 1. Sugeneruoti atsitiktinę reikšmę nuo 10 iki 99. Jeigu ta reikšmė maženė už 50 kitamajam
// animal priskirti reikšmę 'Bebras'. Kitu atveju priskriri reikšmę 'Barsukas'. Atsitiktinę
// reikšmę ir animal kintamąjį atspausdinti konsolėje
const atsitiktinis = rand(10, 99);
let animal; //sitas bus KEICIAMAS veliau, todel naudojame 'let'

    if (atsitiktinis < 50) {
        animal = 'Bebras';
    } else {
         animal = 'Barsukas';
    }
console.log(atsitiktinis, animal);



 // 2. Parašyti funkciją, kuri SPAUSDINA atsitiktinį skaičių nuo 1 iki 5;
function Sk1() {
    console.log(rand(1, 5));
}

Sk1() //deklaracija!!



// 3. Parašyti funkciją, kuri GRĄŽINA atsitiktinį skaičių nuo 1 iki 5. Grąžintą skaičių reikia priskirti
// kintamąjam skaicius15. Kintamąjį skaicius15 padauginti iš 5 ir gautą rezultatą atspausdinti konsolėje

function Sk2() {
    return(rand(1, 5));
}

let skaicius15 = Sk2();
console.log(skaicius15, skaicius15 * 5);



// 4. Parašyti funkciją kuri GRĄŽINA stringą 'Puiki diena'. Gautą stringą priskirti kintamąjam
// tą kintamąjį atspausdinti
function day() {
    return goodDay;
}
let goodDay = 'Puiki diena';
console.log(goodDay);



// destytojo versija
function day() {
    return 'Puiki diena';
}
const whatDay = day();
console.log(whatDay);



// 5. Parašyti funkciją kuri GRĄŽINA atsitiktine tvarka arba stringą 'A' arba 'B'
// Gautą grąžintą stringą priskirti kintamajam raide. Kintamąjį atspausdinti
function aB() {
    const r = rand(0, 1);
    if (r) {
        return 'A';
    }
    return 'B';
}

const raide = aB();
console.log(raide);



// 6. Parašyti funkciją kuriai duodate bet kokį stringą, o ji grąžina pirmą stringo raidę.
// Pademonstruoti veikimą konsolėje


const letter = function(word) {
    return word[0];
}

console.log(letter('Bebras'));
console.log(letter('Zebras'));



// 7. Parašyti funkciją kuriai duodate bet kokį stringą, o ji grąžina paskutine stringo raidę.
// Pademonstruoti veikimą konsolėje

const raides = function(zodis) {
    return zodis[zodis.length - 1];
}

console.log(raides('Bebras'));
console.log(raides('Kedė'));



console.clear();
// 8. Parašyti funkciją kuri konsolėje spausdina 'Labas'
// Funkcija turi pasileisti paspaudus mygtuką html faile (html faile reikia sukurti tokį mygtuką)
const showHello = function() {
    console.log('Labas');
}

const button = document.querySelector('button');

button.addEventListener('click', showHello);