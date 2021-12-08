// import Game from "./scripts/game.js"

class Alien {
    constructor(pos,size,game) {
        this.pos = pos;
        this.size = size;
        this.alive = true;
        this.game = game;
    }
    // THIS FUNCTION WILL RENDER THE ALIEN ON THE SCREEN
    // AFTER ONE SECOND THE ALIEN WILL SHOOT AT THE PLAYER
    //AFTER TWO SECONDS THE ALIEN WILL GET CLEARED FROM THE
    //SCREEN
    draw(ctx) {

        var img = new Image(); img.src = "images/alienfinal.png";

        ctx.drawImage(img, this.pos[0],this.pos[1],this.size[0],this.size[1]);

        let that = this;

        setTimeout( function() {that.response(ctx)}, 1000);

        setTimeout(function() {ctx.clearRect(0,0,800,600)}, 2200);
        
        
    }
    // THIS FUNCTION IS THE SHOOT FUNCTION AND THE SHOT WILL BE RENDERED ON SCREEN
    //FOR 200 MILLISECONDS, CHECK TO SEE IF THIS GUY IS ALIVE TO SHOOT.
    response(ctx) {
        
        if (this.alive) {
            const shoot = function() {

                ctx.clearRect(this.pos[0],this.pos[1],this.size[0],this.size[1])
                var img = new Image(); img.src = "images/alienlasereyes.png";
                ctx.drawImage(img, this.pos[0],this.pos[1],this.size[0],this.size[1]);
                this.game.lives -= 1;
                this.game.removeHeart()
                
            }.bind(this);
            
            setTimeout(
                shoot,
                200
            )
        }
    }
    //IF AN ALIEN IS SHOT THEY WILL BE MARKED AS DEAD
    //THIS WILL BE USED IN A LATER FUNCTION TO REMOVE DEAD ENEMIES
    dead(ctx) {
        this.alive = false;
        ctx.clearRect(this.pos[0],this.pos[1],this.size[0],this.size[1])
        var img = new Image(); img.src = "images/explode.png";
        ctx.drawImage(img, this.pos[0],this.pos[1],this.size[0],this.size[1]);
    }
    //THIS IS THE HIT CHECK THAT THE EVENT LISTENER WILL USE TO DETERMINE
    //IF A CHARACTER IS IN THE POSITION AT WHICH THE PLAYER IS CLICKING
    hitCheck(x,y) {
        if (x > this.pos[0] && x < this.pos[0] + this.size[0] && 
            y > this.pos[1] && y < this.pos[1] + this.size[1]) {
           return true
        } else {
           return false;
        }
    }
}

export default Alien;