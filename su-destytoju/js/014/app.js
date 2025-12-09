console.log('Veikia...');


// 1. Naudokime innerHTML

const section1 = document.querySelector('#nr1');

const divHtmlString = '<div class="circle1"></div>';

section1.innerHTML = divHtmlString;

const circle1 = document.querySelector('.circle1');

circle1.style.width = '100px';
circle1.style.height = '100px';
circle1.style.border = '1px solid white';
circle1.style.borderRadius = '50%';

// 2. Naudokime createElement

const section2 = document.querySelector('#nr2');

const divCircle = document.createElement('div');

divCircle.style.width = '100px';
divCircle.style.height = '100px';
divCircle.style.border = '1px solid white';
divCircle.style.borderRadius = '50%';

section2.appendChild(divCircle);

// 3. Naudokime innerHTML sudėtingam html

const section3 = document.querySelector('#nr3');

const Bebras = 'Bebras';
const Iguana = 'Iguana';

const fancyDiv = `
            <div class="fancy">
                <div class="fancy2">
                    <span>
                        <b>${Bebras}</b>
                        <i>${Iguana}</i>
                    </span>
                </div>
            </div>`;

section3.innerHTML = fancyDiv;


// rusiavimas su else-if'ais


// Objektai

const namas1 = {}; //naujas tuscias objektas

namas1.langai = 3;
namas1.durys = 'aukstos';
namas1.arGeras = true;

namas1.kambariai = {};

namas1.kambariai.virtuve = '10m2';
namas1.kambariai.miegamasis = '30m2';


const namas2 = {
    langai: 'mazi',
    durys: 'miniatiurines',
    salionas: '40m2'
};


//bebrai if else'ai
const b1 = {
    vardas: 'Jonas',
    metai: 20
};

const b2 = {
    vardas: 'Jonas',
    metai: 20
};

const b3 = b2;


if (b1 == b2) {
    console.log('Bebrai vienodi');
} else {
    console.log('Bebrai skirtingi');
}

b2.vardas = 'Petras';

console.log(b1, b2, b3);


const sk1 = 521;
const sk2 = sk1; // by value


if (5 > 10) {
    //nuo cia
    let rez = 'TAIP';
    //iki cia
}