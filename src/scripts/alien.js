class Alien {
    constructor(pos,size) {
        this.pos = pos;
        this.size = size;
    }
    draw(ctx) {
        ctx.fillStyle = 'purple'
        ctx.fillRect(this.pos[0],this.pos[1],this.size[0],this.size[1])

        
        // var img = new Image();
        // img.src = "../images/alien.png";
        // ctx.drawImage(img, this.pos[0],this.pos[1],this.size[0],this.size[1]);
        
    }
    response(ctx) {
        // debugger
        const shoot = function() {
            ctx.fillStyle = "red"
            ctx.fillRect(this.pos[0], this.pos[1],this.size[0],this.size[1]);
        }.bind(this);
 
        setTimeout(
            shoot,
            1000
        )
    //    ctx.clearRect(0,0,800,600)
    }
   
    dead() {
        
    }
}

export default Alien;