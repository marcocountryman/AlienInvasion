
import Game from "./scripts/game.js"

document.addEventListener("DOMContentLoaded", function () {
    const canvasEl = document.getElementById('alien-canvas');
    const ctx = canvasEl.getContext('2d');
   
    // const civ = new Civilian([200,20],[40,50],'orange');
    // const alien = new Alien([200,80],[40,50],'pink');
    const newGame = new Game();
    const character = newGame.randomCharacter();
    character.draw(ctx);
    character.response(ctx);

   
});