import Alien from "./alien.js";
import Civilian from "./civilian.js";
import Player from "./player.js";

const CHARACTER_SIZE = [100,200];
const POSITIONS = [[10,314],[600,400],[415,370],[215,390]];

/*
GAME LOGIC OVERVIEW. 15 LIMIT INTERVALS FOR LEVEL ONE, IN THE INTERVALS A RANDOM CHARACTER WILL BE GENERATED
AND THE PLAYER MUST SURVIVE THE ALIENS.
*/

class Game {
    
    constructor(canvasEl) {
        this.canvas = canvasEl;
        this.characters = [];
        this.fillCharacters();
        this.killCount = 0;
        this.lives = 3;
      
        // this.gameover = false;
        // this.aliens = [];
        // this.civilians = [];
        // this.player = player;
    }
    //THIS FUNCTION GENERATES A NEW ALIEN INSTANCE WITH RANDOM POSITION.
    randomAlien() {
        const randomPosition = Math.floor(Math.random() * POSITIONS.length)
        const alien = new Alien(POSITIONS[randomPosition], CHARACTER_SIZE, this);
        return alien;
    }
    //THIS FUNCTION GENERATES A NEW CIVILIAN INSTANCE WITH A RANDOM POSITION.
    randomCivilian() {
        const randomPosition = Math.floor(Math.random() * POSITIONS.length)
        const civilian = new Civilian(POSITIONS[randomPosition], CHARACTER_SIZE, this);
        return civilian;
    }
    //THIS FUNCTION WILL RANDOMLY CALL THE ABOVE TO FUNCTIONS AND GENERATE
    //A RANDOM CHARACTER (ALIEN OR CIVILIAN)
    randomCharacter() {
        const randomAlien = this.randomAlien();
        const randomCivilian = this.randomCivilian();
        const randomCall = [randomAlien,randomCivilian,randomAlien, randomAlien, randomAlien];
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
    //THIS FUNCTION IS OPERATIONAL...
    characterSequence(ctx) {
    
        let intCount = 0;

        const gameRun = function() {
            
            let randChar = this.randomCharacter();
            randChar.draw(ctx);
            
            const controller = new AbortController();
            
            intCount += 1

            if (intCount === 15) {
                alert('level clear');
                clearInterval(intervalId);
            }
            let that = this;
         
            this.canvas.addEventListener('click', (e) => {

                const rect = that.canvas.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                controller.abort();
                
                if (randChar.hitCheck(x,y)) {
                  
                    if (randChar instanceof Civilian) {
                        alert('game over')
                    }
                    randChar.dead(ctx);
                    that.killCount += 1;
                    that.upgradeKillCount()
                   
                } 

            },{ signal: controller.signal} );
            
        }.bind(this);

        var intervalId = setInterval(gameRun,2200);
      
    }
    upgradeKillCount() {
     
     const killEl = document.querySelector('#kills')
     killEl.innerText = `Aliens Blasted : ${this.killCount}`
    }
}

export default Game;
