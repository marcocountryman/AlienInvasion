
import Game from "./scripts/game.js"

document.addEventListener("DOMContentLoaded", function () {
    const canvasEl = document.getElementById('alien-canvas');
    const ctx = canvasEl.getContext('2d');
   

    const newGame = new Game();
    newGame.characterSequence(ctx);
    const char = newGame.randomCharacter();
    // char.draw(ctx);
    // ctx.clearRect(0,0,800,600)

});