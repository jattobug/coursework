// 1 Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę rockAmount  kuri lygi 0.
// Parašyti šiai klasei metodus, pridedančius akmenis: addOne() addMultiple(kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu().
// Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.




 //class Kibiras1 {
 //    constructor() {
 //        this.rockAmount = 0;
 //    }
 //    addOne() {
 //        this.rockAmount++;
 //    }
 //    addMultiple(kiekis) {
 //        this.rockAmount += kiekis;
 //    }
 //    kiekPririnktaAkmenu() {
 //        console.log(`Kibire yra ${this.rockAmount} akmenys.`);
 //    }
 //}
 //
 //const kibiras = new Kibiras1();
 //
 //kibiras.addOne();
 //kibiras.addMultiple(40);
 //
 //kibiras.kiekPririnktaAkmenu();






 console.log('Kibiras 1');

class Kibiras1 {

    constructor() {
        this.akmenuKiekis = 0; // objekto savybės prasideda this.
    }

    prideti1Akmeni() {
        this.akmenuKiekis++; // kiekis padidinamas vienetu
        // this.akmenuKiekis = this.akmenuKiekis + 1;
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis; // kiekis padidinamas "kiekiu"
    }

    kiekPririnktaAkmenu() {
        console.log('Pririnkta: ' + this.akmenuKiekis + ' akmenai');
    }

}

const K1 = new Kibiras1();
const K2 = new Kibiras1();

K1.prideti1Akmeni();
K1.prideti1Akmeni();

K2.prideti1Akmeni();
K2.pridetiDaugAkmenu(8);
K2.prideti1Akmeni();

K1.kiekPririnktaAkmenu();
K2.kiekPririnktaAkmenu();