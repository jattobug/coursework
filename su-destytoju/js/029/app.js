console.log('Vietinis Podėlis app.js is loaded.');

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const manoSkaicius = rand(1, 10);
console.log(`Sugeneruotas skaicius: ${manoSkaicius}`);
// localStorage.setItem('skaicius', manoSkaicius); // padedu skaičių į storage

const gautasSkaicius = localStorage.getItem('skaicius');
console.log(`Gautas skaicius: ${gautasSkaicius}`);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// local storage galime saugoti tik strings



const bebras = {
    name: 'bebras',
    age: 11
};
localStorage.setItem('animal', bebras); // ===> [object Object] "suplotas objektas" atsiranda kai objektas yra verčiamas į stringą
// jei noriu gauti bebra, reikia rasyti .getItem


const bebrasStringas = JSON.stringify(bebras); // prieš įrašant objekta i local storage, ji verčiame į json
localStorage.setItem('animal2', bebrasStringas); // užsaugojam

const gautasBebras = localStorage.getItem('animal2'); // gaunam atgal užsaugotą json

const bebroObjektas = JSON.parse(gautasBebras); // iš json vėl gauname objektą

console.log(bebroObjektas.name); // naudojam
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




// su mygtuku 
const nr1 = document.querySelector('#nr1');

nr1.addEventListener('click', _ => {
    localStorage.setItem('skaicius', manoSkaicius);
});


// "mano_skaiciai" dedam 

// informacijos vizualus atvaizdavimas vadinamas renderinimu

const renderList = _ => {
    const ol = document.querySelector('ol');
    ol.innerHTML = ''; // išvalau ol elementą kad būtų tuščias ir galėčiau dėti viską iš naujo.
    daugSkaiciu.forEach(sk => {
        const li = document.createElement('li');
        li.innerText = sk;
        ol.appendChild(li);
    });
}



let daugSkaiciu;
daugSkaiciu = localStorage.getItem('mano_skaiciai'); // bandom paimti skaičius iš local storage

if (null === daugSkaiciu) {
    // jeigu local storage neturi tokio įrašo (pradžia)
    daugSkaiciu = []; // jeigu nėra, tai padarau tuščią masyvą
} else {
    daugSkaiciu = JSON.parse(daugSkaiciu); // tai ką radau, paverčiu į objektą
}

const nr2 = document.querySelector('#nr2');

nr2.addEventListener('click', _ => {
    daugSkaiciu.push(manoSkaicius); // pridedu į sąrašą
    const daugSkaiciuStrigas = JSON.stringify(daugSkaiciu); // paverčiu stringu
    localStorage.setItem('mano_skaiciai', daugSkaiciuStrigas);
    renderList(); // šitas renderina kiekvieną kartą paspaudus mygtuką
});

// console.log(daugSkaiciu);

renderList(); // šitas renderina pradžioje refrešinus puslapį


/*
    N.D.
    Yra trys mygtukai: Žalias, mėlynas ir raudonas. Paspaudus vieną iš mygtukų jo spalva įsirašo
    į localStorage. Kiekvienas mygtuko paspaudimas prideda savo spalvą prie sąrašo.
    Sąrašo spalvos atvaizduojamos html spalvotų (atitinkamai išsaugotai spalvai) kvadratukų pavidale.
    Sąrašas atsinaujina dinamiškai 

*/
const GreenButton = document.querySelector('#Green'); //is html
const BlueButton = document.querySelector('#Blue');
const RedButton = document.querySelector('#Red');

let colours = localStorage.getItem('colours');

if (colours === null) {
    colours = []; //if empty
} else {
    colours = JSON.parse(colours); //if full, stringas > masyvas
}

const renderColours = () => {
    const list = document.querySelector('#colourList'); //is html
    list.innerHTML = ''; //jei sito nera, pradeda dubliuotis

    colours.forEach(spalvos => {
        const spalvotaDezute = document.createElement('div'); //sukuria div dezutem
        spalvotaDezute.className = 'colorList'; // is html pereina i css, kad pasiimtu stiliu
        spalvotaDezute.style.backgroundColor = spalvos;
        list.appendChild(spalvotaDezute);
    });
};

const addColour = colour => {
    colours.push(colour);
    localStorage.setItem('colours', JSON.stringify(colours));
    renderColours();
};

GreenButton.addEventListener('click', () => addColour('lightgreen'));
BlueButton.addEventListener('click', () => addColour('lightblue'));
RedButton.addEventListener('click', () => addColour('lightcoral'));

renderColours();



// CRUD



