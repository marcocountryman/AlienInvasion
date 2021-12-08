class Civilian {
    constructor(pos,size,color) {
        this.pos = pos;
        this.size = size;
        this.color = color;
        this.alive = true; 
    }
    // THIS FUNCTION WILL RENDER THE CIVILIAN ON THE SCREEN
    // AFTER ONE SECOND THE CIVILIAN WILL YELL A MESSAGE AT THE PLAYER
    //AFTER TWO SECONDS THE CIVILIAN WILL GET CLEARED FROM THE
    //SCREEN
    draw(ctx) {

        var img = new Image();
        img.src = "images/scaredguyproj.png";
        ctx.drawImage(img, this.pos[0],this.pos[1],this.size[0],this.size[1]);

        let that = this;
        setTimeout( function() {that.response(ctx)}, 1000);
        
        setTimeout(function() {ctx.clearRect(0,0,800,600)}, 2000);

    }
    // THIS FUNCTION IS THE MESSAGE FUNCTION A MESSAGE WILL BE RENDERED ON SCREEN.
    //FOR 200 MILLISECONDS
    response(ctx) {

        if (this.alive) {
            const shoot = function() {

                var img = new Image(); img.src = "images/scaredguyprojmessage.png";
                ctx.drawImage(img, this.pos[0],this.pos[1],this.size[0],this.size[1]);

            }.bind(this);

            setTimeout(
                shoot,
                200
            )
        }
    }
        
    //IF A CIVILIAN IS SHOT THEY WILL BE MARKED AS DEAD
    //IF A CIVILIAN IS DEAD IT IS GAME OVER.
    dead(ctx) {
        this.alive = false;
        ctx.clearRect(this.pos[0],this.pos[1],this.size[0],this.size[1])
        var img = new Image(); img.src = "images/explosion.png";
        ctx.drawImage(img, this.pos[0],this.pos[1],this.size[0],this.size[1]);
    }
    //THIS IS THE HIT CHECK THAT THE EVENT LISTENER WILL USE TO DETERMINE
    //IF A CHARACTER IS IN THE POSITION AT WHICH THE PLAYER IS CLICKING
    hitCheck(x,y) {
        if (x > this.pos[0] && x < this.pos[0] + this.size[0] && 
            y > this.pos[1] && y < this.pos[1] + this.size[1]) {
            return true;
        } else {
            return false;
        }
    }
}
export default Civilian;