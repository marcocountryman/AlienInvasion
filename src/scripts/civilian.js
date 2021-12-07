class Civilian {
    constructor(pos,size,color) {
        this.pos = pos;
        this.size = size;
        this.color = color;
        this.status = "alive";    
    }
    draw(ctx) {
        ctx.fillStyle = 'orange'
        ctx.fillRect(this.pos[0], this.pos[1],this.size[0],this.size[1]);

        // if (this.status === "alive") {
        //     this.response(ctx);
        // }
        let that = this;
        setTimeout( function() {that.response(ctx)}, 1000);
        
        setTimeout(function() {ctx.clearRect(0,0,800,600)}, 2000);

        // var img = new Image();
        // img.src = "images/scaredwoman.png";
        //  ctx.drawImage(img, this.pos[0],this.pos[1],this.size[0],this.size[1]);
    }
    response(ctx) {
        const shoot = function() {
            ctx.fillStyle = "yellow"
            ctx.fillRect(this.pos[0], this.pos[1],this.size[0],this.size[1]);
        }.bind(this);
        setTimeout(
            shoot,
            250
        )
        // ctx.clearRect(0,0,800,600)
    }

    dead(ctx) {
        this.status = "dead"
        ctx.fillStyle = 'black'
        ctx.fillRect(this.pos[0],this.pos[1],this.size[0],this.size[1]);

        setTimeout(function() {ctx.clearRect(0,0,800,600)}, 500);
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