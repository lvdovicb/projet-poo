
"use strict";


let peace = 100; 
//représentée par une barre de chargement en tetes de chatons

class Genius {
    constructor (name, ego){
      this.name = name;
      this.ego = 150;
    }

    threat(Genius){
      let randomThreat = threat[Math.floor(Math.random()*threat.length)];
      alert(randomThreat);
      ego = ego - 20;
      peace = peace - 10;
    }

    insult(Genius){
      let randomInsult = insult[Math.floor(Math.random()*insult.length)];
      alert(randomInsult);
      ego = ego - 30;
      peace = peace - 20;
    }

    hug(Genius){
      alert();
      ego = ego + 30;
      peace = peace + 30;
    }

    kiss(Genius){
      alert();
      ego = ego + 40
      peace = peace + 40;
    }

    bomb(Genius){
      if (peace === 0) {
      alert("Nuclear Apocalypse");
      }
    }
};

let donald = new Genius ("Donald");
let kim = new Genius ("Kim");
console.log(Genius);

