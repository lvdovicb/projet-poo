"use strict";

class Donald extends Genius {
    constructor(name) {
      super(name);
      this.insults = ["I would NEVER call you ‘short and fat’!", "You're a cruel dictator !", "Rocket Man !", "You're a sick puppy"];
      this.threats = ["I've got a bigger button, and it works !", "The weapons you are acquiring are not making you safer, they are putting your regime in grave danger", "Our capabilities are much bigger and more powerful", "Military solutions are now fully in place,locked and loaded, should North Korea act unwisely", "I will unleash fire, fury and frankly power, the likes of which this world has never seen before"];
    }

    insult(player1) {      
      let randomInsult = this.insults[Math.floor(Math.random() * this.insults.length)];
      alert(randomInsult);
      return super.insult(player1);
      
    }

    threaten(player1) {         
      let randomThreat = this.threats[Math.floor(Math.random() * this.threats.length)];
      alert(randomThreat);
      return super.threaten(player1);   
    }
}



