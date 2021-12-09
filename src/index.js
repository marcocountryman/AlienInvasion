import View from "./scripts/view.js"
import Game from "./scripts/game.js"

document.addEventListener("DOMContentLoaded", function () {

    const canvasEl = document.getElementById('alien-canvas');
    const ctx = canvasEl.getContext('2d');
    const newGame = new Game(canvasEl);
    const gameView = new View(newGame,ctx,canvasEl);

    const initiateButton = document.querySelector("#initiate");
    const musicController = document.querySelector('#music')
    var backgroundMusic = new Audio('sound/music.mp3');
    var laserSound = new Audio('sound/lasergun.mp3');
    
    initiateButton.addEventListener('click', (e) => {
        gameView.start()
        backgroundMusic.play();
    });
    musicController.addEventListener('click',(e) => {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
        } else {
            backgroundMusic.pause();
        }
    });
    document.addEventListener('click', (e) => {
        laserSound.play();
    });
  
});



// Background Music:
// https://mixkit.co/free-stock-music/hip-hop/
// Artist Arulo
// Non-License: (Public Domain)
