class Civilian {
    constructor(pos,size,color) {
        this.pos = pos;
        this.size = size;
        this.color = color;    
    }
    draw(ctx) {
        ctx.fillStyle = 'orange'
        ctx.fillRect(this.pos[0], this.pos[1],this.size[0],this.size[1]);
    }
    response(ctx) {
        const shoot = function() {
            ctx.fillStyle = "yellow"
            ctx.fillRect(this.pos[0], this.pos[1],this.size[0],this.size[1]);
        }.bind(this);
        setTimeout(
            shoot,
            1000
        )
        // ctx.clearRect(0,0,800,600)
    }
}
export default Civilian;