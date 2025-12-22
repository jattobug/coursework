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
