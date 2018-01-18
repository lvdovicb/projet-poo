
"use strict";

class Genius {
      constructor(name) {
        this.name = name;
        this.ego = 150;
      }

      insult(cible, playground) {
        this.ego += 10;
        cible.ego -= 30;
        playground.peace -= 20;
      }

      threaten(cible) {
        this.ego += 10;
        cible.ego -= 20;
        return peace -= 10;
      }

      hug(cible) {
        alert("Gimme a hug, you adorable bastard !");
        this.ego += 20;
        cible.ego += 20;
        return peace += 20;
      }

      kiss(cible) {
        alert("We're silly ! Come here and give me a kiss silly boy")
        this.ego += 30;
        cible.ego += 30;
        return peace += 30;
      }

      bomb(cible) {
          alert("Nuclear Apocalypse. We're all dead");
          cible.ego = 0;
          this.ego = 0;
          return peace = 0;
        }
      }
    //   if (this.ego <= 0 || cible.ego <= 0 || peace <= 0) {
    //     alert("Nuclear Apocalypse");
    //     cible.ego = 0;
    //     this.ego = 0;
    //     // return peace = 0;
    // }





