import View from "./scripts/view.js"
import Game from "./scripts/game.js"

document.addEventListener("DOMContentLoaded", function () {
    const canvasEl = document.getElementById('alien-canvas');
    const ctx = canvasEl.getContext('2d');
    
    const newGame = new Game(canvasEl);

    // newGame.characterRun(ctx);

    // newGame.characterSequence(ctx);

    
    
    
    // const gameView = new View(newGame,ctx,canvasEl);
    // gameView.start()
    
    
    const char = newGame.randomCharacter();
    char.draw(ctx);
    




    //THE FUNCTION BELOW IS IMPORTANT DO NOT DELETE IT IS WORKING
    //AND DETECTING THE HITS

    canvasEl.addEventListener('click',(e) => {
        const rect = canvasEl.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (char.hitCheck(x,y)) {
            char.dead(ctx);
            console.log('hit');
        } else{
            console.log('miss');
        }
    });
 
});
// document.addEventListener('click', function(e) {
//        console.log(e.clientX, e.clientY);
// })