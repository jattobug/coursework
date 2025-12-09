function rand(min, max) { const minCeiled = Math.ceil(min); const maxFloored = Math.floor(max); return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) };

// 1. Naršyklėje įdėkite 14 h1 tagų su skaičiumi 4 ir 14 h4 tagų su skaičiumi 1. Visi tagai turi rikiuotis į vieną eilutę.
const pirmaUzd = document.getElementById('pirmaUzd');

for (let i=0; i<14; i++) {
    const h1 = document.createElement('h1');
    h1.textContent = 4;
    pirmaUzd.appendChild(h1);

}

for (let i=0; i<14; i++) {
    const h4 = document.createElement('h4');
    h4.textContent = 1;
    pirmaUzd.appendChild(h4);

}


// 2. Naudodamiesi funkcija rand() naršyklėje eilute (tarp skaičių turi būti tarpai) surašykite 44 atsitiktinius skaičius nuo 14 iki 44.
// Skaičius, kurie iš 4 dalinasi be liekanos nuspalvinkite raudonai, o kitus mėlynai.
const randomNumbers = document.getElementById('randomNum');
let eilute = "";

for (let i = 0; i < 44; i++) {
    const skaicius = rand(14, 44);
   
};

