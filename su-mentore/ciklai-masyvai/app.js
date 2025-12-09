function rand(min, max) { const minCeiled = Math.ceil(min); const maxFloored = Math.floor(max); return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) };


//ciklu formule
// for (let i = 0; i <= 5; i++) {
//     console.log("Labas rytas" +i);
// }


// 1. Spausdinti skaičius nuo 1 iki 5
// // Išveskite: 1 2 3 4 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log('2.');
// 2. Spausdinti skaičius nuo 5 iki 1
// // Išveskite: 5 4 3 2 1
for (let i = 5; i >= 1; i--) {
    console.log(i);
}




//formule 2
// for (let i = 10; i <= 100; i+=10) {
//     console.log(i);
// }

console.log('3.');
// 3. Spausdinti visus lyginius skaičius nuo 2 iki 10
// // Išveskite: 2 4 6 8 10
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

console.log('4.');
// 4. Spausdinti skaičių kvadratus nuo 1 iki 5
// // Išveskite: 1 4 9 16 25
for (let i = 1; i <= 5; i++) {
    console.log(i * i);
}

console.log('5.');
// 5. Sudėti skaičius nuo 1 iki 10
// // Išveskite sumą: 55
let sk = 0;
for (let i = 1; i <= 10; i++) {
    sk = sk + i;
}
console.log(sk);

// 6. Kartoti tekstą kelis kartus
// // Spausdinti "Labas!" 5 kartus
for (let i = 1; i <= 5; i++) {
    console.log("Labas!");
}

// 7. Atspausdinti skaičius nuo 1 iki 10, bet tik jei jie didesni už 5
// // Išveskite: 6 7 8 9 10
for (let i = 1; i <= 10; i++) {
    if (i > 5) {
        console.log(i);
    }
}
console.log('8.');
// 8. Atvirkštinis kvadratų spausdinimas
// // Išveskite: 25 16 9 4 1
for (let i = 5; i >= 1; i--) {
    console.log(i ** 2);
}
console.log('9.');
// 9. Sudėti tik lyginius skaičius nuo 1 iki 10
// // Išveskite sumą: 30
let suma = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        suma = suma + i;
    }

}
console.log(suma);


console.log('10.');
// 10. Spausdinti skaičių su žodžiu
// // Išveskite: "Skaičius 1", "Skaičius 2", ... iki 5
for (let i = 0; i <= 5; i++) {
    (i != 0 && i <= 5) ? console.log('Skaičius', i) : '';
}

console.log('-------');

for (let i = 1; i <= 5; i++) {
    console.log('Skaičius', i); // gali buti (`Skaičius ${i}`);
}




// for (deklaruojam i; sąlyga; didinam/mažinam i) {
//     kodas kurį vykdome
// } // kai žinom kiek kartų turim kartoti tą patį veiksmą

// while (sąlyga) {kodas, kurį vykdome kol sąlyga nėra true}
// kai nežinom kiek kartu turim kartoti tą patį veiksmą, bet žinom kokio rezultato mums reikia


// 1. Prie skaičiaus x pridėti po 5, kol skaičius pasieks bent 200
let x = 0;

while (x < 200) {
    x += 7;
    console.log(x);
}


// 2. Trigubinti skaičių, kol jis taps didesnis nei 5000
let x2 = 3;
while (x2 <= 5000) {
    x2 = x2 * 3;
    console.log(x2);
}


// 3. Iš skaičiaus x atimti po 7, kol skaičius taps neigiamas
let x3 = 50;
while (x3 >= 0) {
    x3 = x3 - 7
    console.log(x3)
}


// 4. Didinti skaičių 30%, kol jis viršys 1000
let x4 = 100;
while (x4 <= 1000) {
    //x4 = x4 + (x4*0.3);
    x4 = x4 * 1.3;
    console.log(x4.toFixed(2));
}


// 5. Dalinti skaičių x iš 2, kol jis taps mažesnis nei 1
let x5 = 200;
while (x5 >= 1) {
    x5 /= 2;
}
console.log(x5.toFixed(2));



// Emilija planuoja atostogas po 1 metų (12mėn). Šiam momentui kelionei pinigų neturi. 
// Kiekvieną mėn planuoja atsidėti (atsitiktinis skaičius) po 120 - 180 eur. 
// Paskaičiuoti kiek pinigų Emilija sutaupys po metų.
let EmilijosPinigai = 0;

for (let i = 1; i <= 12; i++) {
    let sutaupyta = rand(120, 180);
    EmilijosPinigai += sutaupyta;
    console.log(`Sutaupyta ${i} menesi - ${sutaupyta}. Sutaupyta is viso - ${EmilijosPinigai}`);
}


// Gabija nori važiuoti į kelionę už 2150 eur. Šiam momentui turi 320 eur
// Per mėn planuoja atidėti 120-180 eur (atsitiktinis skaičius).
// Paskaičiuoti per kiek mėn Gabija sutaupys kelionei.
let GabijosPinigai = 320;
let menSkaicius = 0;

while (GabijosPinigai < 2150) {
    let GabijaSutaupe = rand(120, 180);
    GabijosPinigai += GabijaSutaupe;
    menSkaicius++;
}
console.log(menSkaicius);
console.log(GabijosPinigai);


// 3 kartus is eiles ismesti ta pati skaicius (kauliukas)
let sisRidenimas;
let paskutinisRidenimas = 0;
let pirstas = 1;
let ridenimai = 0;

while (pirstas < 3) {
    sisRidenimas = rand(1, 6);
    console.log(sisRidenimas);
    ridenimai++;

    if (sisRidenimas === paskutinisRidenimas) {
        pirstas++;
    } else {
        pirstas = 1;
    }

    paskutinisRidenimas = sisRidenimas;
}
console.log(`Prireikė ${ridenimai} ridenimų.`);





console.clear()
 // 1. Sukurkite objektą apie žmogų 
// Sukurkite objektą zmogus su savybėmis: vardas, amzius, miestas.
// Atspausdinkite visus laukus konsolėje.
const zmogus = {
    vardas: 'Ana',
    amzius: 25,
    miestas: 'Vilnius',
}
console.log(zmogus.amzius);


// 2. Pakeiskite objekto savybę 
// Turite objektą:
// let masina = { marke: 'Audi', metai: 2010 };
// Pakeiskite metai į 2020 ir pridėkite naują savybę spalva.
// Atspausdinkite atnaujintą objektą.
let masina = {
    marke: 'Audi',
    metai: 2010
};
masina.metai = 2020;
masina.spalva = 'raudona';
console.log(masina);


// 3. Objekte esantis masyvas
// Sukurkite objektą studentas su savybėmis:
// vardas
// pazymiai (masyvas su 5 skaičiais)
// Atspausdinkite pirmą pažymį ir paskutinį pažymį.
const studentas = {
vardas: 'Andrius',
pazymiai: [4, 10, 6, 8, 5]
}
console.log(studentas.pazymiai[0]);
console.log(studentas.pazymiai[studentas.pazymiai.length-1]); // arba >>>>> console.log(studentas.pazymiai[4]);


// 4. Patikrinkite, ar savybė egzistuoja
// Turite objektą:
// let knyga = { pavadinimas: 'Haris Poteris', puslapiai: 500 };
// Patikrinkite, ar egzistuoja savybė autorius.
// Jei nėra — pridėkite su reikšme 'Nežinomas'.
 
let knyga = {
    pavadinimas: 'Haris Poteris',
    puslapiai: 500
};

if (!knyga.autorius) {
    knyga.autorius = 'Nežinomas';    // knyga.autorius ??= 'Nežinomas';
}
console.log(knyga.autorius);


// Masyvo elementų atvirkštinis išvedimas
// Turite masyvą:
// let gyvunai = ["šuo", "katė", "bebras"];
// Užduotis:
// Atspausdinkite masyvo elementus atvirkštine tvarka (bebras, katė, šuo).
  let gyvunai = ["šuo","katė", "bebras"];
  console.log(gyvunai);

  gyvunai.reverse();
  console.log(gyvunai);

