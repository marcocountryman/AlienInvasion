// import { set } from "core-js/core/dict";
import Alien from "./scripts/alien.js"
import Game from "./scripts/game.js"

document.addEventListener("DOMContentLoaded", function () {
    const canvasEl = document.getElementById('alien-canvas');
    const ctx = canvasEl.getContext('2d');

    // const alien1 = new Alien({pos: [50,20], size:[40,50],color: "pink"});
    // const alien2 = new Alien({pos: [200,20], size:[40,50],color: "pink"});
    // const alien3 = new Alien({pos: [50,80], size:[40,50],color: "pink"});
    // const alien4 = new Alien({pos: [200,80], size:[40,50],color: "pink"});
    const game = new Game();
    const alien = game.randomAlien();
    // console.log('what is going on here');
    alien.draw(ctx);
    // debugger
    // const aliens = [alien1,alien2,alien3,alien3]
    // alien1.draw(ctx)
    // alien2.draw(ctx)
    // alien3.draw(ctx)
    // alien4.draw(ctx)

    // setInterval(alien1.draw)

    // ctx.fillStyle = "white"
    // ctx.fillRect(20, 20,25,50);
    // console.log("hello");
});