class Civilian {
    constructor(pos,size,color) {
        this.pos = pos;
        this.size = size;
        this.color = color;
        this.alive = true; 
    }
    draw(ctx) {

        var img = new Image(); img.src = "images/scaredguy.png";

        ctx.drawImage(img, this.pos[0],this.pos[1],this.size[0],this.size[1]);
        
        let that = this;

        setTimeout( function() {that.response(ctx)}, 1000);
        
        setTimeout(function() {ctx.clearRect(0,0,800,600)}, 2200);

    }
    response(ctx) {

        if (this.alive) {
            const shoot = function() {

                var img = new Image(); img.src = "images/scaredguy.png";
                ctx.drawImage(img, this.pos[0],this.pos[1],this.size[0],this.size[1]);
                
            }.bind(this);

            setTimeout(
                shoot,
                200
            )
        }
    }
    dead(ctx) {
        this.alive = false;
        ctx.clearRect(this.pos[0],this.pos[1],this.size[0],this.size[1])
        var img = new Image(); img.src = "images/explode.png";
        ctx.drawImage(img, this.pos[0],this.pos[1],this.size[0],this.size[1]);
    }
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