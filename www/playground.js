
 
    // prompt("Qui voulez-vous être ? Donald ou Kim ?");


class Playground {
    constructor () {
        this.player1 = new Kim("Kim");
        this.player2 = new Donald("Donald");
        this.peace = 100;
    }

    turn() {
        if (this.ego <= 0 || cible.ego <= 0 || peace <= 0) {
            bomb(cible) //je peux enlever la cible ?
            alert("Nuclear Apocalypse. We're all dead");
            cible.ego = 0;
            this.ego = 0;
            return peace = 0;
        }
    }
}