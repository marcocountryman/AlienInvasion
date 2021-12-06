import Alien from "./alien.js";
import Civilian from "./civilian.js";
import Player from "./player.js";

const CHARACTER_SIZE = [100,200];
const POSITIONS = [[10,314],[600,400],[415,370],[215,390]];
//,[153,90],[80,94],[10,75]
//[[600,400],[415,370],[215,390]]
class Game {
    
    constructor(player) {
        this.aliens = [];
        this.civilians = [];
        this.player = player;
        this.gameover = false;
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
            // character.hitCheck()
        }
       setInterval(randomGeneration, 2000);
    }
    gameOver() {
        if (this.player.lives === 0) {
            this.gameover = true;
        }
    }
    
}
// const canvas = document.getElementById('alien-canvas');
//  canvas.addEventListener('click',(e) => {
//         const rect = canvasEl.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
//         alien.hitCheck(x,y)
// })
export default Game;