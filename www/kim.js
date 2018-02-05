"use strict";

class Kim extends Genius {
    constructor(name) {
      super(name);
      this.insults = ["Kim says : You're an old lunatic !", "Kim says : Fuck off dirty old man !", "Kim says : 더러운 늙은이 꺼져 버려!"];
      this.threats = ["Kim says : I've got a nuclear button on my desk", "Kim says : You're a hideous criminal sentenced to death by the Korean people", "Kim says : Reckless remarks by a dotard like you will never scare us or stop our advance !", "Kim says : All this makes us more sure that our choice to promote economic construction at the same time as building up our nuclear force is all the more righteous, and it pushes us to speed up the effort to complete our nuclear force."];
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




