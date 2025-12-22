// 1 Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę rockAmount  kuri lygi 0.
// Parašyti šiai klasei metodus, pridedančius akmenis: addOne() addMultiple(kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu().
// Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.
class Kibiras1 {
    constructor() {
        this.rockAmount = 0;
    }
    addOne() {
        this.rockAmount++;
    }
    addMultiple(kiekis) {
        this.rockAmount += kiekis;
    }
    kiekPririnktaAkmenu() {
        console.log(`Kibire yra ${this.rockAmount} akmenys.`);
    }
}

const kibiras = new Kibiras1();

kibiras.addOne();
kibiras.addMultiple(40);

kibiras.kiekPririnktaAkmenu();


// 2 Sukurti klasę Pinigine.
// Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai.
// Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę.
// Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai.
// Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą.
// Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.

