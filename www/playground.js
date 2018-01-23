
"use strict";


class Playground {
    constructor () {
        this.player1 = new Kim("Kim", this);
        this.player2 = new Donald("Donald", this);
        this.currentPl = this.player1;
        this.targetPl = this.player2;
        this.peace = 100;
    }

    turn() {
        if (this.player1.ego <= 0 || this.player2.ego <= 0 || this.peace <= 0) {
            this.player1.bomb(this.player2) //je peux enlever la cible ?
            alert("Earth over");
            // this.player1.ego = 0;
            // this.player2.ego = 0;
            // return peace = 0;
        
        } else { 
            let buffer = this.currentPl;
            this.currentPl = this.targetPl;
            this.targetPl = buffer;
        }
    }

    action(bloup){
        this.peace += this.currentPl[bloup](this.targetPl);
        this.turn()
    }

    

}
