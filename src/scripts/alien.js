class Alien {
    constructor(pos,size,color) {
        this.pos = pos;
        this.size = size;
        this.color = color;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos[0],this.pos[1],this.size[0],this.size[1])

        
        // const img = new Image();
        // img.src = "./src/images/alien.png";
        // ctx.drawImage(img, this.pos[0],this.pos[1],this.size[0],this.size[1]);
        
    }
    response(ctx) {
        const shoot = function() {
            ctx.fillStyle = "red"
            ctx.fillRect(this.pos[0], this.pos[1],this.size[0],this.size[1]);
        }.bind(this);

        setTimeout(
            shoot,
            1000
        )
    }
   
    dead() {
        
    }
}

export default Alien;