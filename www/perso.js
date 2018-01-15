
"use strict";

class genius {
      constructor (name, threat, insult, hug, kiss, bomb){
        this.name = name;
        this.ego = 150;
      }

      threat(cible){
        let randomThreat = threat[Math.floor(Math.random()*threat.length)];
        alert(randomThreat); //dans le modele ou dans la vue ?
        cible.ego = ego - 20;
        peace = peace - 10;
      }

      insult(cible){
        let randomInsult = insult[Math.floor(Math.random()*insult.length)];
        alert(randomInsult); // à mettre où ? dans le Modèle ou dans la vue ?
        cible.ego = ego - 30;
        peace = peace - 20;
      }

      hug(genius, cible){
        ego = ego + 15;
        cible.ego = ego + 15;
        peace = peace + 15;
      }

      kiss(genius, cible){
        ego = ego + 30;
        cible.ego = ego + 30;
        peace = peace + 30;
      }

      attack(cible){  
      if (ego = 0) {
          alert("Nuclear Apocalypse");
          ego = 0;
          cible.ego = 0;
          peace = 0;
          }
        }
      };

let donald = new genius ("Donald");
let kim = new genius ("Kim");


kim.randomInsult = ["You're an old lunatic !", "Fuck off dirty old man !"];

kim.randomThreat = ["I've got a nuclear button on my desk", "You're a hideous criminal sentenced to death by the Korean people", "Reckless remarks by a dotard like you will never scare us or stop our advance", "All this makes us more sure that our choice to promote economic construction at the same time as building up our nuclear force is all the more righteous, and it pushes us to speed up the effort to complete our nuclear force."];

donald.randomInsult = ["I would NEVER call you ‘short and fat’!", "You're a cruel dictator !", 'Rocket Man !', "You're a sick puppy"];

donald.randomThreat = ["I've got a bigger button, and it works !", "The weapons you are acquiring are not making you safer, they are putting your regime in grave danger", "Our capabilities are much bigger and more powerful", "Military solutions are now fully in place,locked and loaded, should North Korea act unwisely", "I will unleash fire, fury and frankly power, the likes of which this world has never seen before."];


