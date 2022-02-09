import View from "./scripts/view.js"
import Game from "./scripts/game.js"

document.addEventListener("DOMContentLoaded", function () {

    const canvasEl = document.getElementById('alien-canvas');
    const ctx = canvasEl.getContext('2d');
    const newGame = new Game(canvasEl);
    const gameView = new View(newGame,ctx,canvasEl);
    const initiateButton = document.querySelector("#initiate");
    const musicController = document.querySelector('#music');
    var gunSound = new Audio('sound/player-gun.mp3');
    var gameStart = new Audio('sound/cinema.mp3');
    var gameMusic = new Audio('sound/suspense.mp3');
    
    initiateButton.addEventListener('click', (e) => {
        gameView.start()
        gameStart.play();
        gameMusic.play();
    });

    musicController.addEventListener('click',(e) => {
        if (gameMusic.paused) {
            gameMusic.play();
            const musicButton = document.getElementById('music');
            musicButton.innerHTML = "&#128266";
        } else {
            gameMusic.pause();
            const musicButton = document.getElementById('music');
            musicButton.innerHTML = "&#128264";
        }
    });

    canvasEl.addEventListener('click', playGunSound)

    function playGunSound() {
        gunSound.play()
    }
  
});



// Background Music:
// https://mixkit.co/free-stock-music/hip-hop/
// Artist Arulo
// Non-License: (Public Domain)