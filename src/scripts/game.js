import Alien from "./alien.js";
import Civilian from "./civilian.js";
import Player from "./player.js";

const CHARACTER_SIZE = [40,50];
const POSITIONS = [[235,100],[153,90],[80,94],[10,75]];

class Game {
    
    constructor() {
        this.aliens = [];
        this.civilians = [];
    }
    randomAlien() {
        const randomPosition = Math.floor(Math.random() * POSITIONS.length)
        const alien = new Alien(POSITIONS[randomPosition], CHARACTER_SIZE);
        this.aliens.push(alien);
        return alien;
    }
    randomCivilian() {
        const randomPosition = Math.floor(Math.random() * POSITIONS.length)
        const civilian = new Civilian(POSITIONS[randomPosition], CHARACTER_SIZE);
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
        const boundedRandom = this.randomCharacter.bind(this);
        const randomGeneration = function() {
            const character = boundedRandom();
            character.draw(ctx);
            character.response(ctx);
        }
       setInterval(randomGeneration, 2000);
    }
    
}

export default Game;