function rand(min, max) { const minCeiled = Math.ceil(min); const maxFloored = Math.floor(max); return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) };
// 1. Parašykite funkciją, kuri atsitiktine tvarka grąžintų stringus: “Bebras”, “Barsukas” arba “Briedis”.
// Funkcijos grąžinamą rezultatą priskirkite kintamajam ir jį atspausdinkite konsolėje.

function atsitiktinisGyvunas() {
    const gyvunai = ["Bebras", "Barsukas", "Briedis"];
    const gyvunaiRandom = rand(0, gyvunai.length - 1);
    return gyvunai[gyvunaiRandom];
}
const gyvunas = atsitiktinisGyvunas();
console.log(gyvunas);


// 2. Html faile sukurkite button elementą ir tuščią H2 elementą.
// Padarykite taip, kad paspaudus mygtuką pasileistų pirmame uždavinyje sukurta funkcija, o funkcijos grąžinamas stringas su gyvunu atsirastų H2 elemente.
const button = document.getElementById('mygtukas');
const h2 = document.getElementById('gyvunas');

button.addEventListener('click', () => {
    const gyvunas = atsitiktinisGyvunas();
    h2.textContent = gyvunas;
});


// 3. Parašykite funkciją, kuri priima vieną argumentą- stringą ir grąžina tris pirmas to stringo raides.
// Jeigu stringas yra trumpesnis nei trys raidės- grąžina visas raides. Funkcijos grąžinamą rezultatą priskirkite kintamajam ir jį atspausdinkite konsolėje.
function firstThreeLetters(trys) {
    return trys.slice(0, 3);
}

const result = firstThreeLetters("Carbohydrate");
console.log(`The word is 'Carbohydrate'. First three letters: ${result}`);


// 4. Parašykite funkciją, kuri priima vieną argumentą- stringą ir grąžiną vidurinę raidę.
// Jeigu stringe yra porinis simbolių skaičius vietoj vidurinės raidės grąžina pranešimą: “Simbolių skaičius lyginis”.
// Konsoleje pademostruokite funkcijos veikimą su lyginius ir nelyginius simbolių kiekius turinčiais stringais.

const middleLetter = text => text.length % 2 === 0 ? "Simbolių skaičius lyginis" : text[Math.floor(text.length / 2)];

console.log(`Word is 'Dragon': ${middleLetter("Dragon")}`);
console.log(`Word is 'Subcompartmentalization': ${middleLetter("Subcompartmentalization")}`)


// 5. Parašykite funkciją, kuri priimtų tris argumentus.
// Du pirmieji argumentai skaičiai, o trečias matematinio veiksmo ženklas (“+”, “-”, “*”, “/”) kaip stringas.
// Funkcija turi atlikti atitinkamą veiksmą su duotais skaičiais ir grąžinti rezultatą.
// Pademonstruokite funkcijos veikimą, rezultatus spausdindami konsolėje.
const countingArguments = (a, b, count) => {
    if (count === '+') {
        return a + b;
    } else if (count === '-') {
        return a - b;
    } else if (count === '*') {
        return a * b;
    } else if (count === '/') {
        return a / b;
    } else {
        return "??? ka cia prirasei jau?";
    }
}
console.log(`2 + 6 = ${countingArguments(2, 6, '+')}`);
console.log(`2 - 6 = ${countingArguments(2, 6, '-')}`);
console.log(`2 * 6 = ${countingArguments(2, 6, '*')}`);
console.log(`2 / 6 = ${countingArguments(2, 6, '/')}`);
console.log(`2 += 6 = ${countingArguments(2, 6, '+=')}`);


// 6. Parašykite funkciją, kuri priimtų du argumentus. Abu argumentai skaičiai.
// Funkcija su skaičiais turi atlikti sumos ir sandaugos matematines operacijas ir argumentus
// bei abiejų operacijų rezultatus grąžintų objekto tipo kitamajame, turinčiame atitinkamas savybes:
// “pirmas”, “antras”, “suma”, “sandauga”. Funkcijos grąžinamą rezultatą priskirkite kintamajam ir jį atspausdinkite konsolėje.#object

const kebliFunkcija = (c, f) => ({
    pirmas: c,
    antras: f,
    suma: c + f,
    sandauga: c * f
});

const kebliosFunkcijosRez = kebliFunkcija(84, 2);
console.log(kebliosFunkcijosRez);


// 7. Naudodami Html ir CSS nupaišykite mėlyną kvadratą. Kvadratui uždėkite “click” įvykį, kuris paleistų funkciją, kuri kvadratą nudažytų raudonai.
// Paspaudus mygtuką antrą kartą, turi pasileisti ta pati funkcija, bet kvadratą vėl nudažytų mėlynai.
// Spaudinėjant ant kvadrato, kvadrato spalva turėtų pastoviai keistis iš mėlynos į raudoną ir iš raudonos vėl atgal į mėlyną.
const square = document.getElementById('square');

square.addEventListener('click', () => {
    // Tikriname dabartinę spalvą ir keičiame į priešingą
    if (square.style.backgroundColor === 'blue') {
        square.style.backgroundColor = 'red';
    } else {
        square.style.backgroundColor = 'blue';
    }
});


// 8. Html faile sukurkite button elementą su skaičiumi “0” elemento viduje.
// Parašykite funkciją, kuri pasileidinėtų spaudinėjant mygtuką ir kiekvienu paspaudimu didintų mygtuke esantį skaičių vienetu.
// Spaudinėjant mygtuką, jo viduje esantis skaičius turi pastoviai didėti: 0, 1, 2, 3…
const skaiciuMygtukas = document.getElementById('skaiciuMygtukas');

function didintiSkaiciu() {
    skaiciuMygtukas.textContent = Number(skaiciuMygtukas.textContent) + 1;
}
skaiciuMygtukas.onclick = didintiSkaiciu;


