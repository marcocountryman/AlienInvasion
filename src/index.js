import View from "./scripts/view.js"
import Game from "./scripts/game.js"

document.addEventListener("DOMContentLoaded", function () {
    const canvasEl = document.getElementById('alien-canvas');
    const ctx = canvasEl.getContext('2d');
    const newGame = new Game();

    // newGame.characterRun(ctx);
    // const alien = newGame.randomAlien();
    // let chars = newGame.fillCharacters();
    // newGame.characterSequence(ctx);
    // const char = newGame.randomCharacter()
    // char.draw(ctx);
    // alien.draw(ctx);
    
    // const gameView = new View(newGame,ctx,canvasEl);
    // gameView.start()

   




    //THE FUNCTION BELOW IS IMPORTANT DO NOT DELETE IT IS WORKING
    //AND DETECTING THE HITS

    canvasEl.addEventListener('click',(e) => {
        const rect = canvasEl.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (char.hitCheck(x,y)) {
            char.dead(ctx);
            alert('hit')
        }
    });
 
});
// document.addEventListener('click', function(e) {
//        console.log(e.clientX, e.clientY);
// })