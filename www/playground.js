
"use strict";


class Playground {
    constructor (player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPl = this.player1;
        this.targetPl = this.player2;
        this.peace = 100;
    }

    turn() {
        if (this.player1.ego <= 0 || this.player2.ego <= 0 || this.peace <= 0) {
            this.player1.bomb(this.player2)
            alert("Earth over. We're all dead. It's very sad");
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

    setPlayer1(){
        this.player1 = new Kim("Kim");
        this.player2 = new Donald("Donald");
        this.currentPl = this.player1;
        this.targetPl = this.player2;
    }

    setPlayer2(){
        this.player1 = new Donald("Donald");
        this.player2 = new Kim("Kim");
        this.currentPl = this.player1;
        this.targetPl = this.player2;
        
    }
}
