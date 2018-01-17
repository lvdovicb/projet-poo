
"use strict";

class Genius {
      constructor (name){
        this.name = name;
        this.ego = 150;
      }

      threat(cible){
        let randomThreat = threats[Math.floor(Math.random()*threats.length)];
        alert(randomThreat); //dans le modele ou dans la vue ?
        this.ego = ego += 10;
        cible.ego = ego - 20;
        return peace -10;
      }

      insult(cible){
        let randomInsult = insults[Math.floor(Math.random()*insults.length)];
        alert(randomInsult); // à mettre où ? dans le Modèle ou dans la vue ?
        this.ego = ego + 10;
        cible.ego = ego - 30;
        peace = peace - 20;
      }

      hug(cible){
        alert("Gimme a hug, you adorable bastard !");
        this.ego = ego + 20;
        cible.ego = ego + 20;
        peace = peace + 20;
      }

      kiss(cible){
        alert("We were silly ! Come here and give me a kiss silly boy")
        this.ego = ego + 30;
        cible.ego = ego + 30;
        peace = peace + 30;
      }

      bomb(cible){  
      if (ego <= 0 || peace <= 0) {
          alert("Nuclear Apocalypse");
          cible.ego = 0;
          this.ego = 0;
          peace = 0;
        }
    }
};





