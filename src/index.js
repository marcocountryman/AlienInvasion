import View from "./scripts/view.js"
import Game from "./scripts/game.js"

document.addEventListener("DOMContentLoaded", function () {

    const canvasEl = document.getElementById('alien-canvas');
    const ctx = canvasEl.getContext('2d');
    const newGame = new Game(canvasEl);
    const gameView = new View(newGame,ctx,canvasEl);

    gameView.start();
    
    

});
