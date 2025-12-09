function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
//rand funkcija ^^^^^^^^^^


// 1. h1
const h1 = document.querySelector('h1');
h1.innerText = 1;
// h2
const h2 = document.querySelector('h2');
h2.innerText = 2;
// h3
const h3 = document.querySelector('h3');
h3.innerText = 3;
// h4
const h4 = document.querySelector('h4');
h4.innerText = 4;


// 2. melynas keturkampis
let keturkampis = document.querySelectorAll("div")[0];
keturkampis.style.width = '50px';
keturkampis.style.height = '50px';
keturkampis.style.background = "blue";

// raudonas apskritimas
let apskritimas = document.querySelectorAll("div")[1];
apskritimas.style.width = '50px';
apskritimas.style.height = '50px';
apskritimas.style.background = "red";
apskritimas.style.borderRadius = "50%";


// 3. D;
// generate random nrs
const randNr1 = rand(0, 4);
const randNr2 = rand(0, 4);
// divide the nrs
const maxNr = Math.max(randNr1, randNr2);
const minNr = Math.min(randNr1, randNr2);
const print = maxNr / minNr;
// span ===> suteikia galimybę pritaikyti stilius/manipuliuoti konkrečiomis dokumento teksto dalimis
const go3 = document.querySelector('#go3');
const oneNrSpan = go3.querySelector('span');
const twoNrSpan = go3.querySelector('span + span');
const resultSpan = go3.querySelector('span + span + span');
// show on site
oneNrSpan.innerText = maxNr;
twoNrSpan.innerText = minNr;
resultSpan.innerText = print;


// 4.
//const randNr3 = rand(50, 200);
//const randNr4 = rand(50, 200);
//const randNr5 = rand(50, 200);
