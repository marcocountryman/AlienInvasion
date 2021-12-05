import Alien from "./alien.js"

class Game {
    
    constructor() {
        this.aliens = [];
    }
    randomAlien() {
        const positions = [[50,20], [200,20], [50,80], [200,80]];
        const randomPosition = Math.floor(Math.random() * 4)
        const alien = new Alien(randomPosition, [40,50], "pink");
        return alien;
    }
}

export default Game;