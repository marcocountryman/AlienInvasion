import Alien from "./alien.js";
import Civilian from "./civilian.js";
import Player from "./player.js";

const CHARACTER_SIZE = [50,40];
const POSITIONS = [[50,20], [200,20], [50,80], [200,80]];

class Game {
    
    constructor() {
        this.aliens = [];
        this.civilians = [];
    }
    randomAlien() {
        const randomPosition = Math.floor(Math.random() * 4)
        const alien = new Alien(POSITIONS[randomPosition], CHARACTER_SIZE, "green");
        this.aliens.push(alien);
        return alien;
    }
    randomCivilian() {
        const randomPosition = Math.floor(Math.random() * 4)
        const civilian = new Civilian(POSITIONS[randomPosition], CHARACTER_SIZE, "orange");
        this.civilians.push(civilian);
        return civilian;
    }
    randomCharacter() {
        const randomAlien = this.randomAlien();
        const randomCivilian = this.randomCivilian();
        const randomCall = [randomAlien,randomCivilian,randomAlien, randomAlien];
        this.shuffle(randomCall)
        const pos = Math.floor(Math.random() * 3);
        return randomCall[pos]
    }
    shuffle(array) {
        for (let i = 0; i < array.length; i++) {
            let j = Math.floor(Math.random() * (i + 1));
            let holder = array[i];
            array[i] = array[j];
            array[j] = holder;
        }
        return array;
    }
    characterSequence(ctx) {
       setInterval(function(){ this.randomCharacter().draw(ctx) }, 3000);
    }
}

export default Game;