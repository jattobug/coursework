// 1. Suskaičiuoti kiek masyve yra lyginiu skaičių
// let numbers2 = [2, 7, 4, 9, 12, 15, 18];
// Parašyti funkciją, kuri gauna masyvą kaip argumentą ir grąžina kiek masyve yra lyginių skaičių.
// Rezultatas: 4
let numbers2 = [2, 7, 4, 9, 12, 15, 18];

const skaiciuojamLyginius = numbers2 => numbers2.filter(n => n % 2 === 0).length;
console.log(skaiciuojamLyginius(numbers2));


// 2. Pirkinių krepšelis
// Sukurkite funkciją, kuri priima masyvą (kaip argumentą) su prekių objektais:
let pirkiniuKrepselis = [
  { name: "Milk", price: 2.00, count: 2 },
  { name: "Bread", price: 1.20, count: 1 },
  { name: "Eggs", price: 3.00, count: 1 },
  { name: "Bacon", price: 3.50, count: 1 }
]
let krepselioSuma = pirkiniuKrepselis.reduce((suma, pirkinys) => {return suma + pirkinys.price * pirkinys.count}, 0);
console.log(krepselioSuma);
// Apskaičiuoti bendrą krepšelio kainą.
// Jeigu bendra suma > 10 €, taikyti 10% nuolaidą.
// Grąžinti galutinę sumą, suapvalintą iki 2 skaičių po kablelio
let suma = krepselioSuma;
 if (suma > 10) {
    suma = suma * 0.9;
  }
console.log(suma.toFixed(2));


// 3. Teigiamų skaičių suma
// Duotas masyvas:
// let numbers = [4, -2, 7, -1, 0, 5];
// Užduotis:
// Parašyti funkciją, kuri suskaičiuoja tik teigiamų skaičių sumą.
// Rezultatas: 4 + 7 + 5 = 16
let numbers = [4, -2, 7, -1, 0, 5];

let teigiamiSk = numbers.filter(function(number) {
    return number >= 0;
});
let neigiamiSk = numbers.filter(function(number) {
    return number < 0;
});

let suma1 = 0;
for (let i = 0; i < teigiamiSk.length; i++) {
    suma1 += teigiamiSk[i];
}
console.log(teigiamiSk);
console.log(suma1);


// 4. Atrinkti masyvo elementus, kurie ilgesni nei 4 raidės:
//let zodziai = ["labas", "rytas", "tu", "as", "programavimas", "trys"];
//Atspausdinti konsolėje ilgų žodžių masyvą
let zodziai = ["labas", "rytas", "tu", "as", "programavimas", "trys"];

let ilgiZodziai = zodziai.filter(function(zodis) {
    return zodis.length > 4;
});
console.log(ilgiZodziai);


// 5. Sugeneruoti (atspausdinti konsolėje) tekstą: 15-14-12-11-10-9-8
// (atkrepkit dėmesį kad nėra '13')
let spausdinam = "";
 
for (let i = 15; i > 7; i--) {
  if (i != 13) {
    spausdinam += i + "-";
  }
}
console.log(spausdinam.slice(0, -1));
 

//6.  Parašykite kodą, kuris suskaičiuos kiek kartų raidė 'a' arba 'A' pasikartoja duotame tekste.
// let tekstas  = 'Ar norėtum arbatos ar dar kavos.'
let tekstas  = 'Ar norėtum arbatos ar dar kavos.'

let kiekA = 0;

for (let i = 0; i < tekstas.length; i++) {
  if (tekstas[i] === 'a' || tekstas[i] === 'A') {
    kiekA++;
  }
}

console.log('Raidziu A tekste: ', kiekA);
console.clear();