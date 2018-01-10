
"use strict";


let peace = 100; 
//représentée par une barre de chargement en chatons

class Idiot {
    constructor (name, ego){
      this.name = name;
      this.ego = ego;
      this.threat = [];
      this.insult = ["My rocket is bigger than yours", "I would never call you 'short and fat'", ];
    }

    threat(idiot){
      let randomThreat = threat[Math.floor(Math.random()*threat.length)];
      alert(randomThreat);
      ego = ego - 20;
      peace = peace - 10;
    }

    insult(idiot){
      let randomInsult = insult[Math.floor(Math.random()*insult.length)];
      alert(randomInsult);
      ego = ego - 30;
      peace = peace - 20;
      console.log(Donald);
    }

    hug(idiot){
      alert();
      ego = ego + 30;
      peace = peace + 30;
    }

    kiss(idiot){
      alert();
      ego = ego + 40
      peace = peace + 40;
    }

    bomb(idiot){
      if (peace === 0) {
      alert("Nuclear Apocalypse");
      }
    }
};

let donald = new Idiot ("Donald", 150);
let kim = new Idiot ("Kim", 150);
console.log(Idiot);

