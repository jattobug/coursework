function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


let myVar1 = 54 + 2


//to show text on console only
console.log(myVar1);

//to show text on site and console
let myResultsDiv = document.querySelector('.my-results')
myResultsDiv.innerText = myVar1;
myResultsDiv.style.fontSize = '160px';


// font-size ===> fontSize, kintamasis negali tureti "-"
// 160px ===> '160px' be kabuciu butu kintamojo vardas/skaicius

let myH2 = document.querySelector('h2');
myH2.style.letterSpacing = '5px';

//parasyti js koda kuris antra h2 nuspalvina orange spalva
let myH22 = document.querySelector('h2 + h2');
myH22.style.color = 'orange';

//random nr shows up in console
let myFancyRandom = rand(5, 18);
console.log(myFancyRandom)

//
console.clear();

const A = 11;
const B = 5;

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(A / B);
console.log(A % B); // 5 + 5 + 1

console.log(9 % 2); // 2 + 2 + 2 + 2 + 1
console.log(7 % 4); // 4 + 3
console.log(8 % 4); // 4 + 4 + 0

console.log(0.2 + 0.4);

const S = 0.2 + 0.4;

myResultDiv.innerText = S.toFixed(2); // suformatavimas ir vertimas į stringą

let L = 1;
const C = 1;

L = 2;
// C = 2;

console.log(L, C);

/*
1 10 100 1000
2 4 8 16 32 64 128 256 512 1024 

*/

const myStr = '25';

const myNumb = parseInt(myStr); // stringą keičiame į skaičių

console.log(5 + myStr, 5 + myNumb);


let funNumber = 2;

funNumber++; // didinimas vienetu
funNumber++; // veiksmas tada didinimas

console.log(++funNumber); // kairėj padidinimas tada veiksmas

console.log(funNumber); // 5

const what = funNumber++ * ++funNumber; // 5 * (5 + 1 + 1)

console.log(what);





console.clear();


let bananas = 'bananas';

bananas++;

console.log(bananas, typeof bananas);

let daug = 5 / 0;

console.log(daug, typeof daug);


const animal1 = 'Bebras';
const action1 = 'eina namo';

const animal1InAction1 = animal1 + ' ' + action1; // suklijavimas

console.log(animal1InAction1);

myResultDiv.innerText = animal1InAction1;

console.log(animal1[3], animal1[0], animal1[52], typeof animal1[52]);

console.log(animal1.length, animal1InAction1.length);

const animal2 = 'Žąsinas';

console.log(animal2.length);

let kas;

console.log(kas);

// console.log(kur);