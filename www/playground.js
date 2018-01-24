
"use strict";


class Playground {
    constructor (player1 = new Kim("Kim")) {
        this.player1 = new Kim("Kim");
        this.player2 = new Donald("Donald");
        this.currentPl = this.player1;
        this.targetPl = this.player2;
        this.peace = 100;
    }

    turn() {
        if (this.player1.ego <= 0 || this.player2.ego <= 0 || this.peace <= 0) {
            this.player1.bomb(this.player2) //je peux enlever la cible ?
            alert("Earth over. We're all dead");
            // this.player1.ego = 0;
            // this.player2.ego = 0;
            return this.peace = 0;
        
        } else { 
            let buffer = this.currentPl;
            this.currentPl = this.targetPl;
            this.targetPl = buffer;
        }
        if (this.peace >= 200) {
            alert("Love has won ! You saved the planet from a nuclear apocalypse");
        }
    }

    action(bloup){
        this.peace += this.currentPl[bloup](this.targetPl);
        this.turn()
    }

}
