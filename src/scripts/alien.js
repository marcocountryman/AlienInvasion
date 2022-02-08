class Alien {
    constructor(pos,size,game) {
        this.pos = pos;
        this.size = size;
        this.alive = true;
        this.game = game;
        this.type = 'alien';
    }
    draw(ctx) {
        let that = this;
        
        var img = new Image(); 
        img.onload = function() {
            ctx.drawImage(img, that.pos[0],that.pos[1],that.size[0],that.size[1]);
        }
        img.src = "images/alienfinal.png";

        setTimeout( function() {that.response(ctx)}, 1000);

        setTimeout(function() {ctx.clearRect(0,0,800,600)}, 2200);
        
    }
    response(ctx) {
        let that = this;
        if (this.alive) {
            const shoot = function() {

                ctx.clearRect(this.pos[0],this.pos[1],this.size[0],this.size[1])
                var img = new Image(); 
                img.onload = function() {
                    ctx.drawImage(img, that.pos[0],that.pos[1],that.size[0],that.size[1]);
                }
                img.src = "images/alienlasereyes.png";
                var laserSound = new Audio('sound/lasergun.mp3');
                laserSound.play();

                this.game.lives -= 1;
                this.game.removeHeart()
                
            }.bind(this);
            
            setTimeout(
                shoot,
                200
            )
        }
    }
    dead(ctx) {
        let that = this;
        this.alive = false;

        ctx.clearRect(this.pos[0],this.pos[1],this.size[0],this.size[1])
        var img = new Image(); 
        img.onload = function() {
            ctx.drawImage(img, that.pos[0],that.pos[1],that.size[0],that.size[1]);
        }
        img.src = "images/explode.png";
    }
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