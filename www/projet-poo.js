
"use strict";


let peace = 100; 
//représentée par une barre de chargement en tetes de chatons

class Genius {
    constructor (name, threat, insult, hug, kiss, bomb){
      this.name = name;
      this.ego = 150;
    }

    threat(cible){
      let randomThreat = threat[Math.floor(Math.random()*threat.length)];
      alert(randomThreat);
      cible.ego = ego - 20;
      peace = peace - 10;
    }

    insult(cible){
      let randomInsult = insult[Math.floor(Math.random()*insult.length)];
      alert(randomInsult);
      cible.ego = ego - 30;
      peace = peace - 20;
    }

    hug(cible){
      ego = ego + 15;
      cible.ego = ego + 15;
      peace = peace + 15;
    }

    kiss(cible){
      ego = ego + 30;
      cible.ego = ego + 30;
      peace = peace + 30;
    }

    bomb(cible){
      if (peace === 0) {
      alert("Nuclear Apocalypse");
      }
    }
};

let donald = new Genius ("Donald");
let kim = new Genius ("Kim");


