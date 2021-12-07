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
        return alien;
    }
    randomCivilian() {
        const randomPosition = Math.floor(Math.random() * POSITIONS.length)
        const civilian = new Civilian(POSITIONS[randomPosition], CHARACTER_SIZE);
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
    fillCharacters() {
        for (let i = 0; i < 15; i++) {
            let character = this.randomCharacter();
            if (character instanceof Alien) {
                this.aliens.push(character);
            } else {
                this.civilians.push(character)
            }
        }
        const characters = this.aliens.concat(this.civilians);
        for (let i = 0; i < 3; i++) {
            this.shuffle(characters);
        }
        return characters;
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
            // character.response(ctx);
            if (character.hitCheck()) {
                character.dead(ctx);
            }
        }
        setInterval(randomGeneration,2200);
       
    }
    //the purpose of this function is to clean out all the dead enemies
    //from the character array might need this later
    //tested and removes characters from array
    removeTheDead() {
        const characters = this.fillCharacters();
        
        for (let i = 0; i < characters.length; i++) {
            if (characters[i].status === 'dead') {
                characters.splice(i,1);
            }
        }
    }
    
    gameOver() {
        if (this.player.lives === 0) {
            this.gameover = true;
        }
    }
    start() {

    }
    // characterRun(ctx) {
    //     const characters = this.fillCharacters();

    //     characters.forEach(function(char) {
            
    //     })
    // }



}
//   canvasEl.addEventListener('click',(e) => {
//         const rect = canvasEl.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
//         if (char.hitCheck(x,y)) {
//             char.dead(ctx);
//             alert('hit')
//         }
//     });
export default Game;

// run through characters array if player is still alive after
// characters all run through then the player passes the round.