class Alien {
    constructor(pos,size) {
        this.pos = pos;
        this.size = size;
        this.status = "alive"
    }
    draw(ctx) {
        ctx.fillStyle = 'purple'
        ctx.fillRect(this.pos[0],this.pos[1],this.size[0],this.size[1])

        
        // var img = new Image(); img.src = "images/alien.png";
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
   
    dead(ctx) {
        ctx.fillStyle = 'black'
        ctx.fillRect(this.pos[0],this.pos[1],this.size[0],this.size[1])
    }

    hitCheck(x,y) {
        if (x > this.pos[0] && x < this.pos[0] + this.size[0] && 
            y > this.pos[1] && y < this.pos[1] + this.size[1]) {
                console.log('hit');
        } else {
            console.log('miss');
        }
    }
}

export default Alien;