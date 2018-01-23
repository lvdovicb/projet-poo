"use strict";

class Kim extends Genius {
    constructor(name) {
      super(name);
      this.insults = ["You're an old lunatic !", "Fuck off dirty old man !", "더러운 늙은이 꺼져 버려!"];
      this.threats = ["I've got a nuclear button on my desk", "You're a hideous criminal sentenced to death by the Korean people", "Reckless remarks by a dotard like you will never scare us or stop our advance", "All this makes us more sure that our choice to promote economic construction at the same time as building up our nuclear force is all the more righteous, and it pushes us to speed up the effort to complete our nuclear force."];
    }

    insult(player2) {
      let randomInsult = this.insults[Math.floor(Math.random() * this.insults.length)];
      alert(randomInsult);
      return super.insult(player2);      
    }

    threaten(player2) {
      let randomThreat = this.threats[Math.floor(Math.random() * this.threats.length)];
      alert(randomThreat);
      return super.threaten(player2);   
    }
}




