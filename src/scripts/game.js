import Alien from "./alien.js";
import Civilian from "./civilian.js";
import Player from "./player.js";

const CHARACTER_SIZE = [100,200];
const POSITIONS = [[10,314],[600,400],[415,370],[215,390]];

/*
GAME LOGIC OVERVIEW. FOR LEVEL ONE, A CHARACTER ARRAY FILLED WITH 15 CHARACTERS.
FOR THE PLAYER TO WIN, THEY MUST SURVIVE THE ITERATION OF ALL 15 CHARACTERS.
IF THE PLAYER GETS SHOT BY ALIENS 3 TIMES THEN THEY WILL LOSE THE GAME.
*/

class Game {
    
    constructor(canvasEl) {
        this.aliens = [];
        this.civilians = [];
        this.gameover = false;
        this.canvas = canvasEl;
        this.characters = [];
        this.fillCharacters()
        // this.player = player;
    }
    //THIS FUNCTION GENERATES A NEW ALIEN INSTANCE WITH RANDOM POSITION.
    randomAlien() {
        const randomPosition = Math.floor(Math.random() * POSITIONS.length)
        const alien = new Alien(POSITIONS[randomPosition], CHARACTER_SIZE);
        return alien;
    }
    //THIS FUNCTION GENERATES A NEW CIVILIAN INSTANCE WITH A RANDOM POSITION.
    randomCivilian() {
        const randomPosition = Math.floor(Math.random() * POSITIONS.length)
        const civilian = new Civilian(POSITIONS[randomPosition], CHARACTER_SIZE);
        return civilian;
    }
    //THIS FUNCTION WILL RANDOMLY CALL THE ABOVE TO FUNCTIONS AND GENERATE
    //A RANDOM CHARACTER (ALIEN OR CIVILIAN)
    randomCharacter() {
        const randomAlien = this.randomAlien();
        const randomCivilian = this.randomCivilian();
        const randomCall = [randomAlien,randomCivilian,randomAlien, randomAlien];
        this.shuffle(randomCall)
        const pos = Math.floor(Math.random() * 3);
        return randomCall[pos]
    }
    //THIS FUNCTION FILLS THE CHARACTER ARRAY WITH FIFTEEN RANDOM CHARACTERS
    fillCharacters() {
        for (let i = 0; i < 15; i++) {
            let character = this.randomCharacter();
            this.characters.push(character);
        }
    }
    //THIS FUNCTION WAS MADE TO SHUFFLE ARRAYS FOR INCREASED RANDOMNESS
    shuffle(array) {
        for (let i = 0; i < array.length; i++) {
            let j = Math.floor(Math.random() * (i + 1));
            let holder = array[i];
            array[i] = array[j];
            array[j] = holder;
        }
        return array;
    }
    //THIS IS A TEST FUNCTION NOT WORK THE WAY I INTEND AT THE MOMENT.
    characterSequence(ctx) {
        const boundedRandom = this.randomCharacter.bind(this);
        const randomGeneration = function() {
        const character = boundedRandom();
            character.draw(ctx);
  
            if (character.hitCheck()) {
                character.dead(ctx);
            }
        }
        setInterval(randomGeneration,2200);
       
    }
    
    //THIS FUNCTION WILL REMOVE DEAD ENEMIES FROM THE CHARACTER ARRAY.
    removeTheDead() { 
        for (let i = 0; i < this.characters.length; i++) {
            if (this.characters[i].status === 'dead') {
                this.characters.splice(i,1);
            }
        }
    }
    
    
    gameOver() {
        if (this.player.lives === 0) {
            this.gameover = true;
        }
    }
    characterRun(ctx) {

        this.removeTheDead();

        const randNum = Math.floor(Math.random() * this.characters.length);
        const randChar = this.characters[randNum];
        const that = this;


        this.canvas.addEventListener('click',(e) => {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

            if (randChar.hitCheck(x,y)) {
                randChar.dead(ctx);
                console.log('hit');
            } else {
                console.log('miss');
            }
            // console.log(this.characters);
        });

            setTimeout(function() {
                randChar.draw(ctx);
                that.characterRun(ctx);
            },3000)

    }



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
