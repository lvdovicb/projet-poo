
"use strict";

class Genius {
      constructor(name) {
        this.name = name;
        this.ego = 150;
      }

      insult(cible) {
        this.ego += 10;
        cible.ego -= 30;
        return - 20;
      }

      threaten(cible) {
        this.ego += 10;
        cible.ego -= 20;
        return - 10;
      }

      hug(cible) {
        alert("Gimme a hug, you adorable bastard !");
        this.ego += 20;
        cible.ego += 20;
        return + 20;
      }

      kiss(cible) {
        alert("We're silly ! Come here and give me a kiss silly boy")
        this.ego += 30;
        cible.ego += 30;
        return + 30;
      }

      bomb(cible) {
          alert("Nuclear Apocalypse. We're all dead");
          cible.ego = 0;
          this.ego = 0;
          return 0;
        }
}





